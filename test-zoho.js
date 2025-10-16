import nodemailer from "nodemailer";

async function testMail() {
  const transporter = nodemailer.createTransport({
    host: "smtp.zoho.eu",
    port: 465,
    secure: true,
    auth: {
      user: "contact@focusdocumentaire.com", // ton adresse Zoho
      pass: "tgYp7TMN6Cfq", // pas ton vrai mot de passe
    },
  });

  try {
    const info = await transporter.sendMail({
      from: "contact@focusdocumentaire.com",
      to: "contact@focusdocumentaire.com",
      subject: "✅ Test SMTP Zoho",
      text: "Ceci est un test réussi de ton SMTP Zoho avec Nodemailer.",
    });

    console.log("✅ Email envoyé avec succès :", info.response);
  } catch (error) {
    console.error("❌ Erreur SMTP :", error);
  }
}

testMail();
