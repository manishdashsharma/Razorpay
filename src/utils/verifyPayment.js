import razorpay from "razorpay";
import crypto from "crypto";
import config from "../config/index.js";

const verifyPayment = async (paymentData) => {
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = paymentData;
  
    const generatedSignature = crypto
      .createHmac("sha256", config.RAZORPAY_SECRET)
      .update(`${razorpay_order_id}|${razorpay_payment_id}`)
      .digest("hex");
  
    if (generatedSignature === razorpay_signature) {
      return true;
    } else {
      throw new CustomError("Payment verification failed", 400);
    }
};

export default verifyPayment