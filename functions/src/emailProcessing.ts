import * as nodemailer from "nodemailer";
import * as logger from "firebase-functions/logger";
import * as functions from "firebase-functions";
import * as mustache from "mustache";
import * as fs from "fs";
import * as path from "path";
import {onDocumentCreated} from "firebase-functions/v2/firestore";

// Nodemailer transporter ../
const mailTransport = nodemailer.createTransport({
  host: "mail.smtp2go.com",
  port: 2525,
  secure: false, // true for 465, false for other ports
  auth: {
    user: "gordon@clickdigital.com",
    pass: "a5KjIcJNp4WR",
  },
  tls: {
    ciphers: "SSLv3",
  },
});

// Email dispatcher - import to forms and enable cloud function email processing


// DB Listner - Listens for inserts into onBoarding collection
export const wwwClientWelcome =
  onDocumentCreated("/onBoarding/{documentId}", async (event: any) => {
    logger.log("Record created in OnBoarding",
      event.params.documentId, event.data.data().firstname);

    const original = event.data.data().firstname;
    logger.log("RESULT:", event.params.documentId, original);

    const email = "gordon@clickdigital.com";

    const mailOptions = {
      from: "'ClickHelp Team' <helpdesk@clickhelp.uk>",
      to: email,
      subject: "Welcome to Our App!",
      text: "Hello " + original +
        " welcome to our app! We're glad you're here.",
    };

    try {
      await mailTransport.sendMail(mailOptions);
      logger.log("Welcome email sent to:", email);
    } catch (error) {
      logger.log("There was an error while sending the email:", error);
    }
    return;
  });

// Define the data type for the incoming request
interface SendEmailData {
  email: string;
  subject: string;
  message: string;
}

// Define the response type
interface SendEmailResponse {
  success: boolean;
  message?: string;
  error?: string;
}

export const sendEmail = functions.https.onCall(
  async (data: SendEmailData):

    Promise<SendEmailResponse> => {
    const {email, subject} = data;

    const templatePath = path.join(
      __dirname,
      "../Mustache/OnBoarding/customerRegistration.mustache"
    );

    let mustacheTemplate: string;
    try {
      mustacheTemplate = fs.readFileSync(templatePath, "utf8");
    } catch (error) {
      console.error("Error reading the template file", error);
      return {success: false, error: "Failed to read email template"};
    }

    const renderedMessage = mustache.render(mustacheTemplate, {
      subject: data.subject,
      message: data.message,
    });

    const mailOptions = {
      from: "helpdesk@clickdigital.com",
      to: email,
      subject: subject,
      text: renderedMessage,
    };

    try {
      await mailTransport.sendMail(mailOptions);
      return {success: true, message: "Email sent"};
    } catch (error) {
      console.error("Email Error", error);
      return {success: false, error: (error as Error).message};
    }
  }
);