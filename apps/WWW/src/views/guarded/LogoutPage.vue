<template>
  <main>
    <!-- Hero Section-->
    <section> 
        <div>
          <h1 class="p-5 mx-10 bg-slate-600 text-gray-300 shadow-2xl">Bookings Page</h1>

          <div class="m-16 p-16 bg-slate-200 min-h-5">
            
            <p>Current  Email: {{ storAuth.user.email }}</p>
            <p>Current  id: {{ storAuth.user.id }}</p> <br />
                
            <router-link to="/dashboard">Go to Home</router-link><br /><br />
            <router-link to="/diary">Go to Diary</router-link><br /><br />
            <router-link to="/clienthelp">Go to Help</router-link><br /><br />
            <router-link to="/jobs">Go to Jobs</router-link><br /><br />
            <router-link to="/messages">Go to Messages</router-link><br /><br />

          </div>
          



         


        </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import { useStoreAuth } from '@/stores/storeAuth';
const storAuth = useStoreAuth();



</script>

<style scoped></style>