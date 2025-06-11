{/*const paymentInstructions = (firstname, bookTitle, chosenPathway) => ` 
<div style="font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; color: #333; padding: 20px; max-width: 600px; margin: 0 auto; background-color: #f9f9f9; border-radius: 8px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">

  <!-- Header -->
  <div style="text-align: center; padding: 30px 20px; border-top-left-radius: 8px; border-top-right-radius: 8px;">
    <img src="https://d3ialxc06lvqvq.cloudfront.net/wp-content/uploads/2023/04/27022218/macmillan-logo-red-1-287x64.png" alt="Macmillan Publishers Logo" style="max-width: 200px; height: auto;" />
  </div>

  <!-- Main Content -->
  <div style="background-color: #fff; padding: 30px; border-radius: 6px; margin-bottom: 20px;">

    <p style="font-size: 16px; line-height: 1.6; margin-top: 0;">Dear ${firstname},</p>

    <div style="background-color: #f2f7fc; border-left: 4px solid #0066cc; padding: 15px; margin: 20px 0; border-radius: 0 6px 6px 0;">
      <p style="font-size: 15px; line-height: 1.5; margin: 0;">
        <strong>Manuscript:</strong> "${bookTitle}"<br>
        <strong>Selected Pathway:</strong> "${chosenPathway}"
      </p>
    </div>

    <!-- 🔽 NEW ADDITION STARTS HERE -->
    <p style="font-size: 15px; line-height: 1.6;">
      Based on our last exchange, we've listed the pathway as: <strong>${chosenPathway}</strong>. If this reflects your intended track, you're clear to proceed as outlined. If there’s a need to clarify or adjust before we move, this is the moment to do so... silence will be taken as confirmation.
    </p>
    <!-- 🔼 NEW ADDITION ENDS HERE -->

    <p style="font-size: 15px; line-height: 1.6;">
      Let's call this what it is: a pivotal moment. Not because we've "granted access," but because something in your manuscript hit nerve, not market. And that's rarer than anyone likes to admit.
    </p>

    <p style="font-size: 15px; line-height: 1.6;">
      We've seen hundreds of manuscripts that tick boxes. Yours cracked them. We don't greenlight development just because something's polished ... we move when something bleeds truth with style.
    </p>

    <p style="font-size: 15px; line-height: 1.6;">
      This next phase is where the actual war begins. Development isn't a spa day. It's trenchwork ... sweat, rewrites, and structure that can carry the weight of what you're really trying to say.
    </p>

    <!-- Development Steps -->
    <div style="margin: 25px 0;">
      <div style="background-color: #fff; border: 1px solid #e0e0e0; border-radius: 6px; padding: 15px; margin-bottom: 10px;">
        <p style="font-size: 15px; line-height: 1.5; margin: 0;">
          <strong style="color: #0066cc;">1. Manuscript-to-editor alignment</strong><br>
          <span style="color: #555;">Not every editor is built for your material. We assign the ones who speak the language beneath your sentences.</span>
        </p>
      </div>
      <div style="background-color: #fff; border: 1px solid #e0e0e0; border-radius: 6px; padding: 15px; margin-bottom: 10px;">
        <p style="font-size: 15px; line-height: 1.5; margin: 0;">
          <strong style="color: #0066cc;">2. Structured Pathway Activation</strong><br>
          <span style="color: #555;">Your selected track isn't pre...packaged. We tailor the process around your voice and vision ... not some internal checklist.</span>
        </p>
      </div>
      <div style="background-color: #fff; border: 1px solid #e0e0e0; border-radius: 6px; padding: 15px;">
        <p style="font-size: 15px; line-height: 1.5; margin: 0;">
          <strong style="color: #0066cc;">3. Documentation & Scheduling</strong><br>
          <span style="color: #555;">Clarity is power. You'll receive the full roadmap ... dates, deliverables, and expectations ... before we move an inch.</span>
        </p>
      </div>
    </div>

    <!-- Payment CTA -->
    <div style="background-color: #fffdf2; border: 1px solid #f0e9cc; border-radius: 6px; padding: 20px; margin: 30px 0;">
      <h3 style="color: #5c4c00; margin-top: 0; font-size: 16px;">To Proceed:</h3>
      <p style="font-size: 15px; line-height: 1.6; color: #5a5a5a;">
        Signal readiness to process the development fee. Once confirmed, our finance liaison will forward payment steps and onboarding documentation. We operate on tight alignment windows. Timing matters.
      </p>
    </div>

    <!-- Power Closure -->
    <p style="font-size: 15px; line-height: 1.6;">
      You weren't "accepted." You were recognized. There's a difference.
    </p>

    <p style="font-size: 15px; line-height: 1.6;">
      Looking forward to seeing how far you're willing to take this.
    </p>

    <!-- Signature -->
    <div style="margin-top: 40px; padding-top: 20px; border-top: 1px solid #eaeaea;">
      <p style="font-size: 16px; line-height: 1.6; margin: 0; color: #444;">Onward,</p>
      <p style="font-size: 16px; line-height: 1.6; margin: 5px 0 0; color: #000; font-weight: 500;">The Adaptation Unit<br/>
      <span style="font-size: 14px; color: #666; font-weight: normal;">Macmillan Publishers</span></p>
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
`; */}

const paymentInstructions = (firstname, bookTitle, chosenPathway, price) => ` 
<div style="font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; color: #333; padding: 20px; max-width: 600px; margin: 0 auto; background-color: #f9f9f9; border-radius: 8px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">

  <!-- Header -->
  <div style=" text-align: center; padding: 30px 20px;">
    <img src="https://d3ialxc06lvqvq.cloudfront.net/wp-content/uploads/2023/04/27022218/macmillan-logo-red-1-287x64.png" alt="Macmillan Publishers Logo" style="max-width: 200px; height: auto;" />
  </div>

  <!-- Main Content -->
  <div style="background-color: #fff; padding: 30px; border-radius: 6px;">

    <p style="font-size: 16px; line-height: 1.6; margin-top: 0;">Dear ${firstname},</p>

    <div style="background-color: #f2f7fc; border-left: 4px solid #0066cc; padding: 15px; margin: 20px 0; border-radius: 0 6px 6px 0;">
      <p style="font-size: 15px; line-height: 1.5; margin: 0;">
        <strong>Manuscript:</strong> "${bookTitle}"<br>
        <strong>Confirmed Pathway:</strong> "${chosenPathway}"
      </p>
    </div>

    <p style="font-size: 15px; line-height: 1.6;">
      As confirmed, we've now marked your work under the <strong>${chosenPathway}</strong> tier. The next phase isn't mechanical... it's surgical. From here, we build the editorial infrastructure your manuscript demands, not just what the industry expects.
    </p>

    <p style="font-size: 15px; line-height: 1.6;">
      We don’t move on potential alone. Your material carries something more dangerous: <em>undeniability</em>. And now it’s time to test that under fire—structure, pacing, stakes, and subtext all under professional review.
    </p>

    <p style="font-size: 15px; line-height: 1.6;">
      Development at this tier is not cosmetic. It’s pressure. We match you with editors who can read beneath the sentence. Who can elevate what you're trying to say without silencing your voice.
    </p>

    <!-- Development Steps -->
    <div style="margin: 25px 0;">
      <div style="background-color: #fff; border: 1px solid #e0e0e0; border-radius: 6px; padding: 15px; margin-bottom: 10px;">
        <p style="font-size: 15px; line-height: 1.5; margin: 0;">
          <strong style="color: #0066cc;">1. Manuscript-to-Editor Alignment</strong><br>
          <span style="color: #555;">We don’t assign arbitrarily. You’re matched to an editor who thinks in your rhythm, not just someone who “knows the genre.”</span>
        </p>
      </div>
      <div style="background-color: #fff; border: 1px solid #e0e0e0; border-radius: 6px; padding: 15px; margin-bottom: 10px;">
        <p style="font-size: 15px; line-height: 1.5; margin: 0;">
          <strong style="color: #0066cc;">2. Executive Tier Structuring</strong><br>
          <span style="color: #555;">We begin with a live breakdown of narrative architecture, structural blind spots, and potential market fit. This isn’t templated. It’s tailored for impact.</span>
        </p>
      </div>
      <div style="background-color: #fff; border: 1px solid #e0e0e0; border-radius: 6px; padding: 15px;">
        <p style="font-size: 15px; line-height: 1.5; margin: 0;">
          <strong style="color: #0066cc;">3. Calendar & Documentation Dispatch</strong><br>
          <span style="color: #555;">Once activated, you’ll receive a full project calendar, defined checkpoints, and all legal/creative documentation within 48 business hours.</span>
        </p>
      </div>
    </div>

    <!-- Payment CTA -->
    <div style="background-color: #fffdf2; border: 1px solid #f0e9cc; border-radius: 6px; padding: 20px; margin: 30px 0;">
      <h3 style="color: #5c4c00; margin-top: 0; font-size: 16px;">To Proceed:</h3>
      <p style="font-size: 15px; line-height: 1.6; color: #5a5a5a;">
        As confirmed, your ${chosenPathway} pathway initiates at $${price}. This phase is formalized upon receipt. Our finance liaison will issue your secure payment instructions and scheduling outline immediately after signal.
      </p>
      <p style="font-size: 14px; color: #777;">
        *Note: We operate on rotating editorial windows. Timing affects your position in the onboarding queue.*
      </p>
    </div>

    <!-- Power Closure -->
    <p style="font-size: 15px; line-height: 1.6;">
      This phase isn’t for everyone. But based on what we’ve read, it’s where you belong.
    </p>

    <p style="font-size: 15px; line-height: 1.6;">
      Looking forward to seeing how far you're willing to take this.
    </p>

    <!-- Signature -->
    <div style="margin-top: 40px; padding-top: 20px; border-top: 1px solid #eaeaea;">
      <p style="font-size: 16px; line-height: 1.6; margin: 0; color: #444;">Onward,</p>
      <p style="font-size: 16px; line-height: 1.6; margin: 5px 0 0; color: #000; font-weight: 500;">The Adaptation Unit<br/>
      <span style="font-size: 14px; color: #666; font-weight: normal;">Macmillan Publishers</span></p>
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
`


module.exports = paymentInstructions;