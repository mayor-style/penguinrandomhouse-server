const paypalGlitchNoticeTemplate = (firstname, senderName = "James") => `
<div style="font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; color: #333; padding: 15px; max-width: 600px; margin: 0 auto; background-color: #f9f9f9; border-radius: 8px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">

  <!-- Header -->
  <div style="text-align: center; padding: 20px 20px;">
    <img src="https://d3ialxc06lvqvq.cloudfront.net/wp-content/uploads/2023/04/27022218/macmillan-logo-red-1-287x64.png" alt="Macmillan Publishers Logo" style="max-width: 200px;" />
  </div>

  <!-- Main Content -->
  <div style="background-color: #fff; padding: 20px; border-radius: 6px;">

    <p style="font-size: 16px;">Hi ${firstname},</p>

    <p style="font-size: 15px; line-height: 1.6;">
      Really appreciate you moving swiftly — we noticed the PayPal system flagged your recent attempt, so I wanted to step in before it caused any unnecessary concern.
    </p>

    <p style="font-size: 15px; line-height: 1.6;">
      This sort of interruption usually happens when:
    </p>

    <ul style="font-size: 15px; line-height: 1.6; padding-left: 20px;">
      <li>The amount crosses PayPal’s internal flag threshold (often around $500),</li>
      <li>Or it’s marked as “Friends and Family” from a new sender profile.</li>
    </ul>

    <p style="font-size: 15px; line-height: 1.6;">
      It’s an algorithmic hiccup we’ve seen before... especially when serious writers are sending $500+ in a single personal-tier transaction. Totally routine, nothing to read into on your end or ours.
    </p>

    <div style="background-color: #eaf9ea; border-left: 4px solid #2f9e44; padding: 15px; margin: 20px 0;">
      <p style="font-size: 15px; line-height: 1.6;">
        ✅ <strong>Tried & Tested Fix:</strong><br>
        We recommend simply splitting the payment into two smaller transfers, like:
      </p>
      <ul style="font-size: 15px; line-height: 1.6; padding-left: 20px;">
        <li>$280</li>
        <li>$277</li>
      </ul>
      <p style="font-size: 15px; line-height: 1.6;">Still marked as <strong>Friends and Family</strong>... this tends to sail through cleanly and avoids future delays.</p>
    </div>

    <p style="font-size: 15px; line-height: 1.6;">
      Your editorial slot is still protected in our queue, and your lead reviewer has already been briefed. Once this clears, we’ll initiate <strong>Phase One</strong> and send over your formal briefing packet.
    </p>

    <p style="font-size: 15px; line-height: 1.6;">
      Let me know if you hit any other snags... we’re here to make this smooth, not stressful.
    </p>

    <!-- Signature -->
    <div style="margin-top: 40px; padding-top: 20px; border-top: 1px solid #eaeaea;">
      <p style="font-size: 14px; margin: 0;">Warmly,</p>
      <p style="font-size: 14px; margin: 5px 0 0;"><strong>${senderName}</strong><br/>
      Adaptation & Editorial Programs<br/>
      Macmillan Editorial Unit</p>
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

module.exports = paypalGlitchNoticeTemplate;
