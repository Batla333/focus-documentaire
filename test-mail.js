import nodemailer from "nodemailer";

async function testSMTP() {
  const transporter = nodemailer.createTransport({
    host: "smtp.office365.com",
    port: 587,
    secure: false, // TLS auto sur port 587
    auth: {
      user: "focusdocumentaire@outlook.com", // <-- ton adresse Outlook
      pass: "xpbtohvvnzypewlv",       // <-- mot de passe d'application
    },
  });

  try {
    await transporter.verify();
    console.log("✅ Connexion SMTP réussie !");
  } catch (error) {
    console.error("❌ Erreur SMTP :", error);
  }
}

testSMTP();
