const paymentRequestTemplate = (firstname, email) => `
<div style="font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; color: #333; padding: 15px; max-width: 600px; margin: 0 auto; background-color: #f9f9f9; border-radius: 8px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">

  <!-- Header -->
  <div style="text-align: center; padding: 20px 15px;">
    <img src="https://d3ialxc06lvqvq.cloudfront.net/wp-content/uploads/2023/04/27022218/macmillan-logo-red-1-287x64.png" alt="Macmillan Publishers Logo" style="max-width: 200px;" />
  </div>

  <!-- Main Content -->
  <div style="background-color: #fff; padding: 20px; border-radius: 6px;">

    <p style="font-size: 16px;">Hi ${firstname},</p>

    <p style="font-size: 15px; line-height: 1.6;">
      That’s a sharp and very valid point... and honestly, it’s the kind of question we only get from serious storytellers.
    </p>

    <p style="font-size: 15px; line-height: 1.6;">
      Many of the writers who move into our development pipeline are already scripting adaptations or in early-stage conversations with producers. During this phase, you retain <strong>full rights</strong>... including film, TV, and all derivative formats. Always. Our role is to elevate the work, not restrict the vision.
    </p>

    <p style="font-size: 15px; line-height: 1.6;">
      This isn’t just about a manuscript. It’s about the years, the grit, the sleepless edits... and giving all that unseen effort the professional scaffolding it deserves.
    </p>

    <p style="font-size: 15px; line-height: 1.6;">
      We’ve all been there:
      <br><br>
      Trying to convince strangers to care in under 200 words.<br>
      Trying to sound vulnerable without sounding weak.<br>
      Trying to stay proud of the thing we made, even when it nearly broke us.
    </p>

    <p style="font-size: 15px; line-height: 1.6;">
      We’re not here to impress gatekeepers. We’re here to outlast them. That’s the energy behind this pathway... and why we’re genuinely excited to help push this story forward.
    </p>

    <!-- Payment Block -->
    <div style="background-color: #fffdf2; border-left: 4px solid #e4c96f; padding: 15px; margin: 20px 0;">
      <p style="font-size: 15px; line-height: 1.6;">
        <strong>To confirm your editorial slot, here are the secure payment details:</strong><br><br>
        Amount: <strong>$557.00</strong><br>
        Payment Method: <strong>PayPal</strong><br>
        PayPal Email: <strong>${email}</strong><br><br>
        <em>Note: Please select the <strong>“Friends and Family”</strong> option when paying via PayPal... this ensures the system reflects your confirmation instantly, which helps us activate your file without delay or processing lag.</em>
      </p>
    </div>

    <p style="font-size: 15px; line-height: 1.6;">
      Once payment is completed, please reply to this email with:
    </p>

    <ul style="font-size: 15px; line-height: 1.6; padding-left: 20px;">
      <li>A screenshot of the PayPal receipt</li>
      <li>Your full name and book title (for tracking)</li>
    </ul>

  <p style="font-size: 15px; line-height: 1.6;">
  We’ll confirm your slot and begin Phase One: editorial briefing, reviewer assignment, and scheduling. For scheduling purposes, we kindly ask that payment is completed within the next <strong>6 hours</strong>, as your editorial slot has now been formally queued and is time-sensitive.
</p>


    <p style="font-size: 15px; line-height: 1.6;">
      This is one of the few stages where you still get to own your story — fully. Let’s make the most of it.
    </p>

    <p style="font-size: 15px; line-height: 1.6;">
      Welcome to the trenches.
    </p>

    <!-- Signature -->
    <div style="margin-top: 40px; padding-top: 20px; border-top: 1px solid #eaeaea;">
      <p style="font-size: 14px; margin: 0;">Warmly,</p>
      <p style="font-size: 14px; margin: 5px 0 0;"><strong>James — Adaptation Lead</strong><br/>Macmillan Editorial Development Team</p>
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


module.exports = paymentRequestTemplate;
