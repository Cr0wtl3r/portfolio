<script setup lang="ts">
import { useContent } from '~/composables/useContent'
const { content } = useContent()
</script>

<template>
  <div class="space-y-12 relative pl-3 md:pl-6 border-l border-red-900/20 ml-2 md:ml-4">
    <div v-for="(exp, i) in content.experience" :key="i" class="relative pl-8 md:pl-10 group">
        <span class="absolute -left-[7px] top-2 w-3.5 h-3.5 bg-red-team-bg border-2 border-red-900 rounded-full group-hover:bg-red-900 transition-colors duration-300 shadow-[0_0_5px_rgba(185,28,28,0.5)]"></span>
        
        <div class="flex flex-col md:flex-row md:items-baseline justify-between mb-2">
            <h3 class="text-xl font-bold text-red-600 group-hover:text-red-500 transition-colors">{{ exp.title }}</h3>
            <span class="text-xs md:text-sm text-red-900/80 font-mono bg-red-900/5 px-2 py-0.5 rounded border border-red-900/10 whitespace-nowrap mt-1 md:mt-0 w-fit">{{ exp.duration }}</span>
        </div>
        
        <h4 class="text-lg text-gray-200 font-semibold mb-3">{{ exp.company }}</h4>
        
        <ul class="space-y-2 text-gray-400 text-sm leading-relaxed">
            <li v-for="(desc, j) in exp.description" :key="j" class="flex items-start">
               <span class="text-red-900 mr-2 mt-1.5 text-[0.6rem]">●</span>
               <span>{{ desc }}</span>
            </li>
        </ul>
    </div>
  </div>
</template>
