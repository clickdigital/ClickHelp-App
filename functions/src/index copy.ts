/**
 * Import function triggers from their respective submodules:
 *
 * import {onCall} from "firebase-functions/v2/https";
 * import {onDocumentWritten} from "firebase-functions/v2/firestore";
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

import {RestWorld, onboardingClient, onboardingTeam} from "./rest";
import {wwwClientWelcome, sendEmail} from "./emailProcessing";

// These are all rest calls from the browser or postman
export {
  RestWorld,
  onboardingClient,
  onboardingTeam,
};

// This reacts to a database insertion
export {
  wwwClientWelcome,
  sendEmail,
};
