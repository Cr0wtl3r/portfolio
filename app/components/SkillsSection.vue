<script setup lang="ts">
import { useContent } from '~/composables/useContent'
const { content } = useContent()
</script>

<template>
  <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
    <div v-for="(category, idx) in content.skillsCategories" :key="idx" 
         class="bg-[#0a0a0a] p-6 rounded-sm border border-red-900/20 hover:border-red-800/50 transition-all duration-300 group relative overflow-hidden shadow-sm hover:shadow-[0_0_15px_rgba(69,10,10,0.3)]">
         
         <div class="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-red-900/20 group-hover:border-red-600 transition-colors duration-500"></div>
         <div class="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-red-900/20 group-hover:border-red-600 transition-colors duration-500"></div>

        <h3 class="text-lg font-bold mb-6 text-red-700 uppercase tracking-wider border-b border-red-900/10 pb-2">{{ category.title }}</h3>
        <ul class="space-y-2.5">
            <li v-for="item in category.list" :key="item" class="text-gray-400 text-sm md:text-base flex items-start group-hover:text-gray-300 transition-colors">
                <span class="text-red-900 mr-3 opacity-70 group-hover:opacity-100 transition-opacity">➜</span>
                <span>{{ item }}</span>
            </li>
        </ul>
    </div>
  </div>

  <!-- Certifications sub-section -->
  <div class="mt-12">
      <h3 class="text-lg font-bold mb-6 text-red-700 uppercase tracking-wider border-b border-red-900/10 pb-2">Certifications & Education</h3>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
         <div v-for="cert in content.certifications" :key="cert" 
              class="bg-[#0c0505] p-4 border-l-2 border-red-900/40 text-sm text-gray-400 hover:bg-[#150505] hover:border-red-600 transition-colors">
            {{ cert }}
         </div>
      </div>
  </div>
</template>
