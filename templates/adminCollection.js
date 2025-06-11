const adminSubmissionTemplate = (
  firstname,
  lastname,
  email,
  phone,
  country,
  biography,
  websiteAddress,
  blogAddress,
  twitterHandle,
  everPublishedaBook,
  everRepresentedbyAgent,
  whoReferred,
  bookInspiration,
  bookTitle,
  bookGenre,
  bookWordCount,
  bookEverPublished,
  bookSynopsis,
  viewFileUrl,
  pitch
) => `
<div style="font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; color: #333; max-width: 700px; margin: 0 auto; background-color: #fafafa; border-radius: 8px; padding: 0; box-shadow: 0 2px 10px rgba(0,0,0,0.05);">
  <!-- Header with logo and background -->
  <div style=" text-align: center; padding: 35px 20px; border-top-left-radius: 8px; border-top-right-radius: 8px;">
    <img src="https://d3ialxc06lvqvq.cloudfront.net/wp-content/uploads/2023/04/27022218/macmillan-logo-red-1-287x64.png" alt="Macmillan Publishers Logo" style="max-width: 200px; height: auto;" />
  </div>
  
  <!-- Main Content -->
  <div style="padding: 25px 15px; background-color: #ffffff; border-bottom-left-radius: 8px; border-bottom-right-radius: 8px;">
    <h2 style="font-size: 22px; color: #000000; margin-top: 0; margin-bottom: 30px; text-align: center; font-weight: 500; letter-spacing: 0.3px;">New Book Submission</h2>
    
    <!-- Author Information Section -->
    <div style="margin-bottom: 35px; background-color: #ffffff; border-radius: 6px; box-shadow: 0 1px 3px rgba(0,0,0,0.05);">
      <div style="padding: 15px 10px; border-bottom: 1px solid #f0f0f0; display: flex; align-items: center;">
        <div style="width: 24px; height: 24px; background-color: #000000; border-radius: 50%; margin-right: 12px;"></div>
        <h3 style="font-size: 16px; color: #000000; margin: 0; font-weight: 500;">Author Information</h3>
      </div>
      <div style="padding: 10px;">
        <table style="width: 100%; border-collapse: collapse; font-size: 14px; line-height: 1.6;">
          <tbody>
            <tr>
              <td style="padding: 12px 15px; width: 140px; vertical-align: top; color: #555; font-weight: 500;">Name:</td>
              <td style="padding: 12px 15px; vertical-align: top; color: #333;">${firstname} ${lastname}</td>
            </tr>
            <tr style="background-color: #f9f9f9;">
              <td style="padding: 12px 15px; vertical-align: top; color: #555; font-weight: 500;">Contact:</td>
              <td style="padding: 12px 15px; vertical-align: top; color: #333;">
                <div style="margin-bottom: 5px;">${email}</div>
                <div>${phone}</div>
              </td>
            </tr>
            <tr>
              <td style="padding: 12px 15px; vertical-align: top; color: #555; font-weight: 500;">Country:</td>
              <td style="padding: 12px 15px; vertical-align: top; color: #333;">${country}</td>
            </tr>
            <tr style="background-color: #f9f9f9;">
              <td style="padding: 12px 15px; vertical-align: top; color: #555; font-weight: 500;">Biography:</td>
              <td style="padding: 12px 15px; vertical-align: top; color: #333;">${biography}</td>
            </tr>
            <tr>
              <td style="padding: 12px 15px; vertical-align: top; color: #555; font-weight: 500;">Online Presence:</td>
              <td style="padding: 12px 15px; vertical-align: top; color: #333;">
                ${websiteAddress ? `<div style="margin-bottom: 5px;"><span style="color: #777; font-size: 13px;">Website:</span> <a href="${websiteAddress}" style="color: #000000; text-decoration: none;">${websiteAddress}</a></div>` : ''}
                ${blogAddress ? `<div style="margin-bottom: 5px;"><span style="color: #777; font-size: 13px;">Blog:</span> <a href="${blogAddress}" style="color: #000000; text-decoration: none;">${blogAddress}</a></div>` : ''}
                ${twitterHandle ? `<div><span style="color: #777; font-size: 13px;">Twitter:</span> ${twitterHandle}</div>` : ''}
              </td>
            </tr>
            <tr style="background-color: #f9f9f9;">
              <td style="padding: 12px 15px; vertical-align: top; color: #555; font-weight: 500;">Publication History:</td>
              <td style="padding: 12px 15px; vertical-align: top; color: #333;">
                <div style="margin-bottom: 5px;"><span style="color: #777; font-size: 13px;">Previously Published:</span> ${everPublishedaBook}</div>
                <div><span style="color: #777; font-size: 13px;">Previously Represented:</span> ${everRepresentedbyAgent}</div>
              </td>
            </tr>
            <tr>
              <td style="padding: 12px 15px; vertical-align: top; color: #555; font-weight: 500;">Referral:</td>
              <td style="padding: 12px 15px; vertical-align: top; color: #333;">${whoReferred || 'N/A'}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    
    <!-- Book Information Section -->
    <div style="margin-bottom: 35px; background-color: #ffffff; border-radius: 6px; box-shadow: 0 1px 3px rgba(0,0,0,0.05);">
      <div style="padding: 15px 20px; border-bottom: 1px solid #f0f0f0; display: flex; align-items: center;">
        <div style="width: 24px; height: 24px; background-color: #000000; border-radius: 50%; margin-right: 12px;"></div>
        <h3 style="font-size: 16px; color: #000000; margin: 0; font-weight: 500;">Book Details</h3>
      </div>
      <div style="padding: 20px;">
        <table style="width: 100%; border-collapse: collapse; font-size: 14px; line-height: 1.6;">
          <tbody>
            <tr>
              <td style="padding: 12px 15px; width: 140px; vertical-align: top; color: #555; font-weight: 500;">Title:</td>
              <td style="padding: 12px 15px; vertical-align: top; color: #333; font-weight: 500;">${bookTitle}</td>
            </tr>
            <tr style="background-color: #f9f9f9;">
              <td style="padding: 12px 15px; vertical-align: top; color: #555; font-weight: 500;">Genre:</td>
              <td style="padding: 12px 15px; vertical-align: top; color: #333;">${bookGenre}</td>
            </tr>
            <tr>
              <td style="padding: 12px 15px; vertical-align: top; color: #555; font-weight: 500;">Word Count:</td>
              <td style="padding: 12px 15px; vertical-align: top; color: #333;">${bookWordCount}</td>
            </tr>
            <tr style="background-color: #f9f9f9;">
              <td style="padding: 12px 15px; vertical-align: top; color: #555; font-weight: 500;">Publication Status:</td>
              <td style="padding: 12px 15px; vertical-align: top; color: #333;">${bookEverPublished}</td>
            </tr>
            <tr>
              <td style="padding: 12px 15px; vertical-align: top; color: #555; font-weight: 500;">Inspiration:</td>
              <td style="padding: 12px 15px; vertical-align: top; color: #333;">${bookInspiration}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    
    <!-- Synopsis Section -->
    <div style="margin-bottom: 35px; background-color: #ffffff; border-radius: 6px; box-shadow: 0 1px 3px rgba(0,0,0,0.05);">
      <div style="padding: 15px 20px; border-bottom: 1px solid #f0f0f0; display: flex; align-items: center;">
        <div style="width: 24px; height: 24px; background-color: #000000; border-radius: 50%; margin-right: 12px;"></div>
        <h3 style="font-size: 16px; color: #000000; margin: 0; font-weight: 500;">Synopsis</h3>
      </div>
      <div style="padding: 20px;">
        <p style="font-size: 14px; line-height: 1.7; margin: 0; color: #333;">${bookSynopsis}</p>
      </div>
    </div>
    
    <!-- Pitch Section -->
    <div style="margin-bottom: 35px; background-color: #ffffff; border-radius: 6px; box-shadow: 0 1px 3px rgba(0,0,0,0.05);">
      <div style="padding: 15px 20px; border-bottom: 1px solid #f0f0f0; display: flex; align-items: center;">
        <div style="width: 24px; height: 24px; background-color: #000000; border-radius: 50%; margin-right: 12px;"></div>
        <h3 style="font-size: 16px; color: #000000; margin: 0; font-weight: 500;">Pitch</h3>
      </div>
      <div style="padding: 20px;">
        <p style="font-size: 14px; line-height: 1.7; margin: 0; color: #333;">${pitch}</p>
      </div>
    </div>
    
    <!-- Manuscript File -->
    <div style="text-align: center; margin: 35px 0;">
      <a href="${viewFileUrl}" style="display: inline-block; background-color: #000000; color: #ffffff; font-weight: 500; padding: 14px 28px; text-decoration: none; border-radius: 4px; font-size: 15px; letter-spacing: 0.3px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);" target="_blank">View Manuscript</a>
    </div>
    
    <!-- Action Buttons -->
    <div style="display: flex; justify-content: center; gap: 15px; margin: 35px 0 10px;">
      <a href="mailto:${email}?subject=Regarding%20Your%20Book%20Submission:%20${encodeURIComponent(bookTitle)}" style="background-color: #f8f8f8; color: #333; text-decoration: none; padding: 12px 20px; border-radius: 4px; font-size: 14px; font-weight: 500; border: 1px solid #e0e0e0;">Contact Author</a>
      <a href="#" style="background-color: #e8f5e9; color: #2e7d32; text-decoration: none; padding: 12px 20px; border-radius: 4px; font-size: 14px; font-weight: 500; border: 1px solid #c8e6c9;">Add to Review Queue</a>
      <a href="#" style="background-color: #ffebee; color: #c62828; text-decoration: none; padding: 12px 20px; border-radius: 4px; font-size: 14px; font-weight: 500; border: 1px solid #ffcdd2;">Decline</a>
    </div>
  </div>

  <!-- Footer Section -->
  <div style="padding: 25px; font-size: 12px; color: #777; text-align: center; border-top: 1px solid #eaeaea; background-color: #f8f8f8; border-bottom-left-radius: 8px; border-bottom-right-radius: 8px;">
    <p style="margin-bottom: 10px;">This is an automated email. For technical issues, please contact <a href="mailto:tech-support@macmillan.com" style="color: #000000; text-decoration: none; border-bottom: 1px solid #000000; padding-bottom: 1px;">tech support</a>.</p>
    <p style="margin: 0;">&copy; ${new Date().getFullYear()} Macmillan Publishers LLC. All rights reserved.</p>
  </div>
</div>
`;

module.exports = adminSubmissionTemplate;