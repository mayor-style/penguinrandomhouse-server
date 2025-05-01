{/*const paymentInstructions = (firstname, bookTitle, chosenPathway) => `
<div style="font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; color: #333; padding: 20px; max-width: 600px; margin: 0 auto; background-color: #f9f9f9; border-radius: 8px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
  <!-- Header with logo -->
  <div style="text-align: center; padding: 20px 0; background-color: #fff; border-radius: 8px 8px 0 0; margin-bottom: 25px; border-bottom: 2px solid #f0f0f0;">
    <img src="https://indobanglabook.s3.us-east-2.amazonaws.com/2122/Penguin_logo.svg.png" alt="Penguin Random House" style="max-width: 120px; height: auto;" />
  </div>

  <!-- Main Content Container -->
  <div style="background-color: #fff; padding: 30px; border-radius: 6px; margin-bottom: 20px;">
    <!-- Personalized Greeting -->
    <p style="font-size: 16px; line-height: 1.6; margin-top: 0;">Dear ${firstname},</p>

    <!-- Manuscript Information Box -->
    <div style="background-color: #f2f7fc; border-left: 4px solid #0066cc; padding: 15px; margin: 20px 0; border-radius: 0 6px 6px 0;">
      <p style="font-size: 15px; line-height: 1.5; margin: 0;">
        <strong>Manuscript:</strong> "${bookTitle}"<br>
        <strong>Selected Pathway:</strong> "${chosenPathway}"
      </p>
    </div>

    <p style="font-size: 15px; line-height: 1.6;">
      Thank you for confirming your selection. As we proceed to the next phase, we are aligning key aspects of your manuscript development.
    </p>

    <p style="font-size: 15px; line-height: 1.6; margin-bottom: 10px;">
      At this stage, we will proceed with:
    </p>
    
    <!-- Process Steps - Styled as Cards -->
    <div style="margin-bottom: 20px;">
      <div style="background-color: #fff; border: 1px solid #e0e0e0; border-radius: 6px; padding: 15px; margin-bottom: 10px;">
        <p style="font-size: 15px; line-height: 1.5; margin: 0;">
          <strong style="color: #0066cc;">1. Aligning your manuscript with the editorial team</strong><br>
          <span style="color: #555;">Ensuring the right specialists are assigned for your project's needs.</span>
        </p>
      </div>
      
      <div style="background-color: #fff; border: 1px solid #e0e0e0; border-radius: 6px; padding: 15px; margin-bottom: 10px;">
        <p style="font-size: 15px; line-height: 1.5; margin: 0;">
          <strong style="color: #0066cc;">2. Initiating the structured development framework</strong><br>
          <span style="color: #555;">Establishing the workflow tailored to your chosen pathway.</span>
        </p>
      </div>
      
      <div style="background-color: #fff; border: 1px solid #e0e0e0; border-radius: 6px; padding: 15px;">
        <p style="font-size: 15px; line-height: 1.5; margin: 0;">
          <strong style="color: #0066cc;">3. Finalizing the documentation and scheduling</strong><br>
          <span style="color: #555;">Setting up the necessary agreements and projected timelines for the next phases.</span>
        </p>
      </div>
    </div>

    <!-- Next Steps Section -->
    <div style="background-color: #fffdf2; border: 1px solid #f0e9cc; border-radius: 6px; padding: 20px; margin: 25px 0;">
      <h3 style="color: #5c4c00; margin-top: 0; font-size: 16px;">Next Steps:</h3>
      <p style="font-size: 15px; line-height: 1.6; color: #5a5a5a; margin-bottom: 0;">
        To move forward, please confirm your readiness to process the development fee. Once confirmed, we will send over the payment details, including the designated team member handling the transaction.
      </p>
    </div>

    <p style="font-size: 15px; line-height: 1.6;">
      Given the structured nature of our transactions and high processing volumes, each payment window is time-sensitive, ensuring smooth alignment with the development schedule. Please confirm at your earliest convenience.
    </p>

    <!-- Call to Action Button -->
    <div style="text-align: center; margin: 30px 0;">
      <a href="#confirm-payment" style="display: inline-block; background-color: #0066cc; color: white; padding: 12px 28px; text-decoration: none; border-radius: 4px; font-weight: bold; font-size: 15px;">Confirm Payment Readiness</a>
    </div>

    <p style="font-size: 15px; line-height: 1.6;">
      Looking forward to finalizing this process with you.
    </p>

    <!-- Signature -->
    <div style="margin-top: 30px;">
      <p style="font-size: 15px; line-height: 1.6; margin-bottom: 5px;">
        Best regards,
      </p>
      <p style="font-size: 15px; line-height: 1.6; margin-top: 0;">
        <strong>The Editorial Team</strong><br />
        <a href="https://www.penguinrandomhouse.com" style="color: #0066cc; text-decoration: none;">Penguin Random House</a>
      </p>
    </div>
  </div>

  <!-- Banner Image -->
  <div style="margin: 20px 0; border-radius: 6px; overflow: hidden;">
    <img src="https://akrikks.com/cdn/shop/collections/penguin_random_house.jpg?v=1624567742" alt="Penguin Random House" style="width: 100%; height: auto; display: block;" />
  </div>

  <!-- Footer Section -->
  <footer style="margin-top: 20px; font-size: 13px; color: #777; text-align: center; border-top: 1px solid #ddd; padding-top: 20px;">
    <p style="margin-bottom: 15px;">
      If you have any questions, please <a href="mailto:support@penguinrandomhouse.com" style="color: #0066cc; text-decoration: none;">reply directly to this email</a> or contact our support team.
    </p>
    
    <!-- Social Media Icons -->
    <div style="margin: 15px 0;">
      <a href="https://twitter.com/penguinrandom" style="display: inline-block; margin: 0 8px; color: #555; text-decoration: none;">
        <img src="https://cdn4.iconfinder.com/data/icons/social-media-icons-the-circle-set/48/twitter_circle-512.png" alt="Twitter" style="width: 24px; height: 24px;">
      </a>
      <a href="https://www.facebook.com/PenguinRandomHouse" style="display: inline-block; margin: 0 8px; color: #555; text-decoration: none;">
        <img src="https://cdn4.iconfinder.com/data/icons/social-media-icons-the-circle-set/48/facebook_circle-512.png" alt="Facebook" style="width: 24px; height: 24px;">
      </a>
      <a href="https://www.instagram.com/penguinrandomhouse" style="display: inline-block; margin: 0 8px; color: #555; text-decoration: none;">
        <img src="https://cdn4.iconfinder.com/data/icons/social-media-icons-the-circle-set/48/instagram_circle-512.png" alt="Instagram" style="width: 24px; height: 24px;">
      </a>
    </div>
    
    <p style="color: #999; font-size: 12px;">&copy; ${new Date().getFullYear()} Penguin Random House. All rights reserved.</p>
  </footer>
</div>
`;

module.exports = paymentInstructions;*/}

const paymentInstructions = (firstname, bookTitle, chosenPathway) => `
<div style="font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; color: #333; padding: 20px; max-width: 600px; margin: 0 auto; background-color: #f9f9f9; border-radius: 8px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
  <!-- Header with logo -->
  <div style="text-align: center; padding: 20px 0; background-color: #fff; border-radius: 8px 8px 0 0; margin-bottom: 25px; border-bottom: 2px solid #f0f0f0;">
    <img src="https://indobanglabook.s3.us-east-2.amazonaws.com/2122/Penguin_logo.svg.png" alt="Penguin Random House" style="max-width: 120px; height: auto;" />
  </div>

  <!-- Main Content Container -->
  <div style="background-color: #fff; padding: 30px; border-radius: 6px; margin-bottom: 20px;">
    <!-- Personalized Greeting -->
    <p style="font-size: 16px; line-height: 1.6; margin-top: 0;">Dear ${firstname},</p>

    <!-- Manuscript Information Box -->
    <div style="background-color: #f2f7fc; border-left: 4px solid #0066cc; padding: 15px; margin: 20px 0; border-radius: 0 6px 6px 0;">
      <p style="font-size: 15px; line-height: 1.5; margin: 0;">
        <strong>Manuscript:</strong> "${bookTitle}"<br>
        <strong>Selected Pathway:</strong> "${chosenPathway}"
      </p>
    </div>

    <p style="font-size: 15px; line-height: 1.6;">
      Thank you for confirming your selection. As we proceed to the next phase, we are aligning key aspects of your manuscript development, designed to maximize your success in the publishing world.
    </p>

    <p style="font-size: 15px; line-height: 1.6; margin-bottom: 10px;">
      At this stage, we will proceed with:
    </p>
    
    <!-- Process Steps - Styled as Cards -->
    <div style="margin-bottom: 20px;">
      <div style="background-color: #fff; border: 1px solid #e0e0e0; border-radius: 6px; padding: 15px; margin-bottom: 10px;">
        <p style="font-size: 15px; line-height: 1.5; margin: 0;">
          <strong style="color: #0066cc;">1. Aligning your manuscript with the editorial team</strong><br>
          <span style="color: #555;">Ensuring the right specialists are assigned for your project's needs.</span>
        </p>
      </div>
      
      <div style="background-color: #fff; border: 1px solid #e0e0e0; border-radius: 6px; padding: 15px; margin-bottom: 10px;">
        <p style="font-size: 15px; line-height: 1.5; margin: 0;">
          <strong style="color: #0066cc;">2. Initiating the structured development framework</strong><br>
          <span style="color: #555;">Establishing the workflow tailored to your chosen pathway.</span>
        </p>
      </div>
      
      <div style="background-color: #fff; border: 1px solid #e0e0e0; border-radius: 6px; padding: 15px;">
        <p style="font-size: 15px; line-height: 1.5; margin: 0;">
          <strong style="color: #0066cc;">3. Finalizing the documentation and scheduling</strong><br>
          <span style="color: #555;">Setting up the necessary agreements and projected timelines for the next phases.</span>
        </p>
      </div>
    </div>

    <!-- Next Steps Section -->
    <div style="background-color: #fffdf2; border: 1px solid #f0e9cc; border-radius: 6px; padding: 20px; margin: 25px 0;">
      <h3 style="color: #5c4c00; margin-top: 0; font-size: 16px;">Next Steps:</h3>
      <p style="font-size: 15px; line-height: 1.6; color: #5a5a5a; margin-bottom: 0;">
        To move forward, please confirm your readiness to process the development fee. Once confirmed, we will send over the payment details, including the designated team member handling the transaction.
      </p>
    </div>

    <p style="font-size: 15px; line-height: 1.6;">
      Given the structured nature of our transactions and high processing volumes, each payment window is time-sensitive, ensuring smooth alignment with the development schedule. Please confirm at your earliest convenience.
    </p>

    <!-- Call to Action Button -->
    <div style="text-align: center; margin: 30px 0;">
      <a href="#confirm-payment" style="display: inline-block; background-color: #0066cc; color: white; padding: 12px 28px; text-decoration: none; border-radius: 4px; font-weight: bold; font-size: 15px;">Confirm Payment Readiness</a>
    </div>

    <p style="font-size: 15px; line-height: 1.6;">
      Looking forward to finalizing this process with you.
    </p>

    <!-- Signature -->
    <div style="margin-top: 30px;">
      <p style="font-size: 15px; line-height: 1.6; margin-bottom: 5px;">
        Best regards,
      </p>
      <p style="font-size: 15px; line-height: 1.6; margin-top: 0;">
        <strong>The Editorial Team</strong><br />
        <a href="https://www.penguinrandomhouse.com" style="color: #0066cc; text-decoration: none;">Penguin Random House</a>
      </p>
    </div>
  </div>

  <!-- Banner Image -->
  <div style="margin: 20px 0; border-radius: 6px; overflow: hidden;">
    <img src="https://akrikks.com/cdn/shop/collections/penguin_random_house.jpg?v=1624567742" alt="Penguin Random House" style="width: 100%; height: auto; display: block;" />
  </div>

  <!-- Footer Section -->
  <footer style="margin-top: 20px; font-size: 13px; color: #777; text-align: center; border-top: 1px solid #ddd; padding-top: 20px;">
    <p style="margin-bottom: 15px;">
      If you have any questions, please <a href="mailto:support@penguinrandomhouse.com" style="color: #0066cc; text-decoration: none;">reply directly to this email</a> or contact our support team.
    </p>
    
    <!-- Social Media Icons -->
    <div style="margin: 15px 0;">
      <a href="https://twitter.com/penguinrandom" style="display: inline-block; margin: 0 8px; color: #555; text-decoration: none;">
        <img src="https://cdn4.iconfinder.com/data/icons/social-media-icons-the-circle-set/48/twitter_circle-512.png" alt="Twitter" style="width: 24px; height: 24px;">
      </a>
      <a href="https://www.facebook.com/PenguinRandomHouse" style="display: inline-block; margin: 0 8px; color: #555; text-decoration: none;">
        <img src="https://cdn4.iconfinder.com/data/icons/social-media-icons-the-circle-set/48/facebook_circle-512.png" alt="Facebook" style="width: 24px; height: 24px;">
      </a>
      <a href="https://www.instagram.com/penguinrandomhouse" style="display: inline-block; margin: 0 8px; color: #555; text-decoration: none;">
        <img src="https://cdn4.iconfinder.com/data/icons/social-media-icons-the-circle-set/48/instagram_circle-512.png" alt="Instagram" style="width: 24px; height: 24px;">
      </a>
    </div>
    
    <p style="color: #999; font-size: 12px;">&copy; ${new Date().getFullYear()} Penguin Random House. All rights reserved.</p>
  </footer>
</div>
`