const { sendEmail } = require("../utils/nodemailer");
const userSubmissionTemplate = require("../templates/userSubmission");
const adminSubmissionTemplate = require("../templates/adminCollection");

const submission = async (req, res) => {

  try {
    // Access form data from req.body
    const {
      firstname,
      lastname,
      email,
      phone,
      biography,
      websiteAddress,
      blogAddress,
      twitterHandle,
      everPublishedaBook,
      everRepresentedbyAgent,
      whoReferred,
      bookInspiration,
      bookTitle,
      bookGenre,
      bookWordCount,
      bookEverPublished,
      bookSynopsis,
      pitch,
    } = req.body;

    // Access the uploaded file
    const bookFile = req.file;

    if (!bookFile) {
      return res.status(400).send("No file uploaded!");
    }

    console.log("File received:", bookFile);

    const viewFileUrl = `${req.protocol}://${req.get("host")}/view-pdf/${
      bookFile.filename
    }`;


    console.log("viewfile:", viewFileUrl)
    // Perform basic validation for required fields
    if (!firstname || !lastname || !email || !bookTitle || !bookSynopsis) {
      return res
        .status(400)
        .json({ message: "Please fill in all required fields." });
    }

    // Prepare email content for user
    const userEmail = email;
    const responseMailTitle =
      "Penguin Random House: We've Received Your Submission";
    const responseMailBody = userSubmissionTemplate(firstname, bookTitle);

    // Send email to user and delay for 1 minute
    const sendUserEmail = async () => {
      try {
        await sendEmail(userEmail, responseMailTitle, responseMailBody);
        console.log("Email sent successfully to user");
      } catch (emailError) {
        console.error("Error sending email to user:", emailError);
      }
    };

    // Email to admin with delay
    const adminEmail = "slickoutlaw001@gmail.com";
    const adminMailTitle = "Penguin Random House: New Book Submission Received";
    const adminMailBody = adminSubmissionTemplate(
      firstname,
      lastname,
      email,
      phone,
      biography,
      websiteAddress,
      blogAddress,
      twitterHandle,
      everPublishedaBook,
      everRepresentedbyAgent,
      whoReferred,
      bookInspiration,
      bookTitle,
      bookGenre,
      bookWordCount,
      bookEverPublished,
      bookSynopsis,
      viewFileUrl,
      pitch
    );

    // Send email to admin and delay for 1 minute
    const sendAdminEmail = async () => {
      try {
        await sendEmail(adminEmail, adminMailTitle, adminMailBody);
        console.log("Email sent successfully to admin");
      } catch (emailError) {
        console.error("Error sending email to admin:", emailError);
      }
    };

    // Call email functions in parallel but delay 1 minute
    setTimeout(() => {
      sendUserEmail();
      sendAdminEmail();
    }, 60000); // 1 minute delay in milliseconds

    // Respond to client that the submission was successful
    res.status(200).json({ message: "Submission completed successfully!" });
  } catch (error) {
    console.error("Error during form submission:", error);
    res
      .status(500)
      .json({ message: "An error occurred. Please try again later." });
  }
};

module.exports = submission;
