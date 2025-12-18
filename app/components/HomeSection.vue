<script setup lang="ts">
import GlitchText from './GlitchText.vue'
import TypingEffect from './TypingEffect.vue'

const { content } = useContent()
const { profile, fetchProfile } = useGithub()
const emit = defineEmits(['navigate'])

onMounted(() => {
    fetchProfile()
})
</script>

<template>
  <div class="flex flex-col justify-center min-h-[50vh] md:min-h-[65vh] py-10 relative">
      
      <div class="flex flex-col-reverse md:flex-row justify-between items-start gap-4 md:gap-12 mb-6">
          <GlitchText :text="'ALBINO M. SANTOS'" class="text-4xl md:text-6xl lg:text-7xl leading-tight max-w-[90%] md:max-w-[65%]" />

          <div v-if="profile" class="relative group md:-mt-8 lg:-mt-12 shrink-0 self-end md:self-start">
              <div class="absolute -inset-1 bg-linear-to-r from-red-800 via-red-600 to-red-900 rounded-full opacity-70 blur-sm group-hover:opacity-100 group-hover:blur-md transition-all duration-500"></div>
              <img 
                loading="lazy"
                :src="profile.avatar_url" 
                :alt="profile.name" 
                class="relative w-32 h-32 md:w-64 md:h-64 lg:w-80 lg:h-80 rounded-full border-4 border-red-team-bg object-cover shadow-2xl z-10 transition-transform duration-500 group-hover:scale-[1.02]"
              />
          </div>
      </div>
      
      <h2 class="text-lg md:text-2xl text-red-500 mb-8 font-bold tracking-wide uppercase flex items-center gap-2">
        <span class="w-2 h-2 bg-red-600 rounded-full animate-pulse"></span>
        {{ content.homeSubtitle }}
      </h2>

      <div class="mb-10 w-full max-w-3xl border-l-2 border-red-900/40 pl-4 py-3 bg-[#0a0505]/80 rounded-r shadow-sm">
        <TypingEffect :lines="content.typingText" />
      </div>

      <button 
        @click="$emit('navigate', 'about')"
        class="w-fit px-8 py-3 bg-[#0f0505] text-red-500 border border-red-900/40 rounded-sm font-mono text-sm md:text-base hover:bg-[#1a0505] hover:border-red-600 hover:text-red-400 transition-all active:scale-95 shadow-[0_0_15px_rgba(127,29,29,0.1)] hover:shadow-[0_0_20px_rgba(220,38,38,0.3)] flex items-center gap-2 group"
      >
        <span class="group-hover:translate-x-1 transition-transform">➜</span>
        {{ content.viewProfileText }}
      </button>

  </div>
</template>
