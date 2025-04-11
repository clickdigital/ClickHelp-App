import * as logger from "firebase-functions/logger";
import {onRequest} from "firebase-functions/v2/https";
import * as functions from "firebase-functions";
import * as admin from "firebase-admin";
import cors from "cors";
// import {Request, Response} from "express";
admin.initializeApp();

const allowedOrigins = ["http://localhost:5173", "http://127.0.0.1:5173"];

// Configure CORS to handle undefined origin safely
const corsHandler = cors({
  origin: (origin: string | undefined,
    callback: (err: Error | null, allow?: boolean) => void) => {
    if (!origin || allowedOrigins.indexOf(origin) !== -1) {
      callback(null, true); // Allow the request
    } else {
      callback(new Error("Not allowed by CORS"), false); // Reject the request
    }
  },
});

// functions from here
export const RestWorld = onRequest((request, response) => {
  logger.info("Rest logs!", {structuredData: true});
  console.log("Rest console.log", {womble: true});
  response.send("Rest World - Cloud Function");
});

/**
 * Client and team on boarding
 * Validation is done form side but could be added here with
 * return res.status(400).send("Missing form fields");
 */
export const onboardingClient =
    functions.https.onRequest((req, res) => {
      corsHandler(req, res, async () => {
        try {
          const data = req.body;
          await admin.firestore().collection("onboardingClients").add(data);
          return res.status(200).send("Form submitted successfully");
        } catch (error) {
          return res.status(500).send("Error saving form data");
        }
      });
    });

export const onboardingTeam =
    functions.https.onRequest((req, res) => {
      corsHandler(req, res, async () => {
        try {
          const data = req.body;
          await admin.firestore().collection("onboardingTeam").add(data);
          return res.status(200).send("Form submitted successfully");
        } catch (error) {
          return res.status(500).send("Error saving form data");
        }
      });
    });
