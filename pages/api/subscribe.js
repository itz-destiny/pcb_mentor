// pages/api/subscribe.js
import { createClient } from "@supabase/supabase-js";
import nodemailer from "nodemailer";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY // must be service role key, not anon
);

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { name, email } = req.body;

  if (!email) {
    return res.status(400).json({ error: "Email is required" });
  }

  try {
    // 1. Insert subscriber into Supabase
    const { data, error } = await supabase
      .from("subscribers")
      .insert([{ name: name || "Engineer", email }]);

    if (error) {
      console.error("❌ Supabase error:", error);
      return res.status(400).json({ error: error.message });
    }

    // 2. Setup Nodemailer transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      secure: Number(process.env.SMTP_PORT) === 465, // secure if 465
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Verify SMTP connection
    await transporter.verify();

    // 3. Send welcome email
    await transporter.sendMail({
      from: `"PCB Mentor" <${process.env.SMTP_USER}>`,
      to: email,
      subject: "🎉 Welcome to PCB Mentor!",
      html: `<h2>Welcome, ${name || "Engineer"} 🎉</h2><p>Thanks for subscribing!</p>`,
    });

    console.log("✅ New subscriber + email sent:", email);

    return res.status(200).json({
      message: "Subscribed and welcome email sent successfully!",
      data,
    });
  } catch (err) {
    console.error("💥 Error:", err);
    return res.status(500).json({ error: err.message || "Unexpected error" });
  }
}
