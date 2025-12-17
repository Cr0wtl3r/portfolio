<script setup lang="ts">
import { useContent } from '~/composables/useContent'
const { content } = useContent()
</script>

<template>
  <div class="text-gray-300 space-y-6 max-w-3xl leading-relaxed text-justify font-sans md:font-mono text-sm md:text-base">
    <p v-for="(paragraph, i) in content.aboutOverview" :key="i">
        {{ paragraph }}
    </p>
    <div class="mt-8 p-6 border-l-4 border-red-900/60 bg-[#0c0505] italic text-gray-400 rounded-r-md">
        <p>"Adversarial thinking is the key to defense. To secure a system, you must first understand how to break it."</p>
    </div>
  </div>
</template>
