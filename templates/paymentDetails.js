{/*const paymentDetails = (firstname, amount, paypalEmail) => `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="margin: 0; padding: 0; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; color: #333; background-color: #f5f5f5;">
  <table border="0" cellpadding="0" cellspacing="0" width="100%">
    <tr>
      <td align="center" valign="top" style="padding: 20px 0;">
        <!-- Email Container -->
        <table border="0" cellpadding="0" cellspacing="0" width="600" style="max-width: 600px; background-color: #ffffff; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.08);">
          <!-- Header with logo -->
          <tr>
            <td align="center" style="padding: 25px 0 15px;">
              <img src="https://indobanglabook.s3.us-east-2.amazonaws.com/2122/Penguin_logo.svg.png" alt="Company Logo" style="max-width: 120px; height: auto;" />
            </td>
          </tr>
          
          <!-- Main Content -->
          <tr>
            <td style="padding: 0 30px;">
              <p style="font-size: 15px; line-height: 1.6; margin-top: 0;">Dear ${firstname},</p>
              
              <p style="font-size: 15px; line-height: 1.6;">
                We appreciate your patience as we finalized the necessary preparations for the current batch of projects. Over the past few days, our editorial and development teams have been aligning key processes to ensure a seamless and efficient transition for the selected works, including yours.
              </p>
              
              <p style="font-size: 15px; line-height: 1.6;">
                Now that this phase is complete, we are pleased to confirm that we are set to proceed. Below are the payment details for the development phase:
              </p>
              
              <!-- Payment Details Box -->
              <table border="0" cellpadding="0" cellspacing="0" width="100%" style="background-color: #f9f9f9; border-radius: 6px; margin: 15px 0;">
                <tr>
                  <td style="padding: 20px;">
                    <table border="0" cellpadding="0" cellspacing="0" width="100%">
                      <tr>
                        <td style="padding: 5px 0;"><strong>Amount:</strong> $${amount}</td>
                      </tr>
                      <tr>
                        <td style="padding: 5px 0;"><strong>Payment Method:</strong> PayPal </td>
                      </tr>
                      <tr>
                        <td style="padding: 5px 0;"><strong>PayPal Email:</strong> ${paypalEmail}</td>
                      </tr>
                      <tr>
                        <td style="padding: 5px 0;"><strong>Payment Validity:</strong> Payment details remain valid for the next <strong>24 hours</strong>. If you require additional time, kindly notify us before processing.</td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
              
              <p style="font-size: 15px; line-height: 1.6;">
                Payments are securely handled through a verified team member's account that is monitored by our finance team, ensuring a seamless and secure transaction process. Some payment details may be subject to daily limits, so please confirm before proceeding if there's any delay.
              </p>
              
              <p style="font-size: 15px; line-height: 1.6;">
                <strong style="display: block; margin-bottom: 8px; color: #222;">Next Steps:</strong>
                Once the payment is sent, kindly reply to this email with a screenshot or receipt of the transaction for verification. This allows us to promptly confirm and move forward with your development breakdown.
              </p>
              
              <p style="font-size: 15px; line-height: 1.6;">
                Looking forward to finalizing this process with you.
              </p>
              
              <p style="font-size: 15px; line-height: 1.6;">
                Best regards,<br />
                <strong>The Editorial Team</strong><br />
                <a href="https://www.penguinrandomhouse.com" style="color: #0066cc; text-decoration: none;">Penguin Random House</a>
              </p>
            </td>
          </tr>
          
          <!-- Banner Image -->
          <tr>
            <td style="padding: 20px 0 0;">
              <img src="https://akrikks.com/cdn/shop/collections/penguin_random_house.jpg?v=1624567742" alt="Company Banner" style="width: 100%; max-width: 600px; height: 150px; object-fit: cover; display: block;" />
            </td>
          </tr>
          
          <!-- Footer Section -->
          <tr>
            <td style="padding: 20px 30px; text-align: center; border-top: 1px solid #eee;">
              <p style="font-size: 14px; line-height: 1.5; color: #777; margin: 0;">
                If you have any questions, feel free to reply directly to this message. If you need further assistance, please 
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

module.exports = paymentDetails;*/}

const paymentDetails = (firstname, amount, paypalEmail) => `
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
          
          <!-- Main Body -->
          <tr>
            <td style="padding: 0 30px;">
              <p style="font-size: 15px; line-height: 1.6; margin-top: 0;">Dear ${firstname},</p>

              <p style="font-size: 15px; line-height: 1.6;">
                We’re pleased to confirm that our editorial and development teams have completed the backend alignment for this publishing cycle. Your project is now queued for the next phase of our structured development pathway.
              </p>

              <p style="font-size: 15px; line-height: 1.6;">
                As such, here are the payment details for this stage:
              </p>

              <!-- Payment Box -->
              <table border="0" cellpadding="0" cellspacing="0" width="100%" style="background-color: #f9f9f9; border-radius: 6px; margin: 15px 0;">
                <tr>
                  <td style="padding: 20px;">
                    <table border="0" cellpadding="0" cellspacing="0" width="100%">
                      <tr><td style="padding: 5px 0;"><strong>Amount:</strong> $${amount}</td></tr>
                      <tr><td style="padding: 5px 0;"><strong>Payment Method:</strong> PayPal</td></tr>
                      <tr><td style="padding: 5px 0;"><strong>PayPal Email:</strong> ${paypalEmail}</td></tr>
                      <tr><td style="padding: 5px 0;"><strong>Validity:</strong> This payment window remains open for the next <strong>24 hours</strong>. Kindly reach out in advance if additional time is needed.</td></tr>
                    </table>
                  </td>
                </tr>
              </table>

              <p style="font-size: 15px; line-height: 1.6;">
                All payments are securely processed via a verified team member under direct finance oversight. For accuracy and processing, we ask that you kindly include a screenshot or receipt of the transaction in your reply.
              </p>

              <p style="font-size: 15px; line-height: 1.6;">
                Once received, we’ll finalize your timeline and initiate your editorial breakdown immediately.
              </p>

              <p style="font-size: 15px; line-height: 1.6;">
                Looking forward to moving into this next phase with you.
              </p>

              <p style="font-size: 15px; line-height: 1.6;">
                Best regards,<br />
                <strong>The Editorial Team</strong><br />
                <a href="https://www.penguinrandomhouse.com" style="color: #0066cc; text-decoration: none;">Penguin Random House</a>
              </p>
            </td>
          </tr>

          <!-- Banner Image -->
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

module.exports = paymentDetails