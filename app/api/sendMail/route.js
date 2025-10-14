import nodemailer from "nodemailer";

export async function POST(req) {
  const body = await req.json();

  // === Configuration du transporteur pour Outlook ===
  const transporter = nodemailer.createTransport({
    host: "smtp.office365.com",
    port: 587,
    secure: false, // TLS activé automatiquement sur ce port
    auth: {
      user: process.env.EMAIL_USER, // ton adresse Outlook
      pass: process.env.EMAIL_PASS, // ton mot de passe (ou mot de passe d’appli)
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_USER, // tu reçois sur ton adresse
    replyTo: body.email, // permet de répondre directement à l'expéditeur
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
