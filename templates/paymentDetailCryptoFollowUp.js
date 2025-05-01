const paymentDetailCryptoFollowUp = (firstname) => `
<div style="font-family: 'Inter', 'Helvetica Neue', Helvetica, Arial, sans-serif; color: #2c3e50; padding: 30px; max-width: 650px; margin: 0 auto; background-color: #ffffff; border-radius: 16px; box-shadow: 0 6px 12px rgba(0,0,0,0.08); border: 1px solid #e9ecef;">
  <!-- Header with logo -->
  <div style="text-align: center; padding-bottom: 30px; border-bottom: 1px solid #e4e7eb;">
    <img src="https://indobanglabook.s3.us-east-2.amazonaws.com/2122/Penguin_logo.svg.png" alt="Company Logo" style="max-width: 160px; height: auto; filter: grayscale(10%) contrast(110%);" />
  </div>

  <!-- Main Content -->
  <div style="padding: 25px 0;">
    <p style="font-size: 17px; line-height: 1.7; margin-bottom: 25px; color: #34495e;">Dear ${firstname},</p>

    <p style="font-size: 16px; line-height: 1.7; margin-bottom: 25px; color: #2c3e50;">
      We appreciate your prompt response and your dedication to finalizing the process. As you work on acquiring the BTC, we wanted to provide you with an exciting update regarding your manuscript.
    </p>

    <p style="font-size: 16px; line-height: 1.7; margin-bottom: 25px; color: #2c3e50;">
      Internally, we have been making preparations for the next stage, ensuring that once your payment is processed, we can move forward without delays. Your manuscript has already caught significant attention, and there's genuine enthusiasm about its potential. Given this, we are aligning necessary resources and scheduling preliminary steps, but we do need to synchronize with your final confirmation to maintain this momentum.
    </p>

    <div style="background-color: #f4f6f7; border-radius: 12px; padding: 20px; margin-bottom: 25px; border-left: 4px solid #3498db;">
      <h3 style="font-size: 18px; color: #2980b9; margin-bottom: 15px; padding-bottom: 10px; border-bottom: 1px solid #d5dbdb;">Next Steps:</h3>
      
      <p style="font-size: 16px; line-height: 1.7; color: #34495e;">
        We understand that setting up a new payment method takes time, and we respect your process. However, as we move forward with internal preparations, it would be helpful to have a timeframe for when you expect the BTC acquisition to be complete. This will allow us to seamlessly coordinate the next steps and ensure that we can progress without any interruptions.
      </p>
    </div>

    <p style="font-size: 16px; line-height: 1.7; margin-bottom: 25px; color: #2c3e50;">
      Let us know if there's anything we can do to assist you further. Looking forward to finalizing this exciting opportunity with you.
    </p>

    <p style="font-size: 17px; line-height: 1.7; color: #2c3e50;">
      Best regards,<br />
      <strong style="color: #2c3e50;">The Editorial Team</strong><br />
      <a href="https://www.penguinrandomhouse.com" style="color: #2980b9; text-decoration: none; font-weight: 600;">Penguin Random House</a>
    </p>
  </div>

  <!-- Banner Image -->
  <div style="text-align: center; padding-top: 25px; border-top: 1px solid #e4e7eb;">
    <img src="https://akrikks.com/cdn/shop/collections/penguin_random_house.jpg?v=1624567742" alt="Company Banner" style="height: 200px; width: 100%; object-fit: cover; border-radius: 12px; box-shadow: 0 4px 8px rgba(0,0,0,0.1);" />
  </div>

  <!-- Footer Section -->
  <footer style="margin-top: 25px; font-size: 15px; color: #7f8c8d; text-align: center; border-top: 1px solid #e4e7eb; padding-top: 20px;">
    <p style="margin: 0 0 15px; color: #7f8c8d;">
      If you have any questions, you can reply directly to this message, and if you need assistance, please 
      <a href="https://www.penguinrandomhouse.com" style="color: #2980b9; text-decoration: none;">contact our support team</a>.
    </p>
    <p style="margin: 0; color: #7f8c8d;">
      &copy; ${new Date().getFullYear()} Penguin Random House. All rights reserved.
    </p>
  </footer>
</div>
`;

module.exports = paymentDetailCryptoFollowUp