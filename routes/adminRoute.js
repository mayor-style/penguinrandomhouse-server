const express = require("express");
const {reviewFeedback, TierDetailResponse, followUpReminder, pathwayConfirmation, paymentInstructionController, sendPaymentDetails, paymentClarificationController, sendPaymentDetailsCrypto, sendPaymentDetailsCryptoFollowUp, sendWriterCongratulatory, PreReviewCompleted, executivePathway, prePaymentInfo, paymentRequest, paypalGlitchNotice, paypalTagOptionNotice, silenceFollowUp, withdrawalResponse} = require("../controllers/adminController");
const paymentDetailsCrypto = require("../templates/paymentDetailsCrypto");


const adminRoute = express.Router();

adminRoute.post("/reviewFeedback", reviewFeedback);

adminRoute.post("/pre-reviewFeedback", PreReviewCompleted);

adminRoute.post('/tier-details', TierDetailResponse)

adminRoute.post('/followUpReminder', followUpReminder);

adminRoute.post('/pathwayConfirmation', pathwayConfirmation);

adminRoute.post('/paymentInstruction', paymentInstructionController);

adminRoute.post('/paymentClarification', paymentClarificationController);

adminRoute.post('/paymentDetail', sendPaymentDetails);

adminRoute.post('/paymentDetailCrypto', sendPaymentDetailsCrypto);

adminRoute.post('/paymentDetailCryptoFollowUp', sendPaymentDetailsCryptoFollowUp);

adminRoute.post('/writer-congratulate', sendWriterCongratulatory);

adminRoute.post('/executive-pathway', executivePathway);

adminRoute.post('/pre-paymentinfo', prePaymentInfo);

adminRoute.post('/payment-request', paymentRequest);

adminRoute.post('/paypal-glitch', paypalGlitchNotice);

adminRoute.post('/paypal-tagOption', paypalTagOptionNotice);

adminRoute.post('/silence-followup', silenceFollowUp);

adminRoute.post('/withdrawal', withdrawalResponse);

module.exports = adminRoute;
