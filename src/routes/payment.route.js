import { Router } from "express";
import { generatepayment, validatePayment } from './../controllers/payment.controller.js';

const router = Router()

router.post("/", generatepayment)
router.post("/verify", validatePayment)



export default router;