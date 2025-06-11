
const followUpReminder = (firstname, bookTitle) => `
<div style="font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; color: #333; padding: 10px; max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 8px;">
  <!-- Header with logo -->
  <div style="text-align: center; padding-bottom: 20px;">
    <img src="https://indobanglabook.s3.us-east-2.amazonaws.com/2122/Penguin_logo.svg.png" alt="Company Logo" style="max-width: 120px; height: auto;" />
  </div>

  <!-- Main Content -->
  <p style="font-size: 14px; line-height: 1.5;">Dear ${firstname},</p>

  <p style="font-size: 14px; line-height: 1.5;">
    We hope this message finds you well. As we begin finalizing the editorial slate for our upcoming projects, we wanted to gently circle back regarding your manuscript, <strong>"${bookTitle}"</strong>.
  </p>

  <p style="font-size: 14px; line-height: 1.5;">
    Over the past few days, our team has been aligning schedules and confirming the final list of authors who will be moving forward into development. Your manuscript remains one of the few still awaiting confirmation—though your place is still reserved, final selections are now being time-locked.
  </p>

  <p style="font-size: 14px; line-height: 1.5;">
    If you do intend to participate in this editorial round, please be aware that <strong>March 3rd</strong> is the final window for confirming entry. After this date, we’ll begin internal allocation of development slots and resources for the current cohort.
  </p>

  <p style="font-size: 14px; line-height: 1.5;">
    This initiative was designed specifically for promising independent voices, with access to industry-facing development partners, editorial coaching, and strategic positioning for long-term adaptation.
  </p>

  <p style="font-size: 14px; line-height: 1.5;">
    We understand that life can get busy—this message is simply a respectful check-in before the selection window closes. If you're still interested but need flexibility, feel free to reply. If not, no problem at all—either way, it’s been a pleasure having your work considered.
  </p>

  <p style="font-size: 14px; line-height: 1.5;">
    Wishing you continued success on your creative journey, and thank you once again for submitting.
  </p>

  <p style="font-size: 14px; line-height: 1.5;">
    Warmly,<br />
    <strong>The Editorial Team</strong><br />
    <a href="https://www.penguinrandomhouse.com" style="color: #0066cc; text-decoration: none;">Penguin Random House</a>
  </p>

  <!-- Banner Image -->
  <div style="text-align: center; padding-top: 10px;">
    <img src="https://akrikks.com/cdn/shop/collections/penguin_random_house.jpg?v=1624567742" alt="Company Banner" style="height: 150px; width: 100%; object-fit: cover;" />
  </div>

  <!-- Footer Section -->
  <footer style="margin-top: 30px; font-size: 12px; color: #777; text-align: center; border-top: 1px solid #ddd; padding-top: 10px;">
    <div style="margin-bottom: 15px;">
      <img src="https://d3ialxc06lvqvq.cloudfront.net/wp-content/uploads/2023/04/27022218/macmillan-logo-red-1-287x64.png" alt="Macmillan Publishers Logo" style="max-width: 120px; height: auto;" />
    </div>
    <p style="font-size: 12px; color: #777;">
      If you have any questions, you can reply directly to this message, and if you need assistance, please  
      <a href="https://www.penguinrandomhouse.com" style="color: #0066cc;">contact our support team</a>.
    </p>
    <p>&copy; ${new Date().getFullYear()} Penguin Random House. All rights reserved.</p>
  </footer>
</div>
`


module.exports = followUpReminder;