<template>
  <div>Register API page</div>
</template>
<script setup lang="ts"></script>

<!-- <template>

  <div class="mt-10" >
    
    </div>
      <div class="max-w-xl mx-auto justify-center">
        <div class="m-4 ">
          <form @submit.prevent="handleSubmit"   class="space-y-6">

            <div class="border-t border-b border-gray-900/10 pb-12">
              
              <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6" >

                <div class="sm:col-span-3 sm:col-start-1">
                  <label for="postcode" class="block text-sm font-medium leading-6 text-gray-900">Postcode</label>
                  <div class="mt-2">
                      <input
                      id="postcode"
                      v-model="form.postcode"
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      autocomplete="postal-code"
                      placeholder="#### ###"
                      name="postcode"
                      type="text"
                      v-on:blur="doCheck(form.postcode)"
                      />                    
                  </div> 
                  <div 
                    class="block text-xs font-medium leading-6 text-gray-900"
                    v-if="!storPostcode.getBranchFromPostcode">We are not currently operating in {{ storPostcode.currentPostcode }}
                  </div>
                  <div v-if="v$.postcode.$error">Please enter your postcode</div>  
              </div>    
                
              <div></div>
                     
 
              <div class="sm:col-span-3">
                  <label for="first-name" class="block text-sm font-medium leading-6 text-gray-900">First name</label>
                  <div class="mt-2">
                  <input
                    id="first-name"
                    v-model="form.firstname"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    autocomplete="given-name"
                    placeholder="Firstname"
                    name="first-name"
                    type="text"
                  />
                  </div>
                  <div v-if="v$.firstname.$error">Please enter your firstname</div>
              </div>

              <div class="sm:col-span-3">
                  <label for="last-name" class="block text-sm font-medium leading-6 text-gray-900">Last name</label>
                  <div class="mt-2">
                  <input
                    id="last-name"
                    v-model="form.lastname"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    autocomplete="family-name"
                    placeholder="Lastname"
                    name="last-name"
                    type="text"
                  />                    
                </div>
                <div v-if="v$.lastname.$error">Please enter your lastname</div>
              </div>

              <div class="sm:col-span-4">
                  <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Email address</label>
                  <div class="mt-2">
                  <input
                    id="email"
                    v-model="form.email"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    autocomplete="email"
                    placeholder="email"
                    name="email"
                    type="email"
                  />                    
                </div>
                <div v-if="v$.email.$error">Please enter a valid email address</div>
              </div>

              <div class="sm:col-span-3">
                  <label for="phone" class="block text-sm font-medium leading-6 text-gray-900">Mobile Number</label>
                <div class="mt-2">
                  <input
                    id="mobile"
                    v-model="form.mobile"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    autocomplete="mobile"
                    placeholder="your mobile number"
                    name="mobile"
                    type="phone"
                  />                    
                </div>
                <div v-if="v$.mobile.$error">Please enter your mobile</div>
              </div>

              <div class="sm:col-span-3">
                  <label for="phone" class="block text-sm font-medium leading-6 text-gray-900">Land Line (optional)</label>
                  <div class="mt-2">
                    <input
                      id="phone"
                      v-model="form.phone"
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      autocomplete="phone"
                      placeholder="02380 4567890"
                      name="phone"
                      type="phone"
                    />                    
                </div>
              </div>

            </div>
          </div>

        <div></div>


            <button
                class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                Register
            </button>

          </form>
      </div>
    </div>
  
  </template>
    
<script setup lang="ts">
    import { reactive } from 'vue'
    import { useVuelidate } from '@vuelidate/core';
    import { required, email } from '@vuelidate/validators';
   import router from '@/router';

    /** Stores */
    import { useWebFormsStore } from '@/stores/storeWebForms';
    const storReg = useWebFormsStore()
    import { usePostcodeStore }from '@/stores/storePostcode'
    const storPostcode = usePostcodeStore()

    interface FormModel {
      firstname: string;
      lastname: string;
      mobile: string;
      phone: string;
      email: string;
      postcode: string;
    }

    const form = reactive<FormModel>({
      firstname: '',
      lastname: '',
      mobile: '',
      phone: '',
      email: '',
      postcode: ''
    });

    const rules = {
      firstname: { required },
      lastname: { required },
      mobile: { required },
      phone: { },
      email: { required, email },
      postcode: { required },
    };

    const v$ = useVuelidate(rules,form);

    function handleSubmit() {
      console.log("handleSubmit")
      v$.value.$touch();
      console.log("V$",v$)
      console.log("Value",v$.value)
      console.log("Error",v$.value.$error)
      if (!v$.value.$error) {

        console.log({
            formType: "web_registration",
            firstname: form.firstname,
            lastname: form.lastname,
            mobile: form.mobile,
            email: form.email,
            phone: form.phone,
            branch: storPostcode.getBranchFromPostcode.Branch,
            postcode: storPostcode.currentPostcode,
            inbound: storPostcode.inBoundPostcode,
          });

        storReg.createRecord({
            formType: "web_registration",
            firstname: form.firstname,
            lastname: form.lastname,
            mobile: form.mobile,
            email: form.email,
            phone: form.phone,
            branch: storPostcode.getBranchFromPostcode.Branch,
            postcode: storPostcode.currentPostcode,
            inbound: storPostcode.inBoundPostcode,
            client: false
        })

            form.firstname = '',
            form.lastname = '',
            form.mobile = '',
            form.email = '',
            form.phone = '',
            form.postcode = '',
        
            router.push('/regthanks')
      }
    }

    function doCheck(postcode:string) {
      console.log("doCheck being called", postcode);
      storPostcode.setPostcode(postcode);
    }

    </script> -->
    