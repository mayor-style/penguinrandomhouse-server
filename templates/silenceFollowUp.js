const silenceFollowUpTemplate = (firstname, bookTitle, senderName = "James") => `
<div style="font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; color: #333; padding: 20px; max-width: 600px; margin: 0 auto; background-color: #f9f9f9; border-radius: 8px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">

  <!-- Header -->
  <div style="text-align: center; padding: 30px 20px;">
    <img src="https://d3ialxc06lvqvq.cloudfront.net/wp-content/uploads/2023/04/27022218/macmillan-logo-red-1-287x64.png" alt="Macmillan Publishers Logo" style="max-width: 200px;" />
  </div>

  <!-- Main Content -->
  <div style="background-color: #fff; padding: 30px; border-radius: 6px;">

    <p style="font-size: 15px;">Hi ${firstname},</p>

    <p style="font-size: 14px; line-height: 1.6;">
      We’ve seen it before...someone takes the leap, submits their work, and then… silence. Not out of apathy. Out of sheer weight. The kind only writers know.
    </p>

    <p style="font-size: 14px; line-height: 1.6;">
      Maybe it was nerves. Maybe the breakdown hit too close to something real. Maybe life just threw a louder crisis your way. Whatever it was, we get it. We’ve been on both sides of this war.
    </p>

    <p style="font-size: 14px; line-height: 1.6;">
      That’s why we don’t chase. But we do check in—quietly—on the ones who nearly crossed over. Especially when the story is strong. And <em>"${bookTitle}"</em> was.
    </p>

    <p style="font-size: 14px; line-height: 1.6;">
      You’re not the only one who flinched. Some of the fiercest writers we’ve worked with? Vanished for weeks. Then came back sharper. Hungrier. Wiser. It’s not about being ready. It’s about whether the silence is regret... or retreat.
    </p>

    <p style="font-size: 14px; line-height: 1.6;">
      Either way: doors for this cycle close June 11. If you're still in the fight... even halfway...just reply. You don’t owe us an essay. A single line will do.
    </p>

    <p style="font-size: 14px; line-height: 1.6;">
      But if this silence is permanent, that’s okay too. At least you made it far enough to get noticed. Most never even load the rifle.
    </p>

    <!-- Signature -->
    <div style="margin-top: 40px; padding-top: 20px; border-top: 1px solid #eaeaea;">
      <p style="font-size: 15px; margin: 0;">In the trenches,</p>
      <p style="font-size: 15px; margin: 5px 0 0;"><strong>${senderName}</strong><br/>Macmillan Editorial Development Team</p>
    </div>

  </div>

  <!-- Footer -->
  <div style="padding: 25px; font-size: 12px; color: #777; text-align: center; border-top: 1px solid #eaeaea; background-color: #fafafa;">
    <img src="https://d3ialxc06lvqvq.cloudfront.net/wp-content/uploads/2023/04/27022218/macmillan-logo-red-1-287x64.png" alt="Macmillan Logo" style="max-width: 120px;" />
    <p style="margin-top: 15px;">Reply directly to this email with any questions.</p>
    <p>&copy; ${new Date().getFullYear()} Macmillan Publishers. All rights reserved.</p>
  </div>

</div>
`;

module.exports = silenceFollowUpTemplate;
