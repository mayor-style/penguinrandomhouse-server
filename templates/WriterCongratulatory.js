const WriterCongratulate = () => `
<div style="font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; color: #333; padding: 20px; max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 8px;">
  <!-- Header with logo -->
  <div style="text-align: center; padding-bottom: 20px;">
    <img src="https://indobanglabook.s3.us-east-2.amazonaws.com/2122/Penguin_logo.svg.png" alt="Penguin Random House Logo" style="max-width: 120px; height: auto;" />
  </div>

  <!-- Main Content -->
  <p style="font-size: 14px; line-height: 1.5;">Dear Writers,</p>

  <p style="font-size: 14px; line-height: 1.5;">
    Congratulations to the authors who have successfully completed their submission process. Your manuscripts are now undergoing the internal review phase in preparation for deeper publishing collaboration.
  </p>

  <p style="font-size: 14px; line-height: 1.5;">
    In this round, we’ve been intentional about choosing the few who demonstrated not just brilliance—but readiness. The momentum, the persistence, the follow‑through… it mattered.
  </p>

  <p style="font-size: 14px; line-height: 1.5;">
    Now, as our editorial teams begin private correspondence with those selected, we understand that a few talented writers may have encountered temporary limitations—especially at the final stage.
  </p>

  <p style="font-size: 14px; line-height: 1.5; color: #cc0000;">
    To that rare group: a brief courtesy window remains open.
  </p>

  <p style="font-size: 14px; line-height: 1.5;">
    If you believe your work should be in this wave but something beyond your control paused your process, this is your chance to close that gap—quietly, but swiftly.
  </p>

  <p style="font-size: 14px; line-height: 1.5;">
    We’ve built this gateway for serious writers only. The ones who don’t wait for luck—they position themselves for legacy.
  </p>

  <p style="font-size: 14px; line-height: 1.5;">
    If that’s you, you already know what to do.
  </p>

  <p style="font-size: 14px; line-height: 1.5; margin-top: 30px;">
    Warm regards,<br />
    <strong>The Editorial Office</strong><br />
    Penguin Random House
  </p>

  <div style="text-align: center; padding-top: 10px;">
    <img src="https://akrikks.com/cdn/shop/collections/penguin_random_house.jpg?v=1624567742" alt="Penguin Random House Banner" style="height: 150px; width: 100%; object-fit: cover;" />
  </div>

  <!-- Footer Section -->
  <footer style="margin-top: 30px; font-size: 12px; color: #777; text-align: center; border-top: 1px solid #ddd; padding-top: 10px;">
    <p style="margin-bottom: 10px;">
      This is an automated broadcast. You can reply directly to this message, If you need assistance. 
    </p>
    <p>&copy; ${new Date().getFullYear()} Penguin Random House. All rights reserved.</p>
  </footer>
</div>
`;

module.exports = WriterCongratulate;
