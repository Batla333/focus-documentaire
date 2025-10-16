import nodemailer from "nodemailer";

export async function POST(req) {
  const body = await req.json();

  // === Configuration SMTP Zoho ===
  const transporter = nodemailer.createTransport({
    host: "smtp.zoho.eu", // bien .eu si ton compte Zoho est européen
    port: 465, // port SSL
    secure: true,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_USER, // tu reçois le message ici
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
    console.log("ENVOI TEST :", mailOptions);
    await transporter.sendMail(mailOptions);
    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (err) {
    console.error("Erreur d’envoi :", err);
    return new Response(JSON.stringify({ success: false, error: err.message }), { status: 500 });
  }
}
