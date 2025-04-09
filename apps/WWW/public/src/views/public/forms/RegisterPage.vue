
<template>

    <div class="mt-10" >CUSTOMER REGISTRATION
      
      </div>
        <div class="max-w-xl mx-auto justify-center">
          <div class="m-4 ">
            <div class="space-y-6">

              <div class="space-y-6">
                <!--Firstname-->
                <div class="mb-6">
                  <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Firstname</label>
                  <input
                    id="firstname"
                    v-model="credentials.firstname"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Firstname"
                    type="text"
                    required
                  >
                </div>
                <!--Lastname-->
                <div class="mb-6">
                  <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Lastname</label>
                  <input
                    id="lastname"
                    v-model="credentials.lastname"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Lastname"
                    type="text"
                    required
                  >
                </div>
                <!--EMail-->
                <div class="mb-6">
                  <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                  <input
                    id="email"
                    v-model="credentials.email"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="hello@clickhelp.uk"
                    type="email"
                    required
                  >
                </div>
                <!-- Mobile -->
                <div class="mb-6">
                  <label for="mobile" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Mobile</label>
                  <input
                    id="mobile"
                    v-model="credentials.mobile"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="07007 007007"
                    type="text"
                    required
                  >
                </div>
                 <!-- Landline -->
                 <div class="mb-6">
                  <label for="landline" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Landline</label>
                  <input
                    id="landline"
                    v-model="credentials.landline"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="0207 123 4567"
                    type="text"
                  >
                </div>
                 <!--Postcode-->
                 <div class="mb-6">
                  <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Postcode</label>
                  <input
                    id="postcode"
                    v-model="credentials.postcode"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Postcode - SW1A 2AA"
                    type="text"
                    required
                  >
                </div>

                <p class="font-medium text-gray-900">General Data Protection Regulation (GDPR) Compliance</p>
                <p class="text-gray-500 text-sm">This form collects your personal details, specifically name, email and phone numbers. 
                  You are giving us this information so we can contact you. Please check our privacy policy for detail of how 
                  we store and protect your data. You need to tick the consent box below before the form can be submitted.</p>
                <fieldset>
                  <legend class="sr-only">Notifications</legend>
                  <div class="space-y-5">
                    <div class="relative flex items-start">
                      <div class="flex h-6 items-center">
                        <input id="gdpr" aria-describedby="gdpr-confirmation" name="gdpr" type="checkbox" v-model="credentials.GDPR" class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600" />
                      </div>
                      <div class="ml-3 text-sm leading-6">
                        <label for="gdpr" class="font-medium text-gray-900">GDPR</label>
                        {{ ' ' }}
                        <span id="gdpr-description" class="text-gray-500"><span class="sr-only">GDPR </span>Yes I am OK with my informaiton being securely stored</span>
                      </div>
                    </div>
                  </div>
                </fieldset>
          
            </div>

              <button
                  @click="doRegister"
                  :disabled="!credentials.GDPR"
                  :class="[
                    'text-white bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800',
                    credentials.GDPR ? 'bg-blue-500 hover:bg-blue-700' : 'bg-blue-500 cursor-not-allowed opacity-70'
                  ]"
                  >
                  Register
              </button>
            </div>
            {{ credentials }}
        </div>
      </div>
    
    </template>
    
<script setup lang="ts">
    import { reactive } from 'vue';
    import axios from 'axios';

    // import { useOnBoardingStore } from "@/stores/storeOnBoarding"
    // const storOnBoarding = useOnBoardingStore();

    interface FormModel {
      idBranch: string;
      firstname: string;
      lastname: string;
      mobile: string;
      landline: string;
      email: string;
      postcode: string;
      formType: string;
      GDPR: boolean;
    }

    const credentials = reactive<FormModel>({
      idBranch: '',
      firstname: '',
      lastname: '',
      email: '',
      mobile: '',
      landline: '',
      postcode: '',
      formType: 'ClientReg',
      GDPR: false,
    });

    const doRegister = () => {
    //TODO Clear the form, make the error response repport to a log, add some human logic to stop bots submitting the form
    axios.post('http://localhost:5001/clickhelp-68faa/us-central1/onboardingClient', credentials)
    .then(response => {
      console.log('Form submitted successfully:', response.data);
    })
    .catch(error => {
      console.error('Error submitting form:', error);
    });
};

    </script>