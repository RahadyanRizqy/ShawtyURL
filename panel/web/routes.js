import { Hono } from "hono"
import handlers from "../handlers/index.js"
import auth from "../middleware/auth.js"

const router = new Hono();

// Middleware
router.use("/", auth)
router.use("/shorts", auth)

// Routes
router.get("/", handlers.rootGet)
router.get("/login", handlers.loginGet)
router.post("/login", handlers.loginPost)

router.post("/logout", handlers.logoutPost)

router.get("/shorts", handlers.shortsGet)
router.post("/shorts", handlers.shortsPost)
router.put("/shorts/:code", handlers.shortsPut)
router.delete("/shorts/:code", handlers.shortsDelete)

export default router
