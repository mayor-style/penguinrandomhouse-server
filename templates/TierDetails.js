const TierDetailsResponse = (writerName) => `
<div style="font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; color: #333; padding: 20px; max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 8px;">
  <!-- Header -->
  <div style="text-align: center; padding-bottom: 20px;">
    <img src="https://indobanglabook.s3.us-east-2.amazonaws.com/2122/Penguin_logo.svg.png" alt="Company Logo" style="max-width: 120px; height: auto;" />
  </div>

  <!-- Main Content -->
  <p style="font-size: 16px; line-height: 1.6;">Hi ${writerName},</p>

  <p style="font-size: 14px; line-height: 1.6;">
    Thank you for your interest in exploring our submission tiers! I’m glad you’re keen to understand how each option can help your project stand out. Here’s a closer look at what each tier offers:
  </p>

  <h3 style="font-size: 16px; color: #0066cc; margin-bottom: 10px;">Basic Tier ($50)</h3>
  <ul style="font-size: 14px; line-height: 1.6; list-style-type: disc; margin-left: 20px;">
    <li><strong>Initial Consultations:</strong> Gain insights into your story’s market potential and how it fits with industry standards.</li>
    <li><strong>Strategic Planning:</strong> Align your project’s vision with a clear roadmap to maximize its appeal.</li>
    <li><strong>Preliminary Coordination:</strong> Work closely with the editorial team to ensure your creative direction is on point.</li>
  </ul>
  <p style="font-size: 14px; line-height: 1.6;">
    <strong>Example:</strong> A writer who submitted a poignant family drama chose the Basic Tier. Our team provided detailed feedback on their story’s emotional depth and character arcs, helping them refine their narrative to better connect with audiences and potential producers. We also connected them with networking opportunities that could lead to future collaborations.
  </p>

  <h3 style="font-size: 16px; color: #0066cc; margin-bottom: 10px;">Standard Tier ($100)</h3>
  <ul style="font-size: 14px; line-height: 1.6; list-style-type: disc; margin-left: 20px;">
    <li><strong>Everything in the Basic Tier, plus:</strong></li>
    <li><strong>Additional Editorial Support:</strong> In-depth feedback on your story’s pitch, tone, and marketability.</li>
    <li><strong>Personalized Recommendations:</strong> Tailored suggestions to enhance your project’s commercial appeal.</li>
    <li><strong>Pre-Production Resources:</strong> Essential tools and resources to prepare your project for adaptation.</li>
  </ul>
  <p style="font-size: 14px; line-height: 1.6;">
    <strong>Example:</strong> A mid-tier client with a gripping mystery thriller submitted their work. We helped refine their plot structure and pacing, offering insights on how to build suspense and engage readers from the first page. This enhanced their project’s market fit, leading to a deeper dialogue with producers who were impressed by its potential.
  </p>

  <h3 style="font-size: 16px; color: #0066cc; margin-bottom: 10px;">Premium Tier ($200)</h3>
  <ul style="font-size: 14px; line-height: 1.6; list-style-type: disc; margin-left: 20px;">
    <li><strong>Everything in the Standard Tier, plus:</strong></li>
    <li><strong>Priority Handling:</strong> Your project moves to the front of the line, receiving expedited pre-production timelines.</li>
    <li><strong>Tailored Advice and Recommendations:</strong> Strategic guidance to boost your project’s commercial viability and market appeal.</li>
  </ul>
  <p style="font-size: 14px; line-height: 1.6;">
    <strong>Example:</strong> A writer with a heartfelt romance novel chose the Premium Tier. They received fast-tracked feedback and specific recommendations for crafting a more emotionally resonant story. This not only helped them secure attention at a key industry event but also opened doors to potential film adaptation discussions with major producers.
  </p>

  <p style="font-size: 14px; line-height: 1.6;">
    Each tier offers a different level of support, tailored to your specific needs. The goal is to help you bring your story to life in the most compelling way while positioning it for the attention it deserves.
  </p>

  <p style="font-size: 14px; line-height: 1.6;">
    If you’re ready to proceed, let me know, and I’ll send over the contract agreement for you to review and finalize. Once finalized, we can begin the exciting next steps of your journey!
  </p>

  <p style="font-size: 14px; line-height: 1.6;">
    If you have any questions or need further clarification, please don’t hesitate to reach out. I’m here to support you every step of the way!
  </p>

  <!-- Footer Section -->
  <footer style="margin-top: 30px; font-size: 12px; color: #777; text-align: center; border-top: 1px solid #ddd; padding-top: 10px;">
    <p style="font-size: 12px; color: #777;">
      Feel free to reply to this email with any questions or concerns. We’re here to assist you every step of the way!
    </p>
    <p>&copy; ${new Date().getFullYear()} Penguin Random House. All rights reserved.</p>
  </footer>
</div>
`;

module.exports = TierDetailsResponse;
