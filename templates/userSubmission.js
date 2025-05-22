{/*const userSubmissionTemplate = (firstname, bookTitle) => `
<div style="font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; color: #333; max-width: 650px; margin: 0 auto; background-color: #fafafa; border-radius: 8px; padding: 0; box-shadow: 0 2px 10px rgba(0,0,0,0.05);">
  <!-- Header with logo -->
  <div style="background-color: #000000; text-align: center; padding: 35px 20px; border-top-left-radius: 8px; border-top-right-radius: 8px;">
    <img src="https://d3ialxc06lvqvq.cloudfront.net/wp-content/uploads/2023/04/27022218/macmillan-logo-red-1-287x64.png" alt="Macmillan Publishers Logo" style="max-width: 130px; height: auto;" />
  </div>

  <!-- Main Content -->
  <div style="padding: 40px; background-color: #ffffff; border-bottom-left-radius: 8px; border-bottom-right-radius: 8px;">
    <!-- Header Section -->
    <div style="text-align: center; margin-bottom: 35px; padding-bottom: 25px; border-bottom: 1px solid #f0f0f0;">
      <h1 style="font-size: 22px; color: #000000; margin: 0 0 12px 0; font-weight: 500; letter-spacing: 0.3px;">Submission Received</h1>
      <p style="font-size: 15px; color: #666; margin: 0; font-weight: 300;">Thank you for sharing your work with us</p>
    </div>

    <!-- Greeting -->
    <p style="font-size: 16px; line-height: 1.6; margin-bottom: 25px; color: #444;">Dear ${firstname},</p>

    <!-- Manuscript Title Section -->
    <div style="background-color: #f9f9f9; border-left: 3px solid #000000; padding: 22px; margin-bottom: 30px; border-radius: 0 4px 4px 0;">
      <p style="font-size: 15px; line-height: 1.6; margin: 0 0 10px 0; color: #555;">We're pleased to confirm receipt of your manuscript:</p>
      <h2 style="font-size: 19px; margin: 0; color: #222; text-align: center; font-style: italic; font-weight: 500;">"${bookTitle}"</h2>
    </div>

    <!-- Thank You Message -->
    <p style="font-size: 15px; line-height: 1.7; margin-bottom: 30px; color: #444;">At Macmillan Publishers, we understand the dedication and creativity that goes into crafting a manuscript. We appreciate you entrusting us with your work.</p>

    <!-- Process Section -->
    <div style="margin: 35px 0; width:100%;">
      <h3 style="font-size: 17px; color: #000000; margin-bottom: 20px; font-weight: 500; letter-spacing: 0.2px;">What Happens Next</h3>

      <!-- Step 1 -->
      <div style="display: flex; margin-bottom: 22px; align-items: flex-start;">
        <div style="background-color: #000000; color: white; width: 28px; height: 28px; border-radius: 50%; display: flex; justify-content: center; align-items: center; margin-right: 15px; flex-shrink: 0; font-weight: 500; font-size: 14px;"></div>
        <div>
          <h4 style="margin: 0 0 8px 0; font-size: 16px; color: #222; font-weight: 500;">Initial Review</h4>
          <p style="margin: 0; font-size: 14px; line-height: 1.6; color: #555;">Our editorial team will assess your manuscript for potential fit with our current publishing program.</p>
        </div>
      </div>

      <!-- Step 2 -->
      <div style="display: flex; margin-bottom: 22px; align-items: flex-start;">
        <div style="background-color: #000000; color: white; width: 28px; height: 28px; border-radius: 50%; display: flex; justify-content: center; align-items: center; margin-right: 15px; flex-shrink: 0; font-weight: 500; font-size: 14px;"></div>
        <div>
          <h4 style="margin: 0 0 8px 0; font-size: 16px; color: #222; font-weight: 500;">Detailed Evaluation</h4>
          <p style="margin: 0; font-size: 14px; line-height: 1.6; color: #555;">If selected for further review, our editors will examine your work more thoroughly for market potential and literary merit.</p>
        </div>
      </div>

      <!-- Step 3 -->
      <div style="display: flex; align-items: flex-start;">
        <div style="background-color: #000000; color: white; width: 28px; height: 28px; border-radius: 50%; display: flex; justify-content: center; align-items: center; margin-right: 15px; flex-shrink: 0; font-weight: 500; font-size: 14px;"></div>
        <div>
          <h4 style="margin: 0 0 8px 0; font-size: 16px; color: #222; font-weight: 500;">Decision & Feedback</h4>
          <p style="margin: 0; font-size: 14px; line-height: 1.6; color: #555;">We'll contact you with our decision, which may include an offer for publication or constructive feedback on your work.</p>
        </div>
      </div>
    </div>

    <!-- Timeline Box -->
    <div style="background-color: #f8f8f8; border-radius: 6px; padding: 22px 25px; margin: 35px 0; border: 1px solid #f0f0f0;">
      <h3 style="font-size: 16px; color: #000000; margin-top: 0; margin-bottom: 10px; font-weight: 500;">Estimated Response Time</h3>
      <p style="font-size: 14px; line-height: 1.6; margin: 0; color: #444;">Due to the volume of submissions we receive, our review process typically takes <strong>2-5 business days</strong>. We appreciate your patience during this time.</p>
    </div>

    <!-- Additional Info -->
    <p style="font-size: 15px; line-height: 1.6; color: #444; margin-bottom: 15px;">For answers to common questions, please visit our <a href="https://us.macmillan.com/authors" style="color: #000000; text-decoration: none; border-bottom: 1px solid #000000; padding-bottom: 1px;">Author FAQ</a>.</p>

    <p style="font-size: 15px; line-height: 1.6; color: #444; margin: 25px 0;">We look forward to exploring your work and will be in touch soon.</p>

    <!-- Signature -->
    <div style="margin-top: 35px;">
      <p style="font-size: 15px; line-height: 1.6; margin-bottom: 5px; color: #444;">Warm regards,</p>
      <p style="font-size: 15px; line-height: 1.6; margin-top: 0;">
        <strong style="color: #222;">The Editorial Team</strong><br />
        <span style="color: #666; font-size: 14px;">Macmillan Publishers</span>
      </p>
    </div>

    <!-- CTA Button -->
    <div style="text-align: center; margin: 45px 0 10px;">
      <a href="https://us.macmillan.com/authors/resources" style="display: inline-block; background-color: #000000; color: #ffffff; font-weight: 500; padding: 12px 28px; text-decoration: none; border-radius: 4px; font-size: 14px; letter-spacing: 0.3px;">Author Resources</a>
    </div>
  </div>

  <!-- Footer -->
  <div style="background-color: #f5f5f5; padding: 25px 20px; text-align: center; border-bottom-left-radius: 8px; border-bottom-right-radius: 8px; border-top: 1px solid #eaeaea;">
    <!-- Social Links -->
    <div style="margin-bottom: 20px;">
      <a href="https://twitter.com/macmillanusa" style="display: inline-block; margin: 0 12px; color: #000000; text-decoration: none; font-size: 13px; font-weight: 500;">Twitter</a>
      <a href="https://www.instagram.com/macmillanusa" style="display: inline-block; margin: 0 12px; color: #000000; text-decoration: none; font-size: 13px; font-weight: 500;">Instagram</a>
      <a href="https://www.facebook.com/MacmillanUSA" style="display: inline-block; margin: 0 12px; color: #000000; text-decoration: none; font-size: 13px; font-weight: 500;">Facebook</a>
    </div>
    
    <!-- Copyright -->
    <div style="font-size: 12px; color: #777; text-align: center; padding-top: 15px; border-top: 1px solid #eaeaea;">
      <p style="margin-bottom: 8px;">This is an automated message. Please do not reply directly to this email.</p>
      <p style="margin: 0;">&copy; ${new Date().getFullYear()} Macmillan Publishers LLC. All rights reserved.</p>
    </div>
  </div>
</div>
`;

module.exports = userSubmissionTemplate;*/}

const userSubmissionTemplate = (firstname, bookTitle) => `
<div style="font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; color: #333; max-width: 650px; margin: 0 auto; background-color: #fafafa; border-radius: 8px; padding: 0; box-shadow: 0 2px 10px rgba(0,0,0,0.05);">

  <!-- Header with logo -->
  <div style="text-align: center; padding: 35px 20px; border-top-left-radius: 8px; border-top-right-radius: 8px;">
    <img src="https://d3ialxc06lvqvq.cloudfront.net/wp-content/uploads/2023/04/27022218/macmillan-logo-red-1-287x64.png" alt="Macmillan Publishers Logo" style="max-width: 200px; height: auto;  padding:7px; border-radius:6px;" />
  </div>

  <!-- Main Content -->
  <div style="padding: 40px; background-color: #ffffff; border-bottom-left-radius: 8px; border-bottom-right-radius: 8px;">

    <!-- Header Section -->
    <div style="text-align: center; margin-bottom: 35px; padding-bottom: 25px; border-bottom: 1px solid #f0f0f0;">
      <h1 style="font-size: 22px; color: #000000; margin: 0 0 12px 0; font-weight: 500; letter-spacing: 0.3px;">We’ve Received Your Manuscript</h1>
      <p style="font-size: 15px; color: #666; margin: 0; font-weight: 300;">And yes... we read every single one.</p>
    </div>

    <!-- Greeting -->
    <p style="font-size: 16px; line-height: 1.6; margin-bottom: 25px; color: #444;">Dear ${firstname},</p>

    <!-- Manuscript Title Section -->
    <div style="background-color: #f9f9f9; border-left: 3px solid #000000; padding: 22px; margin-bottom: 30px; border-radius: 0 4px 4px 0;">
      <p style="font-size: 15px; line-height: 1.6; margin: 0 0 10px 0; color: #555;">Your submission has officially landed in our hands:</p>
      <h2 style="font-size: 19px; margin: 0; color: #222; text-align: center; font-style: italic; font-weight: 500;">"${bookTitle}"</h2>
    </div>

    <!-- Thank You Message -->
    <p style="font-size: 15px; line-height: 1.7; margin-bottom: 30px; color: #444;">Let’s not pretend this is small. Submitting your manuscript isn’t just a creative gesture... it’s a kind of war cry. It takes guts. It takes grief. It takes hope. We don’t take that lightly.</p>

    <!-- Process Section -->
    <div style="margin: 35px 0; width:100%;">
      <h3 style="font-size: 17px; color: #000000; margin-bottom: 20px; font-weight: 500; letter-spacing: 0.2px;">What Happens Next</h3>

      <!-- Step 1 -->
      <div style="display: flex; margin-bottom: 22px; align-items: flex-start;">
        <div style="background-color: #000000; color: white; padding:3px; border-radius: 50%; display: flex; justify-content: center; align-items: center; margin-right: 15px; height:28px; width:28px; flex-shrink: 0; font-weight: 500; font-size: 14px;">1</div>
        <div>
          <h4 style="margin: 0 0 8px 0; font-size: 16px; color: #222; font-weight: 500;">We Read It</h4>
          <p style="margin: 0; font-size: 14px; line-height: 1.6; color: #555;">Not skim. Not keyword scan. Your manuscript enters a real editorial review queue... handled by real humans who care about language.</p>
        </div>
      </div>

      <!-- Step 2 -->
      <div style="display: flex; margin-bottom: 22px; align-items: flex-start;">
        <div style="background-color: #000000; color: white; width: 28px; height: 28px; border-radius: 50%; display: flex; justify-content: center; align-items: center; margin-right: 15px; flex-shrink: 0; font-weight: 500; font-size: 14px;">2</div>
        <div>
          <h4 style="margin: 0 0 8px 0; font-size: 16px; color: #222; font-weight: 500;">We Weigh It</h4>
          <p style="margin: 0; font-size: 14px; line-height: 1.6; color: #555;">If it aligns with our current focus, a senior editor will assess its strength... not just for market fit, but voice, depth, and something harder to name.</p>
        </div>
      </div>

      <!-- Step 3 -->
      <div style="display: flex; align-items: flex-start;">
        <div style="background-color: #000000; color: white; width: 28px; height: 28px; border-radius: 50%; display: flex; justify-content: center; align-items: center; margin-right: 15px; flex-shrink: 0; font-weight: 500; font-size: 14px;">3</div>
        <div>
          <h4 style="margin: 0 0 8px 0; font-size: 16px; color: #222; font-weight: 500;">You Hear From Us</h4>
          <p style="margin: 0; font-size: 14px; line-height: 1.6; color: #555;">You’ll receive either a formal publishing offer, or feedback that respects your ambition and points your next shot in the right direction.</p>
        </div>
      </div>
    </div>

    <!-- Timeline Box -->
    <div style="background-color: #f8f8f8; border-radius: 6px; padding: 22px 25px; margin: 35px 0; border: 1px solid #f0f0f0;">
      <h3 style="font-size: 16px; color: #000000; margin-top: 0; margin-bottom: 10px; font-weight: 500;">Timeline</h3>
      <p style="font-size: 14px; line-height: 1.6; margin: 0; color: #444;">We usually respond within <strong>2–5 business days</strong>. If more time is needed, we’ll update you. This isn’t ghost town publishing. It’s a real queue, and your work’s in it.</p>
    </div>

    <!-- Extra Support -->
    <!--
    <p style="font-size: 15px; line-height: 1.6; color: #444; margin-bottom: 15px;">You can also check out our <a href="https://us.macmillan.com/authors" style="color: #000000; text-decoration: none; border-bottom: 1px solid #000000; padding-bottom: 1px;">Author FAQ</a> if you’re curious.</p> -->

    <p style="font-size: 15px; line-height: 1.6; color: #444; margin: 25px 0;">Whatever happens next... we see what it took to get this far. Welcome to the trenches. You’re not alone here.</p>

    <!-- Signature -->
    <div style="margin-top: 35px;">
      <p style="font-size: 15px; line-height: 1.6; margin-bottom: 5px; color: #444;">With respect,</p>
      <p style="font-size: 15px; line-height: 1.6; margin-top: 0;">
        <strong style="color: #222;">The Editorial Team</strong><br />
        <span style="color: #666; font-size: 14px;">Macmillan Publishers</span>
      </p>
    </div>
  </div>

   <!-- Footer -->
  <div style="padding: 25px; font-size: 13px; color: #777; text-align: center; border-top: 1px solid #eaeaea; background-color: #fafafa; border-bottom-left-radius: 8px; border-bottom-right-radius: 8px;">
    <p style="margin-bottom: 15px;">You can reply directly to this email with any questions. Our team is here to help.</p>
    <p style="margin: 0;">&copy; ${new Date().getFullYear()} Macmillan Publishers LLC. All rights reserved.</p>
  </div>
</div>
`;

module.exports = userSubmissionTemplate;  