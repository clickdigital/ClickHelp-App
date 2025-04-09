import { createRouter, createWebHistory, type RouteRecordRaw } from "vue-router";
import HomeView from "@/views/ExampleForm.vue";

const routes: Array<RouteRecordRaw> = [
  { path: '',redirect: '/home' },
  { path: '/home',component: HomeView },
  { path: '/', name: 'home', component: HomeView },

  //general
  { path: '/questions/sitemap', name: 'sitemap', component: () => import('@/views/public/Footer/questions/SiteMapPage.vue') },
  { path: '/branchlocator', name: 'branchlocator', component: () => import("@/views/public/Footer/branch/BranchLocatorPage.vue") },
  
  //Sections/WhyUS
  { path: '/whyus', name: 'whyus', component: () => import('@/views/public/Sections/WhyUs/WhyUsPage.vue'),
    children: [ 
      {path: 'skilled', name: 'skilled', component: () => import('@/views/public/Sections/WhyUs/SkilledPage.vue') },
      {path: 'trusted', name: 'trusted', component: () => import('@/views/public/Sections/WhyUs/TrustedPage.vue')},
      {path: 'safe', name: 'safe', component: () => import('@/views/public/Sections/WhyUs/SafePage.vue')},
    ]},

   //Sections/HowCanWeHelp
   { path: '/howcanwehelp', name: 'howcanwehelp', component: () => import('@/views/public/Sections/HowWeHelp/HowHelpPage.vue'),
    children: [ 
      {path: 'helper', name: 'helper', component: () => import('@/views/public/Sections/HowWeHelp/HelpersPage.vue') },
      {path: 'inside', name: 'inside', component: () => import('@/views/public/Sections/HowWeHelp/InsidePage.vue') },
      {path: 'outside', name: 'outside', component: () => import('@/views/public/Sections/HowWeHelp/OutsidePage.vue') },
  ]},
 //Sections/WhatWeDo
{ path: '/whatwedo', name: 'whatwedo', component: () => import('@/views/public/Sections/WhatWeDo/WhatWeDoPage.vue'),
    children: [ 
      {path: 'cleaning', name: 'cleaning', component: () => import('@/views/public/Sections/WhatWeDo/CleanersPage.vue') },
      {path: 'gardening', name: 'gardening', component: () => import('@/views/public/Sections/WhatWeDo/GardenersPage.vue') },
      {path: 'fixing', name: 'fixing', component: () => import('@/views/public/Sections/WhatWeDo/FixersPage.vue') },
      {path: 'decorating', name: 'decorating', component: () => import('@/views/public/Sections/WhatWeDo/DecoratorsPage.vue') },
      {path: 'helping', name: 'helping', component: () => import('@/views/public/Sections/WhatWeDo/HelpersPage.vue') },
  ]},
//Sections/customers
{ path: '/joinus', name: 'JoinUs', component: () => import('@/views/public/Sections/JoinUs/JoinUsPage.vue') ,
  children: [ 
    {path: 'newcustomer', name: 'newcustomer', component: () => import('@/views/public/Sections/JoinUs/JoinAsCustomerPage.vue') },
    {path: 'newstaff', name: 'newstaff', component: () => import('@/views/public/Sections/JoinUs/JoinAsStaffPage.vue') },
    {path: 'register', name: 'register', component: () => import('@/views/public/forms/RegisterPage.vue') },
    {path: 'apply', name: 'apply', component: () => import('@/views/public/forms/ApplicationPage.vue') },
]},
//Sections/contact
{ path: '/contact', name: 'letstalk', component: () => import('@/views/public/Sections/Contact/ContactPage.vue'),
  children: [ 
    {path: 'locations', name: 'welcome', component: () => import('@/views/public/Sections/Contact/WelcomePage.vue')},
]},
//Footer/company
{ path: '/company', name: 'company', component: () => import('@/views/public/Footer/company/_CompanySection.vue'),
    children: [ 
      {path: 'about', name: 'about', component: () => import('@/views/public/Footer/company/AboutPage.vue') },
      {path: 'blog', name: 'blog', component: () => import('@/views/public/Footer/company/BlogPage.vue')},   
      {path: 'blogDetail/:id', props: true, name: 'BlogDetail', component: () => import('@/views/public/Footer/company/BlogDetailPage.vue')},
      //props: true, // This will pass route params as props to the component
      {path: 'careers', name: 'careers', component: () => import('@/views/public/Footer/company/CareersPage.vue')},
      { path: 'branchlocator', name: 'branchlocator', component: () => import('@/views/public/Footer/branch/BranchLocatorPage.vue') },
    ]},
//Footer/legal
{ path: '/legal', name: 'legal', component: () => import('@/views/public/Footer/legal/_LegalSection.vue'),
    children: [ 
      {path: 'termsandconditions', name: 'terms', component: () => import('@/views/public/Footer/legal/TermsPage.vue') },
      {path: 'privacy', name: 'privacy',component: () => import('@/views/public/Footer/legal/PrivacyPolicyPage.vue')},
      {path: 'cookies', name: 'cookies',component: () => import('@/views/public/Footer/legal/CookiesPage.vue')},
      {path: 'GDPR', name: 'GDPR',component: () => import('@/views/public/Footer/legal/GDPRPage.vue')},
    ]},
//Footer/questions
{ path: '/questions', name: 'info', component: () => import('@/views/public/Footer/questions/_QuestionsSection.vue'),
    children: [ 
      { path: 'support', name: 'consupporttact', component: () => import('@/views/public/Footer/questions/SupportPage.vue')},
      { path: 'faqs', name: 'faqs', component: () => import('@/views/public/Footer/questions/FAQsPage.vue')},
      { path: 'media', name: 'media', component: () => import('@/views/public/Footer/questions/MediaPage.vue')},
      { path: 'sitemap', name: 'sitemap', component: () => import('@/views/public/Footer/questions/SiteMapPage.vue')},
    ]},

//Guarded 
{ path: '/dashboard', name: 'dashboard', component: () => import('@/views/guarded/DashboardPage.vue'),meta: { requiresAuth: true } },
{ path: '/diary', name: 'diary', component: () => import('@/views/guarded/DiaryPage.vue'),meta: { requiresAuth: true } },
{ path: '/clienthelp', name: 'clienthelp', component: () => import('@/views/guarded/HelpDeskPage.vue'),meta: { requiresAuth: true } },
{ path: '/jobs', name: 'jobs', component: () => import('@/views/guarded/JobsPage.vue'),meta: { requiresAuth: true } },
{ path: '/messages', name: 'messages', component: () => import('@/views/guarded/MessagePage.vue'),meta: { requiresAuth: true } },

//TODO: Add relevant pages to these links
{ path: '/bookings', name: 'bookings', component: () => import('@/views/guarded/BookingsPage.vue'),meta: { requiresAuth: true } },
{ path: '/account', name: 'account', component: () => import('@/views/guarded/AccountPage.vue'),meta: { requiresAuth: true } },
{ path: '/logout', name: 'logout', component: () => import('@/views/guarded/LogoutPage.vue'),meta: { requiresAuth: true } },
{ path: '/myprofile', name: 'myprofile', component: () => import('@/views/guarded/MyProfilePage.vue'),meta: { requiresAuth: true } },

];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),    //note BASE_URL comes from vite.config.ts
  routes,
});

export default router;

