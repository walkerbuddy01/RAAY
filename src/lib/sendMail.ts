import { transporter } from "./mail";

export const sendEmailVerificationToken = async (
  email: string,
  token: string
) => {
  const confirmLink = `${process.env.WEBSITE_DOMAIN}/auth/verify-yourself?token=${token}&email=${email}`;

  const mailOptions = {
    from: process.env.NODEMAILER_USER,
    to: email,
    subject: "Verify your Email on RAAY",
    text: "Please verify your email by clicking on the link below!",
    html: `<p><a href="${confirmLink}">Click here</a> to verify your email!</p>`,
  };

  try {
    const sendInfo = await transporter.sendMail(mailOptions);
    return sendInfo;
  } catch (error) {
    console.log(error);

    return null;
  }
};

export const sendForgotPasswordEmail = async (email: string, token: string) => {
  const forgotPasswordLink = `${process.env.WEBSITE_DOMAIN}/auth/reset-password?token=${token}&email=${email}`;

  const mailOptions = {
    from: process.env.NODEMAILER_USER,
    to: email,
    subject: "Reset your Password on RAAY",
    text: "Reset your password by clicking the link below!",
    html: `<p><a href="${forgotPasswordLink}">Click here</a> to reset your password!</p>`,
  };

  try {
    const sendInfo = await transporter.sendMail(mailOptions);

    return sendInfo;
  } catch (error) {
    console.log(error);

    return null;
  }
};
