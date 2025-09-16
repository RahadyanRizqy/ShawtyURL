import { Hono } from 'hono'
import router from './web/routes.js'

const app = new Hono()

app.route('/', router)

export default app
