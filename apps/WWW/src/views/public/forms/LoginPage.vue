<template>

    <section class="my-40">
      <div>
       
      </div>
        <div class="max-w-xl mx-auto justify-center">

          <form class="m-4 ">
            <div class="space-y-6">
              <!--EMail-->
              <div class="mb-6">
                <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                <input
                  id="email"
                  v-model="credentials.email"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="hello@clickhelp.uk"
                  type="email"
                  required
                >
              </div>
            
              
            </div>
        </form>
        <button
            @click="doLogin"
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            type="button"
      >Submit</button>
      </div>
    </section>
     
    
    </template>
    
    <script setup lang="ts">
    import { reactive } from 'vue'
    import { useRouter } from 'vue-router';
    const router = useRouter();
    
    /** Stores */
    import { useStoreAuth } from '@/stores/storeAuth'
    const storAuth = useStoreAuth()
    
    // const rememberMe = ref(false)
    const credentials = reactive({
      email: ''
      
    })

    const doLogin = () => {
      if (!credentials.email) {
        alert('Enter a valid email')
      } 
      else {
        storAuth.loginUser(credentials);
        router.push('thanks')  
      }
    }
    </script>
    