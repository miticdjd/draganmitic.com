import nodemailer from "nodemailer";

export const dynamic = 'force-dynamic'
export async function POST(request: Request) {
    const response = await request.json();

    const mailHost = process.env.MAIL_HOST;
    const mailPort = process.env.MAIL_PORT;
    const mailUsername = process.env.MAIL_USERNAME;
    const mailPassword = process.env.MAIL_PASSWORD;
    const mailFromAddress = process.env.MAIL_FROM_ADDRESS;
    const mailFromName = process.env.MAIL_FROM_NAME;
    const mailToAddress = process.env.MAIL_TO_ADDRESS;

    let transporter = nodemailer.createTransport({
        host: mailHost,
        port: mailPort,
        secure: false, // true for 465, false for other ports
        auth: {
            user: mailUsername, // generated ethereal user
            pass: mailPassword, // generated ethereal password
        },
    });

    const bodyMessage = response.message.split("\n").join("<br />");

    await transporter.sendMail({
        from: `"${mailFromName}" <${mailFromAddress}>`,
        to: mailToAddress,
        subject: "[DraganMitić] New contact form submission",
        html: `
      <h3>Hello,</h3>
      <p style="margine-bottom: 20px;">You have received new message from ${response.name}.</p>
      <p><strong>Name:</strong> ${response.name}</p>
      <p><strong>E-mail address:</strong> ${response.email}</p>
      <p><strong>Message:</strong></p>
      <p>${bodyMessage}</p>
    `,
    });

    return Response.json({ message: 'success' });
}