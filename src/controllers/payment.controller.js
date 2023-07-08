import razorpay from './../config/razorpay.config.js';
import asyncHandler from "../utils/asyncHandler.js"
import CustomError from "../utils/CustomError.js"
import verifyPayment from "../utils/verifyPayment.js"

export const generatepayment = asyncHandler( async (req, res) => {
    const { amount } = req.body
    const options = {
        amount: amount,
        currency: "INR",
        receipt: `receipt_${new Date().getTime()}`
    }

    const order = await razorpay.orders.create(options)

    if (!order) {
        throw new CustomError("Unable to generate order", 400)
    }

    res.status(200).json({
        success: true,
        message: "razorpay order id generated successfully",
        order
    })
})

export const validatePayment = asyncHandler( async (req, res) => {
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body

    if(!razorpay_order_id || !razorpay_payment_id || !razorpay_signature){
        throw new CustomError("Pass the correct values !",400)
    }
    const paymentData = {
        razorpay_order_id: order.id,
        razorpay_payment_id,
        razorpay_signature: razorpay_signature,
    };

    await verifyPayment(paymentData)

    res.status(200).json({
        success: true,
        message: "Verifed"
    })

})

// const paymentData = {
//         razorpay_order_id: order.id,
//         razorpay_payment_id,
//         razorpay_signature: razorpay_signature,
//       };