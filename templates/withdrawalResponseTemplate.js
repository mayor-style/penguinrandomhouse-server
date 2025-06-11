const withdrawalResponseTemplate = (firstname, bookTitle, senderName = "James") => `
<div style="font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; color: #333; padding: 20px; max-width: 600px; margin: 0 auto; background-color: #f9f9f9; border-radius: 8px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">

  <!-- Header -->
  <div style="text-align: center; padding: 30px 20px;">
    <img src="https://d3ialxc06lvqvq.cloudfront.net/wp-content/uploads/2023/04/27022218/macmillan-logo-red-1-287x64.png" alt="Macmillan Publishers Logo" style="max-width: 200px;" />
  </div>

  <!-- Main Content -->
  <div style="background-color: #fff; padding: 30px; border-radius: 6px;">

    <p style="font-size: 16px;">Hi ${firstname},</p>

     <p style="font-size: 14px; line-height: 1.6;">
      Totally understood. That kind of gut-check moment after submitting is more common than you’d think...especially for writers with strong instincts.
    </p>

    <p style="font-size: 14px; line-height: 1.6;">
      For clarity: this pipeline is powered by editorial professionals with deep industry ties group that’s worked with and for major publishers...including Macmillan—on early-stage manuscript development. We don’t use that name lightly. The integrity behind this process matters to us, deeply.
    </p>

  <p style="font-size: 14px; line-height: 1.6;">
      That said, your withdrawal request is respected in full. We've archived <strong>"${bookTitle}"</strong> as requested... no further action needed unless you decide to circle back.
    </p>

    <p style="font-size: 14px; line-height: 1.6;">
      No pressure, ever. But if this was a gut reaction and not a firm no, the door’s still open... quietly. We don’t chase writers, but we don’t shut them out either.
    </p>

    <p style="font-size: 14px; line-height: 1.6;">
      Whatever path you take from here, respect for having the courage to submit in the first place. That alone puts you in a rarer circle than you might think.
    </p>

    <!-- Signature -->
    <div style="margin-top: 40px; padding-top: 20px; border-top: 1px solid #eaeaea;">
      <p style="font-size: 15px; margin: 0;">Wishing you clarity and courage,</p>
      <p style="font-size: 15px; margin: 5px 0 0;"><strong>${senderName}</strong><br/>Macmillan Editorial Development Team</p>
    </div>

  </div>

 

</div>
`;
module.exports = withdrawalResponseTemplate;