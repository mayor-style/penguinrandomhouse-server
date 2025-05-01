{/*const followUpReminder = (firstname, bookTitle) => `
<div style="font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; color: #333; padding: 10px; max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 8px;">
  <!-- Header with logo -->
  <div style="text-align: center; padding-bottom: 20px;">
    <img src="https://indobanglabook.s3.us-east-2.amazonaws.com/2122/Penguin_logo.svg.png" alt="Company Logo" style="max-width: 120px; height: auto;" />
  </div>

  <!-- Main Content -->
  <p style="font-size: 14px; line-height: 1.5;">Dear ${firstname},</p>

  <p style="font-size: 14px; line-height: 1.5;">
    As we finalize our adaptation slate for the upcoming quarter, we wanted to send a quick update regarding your manuscript, <strong>"${bookTitle}"</strong>.
  </p>

  <p style="font-size: 14px; line-height: 1.5;">
    Due to the overwhelming response from selected authors, our team is now <strong>closing this round of evaluations on March 3rd</strong>. After this date, we will be moving forward with projects that have confirmed their participation in the next phase of development.
  </p>

  <p style="font-size: 14px; line-height: 1.5;">
    This initiative is part of our ongoing effort to <strong>bridge the gap between independent authors and major industry players</strong>, ensuring that promising stories have a structured path toward adaptation. The upcoming phase involves direct discussions with industry professionals, alignment with strategic production partners, and refinement for market positioning.
  </p>

  <h3 style="font-size: 14px; line-height: 1.5; color: #cc0000;">Important Deadline:</h3>
  <p style="font-size: 14px; line-height: 1.5;">
    If you intend to move forward with this opportunity, please confirm your participation by <strong>March 3rd</strong>. Slots are limited, and once this cycle closes, we will be prioritizing confirmed projects.
  </p>

  <p style="font-size: 14px; line-height: 1.5;">
    If you have any questions regarding the next steps or development structure, feel free to reach out.
  </p>

  <p style="font-size: 14px; line-height: 1.5;">
    Looking forward to the next steps should you decide to move forward.
  </p>

  <p style="font-size: 14px; line-height: 1.5;">
    Best regards,<br />
    <strong>The Editorial Team</strong><br />
    <a href="https://www.penguinrandomhouse.com" style="color: #0066cc; text-decoration: none;">Penguin Random House</a>
  </p>

  <div style="text-align: center; padding-top: 10px;">
    <img src="https://akrikks.com/cdn/shop/collections/penguin_random_house.jpg?v=1624567742" alt="Company Banner" style="height: 150px; width: 100%; object-fit: cover;" />
  </div>

  <!-- Footer Section -->
  <footer style="margin-top: 30px; font-size: 12px; color: #777; text-align: center; border-top: 1px solid #ddd; padding-top: 10px;">
    <p style="font-size: 12px; color: #777;">
      If you have any questions, you can reply directly to this message, and if you need assistance, please  
      <a href="https://www.penguinrandomhouse.com" style="color: #0066cc;">contact our support team</a>.
    </p>
    <p>&copy; ${new Date().getFullYear()} Penguin Random House. All rights reserved.</p>
  </footer>
</div>
`;*/}

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
    <p style="font-size: 12px; color: #777;">
      If you have any questions, you can reply directly to this message, and if you need assistance, please  
      <a href="https://www.penguinrandomhouse.com" style="color: #0066cc;">contact our support team</a>.
    </p>
    <p>&copy; ${new Date().getFullYear()} Penguin Random House. All rights reserved.</p>
  </footer>
</div>
`


module.exports = followUpReminder;