{/*const pathwayConfirmation = (firstname, bookTitle) => 
    `<div style="font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; color: #333; padding: 20px; max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 8px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
      
      <!-- Header -->
      <div style="text-align: center; padding-bottom: 20px;">
        <img src="https://indobanglabook.s3.us-east-2.amazonaws.com/2122/Penguin_logo.svg.png" alt="Company Logo" style="max-width: 120px; height: auto;" />
      </div>
  
      <!-- Main Content -->
      <p style="font-size: 16px; line-height: 1.6;">Dear ${firstname},</p>
  
      <p style="font-size: 16px; line-height: 1.6;">
        Thank you for confirming your interest in advancing to the next phase of development for your manuscript, 
        <strong>"${bookTitle}"</strong>. We’re excited to guide you through this process and position your project for the best adaptation opportunities.
      </p>
  
      <p style="font-size: 16px; line-height: 1.6;">
        To proceed, we kindly ask you to confirm your <strong>preferred development pathway</strong>. This will help us align editorial and production resources accordingly.
      </p>
  
      <div style="background-color: #f8f8f8; padding: 15px; border-radius: 8px; margin: 20px 0;">
        <p style="font-size: 16px; font-weight: bold; margin: 0;">Available Development Pathways:</p>
        <ul style="font-size: 16px; line-height: 1.6; list-style-type: disc; margin-left: 20px; padding-left: 0;">
          <li><strong>Development Pathway – $50</strong> → Editorial & production consultations, project assessment.</li>
          <li><strong>Industry Alignment – $100</strong> → Enhanced pre-production setup, strategic market positioning.</li>
          <li><strong>Expedited Adaptation – $200</strong> → Priority review, tailored recommendations, and direct industry pitching.</li>
        </ul>
      </div>
  
      <p style="font-size: 16px; line-height: 1.6;">
        Please reply with your chosen pathway at your earliest convenience. Once confirmed, we will provide the next steps, including necessary documentation and processing details.
      </p>
  
      <p style="font-size: 16px; line-height: 1.6;">
        We look forward to working with you!
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
  
  module.exports = pathwayConfirmation;
  */}

  const pathwayConfirmation = (firstname, bookTitle) =>
    `
  <div style="font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; color: #333; padding: 20px; max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 8px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
  
  <!-- Header -->
  <div style="text-align: center; padding-bottom: 20px;">
    <img src="https://indobanglabook.s3.us-east-2.amazonaws.com/2122/Penguin_logo.svg.png" alt="Company Logo" style="max-width: 120px; height: auto;" />
  </div>

  <!-- Main Content -->
  <p style="font-size: 16px; line-height: 1.6;">Dear ${firstname},</p>

  <p style="font-size: 16px; line-height: 1.6;">
    Thank you for confirming your interest in advancing the development of your manuscript, <strong>"${bookTitle}"</strong>. We are thrilled to assist you in this transformative stage, where your work will gain the exposure and polish it deserves.
  </p>

  <p style="font-size: 16px; line-height: 1.6;">
    We believe in tailoring each journey to match the unique goals of our authors, and we have structured our development pathways to ensure your success.
  </p>

  <p style="font-size: 16px; font-weight: bold; margin-top: 20px;">Here’s where the next step in your author journey awaits:</p>

  <div style="background-color: #f8f8f8; padding: 15px; border-radius: 8px; margin: 20px 0;">
    <p style="font-size: 16px; font-weight: bold; margin: 0;">Development Pathways:</p>
    <ul style="font-size: 16px; line-height: 1.6; list-style-type: disc; margin-left: 20px; padding-left: 0;">
      <li><strong>Development Pathway – $50</strong> → Editorial & production consultations to fine-tune your manuscript. A strong foundation for your future success.</li>
      <li><strong>Industry Alignment – $100</strong> → A more strategic approach. Pre-production setup and market positioning to ensure your project resonates in the competitive landscape.</li>
      <li><strong>Expedited Adaptation – $200</strong> → Priority review, customized recommendations, and direct industry pitching. If you're ready for accelerated success, this is the pathway to take.</li>
    </ul>
  </div>

  <p style="font-size: 16px; line-height: 1.6;">
    <strong>Why Choose Now?</strong><br />
    Each pathway is designed with your long-term success in mind, and availability is limited to maintain the quality of attention each manuscript deserves. We want you to succeed, and this is your chance to take the leap.
  </p>

  <p style="font-size: 16px; line-height: 1.6;">
    <strong>What’s Next?</strong><br />
    Once you confirm your chosen pathway, we’ll provide the next steps and necessary documentation to kickstart the process immediately. Your success is our top priority, and we are eager to guide you every step of the way.
  </p>

  <p style="font-size: 16px; line-height: 1.6;">
    Please reply with your preferred pathway at your earliest convenience.
  </p>

  <p style="font-size: 16px; line-height: 1.6;">
    Looking forward to this exciting next phase in your publishing journey.
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
      If you have any questions, feel free to reply directly to this message. Or, <a href="https://www.penguinrandomhouse.com" style="color: #0066cc;">contact our support team</a> for assistance.
    </p>
    <p>&copy; ${new Date().getFullYear()} Penguin Random House. All rights reserved.</p>
  </footer>

</div>
`