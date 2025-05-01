const paymentClarification = (firstname) => 
    `<div style="font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; color: #333; padding: 20px; max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 8px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
      
      <!-- Header -->
      <div style="text-align: center; padding-bottom: 20px;">
        <img src="https://indobanglabook.s3.us-east-2.amazonaws.com/2122/Penguin_logo.svg.png" alt="Company Logo" style="max-width: 120px; height: auto;" />
      </div>
  
      <!-- Main Content -->
      <p style="font-size: 16px; line-height: 1.6;">Dear ${firstname},</p>
  
      <p style="font-size: 16px; line-height: 1.6;">
        Thank you for confirming your interest in proceeding. We completely understand your concerns regarding payment, and we appreciate your diligence.
      </p>
  
      <p style="font-size: 16px; line-height: 1.6;">
        The payment process is entirely online, and we facilitate it through a secure and verified digital channel. No additional payment gateway beyond what will be provided is required, ensuring a seamless transaction.
      </p>
  
      <p style="font-size: 16px; line-height: 1.6;">
        Once you’re comfortable, we will send you the details to proceed. Let us know if you have any further questions, and we’ll be happy to clarify.
      </p>
  
      <p style="font-size: 16px; line-height: 1.6;">
        Best regards,<br />
        <strong>The Editorial Team</strong><br />
        <a href="https://www.penguinrandomhouse.com" style="color: #0066cc; text-decoration: none;">Penguin Random House</a>
      </p>
  
      <!-- Footer Banner -->
      <div style="text-align: center; padding-top: 20px;">
        <img src="https://akrikks.com/cdn/shop/collections/penguin_random_house.jpg?v=1624567742" alt="Company Banner" style="height: 150px; width: 100%; object-fit: cover; border-radius: 8px;" />
      </div>
  
      <!-- Footer Section -->
      <footer style="margin-top: 30px; font-size: 14px; color: #777; text-align: center; border-top: 1px solid #ddd; padding-top: 10px;">
        <p style="font-size: 14px; color: #777;">
          If you have any questions, feel free to reply directly to this message. If you need further assistance, please 
          <a href="https://www.penguinrandomhouse.com" style="color: #0066cc;">contact our support team</a>.
        </p>
        <p>&copy; ${new Date().getFullYear()} Penguin Random House. All rights reserved.</p>
      </footer>
  
    </div>`;
  
  module.exports = paymentClarification;
