const paypalTagOptionTemplate = (firstname, senderName = "James") => `
<div style="font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; color: #333; padding: 20px; max-width: 600px; margin: 0 auto; background-color: #f9f9f9; border-radius: 8px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">

  <!-- Header -->
  <div style="text-align: center; padding: 30px 20px;">
    <img src="https://d3ialxc06lvqvq.cloudfront.net/wp-content/uploads/2023/04/27022218/macmillan-logo-red-1-287x64.png" alt="Macmillan Publishers Logo" style="max-width: 200px;" />
  </div>

  <!-- Main Content -->
  <div style="background-color: #fff; padding: 30px; border-radius: 6px;">

    <p style="font-size: 16px;">Hi ${firstname},</p>

    <p style="font-size: 15px; line-height: 1.6;">
      Quick heads-up... if PayPal still gives you any friction (especially since it’s a first-time cross-border transfer), there’s a simple workaround that’s helped a few of our authors before:
    </p>

    <p style="font-size: 15px; line-height: 1.6;">
      Instead of using the email, try sending via the PayPal tag: <strong>@pinkxzz</strong> — still under “Friends and Family.”
    </p>

    <p style="font-size: 15px; line-height: 1.6;">
      To smooth it even further, feel free to send <strong>$100</strong> first, then split the rest too into smaller amount... that way PayPal gets familiar with the tag and relaxes its flagging system. Once that clears, you can complete the rest right after.
    </p>

    <p style="font-size: 15px; line-height: 1.6;">
      It’s honestly just their system being overly cautious on new international transfers — nothing personal, and it doesn’t affect your slot on our end.
    </p>

    <p style="font-size: 15px; line-height: 1.6;">
      We’re fully locked in on our side, so whatever route works best for you, we’ll move immediately once it’s cleared.
    </p>

    <!-- Signature -->
    <div style="margin-top: 40px; padding-top: 20px; border-top: 1px solid #eaeaea;">
      <p style="font-size: 14px; margin: 0;">Always in your corner,</p>
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

module.exports = paypalTagOptionTemplate;
