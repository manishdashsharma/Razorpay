import { Router } from "express";
import payment from "./payment.route.js"

const router = Router()

router.use("/payment", payment)


export default router