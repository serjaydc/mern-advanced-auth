import { resend } from "./config.js";
import {
  verificationTokenEmailTemplate,
  welcomeEmailTemplate,
} from "./email-templates.js";

export const sendVerificationEmail = async (email, verificationToken) => {
  try {
    const { data, error } = await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: [email],
      subject: "Verify Your Email Address Now",
      html: verificationTokenEmailTemplate.replace(
        "{verificationToken}",
        verificationToken
      ),
    });
  } catch (error) {
    console.log(`error sending verification email: ${error}`);
    throw new Error("Error sending verification email");
  }
};

export const sendWelcomeEmail = async (email, name) => {
  try {
    const { data, error } = await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: [email],
      subject: "Welcome to our company",
      html: welcomeEmailTemplate.replace("{name}", name),
    });
  } catch (error) {
    console.log(`error sending verification email: ${error}`);
    throw new Error("Error sending welcome email");
  }
};

export const sendPasswordResetEmail = async (email, resetURL) => {
  try {
    const { data, error } = await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: [email],
      subject: "Reset Your Password",
      html: `Click <a href="${resetURL}">Here</a> to reset your password.`,
    });
  } catch (error) {
    console.log(`error sendPasswordResetEmail: ${error}`);
    throw new Error("Error while resetting password");
  }
};

export const sendResetSuccessEmail = async (email) => {
  try {
    const { data, error } = await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: [email],
      subject: "Password was Succesfull",
      html: `Your password was reset successfully`,
    });
  } catch (error) {
    console.log(`error sendResetSuccessEmail: ${error}`);
    throw new Error("Something went wrong");
  }
};
