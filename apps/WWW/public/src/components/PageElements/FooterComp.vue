<template>
    <footer class= "bg-gray-100 dark:bg-gray-700">
        <div class="mx-auto w-full max-w-screen-xl">
            <div class="grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-4 border-b border-slate-200">
                <div class="text-gray-500 dark:text-gray-400 font-thin  text-sm ">
                </div>
            </div>
        </div>
        <div class="mx-auto w-full max-w-screen-xl">
        <div class="grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-4 border-b border-slate-200">
            <div>
                <h2 class="mb-4 text-sm font-semibold text-gray-900 uppercase dark:text-white">ClickHelp &trade;</h2>
                <div>
                    <p class="text-gray-500 dark:text-gray-400 font-thin text-sm">
                        <strong>Registered Office:</strong><br /> 
                        Letterbox Projects Ltd<br />
                        20 Wenlock Road<br />
                        London<br /> 
                        N1 7GU<br />
                    </p>
                    <br />
                    <p class="text-gray-500 dark:text-gray-400 font-thin text-sm">
                        <strong>Company Registration:</strong> 15423114 <br />
                        <strong>VAT Registration:</strong> TBC <br />
                    </p>
                </div>
            </div>
            <div>
                <h2 class="mb-4 text-sm font-semibold text-gray-900 uppercase dark:text-white">Company</h2>
                <ul class="text-gray-500 dark:text-gray-400 font-thin  text-sm ">
                    <li class="mb-2">
                        <router-link to="/company/about" class=" hover:underline" @click="storMain.selectedTab = 1">About</router-link>
                    </li>
                    <li class="mb-2">
                        <router-link to="/company/blog" class="hover:underline" @click="storMain.selectedTab = 2">Blog</router-link>
                    </li>
                    <li class="mb-2">
                        <router-link to="/company/careers" class="hover:underline" @click="storMain.selectedTab = 3">Careers</router-link>
                    </li>
                    <li class="mb-2">
                        <router-link to="/company/branchlocator" class="hover:underline" @click="storMain.selectedTab = 4">Locations</router-link>
                    </li>        
                </ul>
            </div>
            <div>
                <h2 class="mb-4 text-sm font-semibold text-gray-900 uppercase dark:text-white">Questions</h2>
                <ul class="text-gray-500 dark:text-gray-400 font-thin text-sm">
                    <li class="mb-2">
                        <router-link to="/questions/support" class="hover:underline" @click="storMain.selectedTab = 1">Support</router-link>
                    </li>
                    <li class="mb-2">
                        <router-link to="/questions/faqs" class="hover:underline" @click="storMain.selectedTab = 2">FAQ's</router-link>
                    </li>       
                    <li class="mb-2">
                        <router-link to="/questions/media" class="hover:underline" @click="storMain.selectedTab = 3">Media</router-link>
                    </li>
                    <li class="mb-2">
                        <router-link to="/questions/sitemap" class="hover:underline" @click="storMain.selectedTab = 4">SiteMap</router-link>
                    </li>
                </ul>
            </div>
            <div>
                <h2 class="mb-4 text-sm font-semibold text-gray-900 uppercase dark:text-white">Legal</h2>
                <ul class="text-gray-500 dark:text-gray-400 font-thin text-sm">
                    <li class="mb-2">
                        <router-link to="/legal/termsandconditions/" class="hover:underline" @click="storMain.selectedTab = 1">Terms &amp; Conditions</router-link>
                    </li>
                    <li class="mb-2">
                        <router-link to="/legal/privacy" class="hover:underline" @click="storMain.selectedTab = 2">Privacy Policy</router-link>
                    </li>
                    <li class="mb-2">
                        <router-link to="/legal/GDPR" class="hover:underline" @click="storMain.selectedTab = 3">GDPR</router-link>
                    </li>
                    <li class="mb-2">
                        <router-link to="/legal/cookies" class="hover:underline" @click="storMain.selectedTab = 4">Cookies</router-link>
                    </li>
                    
                </ul>
            </div>       
        </div>
        <div class="px-4 py-6 md:flex md:items-center md:justify-between">
            <span class="font-thin text-sm text-gray-500 dark:text-gray-300 sm:text-center">Copyright © 2024 <a href="https://clickhelp.uk/">Letterbox Projects Ltd</a>. All Rights Reserved.
            </span>
            <div class="flex mt-4 sm:justify-center md:mt-0 space-x-5 rtl:space-x-reverse font-thin text-sm">
                <router-link to="/company/branchlocator" class="text-gray-400 hover:text-gray-900 dark:hover:text-white">
                    <span class="">{{}}</span> 
                </router-link>
            </div>
        </div>
        </div>
    </footer>

</template>

<script setup lang="ts">
// import { useMainStore } from '@/stores/storMain';
// const storMain = useMainStore();

</script>