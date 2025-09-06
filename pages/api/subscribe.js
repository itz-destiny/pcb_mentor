// pages/api/subscribe.js
import { createClient } from "@supabase/supabase-js";
import { Resend } from "resend";

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_KEY
);

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    const { name, email } = req.body;

    if (!email) {
      return res.status(400).json({ message: "Email is required" });
    }

    // 1. Save subscriber in Supabase
    const { error } = await supabase
      .from("subscribers")
      .insert([{ name, email }]);

    if (error) {
      console.error("❌ Supabase error:", error);
      return res.status(400).json({ message: error.message });
    }

    // 2. Send welcome email
    const { data, error: emailError } = await resend.emails.send({
      from: "PCB Mentor <onboarding@resend.dev>", // ✅ use this until domain is verified
      to: email,
      subject: "🎉 Welcome to PCB Mentor!",
      html: `
        <div style="font-family: Arial, sans-serif; color: #111; line-height: 1.5;">
          <h2 style="color: #2563eb;">Welcome, ${name || "Engineer"} 🎉</h2>
          <p>Thanks for subscribing to <strong>PCB Mentor</strong>.</p>
          <p>You’ll now get exclusive tips, resources, and project guides delivered straight to your inbox 🚀.</p>
          <p>Happy building,<br><strong>The PCB Mentor Team</strong></p>
        </div>
      `,
    });

    if (emailError) {
      console.error("❌ Resend error:", emailError);
      return res.status(400).json({ message: emailError.message });
    }

    console.log("✅ Subscription successful:", email);
    return res.status(200).json({ message: "Subscribed successfully!" });
  } catch (err) {
    console.error("❌ API crashed:", err);
    return res.status(500).json({ message: err.message });
  }
}
