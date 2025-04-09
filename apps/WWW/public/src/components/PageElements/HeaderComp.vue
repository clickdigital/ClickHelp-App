<template>
  <header class="absoloute inset-x-0 top-0 z-100 bg-slate-100">
    <nav 
      class="mx-auto flex max-w-7xl items-center justify-between p-2 lg:px-8"
      role="navigation" aria-label="Main Navigation"
    >
        <div class="flex lg:flex-1">
          <div>
            <router-link to="/home" class="-m-1.5 p-1.5"> 
              <img src="../../assets/logo.svg" class="h-12" alt="clickhelp logo"/> 
            </router-link>
        </div>
      </div>
      <div class="flex lg:hidden">
        <button type="button" class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700" @click="mobileMenuOpen = true">
          <span class="sr-only">Open main menu</span>
          <Bars3Icon class="h-6 w-6" aria-hidden="true" />
        </button>
      </div>
      <div class="hidden lg:flex lg:gap-x-12">
        <router-link
            v-for="item in navigation"
            :key="item.name"
            :to="item.href"
            @click="storMain.selectedTab = 1"
            class="font-dm text-sm font-normal leading-6 text-gray-700 hover:text-gray-900"
            >{{ item.name }}
        </router-link>
      </div>
      
      <div class="hidden lg:flex lg:flex-1 lg:justify-end">
       
        
        <div><!-- <div v-if="!storAuth.user.id"></div> -->
          <router-link to="/login" class="font-dm text-sm font-normal leading-6  text-gray-700 hover:text-gray-900 p-2">Login<span aria-hidden="true"></span></router-link>
        </div>
        <!-- <div class="flex" v-if="storAuth.user.id">
            <div class="font-dm text-sm font-normal leading-6  text-gray-700 hover:text-gray-900 p-2">{{ storAuth.user.email}}</div>
            <router-link to="/logout" @click="doLogout" class="font-dm text-sm font-normal leading-6  text-gray-700 hover:text-gray-900 p-2">Logout<span aria-hidden="true"></span></router-link>
        </div> -->
      </div>
    </nav>

    <Dialog as="div" class="lg:hidden" @close="mobileMenuOpen = false" :open="mobileMenuOpen">
      <div class="fixed inset-0 z-50" />
        <DialogPanel class="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div class="flex items-center justify-between">
            <a href="#" class="-m-1.5 p-1.5"> <span class="sr-only">ClickHelp &trade;</span> <img class="h-8 w-auto" src="../../assets/logo.svg" alt="ClickHelp Logo" /></a>
            <!-- "https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" -->
            <button type="button" class="-m-2.5 rounded-md p-2.5 text-gray-700" @click="mobileMenuOpen = false">
              <span class="sr-only">Close menu</span>
              <XMarkIcon class="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div class="mt-6 flow-root">
            <div class="-my-6 divide-y divide-gray-500/10">
              <div class="space-y-2 py-6">
                <router-link v-for="item in navigation" :key="item.name" :to="item.href" class="-mx-3 block font-dm text-sm font-normal leading-6 text-gray-700 hover:text-gray-900" >{{ item.name }}</router-link>
              </div>

              <div class="-mx-3 block font-dm text-sm font-normal leading-6 text-gray-700 hover:text-gray-900" v-if="!storAuth.user.id">
                <router-link to="/login" class="font-dm text-sm font-normal leading-6  text-gray-700 hover:text-gray-900 p-2">Login<span aria-hidden="true"></span></router-link>
              </div>
              <div class="-mx-3 block font-dm text-sm font-normal leading-6 text-gray-700 hover:text-gray-900" v-if="storAuth.user.id">
                  <div class="font-dm text-sm font-normal leading-6  text-gray-700 hover:text-gray-900 p-2">{{ storAuth.user.email}}</div>
                  <router-link to="/logout" @click="doLogout" class="font-dm text-sm font-normal leading-6  text-gray-700 hover:text-gray-900 p-2">Logout<span aria-hidden="true"></span></router-link>
              </div>

            </div>
          </div>
        </DialogPanel>
    </Dialog>

  </header>

  
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { ref } from 'vue'
import { Dialog, DialogPanel } from '@headlessui/vue'
import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline'

// import { useStoreAuth } from '@/stores/storeAuth'
// const storAuth = useStoreAuth()

// import { useMainStore } from '@/stores/storMain'
// const storMain = useMainStore();

const navigation = [
  { name: 'Why us', href: '/whyus/skilled' },              
  { name: 'How we help', href: '/howcanwehelp/helper' },   
  { name: 'What we do', href: '/whatwedo/cleaning' },        
  { name: 'Join us', href: '/joinus/newcustomer' },                
  { name: 'Contact', href: '/Contact/locations' }          
]

const doLogout = () => {
  // storAuth.logoutUser();
}

const mobileMenuOpen = ref(false)
</script>

<style scoped></style>
