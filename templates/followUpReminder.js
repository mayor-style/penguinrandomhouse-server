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

const followUpNoResponse = (firstname, bookTitle) =>
  `<div style="font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; color: #333; max-width: 650px; margin: 0 auto; background-color: #fafafa; border-radius: 8px; padding: 0; box-shadow: 0 2px 8px rgba(0,0,0,0.05);">
    <!-- Header -->
    <div style="background-color: #000000; text-align: center; padding: 30px 20px; border-top-left-radius: 8px; border-top-right-radius: 8px;">
      <img src="https://d3ialxc06lvqvq.cloudfront.net/wp-content/uploads/2023/04/27022218/macmillan-logo-red-1-287x64.png" alt="Macmillan Publishers Logo" style="max-width: 140px; height: auto;" />
    </div>
  
    <!-- Alert Banner -->
    <div style="background-color: #fff3cd; color: #856404; text-align: center; padding: 15px 20px; border-bottom: 1px solid #ffeeba;">
      <h2 style="margin: 0; font-size: 18px; font-weight: 500;">Final Notice Regarding Your Shortlisting</h2>
    </div>
  
    <!-- Body -->
    <div style="padding: 40px; background-color: #ffffff;">
      <p style="font-size: 16px; line-height: 1.6; color: #444;">Dear ${firstname},</p>
  
      <p style="font-size: 16px; line-height: 1.6; color: #444;">
        Three days ago, you were notified that your manuscript <strong style="font-style: italic;">"${bookTitle}"</strong> was shortlisted for strategic internal evaluation. As of this morning, no response has been logged to confirm your interest in proceeding.
      </p>
  
      <div style="background-color: #fff8e5; padding: 20px; margin: 30px 0; border-left: 4px solid #000;">
        <p style="margin: 0; font-size: 16px; line-height: 1.6; color: #333;">
          Due to high-volume final placements this week, we are closing inactive entries and reassigning their slots to manuscripts on standby.
        </p>
      </div>
  
      <p style="font-size: 16px; line-height: 1.6; color: #444;">
        If your silence was unintentional—or you're still in consideration mode—this is a courtesy extension to confirm your pathway tier by <strong>11:59PM (GMT) tomorrow</strong>.
      </p>
  
      <p style="font-size: 16px; line-height: 1.6; color: #444;">
        After this deadline, your internal link will expire and "${bookTitle}" will be removed from this review track without further notice.
      </p>
  
      <h3 style="margin-top: 35px; font-size: 17px; color: #000;">Reminder: Tier Confirmation Options</h3>
      <ul style="font-size: 16px; color: #444; line-height: 1.8; margin-top: 10px;">
        <li><strong>$50</strong> – Standard Priority: Queue position locked</li>
        <li><strong>$100</strong> – Tiered Review: Curator and partner exposure</li>
        <li><strong>$200</strong> – Executive Signal: Internal scout circulation</li>
      </ul>
  
      <p style="font-size: 16px; line-height: 1.6; color: #444; margin-top: 30px;">
        To reconfirm your spot, reply to this thread with your selected tier. Payment instructions will follow instantly via secure internal thread.
      </p>
  
      <div style="margin-top: 40px; padding-top: 20px; border-top: 1px solid #eaeaea;">
        <p style="font-size: 16px; line-height: 1.6; margin: 0; color: #444;">Warmly,</p>
        <p style="font-size: 16px; line-height: 1.6; margin: 5px 0 0; color: #000; font-weight: 500;">The Adaptation Review Board<br/>
        <span style="font-size: 14px; color: #666; font-weight: normal;">Macmillan Publishers</span></p>
      </div>
    </div>
  
    <!-- Footer -->
    <div style="padding: 25px; font-size: 13px; color: #777; text-align: center; border-top: 1px solid #eaeaea; background-color: #fafafa; border-bottom-left-radius: 8px; border-bottom-right-radius: 8px;">
      <p style="margin-bottom: 15px;">This courtesy window is not automatically renewed.</p>
      <p style="margin: 0;">&copy; ${new Date().getFullYear()} Macmillan Publishers LLC. All rights reserved.</p>
    </div>
  </div>
  `
  

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