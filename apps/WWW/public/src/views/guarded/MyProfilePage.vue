
<template>

  <div class="mt-10" >My Profile
    
    </div>
      <div class="max-w-xl mx-auto justify-center">
        <div class="m-4 ">
          <form class="space-y-6" @submit.prevent="doRegister">

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
                  required
                >
              </div>
        
          </div>

            <button
                :disabled="!credentials.GDPR"
                :class="[
                  'text-white bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800',
                  credentials.GDPR ? 'bg-blue-500 hover:bg-blue-700' : 'bg-blue-500 cursor-not-allowed opacity-70'
                ]"
                >
                Register
            </button>

          </form>
      </div>
    </div>
  
  </template>
  
<script setup lang="ts">
  import { reactive } from 'vue';

  import { usePeopleStore } from '@/stores/storePeople';
  const storPeople = usePeopleStore();

  interface FormModel {
    firstname: string;
    lastname: string;
    mobile: string;
    landline: string;
    email: string;
  }

  const credentials = reactive<FormModel>({
    firstname: '',
    lastname: '',
    email: '',
    mobile: '',
    landline: '',
  });

  function doRegister() {
    storPeople.updateRecord({ 
      firstname: credentials.firstname, 
      lastname: credentials.lastname, 
      mobile: credentials.mobile, 
      landline: credentials.landline, 
      email: credentials.email, 
    })
  }
  </script>
  