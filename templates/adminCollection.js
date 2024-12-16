const adminSubmissionTemplate = (
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
) => `
<div style="font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; color: #333; padding: 20px; max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 8px;">
  <!-- Header with logo -->
  <div style="text-align: center; padding-bottom: 20px;">
    <img src="https://indobanglabook.s3.us-east-2.amazonaws.com/2122/Penguin_logo.svg.png" alt="Company Logo" style="max-width: 120px; height: auto;" />
  </div>
  
  <!-- Main Content -->
  <h2 style="font-size: 20px; text-align: center; color: #0066cc;">New Book Submission Received</h2>
  <p style="font-size: 14px; line-height: 1.5;">A new book submission has been received with the following details:</p>
  
  <table style="width: 100%; border-collapse: collapse; margin: 20px 0; font-size: 14px; line-height: 1.5;">
    <tbody>
      <tr><td style="font-weight: bold; padding: 8px; border: 1px solid #ddd;">First Name:</td><td style="padding: 8px; border: 1px solid #ddd;">${firstname}</td></tr>
      <tr><td style="font-weight: bold; padding: 8px; border: 1px solid #ddd;">Last Name:</td><td style="padding: 8px; border: 1px solid #ddd;">${lastname}</td></tr>
      <tr><td style="font-weight: bold; padding: 8px; border: 1px solid #ddd;">Email:</td><td style="padding: 8px; border: 1px solid #ddd;">${email}</td></tr>
      <tr><td style="font-weight: bold; padding: 8px; border: 1px solid #ddd;">Phone:</td><td style="padding: 8px; border: 1px solid #ddd;">${phone}</td></tr>
      <tr><td style="font-weight: bold; padding: 8px; border: 1px solid #ddd;">Biography:</td><td style="padding: 8px; border: 1px solid #ddd;">${biography}</td></tr>
      <tr><td style="font-weight: bold; padding: 8px; border: 1px solid #ddd;">Website Address:</td><td style="padding: 8px; border: 1px solid #ddd;">${websiteAddress}</td></tr>
      <tr><td style="font-weight: bold; padding: 8px; border: 1px solid #ddd;">Blog Address:</td><td style="padding: 8px; border: 1px solid #ddd;">${blogAddress}</td></tr>
      <tr><td style="font-weight: bold; padding: 8px; border: 1px solid #ddd;">Twitter Handle:</td><td style="padding: 8px; border: 1px solid #ddd;">${twitterHandle}</td></tr>
      <tr><td style="font-weight: bold; padding: 8px; border: 1px solid #ddd;">Ever Published a Book:</td><td style="padding: 8px; border: 1px solid #ddd;">${everPublishedaBook}</td></tr>
      <tr><td style="font-weight: bold; padding: 8px; border: 1px solid #ddd;">Ever Represented:</td><td style="padding: 8px; border: 1px solid #ddd;">${everRepresentedbyAgent}</td></tr>
      <tr><td style="font-weight: bold; padding: 8px; border: 1px solid #ddd;">Who Referred:</td><td style="padding: 8px; border: 1px solid #ddd;">${whoReferred}</td></tr>
      <tr><td style="font-weight: bold; padding: 8px; border: 1px solid #ddd;">Book Inspiration:</td><td style="padding: 8px; border: 1px solid #ddd;">${bookInspiration}</td></tr>
      <tr><td style="font-weight: bold; padding: 8px; border: 1px solid #ddd;">Book Title:</td><td style="padding: 8px; border: 1px solid #ddd;">${bookTitle}</td></tr>
      <tr><td style="font-weight: bold; padding: 8px; border: 1px solid #ddd;">Book Genre:</td><td style="padding: 8px; border: 1px solid #ddd;">${bookGenre}</td></tr>
      <tr><td style="font-weight: bold; padding: 8px; border: 1px solid #ddd;">Book Word Count:</td><td style="padding: 8px; border: 1px solid #ddd;">${bookWordCount}</td></tr>
      <tr><td style="font-weight: bold; padding: 8px; border: 1px solid #ddd;">Book Ever Published:</td><td style="padding: 8px; border: 1px solid #ddd;">${bookEverPublished}</td></tr>
      <tr><td style="font-weight: bold; padding: 8px; border: 1px solid #ddd;">Book Synopsis:</td><td style="padding: 8px; border: 1px solid #ddd;">${bookSynopsis}</td></tr>
      <tr><td style="font-weight: bold; padding: 8px; border: 1px solid #ddd;">Pitch:</td><td style="padding: 8px; border: 1px solid #ddd;">${pitch}</td></tr>
      <tr>
        <td style="font-weight: bold; padding: 8px; border: 1px solid #ddd;">Manuscript File:</td>
        <td style="padding: 8px; border: 1px solid #ddd;">
          <a href="${viewFileUrl}" style="color: #0066cc; text-decoration: none;" target="_blank">View Manuscript</a><br>
        </td>
      </tr>
    </tbody>
  </table>

  <!-- Footer Section -->
  <footer style="margin-top: 30px; font-size: 12px; color: #777; text-align: center; border-top: 1px solid #ddd; padding-top: 10px;">
    <p>This is an automated email. Please review the submission and respond accordingly. For any issues, please <a href="mailto:adminsupport@yourcompany.com" style="color: #0066cc;">contact our support team</a>.</p>
    <p>&copy; ${new Date().getFullYear()} Penguin Random House. All rights reserved.</p>
  </footer>
</div>
`;

module.exports = adminSubmissionTemplate;
