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
const executivePathwayPrompt = require("../templates/executivePathwayPrompt");
const prePaymentInfo = require("../templates/prePaymentInfo");
const paymentRequestTemplate = require("../templates/paymentRequest");
const paypalGlitchNoticeTemplate = require("../templates/paypalGlitchNoticeTemplate.JS");
const paypalTagOptionTemplate = require("../templates/paypalTagOptionTemplate");
const silenceFollowUpTemplate = require("../templates/silenceFollowUp");
const withdrawalResponseTemplate = require("../templates/withdrawalResponseTemplate");

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
    const { firstname, bookTitle, email, insightBullets, emotionalAnchor } = req.body;

    // Perform basic validation for required fields
    if (!firstname || !bookTitle || !email ) {
      return res.status(400).json({
        message:
          "Please fill in all required fields: First Name, Book Title, Email, insightBullets, and emotionalAnchor.",
      });
    }
    // Prepare email content for the user
    const responseMailTitle =
    // "Internal Note from Macmillan: What Surfaced in Your Manuscript"
    // `Editorial Reaction: “${bookTitle}” Triggered a Flag
      "You Weren’t Supposed to Get This Yet";
    const responseMailBody = PrereviewCompleted(firstname, bookTitle, insightBullets, emotionalAnchor);

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
    const { firstname, bookTitle, email, chosenPathway, price } = req.body;

    // Perform basic validation for required fields
    if (!firstname || !bookTitle || !email || !chosenPathway || !price) {
      return res.status(400).json({
        message:
          "Please fill in all required fields: First Name, Book Title, Email, and Chosen Pathway.",
      });
    }

    // Prepare email content
    const mailSubject = `[Activation Window] Executive Development Pathway – ${firstname}`;
    const mailBody = paymentInstructions(firstname, bookTitle, chosenPathway, price);

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

exports.executivePathway = async (req, res) => {
  try {
    const { firstname, bookTitle, email } = req.body;

    if (!firstname || !bookTitle || !email) {
      return res.status(400).json({
        message:
          "Please fill in all required fields: First Name, Book Title, and Email.",
      });
    }

    const responseMailTitle = "Quick Confirmation: Executive Pathway Track";
    const responseMailBody = executivePathwayPrompt(firstname, bookTitle);

    await sendEmail(email, responseMailTitle, responseMailBody);
    console.log("Executive pathway confirmation sent successfully to user");

    return res.status(200).json({
      message: `${email} executive pathway confirmation sent successfully!`,
    });
  } catch (error) {
    console.error("Error during executive pathway confirmation:", error);
    return res.status(500).json({
      message: "An error occurred. Please try again later.",
    });
  }
};

exports.prePaymentInfo = async (req, res) => {
  try {
    const { firstname, email } = req.body;

    if (!firstname || !email) {
      return res.status(400).json({
        message: "Please provide both First Name and Email.",
      });
    }

    const mailSubject = " Development Pathway — Quick Confirmation Before Your Payment Slot";
    const mailBody = prePaymentInfo(firstname);

    await sendEmail(email, mailSubject, mailBody);
    console.log("Development pathway email sent to user");

    return res.status(200).json({
      message: `Development pathway email sent successfully to ${email}`,
    });
  } catch (error) {
    console.error("Error sending development pathway email:", error);
    return res.status(500).json({
      message: "Server error. Please try again later.",
    });
  }
};


exports.paymentRequest = async (req, res) => {
  try {
    const { firstname, paypalEmail, email } = req.body;

    if (!firstname || !paypalEmail || !email ) {
      return res.status(400).json({
        message: "Please provide First Name, paypal email, and Email.",
      });
    }

    const mailSubject = "Final Step to Confirm Your Editorial Pathway";
    const mailBody = paymentRequestTemplate(firstname, paypalEmail);

    await sendEmail(email, mailSubject, mailBody);
    console.log("Payment request email sent to user");

    return res.status(200).json({
      message: `Payment request email sent successfully to ${email}`,
    });
  } catch (error) {
    console.error("Error sending payment request email:", error);
    return res.status(500).json({
      message: "Server error. Please try again later.",
    });
  }
};

exports.paypalGlitchNotice = async (req, res) => {
  try {
    const { firstname, email } = req.body;

    if (!firstname || !email) {
      return res.status(400).json({
        message: "Please provide both First Name and Email.",
      });
    }

    const mailSubject = "Quick Note: PayPal Glitch & Seamless Workaround";
    const mailBody = paypalGlitchNoticeTemplate(firstname);

    await sendEmail(email, mailSubject, mailBody);
    console.log("PayPal glitch notice email sent to user");

    return res.status(200).json({
      message: `Glitch notice email sent successfully to ${email}`,
    });
  } catch (error) {
    console.error("Error sending glitch notice email:", error);
    return res.status(500).json({
      message: "Server error. Please try again later.",
    });
  }
};


exports.paypalTagOptionNotice = async (req, res) => {
  try {
    const { firstname, email } = req.body;

    if (!firstname || !email) {
      return res.status(400).json({
        message: "Please provide both First Name and Email.",
      });
    }

    const mailSubject = "One More Smooth Option (Just In Case PayPal’s Still Weird)";
    const mailBody = paypalTagOptionTemplate(firstname);

    await sendEmail(email, mailSubject, mailBody);
    console.log("PayPal tag option notice sent");

    return res.status(200).json({
      message: `Tag-based PayPal workaround email sent successfully to ${email}`,
    });
  } catch (error) {
    console.error("Error sending PayPal tag option email:", error);
    return res.status(500).json({
      message: "Server error. Please try again later.",
    });
  }
};

exports.silenceFollowUp = async (req, res) => {
  try {
    const { firstname, bookTitle, email } = req.body;

    if (!firstname || !bookTitle || !email) {
      return res.status(400).json({
        message: "Please provide First Name, Book Title, and Email.",
      });
    }

    const mailSubject = `Totally fine if you’ve gone quiet... just one thing before we close.`;
    const mailBody = silenceFollowUpTemplate(firstname, bookTitle);

    await sendEmail(email, mailSubject, mailBody);
    console.log("Nudge follow-up email sent");

    return res.status(200).json({
      message: `Nudge email sent successfully to ${email}`,
    });
  } catch (error) {
    console.error("Error sending nudge email:", error);
    return res.status(500).json({
      message: "Server error. Please try again later.",
    });
  }
};

exports.withdrawalResponse = async (req, res) => {
  try {
    const { firstname, bookTitle, email } = req.body;

    if (!firstname || !bookTitle || !email) {
      return res.status(400).json({
        message: "Please provide First Name, Book Title, and Email.",
      });
    }

    const mailSubject = `As requested: ${bookTitle} has been withdrawn - no pressure, no follow-up`;
    const mailBody = withdrawalResponseTemplate(firstname, bookTitle);

    await sendEmail(email, mailSubject, mailBody);
    console.log("withdrawal response email sent");

    return res.status(200).json({
      message: `withdrawal response email sent successfully to ${email}`,
    });
  } catch (error) {
    console.error("Error sending withdrawal response email:", error);
    return res.status(500).json({
      message: "Server error. Please try again later.",
    });
  }
};

