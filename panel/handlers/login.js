import { sign } from 'hono/jwt'
import { setCookie } from "hono/cookie"
import qrcode from "qrcode-generator"
import * as OTPAuth from "otpauth"
import { toBase32 } from "../utils/base32conv.js"

import { login } from "../templates/login.js"

async function loginGet(c) {
    const existing = await c.env.OTP.get("secret");
    if (existing) {
        return c.html(login(c.env.TOTP_ACCOUNT))
    }

    const secret = toBase32(c.env.SECRET)
    await c.env.OTP.put("secret", secret)

    const account = c.env.TOTP_ACCOUNT;
    const issuer = c.env.TOTP_ISSUER;
    const otp = new OTPAuth.TOTP({
        issuer: issuer,
        account: account,
        secret: secret,
        digits: 6,
        period: 30,
    })

    const otpUri = otp.toString()
    const qr = qrcode(0, 'M')
    qr.addData(otpUri)
    qr.make()
    const dataUrl = qr.createDataURL(6, 1)
    const base64Data = dataUrl.split(",")[1]

    const qrCodePage = `
        <!DOCTYPE html>
        <html>
        <head>
            <title>QR Code Setup</title>
            <style>
                body {
                    display: flex;
                    justify-content: center; /* horizontal center */
                    align-items: center;     /* vertical center */
                    height: 100vh;           /* full viewport height */
                    margin: 0;
                    flex-direction: column;  /* biar h1 di atas image */
                    font-family: sans-serif;
                }
                img {
                    margin-top: 20px;
                }
            </style>
        </head>
        <body>
            <h1>Scan It</h1>
            <img src="data:image/png;base64,${base64Data}" alt="Image"/>
        </body>
        </html>
    `

    return c.html(qrCodePage)
}

async function loginPost(c) {
    const form = await c.req.formData()
    const username = form.get("username")
    const otp = form.get("otp")?.trim()

    if (username !== c.env.TOTP_ACCOUNT) {
        return c.json({ error: "Invalid username" }, 401)
    }

    if (!otp) {
        return c.json({ error: "Missing OTP" }, 401)
    }

    const secret = await c.env.OTP.get("secret")
    const account = c.env.TOTP_ACCOUNT;
    const issuer = c.env.TOTP_ISSUER;
    const _otp = new OTPAuth.TOTP({
        issuer: issuer,
        account: account,
        secret: secret,
        digits: 6,
        period: 30,
    })
    const isValid = _otp.validate({token: otp, window: 1})
    if (isValid === null) {
        return c.html(`
            <h3>❌ Invalid OTP</h3>
            <meta http-equiv="refresh" content="1;url=/login" />
        `, 401)  
    }

    const jwt = await sign({
        username,
        otp,
    }, c.env.SECRET)

    setCookie(c, "session_jwt", jwt, {
        httpOnly: true,
        secure: true,
        sameSite: "lax",
        maxAge: parseInt(c.env.JWT_EXPIRY) * 60,
    })

    return c.html(`
        <h3>✅ Valid OTP</h3>
        <meta http-equiv="refresh" content="1;url=/" />
    `, 200)      
}

export { loginGet, loginPost }
