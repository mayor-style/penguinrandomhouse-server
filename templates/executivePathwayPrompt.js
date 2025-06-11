const executivePathwayPrompt = (firstname, bookTitle) => ` 
<div style="font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; color: #333; padding: 20px; max-width: 600px; margin: 0 auto; background-color: #f9f9f9; border-radius: 8px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">

  <!-- Header -->
  <div style="text-align: center; padding: 30px 20px; border-top-left-radius: 8px; border-top-right-radius: 8px;">
    <img src="https://d3ialxc06lvqvq.cloudfront.net/wp-content/uploads/2023/04/27022218/macmillan-logo-red-1-287x64.png" alt="Macmillan Publishers Logo" style="max-width: 200px; height: auto;" />
  </div>

  <!-- Main Content -->
  <div style="background-color: #fff; padding: 30px; border-radius: 6px; margin-bottom: 20px;">

    <p style="font-size: 16px; line-height: 1.6; margin-top: 0;">Hi ${firstname},</p>

    <p style="font-size: 15px; line-height: 1.6;">
      Reading between your lines, it seems you’re leaning toward the <strong>Executive Review Pathway</strong>...and that makes sense. Not just because it’s the most selective, but because some manuscripts don’t just need polish. They need infrastructure. Strategy. Pressure-tested framing.
    </p>

    <p style="font-size: 15px; line-height: 1.6;">
      Before we initiate alignment on our end, just give us a quick confirmation that <strong>Executive</strong> is indeed your chosen path. No formality, no friction. Just a short nod so we can finalize your editorial pairing and forward your activation details.
    </p>

    <p style="font-size: 15px; line-height: 1.6;">
      Once we get that, we’ll unlock the sequence. Timing matters on our end—but so does clarity.
    </p>

    <p style="font-size: 15px; line-height: 1.6;">
      Looking forward,
    </p>

    <!-- Signature -->
    <div style="margin-top: 40px; padding-top: 20px; border-top: 1px solid #eaeaea;">
      <p style="font-size: 16px; line-height: 1.6; margin: 0; color: #444;">The Adaptation Unit</p>
      <p style="font-size: 14px; line-height: 1.6; margin: 5px 0 0; color: #666;">Macmillan Publishers</p>
    </div>
  </div>

  <!-- Footer -->
  <div style="padding: 25px; font-size: 13px; color: #777; text-align: center; border-top: 1px solid #eaeaea; background-color: #fafafa; border-bottom-left-radius: 8px; border-bottom-right-radius: 8px;">
    <div style="margin-bottom: 15px;">
      <img src="https://d3ialxc06lvqvq.cloudfront.net/wp-content/uploads/2023/04/27022218/macmillan-logo-red-1-287x64.png" alt="Macmillan Publishers Logo" style="max-width: 120px; height: auto;" />
    </div>
    <p style="margin-bottom: 15px;">You can reply directly to this email with any questions. Our team is here to help.</p>
    <p style="margin: 0;">&copy; ${new Date().getFullYear()} Macmillan Publishers LLC. All rights reserved.</p>
  </div>

</div>
`;

module.exports = executivePathwayPrompt;
