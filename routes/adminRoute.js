const express = require("express");
const {reviewFeedback, TierDetailResponse, followUpReminder, pathwayConfirmation, paymentInstructionController, sendPaymentDetails, paymentClarificationController, sendPaymentDetailsCrypto, sendPaymentDetailsCryptoFollowUp, sendWriterCongratulatory, PreReviewCompleted} = require("../controllers/adminController");
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

module.exports = adminRoute;
