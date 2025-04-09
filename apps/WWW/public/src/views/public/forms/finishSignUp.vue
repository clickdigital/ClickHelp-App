<template>
  <div>
    <h1>Sign In</h1>
    <p v-if="message">{{ message }}</p>
    <button v-if="showResendButton" @click="resendLink">Resend Link</button>
  </div>
</template>

<script lang="ts">
console.log("finish signup being called");

import { onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';
import { auth } from '@/js/firebase';
import { usePeopleStore } from '@/stores/storePeople'

import { isSignInWithEmailLink, signInWithEmailLink } from 'firebase/auth';     //removed fetchSignInMethodsForEmail


export default {
  setup() {
    const message = ref('');
    const showResendButton = ref(false);
    const router = useRouter();

    const storPeople = usePeopleStore();
   
    onMounted(async () => {
      try {
      
        //Check we have the users email in local storage
        const email = window.localStorage.getItem('emailForSignIn');
        if (!email) {
          //tell the user
            // message.value = 'No email found for sign-in. Please enter your email again.';
            // showResendButton.value = true;
          alert('No email found for sign-in. Please enter your email again.');
          return;
        }

        // Check if the URL is a valid sign-in link
        if (isSignInWithEmailLink(auth, window.location.href)) {
          // Complete sign-in with email link
          const result = await signInWithEmailLink(auth, email, window.location.href);
          console.log("User: ",result.user)

          // Check if the user is new or existing - what is a new user ?
          const isNewUser = result._tokenResponse?.isNewUser;

          // Clear stored email
          window.localStorage.removeItem('emailForSignIn');

          if (isNewUser) {
            alert(`Welcome, ${result.user.email}! You have successfully signed in as a new user.`);
            //message.value = `Welcome, ${result.user.email}! You have successfully signed in as a new user.`;
            //await handleNewUserSetup(result.user);
          } else {
            alert(`Welcome back, ${result.user.email}! You have successfully signed in as an existing user.`);
            //message.value = `Welcome back, ${result.user.email}! You have successfully signed in as an existing user.`;
          }
          
          // Redirect after sign-in
          setTimeout(() => {
            if(!isNewUser) {
              router.push({ name: 'dashboard' }); 
            } else {
              router.push({ name: 'myprofile' }); 
            }
          });
        } else {
          alert('Invalid or expired sign-in link.')
          throw new Error('Invalid or expired sign-in link.');
        }
      } catch (error) {
        console.error('Error during sign-in: ', error);
        alert('Error signing in. The link might be expired. Please try again.');
        //message.value = 'Error signing in. The link might be expired. Please try again.';
        //showResendButton.value = true;
      }
    });

    const resendLink = async () => {
      // Implement the logic to resend the sign-in link
      try {
        const email = window.localStorage.getItem('emailForSignIn');
        if (!email) {
          message.value = 'Please enter your email to receive a new link.';
          return;
        }

        // Resend the sign-in link
        await sendSignInLinkToEmail(auth, email, {
          url: 'http://localhost:5000/finishSignUp',
          handleCodeInApp: true,
        });

        message.value = 'A new sign-in link has been sent to your email.';
        showResendButton.value = false;
      } catch (error) {
        console.error('Error resending sign-in link: ', error);
        message.value = 'Failed to resend link. Please try again later.';
      }
    };

    //ADD this back in IF we decide to register people
    
    const saveUserToDatabase = async (user) => {
      console.log('saveUserToDatabase',user)
      // console.log("Saving user to db", user)
      // try {
      //   console.log(`User saved, ${user}! Needs to be added to the database`)
      //   //put the people store in here and ensure that validates the email as unique along with the rule
      //   storPeople.createRecord(
      //     {
      //       id_account: null,
      //       firstname: null,
      //       lastname: null,
      //       mobile: null,
      //       phone: null,
      //       email: user.email,
      //     }
      //   )
      // } catch (error) {
      //   console.error('Error adding new user:', error);
      // }
    }

    // Additional setup for new users
    const handleNewUserSetup = async (user) => {
      console.log('handleNewUserSetup', user)
      // console.log("Handling new user", user)
      // try {
      //   // Perform additional setup for new users, such as creating a profile
      //   console.log('Setting up new user:', user.uid);
      //   // Example: save user data to Firestore or another database
      //   await saveUserToDatabase(user);
      // } catch (error) {
      //   console.error('Error setting up new user:', error);
      // }
    };

    return {
      message,
      showResendButton,
      resendLink,
    };
  },
};
</script>

<style scoped>
/* Add any relevant styling */
</style>
