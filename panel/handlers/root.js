
import { indexHTML } from "../templates/panel.js"

export async function rootGet(c) {
    return c.html(indexHTML(c.env.DEFAULT_RESOLVER))
}
