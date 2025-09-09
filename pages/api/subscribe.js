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

  // Try inserting subscriber
  const { data, error } = await supabase
    .from("subscribers")
    .insert([{ name: name || "Anonymous", email }]);

  if (error) {
    console.error("❌ Supabase error:", error);
    return res.status(400).json({ error: error.message });
  }

  return res.status(200).json({ message: "Subscribed successfully!", data });
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { name, email } = req.body;

    if (!email) {
      return res.status(400).json({ error: "Email is required" });
    }

    // Setup Nodemailer
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      secure: true, // true if port = 465
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Verify connection
    await transporter.verify();

    // Send email
    await transporter.sendMail({
      from: `"PCB Mentor" <${process.env.SMTP_USER}>`,
      to: email,
      subject: "🎉 Welcome to PCB Mentor!",
      html: `<h2>Welcome, ${name || "Engineer"} 🎉</h2><p>Thanks for subscribing!</p>`,
    });

    console.log("✅ Email sent:", email);
    return res.status(200).json({ message: "Welcome email sent successfully!" });
  } catch (err) {
    console.error("💥 Nodemailer error:", err);
    return res.status(500).json({ error: err.message || "Failed to send email" });
  }
}
