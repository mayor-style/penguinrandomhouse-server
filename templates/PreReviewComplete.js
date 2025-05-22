
const PrereviewCompleted = (firstname, bookTitle) =>
`<div style="font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; color: #333; max-width: 650px; margin: 0 auto; background-color: #fafafa; border-radius: 8px; padding: 0; box-shadow: 0 2px 8px rgba(0,0,0,0.05);">

  <!-- Header -->
  <div style="background-color: #000000; text-align: center; padding: 30px 20px; border-top-left-radius: 8px; border-top-right-radius: 8px;">
    <img src="https://d3ialxc06lvqvq.cloudfront.net/wp-content/uploads/2023/04/27022218/macmillan-logo-red-1-287x64.png" alt="Macmillan Publishers Logo" style="max-width: 130px; height: auto; background-color:##333333; padding:7px; border-radius:6px; " />
  </div>

  <!-- Highlight Banner -->
  <div style="background-color: #000000; color: white; text-align: center; padding: 15px 20px;">
    <h1 style="margin: 0; font-size: 22px; font-weight: 400; letter-spacing: 0.5px;">Internal Editorial Note</h1>
  </div>

  <!-- Content -->
  <div style="padding: 40px; background-color: #ffffff;">
    <p style="font-size: 16px; line-height: 1.6; margin-bottom: 25px; color: #444;">Dear ${firstname},</p>

    <p style="font-size: 16px; line-height: 1.6; margin-bottom: 25px; color: #444;">
      Following the internal shortlisting of <strong style="font-style: italic;">"${bookTitle}"</strong>, one of our senior editorial consultants shared a quiet observation that we felt compelled to pass along.
    </p>

    <div style="background-color: #f8f8f8; border-left: 3px solid #000000; padding: 20px 25px; border-radius: 6px; margin: 25px 0;">
      <p style="font-size: 15px; font-style: italic; color: #555; margin: 0;">
        “There’s something in the tone, in the undercurrent. It reads like it wants to go further than print. There's instinctive movement in the way the story breathes. Worth watching.”
      </p>
    </div>

    <p style="font-size: 16px; line-height: 1.6; color: #444; margin-bottom: 25px;">
      These are the moments we pay attention to... when a manuscript organically generates internal conversation without being prompted. It doesn't happen often. When it does, it usually means there's a deeper layer worth uncovering.
    </p>

    <p style="font-size: 16px; line-height: 1.6; color: #444; margin-bottom: 25px;">
      In your case, what emerged wasn’t just technical merit — it was a certain *instinctive resonance*, something we classify under “Discovery-Grade Potential.” This label is rare, informal, and typically reserved for manuscripts that trigger spontaneous cross-team interest.
    </p>

    <p style="font-size: 16px; line-height: 1.6; color: #444; margin-bottom: 25px;">
      We’re preparing the next steps discreetly. Please continue to monitor your inbox over the next few days for further instructions. This is a timed, limited-phase operation — early momentum often defines long-term opportunity.
    </p>

    <p style="font-size: 16px; line-height: 1.6; color: #444;">
      Thank you again for trusting us with your work. We'll be in touch shortly.
    </p>

    <div style="margin-top: 40px; padding-top: 20px; border-top: 1px solid #eaeaea;">
      <p style="font-size: 16px; line-height: 1.6; margin: 0; color: #444;">Warm regards,</p>
      <p style="font-size: 16px; line-height: 1.6; margin: 5px 0 0; color: #000; font-weight: 500;">Editorial Liaison<br/>
      <span style="font-size: 14px; color: #666; font-weight: normal;">Macmillan Internal Review</span></p>
    </div>
  </div>

  <!-- Footer -->
  <div style="padding: 25px; font-size: 13px; color: #777; text-align: center; border-top: 1px solid #eaeaea; background-color: #fafafa; border-bottom-left-radius: 8px; border-bottom-right-radius: 8px;">
    <p style="margin-bottom: 15px;">You can reply directly to this email with any questions. Our team is here to help.</p>
    <p style="margin: 0;">&copy; ${new Date().getFullYear()} Macmillan Publishers LLC. All rights reserved.</p>
  </div>
</div>
`
module.exports = PrereviewCompleted;
