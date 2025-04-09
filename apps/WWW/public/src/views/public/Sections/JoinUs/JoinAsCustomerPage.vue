<template>
  <main>
    <!-- Hero Section-->
    <section> 
        <div>
          <h1 class="p-5 mx-10 text-gray-600">Customer Profile</h1>
          <br />
          <p>Intro to include link to application form</p>
          <p>Image of typical customers and brief call to action</p>
          <p>Mobile first format</p>

          <br /><br />

          <div class="p-5">
            <button
              @click="doRegister"
              class=" text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              type="button"
            >Register</button>
          </div>
          <div class="p-5">
            <button
              @click="doEmail"
              class=" text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              type="button"
            >Send and email from here</button>
          </div>
          <div class="p-5">
            <button
              @click="doUser"
              class=" text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              type="button"
            >Add a user</button>
          </div>

          {{ storAuth.user }}
          <div v-for="user in storUsers.users" :key="user.id">
           {{ user }}
          </div>
         

        </div>
    </section>
  </main>
</template>
  
  <script setup lang="ts">
  import router from "@/router";
  import {useOnBoardingStore} from "@/stores/storeOnBoarding"
  const storOnBoarding = useOnBoardingStore();

  import { useUserStore } from '@/stores/storeUsers';
  const storUsers = useUserStore();

  import { useStoreAuth } from "@/stores/storeAuth";
const storAuth = useStoreAuth();
  
  async function doEmail() {
    await storOnBoarding.sendEmail("gordon@clickdigital.com", "I am the subject", "An this is the message sent via Moustache")
  };

  function doUser() {
    const stuff = 
    { firstname: "gordon", 
      id: '',
      idFranchise: '',
      idUser: '',
      createdBy: '',
      createdAt: '',
      updatedBy: '',
      updatedAt: '',
      deletedBy: '',
      lastname: 'McLean',
    contactInfo: 
      {
        email:"sometwat@bbc.co.uk",
        mobile: "07725432287",
        phone: '',
      }
    }

    storUsers.create(stuff)
  }

  function doRegister() {
    router.push('register');
  };


</script>
  
<style scoped>
</style>

