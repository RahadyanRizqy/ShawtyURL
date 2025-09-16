function generateRandomString(length = 6) {
    const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let result = "";
    for (let i=0;i<length;i++) result += chars.charAt(Math.floor(Math.random()*chars.length));
    return result;
}

async function shortsGet(c) {
    const rows = await c.env.SHORTLINKS.prepare("SELECT code, destination FROM shortlinks").all();
    return c.json(rows.results)
}

async function shortsPost(c) {
    const { code, destination } = await c.req.json()
    const shortCode = code || generateRandomString()
    try {
        await c.env.SHORTLINKS.prepare("INSERT INTO shortlinks (code, destination) VALUES (?, ?)").bind(shortCode, destination).run()
        return c.json({ shortCode })
    } catch (err) {
        if (err.message.includes("UNIQUE constraint failed")) {
            return c.json({ 
                error: "Short code already exists", 
                code: "DUPLICATE_CODE" 
            }, 409)
        }
        return c.json({
            error: 'An error occurred while creating the short link',
            details: err.message 
        }, 500)
    }
}

async function shortsPut(c) {
    const { code, destination } = await c.req.json()
    const oldCode = c.req.param("code")
    console.log("Old code:", oldCode)
    console.log("New code:", code)
    console.log("Destination:", destination)
    try {
        await c.env.SHORTLINKS.prepare("UPDATE shortlinks SET code = ?, destination = ? WHERE code = ?")
            .bind(code, destination, oldCode)
            .run()
        return c.json({ code })
    } catch (err) {
        if (err.message.includes("UNIQUE constraint failed")) {
            return c.json({ 
                error: "The new short code already exists", 
                code: "DUPLICATE_CODE" 
            }, 409)
        }
        return c.json({
            error: 'An error occurred while updating the short link',
            details: err.message 
        }, 500)
    }
}

async function shortsDelete(c) {
    const code = c.req.param("code")
    await c.env.SHORTLINKS.prepare("DELETE FROM shortlinks WHERE code = ?").bind(code).run()
    return c.json({ code })
}

export { shortsGet, shortsPost, shortsPut, shortsDelete }
