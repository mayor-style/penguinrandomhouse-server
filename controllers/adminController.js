const { sendEmail } = require("../utils/nodemailer");
const reviewCompleted = require("../templates/reviewCompleted");

const reviewFeedback = async (req, res) => {
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
      "Exciting News – Your Manuscript Has Been Selected!";
    const responseMailBody = reviewCompleted(firstname, bookTitle);

    // Send email to the user
    await sendEmail(email, responseMailTitle, responseMailBody);
    console.log("Review Feedback sent successfully to user");

    // Respond with a success message
    return res
      .status(200)
      .json({ message: "Review Feedback sent successfully!" });
  } catch (error) {
    console.error("Error during form submission:", error);
    return res
      .status(500)
      .json({ message: "An error occurred. Please try again later." });
  }
};

module.exports = reviewFeedback;
