import { verify } from 'hono/jwt'
import { getCookie } from "hono/cookie"

async function auth(c, next) {
    const sessionJwt = getCookie(c, "session_jwt")
    if (!sessionJwt) {
        return c.html(`
            <h3>❌ Invalid session</h3>
            <meta http-equiv="refresh" content="1;url=/login" />
        `, 200)      
    }

    const verified = await verify(sessionJwt, c.env.SECRET)
    if (!verified) {
        return c.html(`
            <h3>❌ Invalid session</h3>
            <meta http-equiv="refresh" content="1;url=/login" />
        `, 200)
    }
    await next()
}

export default auth

