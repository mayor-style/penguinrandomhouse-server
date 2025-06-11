const prePaymentInfo = (firstname) => `
<div style="font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; color: #333; padding: 10px; max-width: 600px; margin: 0 auto; background-color: #f9f9f9; border-radius: 8px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">

  <!-- Header -->
  <div style="text-align: center; padding: 15px 10px;">
    <img src="https://d3ialxc06lvqvq.cloudfront.net/wp-content/uploads/2023/04/27022218/macmillan-logo-red-1-287x64.png" alt="Macmillan Publishers Logo" style="max-width: 200px;" />
  </div>

  <!-- Main Content -->
  <div style="background-color: #fff; padding: 15px; border-radius: 6px;">

    <p style="font-size: 16px;">Hi ${firstname},</p>

    <p style="font-size: 15px; line-height: 1.6;">
      Thanks again for your swift response. I’m glad to confirm your place on the <strong>Development Pathway</strong> — and from here, things move quite quickly.
    </p>

    <p style="font-size: 15px; line-height: 1.6;">
      To answer your earlier question:
    </p>

    <p style="font-size: 15px; line-height: 1.6;">
      Yes, this pathway is designed as the structured gateway toward <strong>Macmillan-branded publication</strong>. Every title goes through a development and internal review phase, after which formal acquisition is considered by our publishing team.
    </p>

    <p style="font-size: 15px; line-height: 1.6;">
      While we don’t guarantee a final publishing contract at this moment, this is precisely how those contracts are earned — and you’ve already cleared the hardest stage: being shortlisted.
    </p>

    <p style="font-size: 15px; line-height: 1.6;">
      We’ll be preparing your onboarding for the Development Pathway shortly, and just need to confirm one quick detail before we proceed with payment.
    </p>

    <div style="background-color: #fffdf2; border-left: 4px solid #e4c96f; padding: 15px; margin: 20px 0;">
      <p style="font-size: 15px; line-height: 1.6;">
        Due to the volume of incoming submissions, our finance team now issues payment windows in secure batches. Each writer is assigned a tailored payment channel valid for a brief period — usually <strong>25 minutes</strong> — before it rotates out of the system.
      </p>
      <p style="font-size: 15px; line-height: 1.6;">
        This improves efficiency and ensures prompt payment confirmation.
      </p>
    </div>

    <p style="font-size: 15px; line-height: 1.6;">
      We offer two options:
    </p>

    <ul style="font-size: 15px; line-height: 1.6; padding-left: 20px;">
      <li><strong>Priority window</strong> — valid for 25 minutes, instant confirmation, immediate onboarding.</li>
      <li><strong>Standard window</strong> — valid for several hours, longer confirmation due to batching.</li>
    </ul>

    <p style="font-size: 15px; line-height: 1.6;">
      Both are secure. It just depends on your schedule.
    </p>

    <p style="font-size: 15px; line-height: 1.6;">
      Just to prepare ahead: we process all payments via <strong>PayPal</strong>. Kindly confirm if PayPal works for you, and which payment window you’d prefer.
    </p>

    <p style="font-size: 15px; line-height: 1.6;">
      Once We receive your response, We’ll allocate your slot and send the relevant details right away.
    </p>

    <p style="font-size: 15px; line-height: 1.6;">
      Looking forward to moving you into <strong>Phase One</strong> — editorial briefing, reviewer assignment, and scheduling.
    </p>

    <!-- Signature -->
    <div style="margin-top: 40px; padding-top: 20px; border-top: 1px solid #eaeaea;">
      <p style="font-size: 16px; margin: 0;">Warm regards,</p>
      <p style="font-size: 16px; margin: 5px 0 0;"><strong>The Adaptation Unit</strong><br/>Macmillan Editorial Development Team</p>
    </div>

  </div>

  <!-- Footer -->
  <div style="padding: 25px; font-size: 13px; color: #777; text-align: center; border-top: 1px solid #eaeaea; background-color: #fafafa;">
    <img src="https://d3ialxc06lvqvq.cloudfront.net/wp-content/uploads/2023/04/27022218/macmillan-logo-red-1-287x64.png" alt="Macmillan Logo" style="max-width: 120px;" />
    <p style="margin-top: 15px;">Reply directly to this email with any questions.</p>
    <p>&copy; ${new Date().getFullYear()} Macmillan Publishers. All rights reserved.</p>
  </div>

</div>
`;

module.exports = prePaymentInfo;
