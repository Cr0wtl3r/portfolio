<script setup lang="ts">
const year = new Date().getFullYear()
</script>
<template>
  <footer class="border-t border-red-900/20 bg-[#020000] py-8 mt-24">
    <div class="max-w-4xl mx-auto text-center font-mono text-sm text-gray-600 px-4">
        <p class="text-red-900/50 mb-2 uppercase tracking-widest text-xs md:text-sm">
            Cr0wtl3r // Offensive Security Portfolio // All rights reserved.
        </p>
        <p>Copyright © {{ year }} Albino M. Santos</p>
    </div>
  </footer>
</template>
