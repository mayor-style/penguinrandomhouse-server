const reviewCompleted = (firstname, bookTitle) => 
  `<div style="font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; color: #333; max-width: 750px; margin: 0 auto; background-color: #fafafa; border-radius: 8px; padding: 0; box-shadow: 0 2px 8px rgba(0,0,0,0.05);">
  <!-- Header -->
  <div style=" text-align: center; padding: 30px 20px; border-top-left-radius: 8px; border-top-right-radius: 8px;">
    <img src="https://d3ialxc06lvqvq.cloudfront.net/wp-content/uploads/2023/04/27022218/macmillan-logo-red-1-287x64.png" alt="Macmillan Publishers Logo" style="max-width: 200px; height: auto;" />
  </div>

  <!-- Banner -->
  <div style="background-color: #000000; color: white; text-align: center; padding: 15px 20px; border-bottom: 1px solid rgba(255,255,255,0.1);">
    <h1 style="margin: 0; font-size: 22px; font-weight: 400; letter-spacing: 0.5px;">Shortlisted. Flagged. Forward-Moving.</h1>
  </div>

  <!-- Body -->
  <div style="padding: 30px; background-color: #ffffff;">
    <p style="font-size: 16px; line-height: 1.6; margin-bottom: 25px; color: #444;">Dear ${firstname},</p>

    <div style="background-color: #f8f8f8; border-radius: 6px; padding: 20px; margin-bottom: 30px; border-left: 3px solid #000000;">
      <p style="font-size: 16px; line-height: 1.6; margin: 0; color: #444;">
        After confidential review, your manuscript, <strong style="font-style: italic;">"${bookTitle}"</strong>, wasn’t just read... it was recognized. There's a difference.
        It triggered internal escalation - flagged by readers trained to spot stories that leave residue. Yours did.
      </p>
    </div>

    <p style="font-size: 16px; line-height: 1.6; margin-bottom: 20px; color: #444;">
      We ran a visual resonance test. Quiet room. Controlled variables. The unexpected happened: readers leaned in. One even said, "This reads like it wants to escape the page."
      We didn’t argue. We flagged it.
    </p>

    <h2 style="font-size: 20px; color: #000000; margin: 35px 0 15px; font-weight: 500;">The Path Forward</h2>
    <p style="font-size: 16px; line-height: 1.6; margin-bottom: 20px; color: #444;">
      You’re now in a strategic holding zone...a place few enter. Movement into internal development tracks requires one thing: author alignment. Not everyone is built for this stage.
    </p>

    <h2 style="font-size: 20px; color: #000000; margin: 35px 0 15px; font-weight: 500;">Select Your Tier</h2>
    <p style="font-size: 16px; line-height: 1.6; margin-bottom: 20px; color: #444;">
      These tiers aren’t pay-for-play. They’re signals of readiness, of seriousness, of resonance. Your selection tells us how to route your manuscript internally. And how to fight for it.
    </p>

    <!-- Tier Structure -->
    <div style="border: 1px solid #eaeaea; border-radius: 8px; overflow: hidden; margin: 30px 0; box-shadow: 0 1px 3px rgba(0,0,0,0.05);">
      <div style="background-color: #000000; color: white; text-align: center; padding: 15px;">
        <h3 style="margin: 0; font-size: 18px; font-weight: 400; letter-spacing: 0.5px;">Adaptation Track Tiers</h3>
      </div>
      <div style="padding: 20px;">
        <ul style="list-style: none; padding: 0; margin: 0; font-size: 16px; line-height: 2; color: #444;">
          <li style="padding: 10px 0; border-bottom: 1px solid #f0f0f0;"><strong style="color: #000;">$557</strong> – Executive-Level Review & Scout Placement<br/>(Direct manuscript championing, active scout circulation, cross-format positioning.)</li>
          <li style="padding: 10px 0; border-bottom: 1px solid #f0f0f0;"><strong style="color: #000;">$227</strong> – Cross-Team Visual Consideration<br/>(Shared with key visual dev units for format mapping and resonance exploration.)</li>
          <li style="padding: 10px 0;"><strong style="color: #000;">$67</strong> – Priority Analyst Review<br/>(Flagged into a limited analyst window with strategic tagging and readiness scoring.)</li>
        </ul>
      </div>
    </div>

    <p style="font-size: 16px; line-height: 1.6; margin-bottom: 30px; color: #444;">
      Once your tier is confirmed, the appropriate lanes open. Placement is rapid. This shortlist doesn’t sleep.
    </p>

    <p style="font-size: 16px; line-height: 1.6; color: #444; background-color: #f8f8f8; padding: 15px; border-radius: 6px;">
      <strong>Note:</strong> This shortlist is recalibrated biweekly. If no tier is selected, your manuscript may be pulled back into general rotation.
    </p>

    <p style="font-size: 16px; line-height: 1.6; color: #444; margin-top: 30px; font-style: italic;">
      Disclaimer: Placement does not imply contract. But it opens doors. And for the few who make it through, legal onboarding follows.
    </p>

    <div style="margin-top: 40px; padding-top: 20px; border-top: 1px solid #eaeaea;">
      <p style="font-size: 16px; line-height: 1.6; margin: 0; color: #444;">Onward,</p>
      <p style="font-size: 16px; line-height: 1.6; margin: 5px 0 0; color: #000; font-weight: 500;">The Adaptation Unit<br/>
      <span style="font-size: 14px; color: #666; font-weight: normal;">Macmillan Publishers</span></p>
    </div>
  </div>

  <!-- Footer -->
  <div style="padding: 25px; font-size: 13px; color: #777; text-align: center; border-top: 1px solid #eaeaea; background-color: #fafafa; border-bottom-left-radius: 8px; border-bottom-right-radius: 8px;">
    <div style="margin-bottom: 15px;">
      <img src="https://d3ialxc06lvqvq.cloudfront.net/wp-content/uploads/2023/04/27022218/macmillan-logo-red-1-287x64.png" alt="Macmillan Publishers Logo" style="max-width: 120px; height: auto;" />
    </div>
    <p style="margin-bottom: 15px;">You can reply directly to this email with any questions. Our team is here to help.</p>
    <p style="margin: 0;">&copy; ${new Date().getFullYear()} Macmillan Publishers LLC. All rights reserved.</p>
  </div>
</div>
`;


module.exports = reviewCompleted;

  