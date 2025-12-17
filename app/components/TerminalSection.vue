<script setup lang="ts">
defineProps<{ id: string, titlePrompt: string }>()
</script>

<template>
  <section :id="id" class="mb-20 scroll-mt-28 opacity-0 animate-fade-in-up">
    <h2 class="text-xl md:text-2xl font-bold mb-8 text-red-700 font-mono border-b border-red-900/30 pb-2 flex items-center gap-2">
      <span v-html="titlePrompt"></span>
    </h2>
    <slot />
  </section>
</template>

<style scoped>
.animate-fade-in-up {
    animation: fadeInUp 0.8s ease-out forwards;
}
@keyframes fadeInUp {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
}
</style>
