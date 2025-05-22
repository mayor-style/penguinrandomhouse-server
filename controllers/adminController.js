const { sendEmail } = require("../utils/nodemailer");
const reviewCompleted = require("../templates/reviewCompleted");
const TierDetailResponse = require ("../templates/TierDetails");
const followUpReminder = require("../templates/followUpReminder");
const pathwayConfirmation = require("../templates/pathwayConfirmation");
const paymentInstructions = require("../templates/paymentInstructions");
const paymentDetails = require("../templates/paymentDetails");
const paymentClarification = require("../templates/paymentClarification");
const paymentDetailCrypto = require("../templates/paymentDetailsCrypto");
const paymentDetailCryptoFollowUp = require("../templates/paymentDetailCryptoFollowUp");
const WriterCongratulate = require("../templates/WriterCongratulatory");
const PrereviewCompleted = require("../templates/PreReviewComplete");

exports.reviewFeedback = async (req, res) => {
  try {
    // Destructure form data from req.body
    const { firstname, bookTitle, email } = req.body;

    // Perform basic validation for required fields
    if (!firstname || !bookTitle || !email) {
      return res.status(400).json({
        message:
          "Please fill in all required fields: First Name, Book Title, and Email.",
      });
    }
    // Prepare email content for the user
    const responseMailTitle =
      "Exciting News – Your Manuscript Has Been Shortlisted!";
    const responseMailBody = reviewCompleted(firstname, bookTitle);

    // Send email to the user
    await sendEmail(email, responseMailTitle, responseMailBody);
    console.log("Review Feedback sent successfully to user");

    // Respond with a success message
    return res
      .status(200)
      .json({ message: `${firstname} Review Feedback sent successfully!` });
  } catch (error) {
    console.error("Error during form submission:", error);
    return res
      .status(500)
      .json({ message: "An error occurred. Please try again later." });
  }
};

exports.PreReviewCompleted = async (req, res) => {
  try {
    // Destructure form data from req.body
    const { firstname, bookTitle, email } = req.body;

    // Perform basic validation for required fields
    if (!firstname || !bookTitle || !email) {
      return res.status(400).json({
        message:
          "Please fill in all required fields: First Name, Book Title, and Email.",
      });
    }
    // Prepare email content for the user
    const responseMailTitle =
      "Editorial Note on Your Manuscript";
    const responseMailBody = PrereviewCompleted(firstname, bookTitle);

    // Send email to the user
    await sendEmail(email, responseMailTitle, responseMailBody);
    console.log("pre Review Feedback sent successfully to user");

    // Respond with a success message
    return res
      .status(200)
      .json({ message: `${firstname} pre review feedback sent successfully!` });
  } catch (error) {
    console.error("Error during pre-review feedback :", error);
    return res
      .status(500)
      .json({ message: "An error occurred. Please try again later." });
  }
}

exports.followUpReminder = async (req, res) => {
  try {
    // Destructure form data from req.body
    const { firstname, bookTitle, email } = req.body;

    // Perform basic validation for required fields
    if (!firstname || !bookTitle || !email) {
      return res.status(400).json({
        message:
          "Please fill in all required fields: First Name, Book Title, and Email.",
      });
    }
    // Prepare email content for the user
    const responseMailTitle =
      "Final Update: Your Manuscript's Adaptation Slot Closes Soon";
    const responseMailBody = followUpReminder(firstname, bookTitle);

    // Send email to the user
    await sendEmail(email, responseMailTitle, responseMailBody);
    console.log("Follow Up Reminder sent successfully to user");

    // Respond with a success message
    return res
      .status(200)
      .json({ message: `${firstname} Follow up reminder sent successfully!` });
  } catch (error) {
    console.error("Error during follow up reminder :", error);
    return res
      .status(500)
      .json({ message: "An error occurred. Please try again later." });
  }
};

exports.pathwayConfirmation = async (req, res) => {
  try {
    // Destructure form data from req.body
    const { firstname, bookTitle, email } = req.body;

    // Perform basic validation for required fields
    if (!firstname || !bookTitle || !email) {
      return res.status(400).json({
        message:
          "Please fill in all required fields: First Name, Book Title, and Email.",
      });
    }
    // Prepare email content for the user
    const responseMailTitle =
      "Next Steps for Your Manuscript’s Development";
    const responseMailBody = pathwayConfirmation(firstname, bookTitle);

    // Send email to the user
    await sendEmail(email, responseMailTitle, responseMailBody);
    console.log("pathway confirmation sent successfully to user");

    // Respond with a success message
    return res
      .status(200)
      .json({ message: `${email} pathway confrmation sent successfully!` });
  } catch (error) {
    console.error("Error during pathway confirmation :", error);
    return res
      .status(500)
      .json({ message: "An error occurred. Please try again later." });
  }
};

exports.TierDetailResponse = async (req, res) => {
  try {
    // Destructure form data from req.body
    const { firstname, email } = req.body;

    // Perform basic validation for required fields
    if (!firstname ) {
      return res.status(400).json({
        message:
          "Please fill in  First Name",
      });
    }
    // Prepare email content for the user
    const responseMailTitle =
      "Exploring Your Submission Options - Tailored Support for Your Project";
    const responseMailBody = TierDetailResponse(firstname);

    // Send email to the user
    await sendEmail(email, responseMailTitle, responseMailBody);
    console.log("Tier feednavk sent to user ");

    // Respond with a success message
    return res
      .status(200)
      .json({ message: "tier details sent successfully!" });
  } catch (error) {
    console.error("Error during form submission:", error);
    return res
      .status(500)
      .json({ message: "An error occurred. Please try again later." });
  }
};

exports.paymentInstructionController = async (req, res) => {
  try {
    // Destructure form data from req.body
    const { firstname, bookTitle, email, chosenPathway } = req.body;

    // Perform basic validation for required fields
    if (!firstname || !bookTitle || !email || !chosenPathway) {
      return res.status(400).json({
        message:
          "Please fill in all required fields: First Name, Book Title, Email, and Chosen Pathway.",
      });
    }

    // Prepare email content
    const mailSubject = "Next Steps: Payment Instructions for Your Manuscript Development";
    const mailBody = paymentInstructions(firstname, bookTitle, chosenPathway);

    // Send email
    await sendEmail(email, mailSubject, mailBody);
    console.log("Payment instructions sent successfully to user");

    // Respond with a success message
    return res.status(200).json({
      message: `Payment instructions sent successfully to ${firstname}!`,
    });
  } catch (error) {
    console.error("Error during payment instruction email send:", error);
    return res
      .status(500)
      .json({ message: "An error occurred. Please try again later." });
  }
};

exports.paymentClarificationController = async (req, res) => {
  try {
    // Destructure form data from req.body
    const { firstname, email } = req.body;

    // Perform basic validation for required fields
    if (!firstname || !email) {
      return res.status(400).json({
        message: "Please fill in all required fields: First Name and Email.",
      });
    }

    // Prepare email content
    const mailSubject = "Payment Process Clarification";
    const mailBody = paymentClarification(firstname);

    // Send email
    await sendEmail(email, mailSubject, mailBody);
    console.log("Payment clarification sent successfully to user");

    // Respond with a success message
    return res.status(200).json({
      message: `Payment clarification sent successfully to ${firstname}!`,
    });
  } catch (error) {
    console.error("Error during payment clarification email send:", error);
    return res.status(500).json({ message: "An error occurred. Please try again later." });
  }
};

exports.sendPaymentDetails = async (req, res) => {
  try {
    // Destructure form data from req.body
    const { firstname, amount, paypalEmail, email } = req.body;

    // Perform basic validation for required fields
    if (!firstname || !amount || !paypalEmail || !email) {
      return res.status(400).json({
        message:
          "Please fill in all required fields: First Name, Amount, PayPal Email,  and Email.",
      });
    }

    // Prepare email content
    const emailSubject = "Payment Details for Your Manuscript Development – Action Required";
    const emailBody = paymentDetails(firstname, amount, paypalEmail);

    // Send email to the user
    await sendEmail(email, emailSubject, emailBody);
    console.log("Payment details sent successfully to user");

    // Respond with a success message
    return res.status(200).json({ message: `${firstname}, payment details sent successfully!` });
  } catch (error) {
    console.error("Error sending payment details:", error);
    return res.status(500).json({ message: "An error occurred. Please try again later." });
  }
};

exports.sendPaymentDetailsCrypto = async (req, res) => {
  try {
    // Destructure form data from req.body
    const { firstname,  email } = req.body;

    // Perform comprehensive validation for required fields
    const validationErrors = [];
    
    if (!firstname || firstname.trim() === '') {
      validationErrors.push('First Name is required');
    }
   
    
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      validationErrors.push('Valid Email address is required');
    }

    // If there are validation errors, return them
    if (validationErrors.length > 0) {
      return res.status(400).json({
        message: "Validation Failed",
        errors: validationErrors
      });
    }

    // Prepare email content
    const emailSubject = "Secure Payment Process – Next Steps";
    const emailBody = paymentDetailCrypto(firstname);

    // Send email to the user
    await sendEmail(
      email,
      emailSubject,
      emailBody
    );

    // Log successful email send
    console.log(`Crypto payment details sent successfully to ${email}`);
    
    // Respond with a success message
    return res.status(200).json({ 
      message: `${firstname}, crypto payment details have been sent to your email.`,
      details: {
        recipient: firstname,
        email: email
        
      }
    });

  } catch (error) {
    // Log the full error for server-side debugging
    console.error("Error in sendPaymentDetailsCrypto:", error);

    // Respond with a generic error message
    return res.status(500).json({ 
      message: "An unexpected error occurred while processing your request.",
      error: error.message 
    });
  }
};


exports.sendPaymentDetailsCryptoFollowUp = async (req, res) => {   
  try {
    // Destructure form data from req.body
    const { firstname, email } = req.body;
    
    // Perform comprehensive validation for required fields
    const validationErrors = [];
    
    if (!firstname || firstname.trim() === '') {
      validationErrors.push('First Name is required');
    }
    
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      validationErrors.push('Valid Email address is required');
    }
    
    // If there are validation errors, return them
    if (validationErrors.length > 0) {
      return res.status(400).json({
        message: "Validation Failed",
        errors: validationErrors
      });
    }
    
    // Prepare email content
    const emailSubject = "Manuscript Update and Payment Process";
    const emailBody = paymentDetailCryptoFollowUp(firstname);
    
    // Send email to the user
    await sendEmail(
      email,
      emailSubject,
      emailBody
    );
    
    // Log successful email send
    console.log(`Crypto payment follow-up sent successfully to ${email}`);
    
    // Respond with a success message
    return res.status(200).json({
      message: `${firstname}, follow-up details have been sent to your email.`,
      details: {
        recipient: firstname,
        email: email
      }
    });
  } catch (error) {
    // Log the full error for server-side debugging
    console.error("Error in sendPaymentDetailsCryptoFollowUp:", error);
    
    // Respond with a generic error message
    return res.status(500).json({
      message: "An unexpected error occurred while processing your request.",
      error: error.message
    });
  }
};

exports.sendWriterCongratulatory = async (req, res) => {
  try {
    // Destructure form data from req.body
    const {  email } = req.body;

    const responseMailTitle =
      "Final Congratulatory Note to Our Selected Authors";
    const responseMailBody = WriterCongratulate();

    // Send email to the user
    await sendEmail(email, responseMailTitle, responseMailBody);
    console.log("Fwriter congratulatory message sent successfully to email");

    // Respond with a success message
    return res
      .status(200)
      .json({ message: `${email}Congratulatory message sent successfully!` });
  } catch (error) {
    console.error("Error during writer congratulary :", error);
    return res
      .status(500)
      .json({ message: "An error occurred. Please try again later." });
  }
};