  <template>
    <section>
        <tabMenu :records="menu" :title="title" />
      </section>
     <main class="mx-auto w-full max-w-screen-xl my-3">
        <RouterView />
      </main>
    </template>

<script setup lang="ts">
    
  import tabMenu from "@/components/tabComp.vue"

  const title = "Company";
  const menu = [
    { name: "About", href: "/company/about", active: true },
    { name: "Blog", href: "/company/blog", active: false },
    { name: "Careers", href: "/company/careers", active: false },
    { name: "Locations", href: "/company/branchlocator", active: false },
  ];

  </script>
  
<style scoped>
</style>