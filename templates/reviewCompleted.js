const reviewCompleted = (firstname, bookTitle) => `
<div style="font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; color: #333; padding: 20px; max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 8px;">
  <!-- Header with logo -->
  <div style="text-align: center; padding-bottom: 20px;">
    <img src="https://indobanglabook.s3.us-east-2.amazonaws.com/2122/Penguin_logo.svg.png" alt="Company Logo" style="max-width: 120px; height: auto;" />
  </div>

  <!-- Main Content -->
  <p style="font-size: 14px; line-height: 1.5;">Dear ${firstname},</p>

  <p style="font-size: 14px; line-height: 1.5;">
    Congratulations! After careful review, we are thrilled to inform you that your manuscript titled "<strong>${bookTitle}</strong>" has been selected for the next stage of evaluation.
    Your project stood out due to its compelling narrative and its potential to resonate with a wide audience, both in print and on screen.
  </p>

  <p style="font-size: 14px; line-height: 1.5;">
    The next steps in this process involve consultations with industry professionals, preparing your story for production alignment, and securing the right partnerships to maximize its reach and success. 
    To move forward, a small upfront contribution is required. This is an investment aimed at creating a platform for generating royalties, licensing revenue, and potential adaptation opportunities.
  </p>

  <h3 style="font-size: 14px; line-height: 1.5;">Contribution Tiers:</h3>
  <ul style="font-size: 14px; line-height: 1.5; list-style-type: disc; margin-left: 20px;">
    <li><strong>Basic Tier:</strong> $50 – Essential consultations and production arrangements.</li>
    <li><strong>Standard Tier:</strong> $100 – Enhanced support with network alignment and pre-production setup.</li>
    <li><strong>Premium Tier:</strong> $200 – Comprehensive service with expedited production timelines and tailored recommendations.</li>
  </ul>

  <p style="font-size: 14px; line-height: 1.5;">
    Your project’s journey doesn’t end here. If you're ready to proceed, please let us know your preferred tier, and we will send over the agreement for your review. Once finalized, we will begin the next steps and keep you updated throughout the process.
  </p>

  <p style="font-size: 14px; line-height: 1.5;">
    We are excited to be part of this next chapter in your creative journey. Please feel free to reach out with any questions or additional information you may need.
  </p>

  <p style="font-size: 14px; line-height: 1.5;">
    Best regards,<br />
    <strong>The Editorial Team</strong><br />
    <a href="https://www.penguinrandomhouse.com" style="color: #0066cc; text-decoration: none;">Penguin Random House</a>
  </p>

<div style="text-align: center; padding-top: 10px;">
  <img src="https://akrikks.com/cdn/shop/collections/penguin_random_house.jpg?v=1624567742" alt="Company Logo" style="height: 150px; width: 100%; object-fit: cover;" />
</div>


  <!-- Footer Section -->
  <footer style="margin-top: 30px; font-size: 12px; color: #777; text-align: center; border-top: 1px solid #ddd; padding-top: 10px;">
    <p style="font-size: 12px; color: #777;">
      This is an automated email. Please do not reply directly to this message. If you need assistance, please 
      <a href="https://www.penguinrandomhouse.com" style="color: #0066cc;">contact our support team</a>.
    </p>
    <p>&copy; ${new Date().getFullYear()} Penguin Random House. All rights reserved.</p>
  </footer>
</div>
`;

module.exports = reviewCompleted;
