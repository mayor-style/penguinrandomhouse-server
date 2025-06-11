
const PrereviewCompleted =  (firstname, bookTitle, insightBullets="", emotionalAnchor) => `
<div style="font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; color: #333; max-width: 700px; margin: 0 auto; background-color: #fafafa; border-radius: 8px; padding: 0; box-shadow: 0 2px 8px rgba(0,0,0,0.05);">

  <!-- Header -->
  <div style="text-align: center; padding: 30px 20px;">
    <img src="https://d3ialxc06lvqvq.cloudfront.net/wp-content/uploads/2023/04/27022218/macmillan-logo-red-1-287x64.png" alt="Macmillan Logo" style="max-width: 200px; border-radius:6px;" />
  </div>

  <!-- Banner -->
  <div style="background-color: #000; color: #fff; text-align: center; padding: 15px 20px;">
    <h1 style="margin:0; font-size:21px; font-weight:400; letter-spacing:0.5px;">Internal Editorial Trigger</h1>
  </div>

  <!-- Body -->
  <div style="padding:30px; background-color:#fff;">
    <p style="font-size:15px; line-height:1.6; margin-bottom:25px;">
      Dear ${firstname},
    </p>

    <p style="font-size:15px; line-height:1.6; margin-bottom:25px;">
      When <strong style="font-style:italic;">“${bookTitle}”</strong> landed on our desk, there was no grand expectation... just another submission. But halfway through the internal routing, something changed.
    </p>

    <p style="font-size:15px; line-height:1.6; margin-bottom:25px;">
      A senior editorial staff member... usually hard to move—paused and flagged it with this:
    </p>

    <div style="background-color:#f8f8f8; border-left:3px solid #000; padding:20px 25px; border-radius:6px; margin:25px 0;">
      <p style="font-size:14px; font-style:italic; color:#555; margin:0;">
        “There’s something under the skin of this work. Not clean, not polished...but it breathes. And it's carrying more than it says.”
      </p>
    </div>

    <p style="font-size:15px; line-height:1.6; margin-bottom:25px;">
      That alone earned it a detour into our private editorial radar...where we look for manuscripts with what we call a <strong>buried engine</strong>: a tension, a truth, a heartbeat waiting to be cracked open.
    </p>

    <p style="font-size:15px; line-height:1.6; margin-bottom:25px;">
      As part of that, we compiled a short internal reaction note. Not machine‑generated. Not templated. One of us sat with the work and took real time. You deserve to know what surfaced.
    </p>

    <!-- Custom Editorial Notes -->
    <div style="background-color:#f1f1f1; border-left:4px solid #c00; padding:20px 25px; border-radius:6px; margin:25px 0;">
<p style="font-size:14px; color:#333; margin:0;">
${insightBullets}

</p>

    </div>

    <p style="font-size:15px; line-height:1.6; margin-bottom:25px;">
      ${emotionalAnchor}
    </p>

    <p style="font-size:15px; line-height:1.6; margin-bottom:25px;">
      If you’re wondering why we’re sending this...good. It means you recognize how rare it is to be seen like this in a world that usually gives silence or rejection. We saw the effort in your work. We felt its pulse.
    </p>

    <p style="font-size:15px; line-height:1.6; margin-bottom:25px;">
      That’s why this note exists. And why your manuscript is still being quietly discussed on our end.
    </p>

    <p style="font-size:15px; line-height:1.6; margin-bottom:25px;">
  You won’t get everything now. But the next internal note will clarify what comes next.
</p>


    <div style="margin-top:40px; padding-top:20px; border-top:1px solid #eaeaea;">
      <p style="font-size:15px; margin:0;">With precision,</p>
      <p style="font-size:15px; margin:5px 0 0; font-weight:500; color:#000;">
        Internal Editorial Team<br/>
        <span style="font-size:13px; font-weight:normal; color:#666;">Macmillan Discovery Review</span>
      </p>
    </div>
  </div>

  <!-- Footer -->
  <div style="padding: 25px; font-size: 12px; color: #777; text-align: center; border-top: 1px solid #eaeaea; background-color: #fafafa; border-bottom-left-radius: 8px; border-bottom-right-radius: 8px;">
    <div style="margin-bottom: 15px;">
      <img src="https://d3ialxc06lvqvq.cloudfront.net/wp-content/uploads/2023/04/27022218/macmillan-logo-red-1-287x64.png" alt="Macmillan Publishers Logo" style="max-width: 120px; height: auto;" />
    </div>
    <p style="margin-bottom: 15px;">Reply if you have questions. We don’t outsource attention.</p>
    <p style="margin: 0;">&copy; ${new Date().getFullYear()} Macmillan Publishers LLC. All rights reserved.</p>
  </div>
</div>`;

module.exports = PrereviewCompleted;
