<script setup lang="ts">
defineProps<{ text: string }>()
</script>

<template>
  <div class="glitch relative inline-block text-red-team-primary font-bold tracking-tighter" :data-text="text">
    {{ text }}
  </div>
</template>

<style scoped>
.glitch::before,
.glitch::after {
  content: attr(data-text);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: var(--color-red-team-bg); 
}

.glitch::before {
  left: 2px;
  text-shadow: -2px 0 var(--color-red-team-dim);
  animation: glitch-1 2s infinite linear alternate-reverse;
  clip-path: polygon(0 0, 100% 0, 100% 35%, 0 35%);
}

.glitch::after {
  left: -2px;
  text-shadow: -2px 0 #7f1d1d;
  animation: glitch-2 2.5s infinite linear alternate-reverse;
  clip-path: polygon(0 65%, 100% 65%, 100% 100%, 0 100%);
}

@keyframes glitch-1 {
  0% { clip-path: inset(20% 0 80% 0); }
  20% { clip-path: inset(60% 0 10% 0); }
  40% { clip-path: inset(40% 0 50% 0); }
  60% { clip-path: inset(80% 0 5% 0); }
  80% { clip-path: inset(10% 0 70% 0); }
  100% { clip-path: inset(30% 0 20% 0); }
}

@keyframes glitch-2 {
  0% { clip-path: inset(10% 0 60% 0); }
  20% { clip-path: inset(30% 0 20% 0); }
  40% { clip-path: inset(70% 0 10% 0); }
  60% { clip-path: inset(20% 0 50% 0); }
  80% { clip-path: inset(60% 0 40% 0); }
  100% { clip-path: inset(40% 0 80% 0); }
}
</style>
