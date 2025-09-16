import { setCookie } from "hono/cookie"

export async function logoutPost(c) {
    setCookie(c, "session_jwt", "", {
        httpOnly: true,
        secure: true,
        sameSite: "lax",
        path: "/",
        maxAge: 0,
    })    
    return c.html('<script>location.href="/login"</script>');
}
