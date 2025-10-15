import nodemailer from "nodemailer";

export async function POST(req) {
  const body = await req.json();

  
  const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: "focusdocumentaire@outlook.com",
    replyTo: body.email,
    subject: `📩 Nouveau message de ${body.nom} via FOCUS documentaire`,
    text: `
Nom : ${body.nom}
Email : ${body.email}

Message :
${body.message}

— Proposition de film —
Titre : ${body.filmTitre || "Non précisé"}
Lien : ${body.filmLien || "Non précisé"}
Description : ${body.filmDescription || "Non précisé"}
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (err) {
    console.error("Erreur d’envoi :", err);
    return new Response(JSON.stringify({ success: false }), { status: 500 });
  }
}
