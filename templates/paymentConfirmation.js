const paymentConfirmation = (firstname) => `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
</head>
<body style="margin: 0; padding: 0; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; color: #333; background-color: #f5f5f5;">
  <table border="0" cellpadding="0" cellspacing="0" width="100%">
    <tr>
      <td align="center" valign="top" style="padding: 20px 0;">
        <table border="0" cellpadding="0" cellspacing="0" width="600" style="max-width: 600px; background-color: #ffffff; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.08);">
          
          <!-- Header -->
          <tr>
            <td align="center" style="padding: 25px 0 15px;">
              <img src="https://indobanglabook.s3.us-east-2.amazonaws.com/2122/Penguin_logo.svg.png" alt="Company Logo" style="max-width: 120px; height: auto;" />
            </td>
          </tr>
          
          <!-- Body -->
          <tr>
            <td style="padding: 0 30px;">
              <p style="font-size: 15px; line-height: 1.6; margin-top: 0;">Dear ${firstname},</p>

              <p style="font-size: 15px; line-height: 1.6;">
                Your payment has been successfully received and verified. Welcome officially to the development phase of your project.
              </p>

              <p style="font-size: 15px; line-height: 1.6;">
                From this point forward, your manuscript enters our internal structure where each project is tracked, analyzed, and guided step-by-step through a development sequence tailored to its unique direction and publishing potential.
              </p>

              <p style="font-size: 15px; line-height: 1.6;">
                Within the next 48 hours, you’ll receive your full **Development Blueprint**—an editorial breakdown that outlines the specific areas our team will be addressing, polishing, or elevating to meet publishing standards.
              </p>

              <p style="font-size: 15px; line-height: 1.6;">
                This document will also include your project’s estimated timeline, content phases, and next communication date so that you’re never left guessing.
              </p>

              <p style="font-size: 15px; line-height: 1.6;">
                We’re excited to begin this phase with you.
              </p>

              <p style="font-size: 15px; line-height: 1.6;">
                Best regards,<br />
                <strong>The Editorial Team</strong><br />
                <a href="https://www.penguinrandomhouse.com" style="color: #0066cc; text-decoration: none;">Penguin Random House</a>
              </p>
            </td>
          </tr>

          <!-- Banner -->
          <tr>
            <td style="padding: 20px 0 0;">
              <img src="https://akrikks.com/cdn/shop/collections/penguin_random_house.jpg?v=1624567742" alt="Company Banner" style="width: 100%; max-width: 600px; height: 150px; object-fit: cover; display: block;" />
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="padding: 20px 30px; text-align: center; border-top: 1px solid #eee;">
              <p style="font-size: 14px; line-height: 1.5; color: #777; margin: 0;">
                Questions? Feel free to reply to this message directly or 
                <a href="https://www.penguinrandomhouse.com" style="color: #0066cc;">contact our support team</a>.
              </p>
              <p style="font-size: 14px; margin-top: 10px; color: #777;">&copy; ${new Date().getFullYear()} Penguin Random House. All rights reserved.</p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
`;
