const userSubmissionTemplate = (firstname, bookTitle) => `
<div style="font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; color: #333; padding: 20px; max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 8px;">
  <!-- Header with logo -->
  <div style="text-align: center; padding-bottom: 20px;">
    <img src="https://indobanglabook.s3.us-east-2.amazonaws.com/2122/Penguin_logo.svg.png" alt="Company Logo" style="max-width: 120px; height: auto;" />
  </div>
  <!-- Main Content -->
  <p style="font-size: 14px; line-height: 1.5;">Dear ${firstname},</p>
  
  <p style="font-size: 14px; line-height: 1.5;">Thank you for submitting your literary work for review and potential publication. We have received your manuscript titled "<strong>${bookTitle}</strong>" and are excited to begin reviewing it.</p>
  
  <p style="font-size: 14px; line-height: 1.5;">Our editorial team will thoroughly evaluate your submission, and we aim to provide a response within a reasonable timeframe. Here’s what you can expect:</p>
  
  <ul style="font-size: 14px; line-height: 1.5; list-style-type: disc; margin-left: 20px;">
    <li>Your manuscript will be reviewed carefully by our editorial team.</li>
    <li>If additional information or revisions are needed, we will contact you directly.</li>
    <li>You will receive a response regarding the outcome of your submission via email.</li>
  </ul>
  
  <p style="font-size: 14px; line-height: 1.5;">We understand the importance of your work and appreciate your trust in submitting it to us. Please be assured that your manuscript will receive the careful attention it deserves.</p>

  <p style="font-size: 14px; line-height: 1.5;">If you have any further questions or would like to get in touch, feel free to contact us anytime.</p>

  <p style="font-size: 14px; line-height: 1.5;">Best regards,<br />
  <strong>The Editorial Team</strong><br />
  <a href="https://www.penguinrandomhouse.com" style="color: #0066cc; text-decoration: none;">Penguin Random House</a></p>

  <!-- Footer Section -->
  <footer style="margin-top: 30px; font-size: 12px; color: #777; text-align: center; border-top: 1px solid #ddd; padding-top: 10px;">
    <p style="font-size: 12px; color: #777;">This is an automated email. Please do not reply directly to this message. If you need assistance, please <a href="https://www.penguinrandomhouse.com" style="color: #0066cc;">contact our support team</a>.</p>
    <p>&copy; ${new Date().getFullYear()} Penguin Random House. All rights reserved.</p>
  </footer>
</div>
`;

module.exports = userSubmissionTemplate;
