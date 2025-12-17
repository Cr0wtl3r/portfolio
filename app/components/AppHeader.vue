<script setup lang="ts">
import { useContent } from '~/composables/useContent'
import { usePdfExport } from '~/composables/usePdfExport'
import { Download } from 'lucide-vue-next'

const { content, toggleLang, currentLang } = useContent()
const { generatePdf } = usePdfExport()
const props = defineProps<{ currentSection: string }>()
const emit = defineEmits(['navigate'])

const navItems = [
    { id: 'about', cmd: '> whoami' },
    { id: 'skills', cmd: '> cat skills.txt' },
    { id: 'projects', cmd: '> ls projects/' },
    { id: 'experience', cmd: '> cat work.log' },
    { id: 'contact', cmd: '> ./contact.sh' }
]

const headerPath = computed(() => {
    if (props.currentSection === 'home') return '~'
    return `~/${props.currentSection}`
})
</script>

<template>
  <header class="sticky top-0 z-40 bg-red-team-bg/95 backdrop-blur-md border-b border-red-900/30 transition-all duration-300">
    <div class="max-w-7xl mx-auto px-4 py-3 font-mono text-sm md:text-base">
        <!-- Line 1: Path -->
        <div class="text-red-700 font-bold mb-1 flex justify-between">
            <span>┌──(cr0wtl3r@Cr0wtl3r)-[{{ headerPath }}]</span>
        </div>

        <!-- Line 2: Commands -->
        <div class="flex items-center gap-3 overflow-x-auto no-scrollbar w-full pb-1 md:pb-0">
            <span class="text-red-700 font-bold shrink-0">└─$</span>
            
            <nav class="flex items-center gap-2 md:gap-4 flex-nowrap">
                <button 
                  v-for="item in navItems" 
                  :key="item.id"
                  @click="$emit('navigate', item.id)"
                  class="px-3 py-1 rounded-sm border whitespace-nowrap transition-all duration-200 font-semibold"
                  :class="[
                      currentSection === item.id 
                      ? 'bg-red-900/20 text-red-500 border-red-700 shadow-[0_0_10px_rgba(185,28,28,0.2)]' 
                      : 'bg-transparent text-red-800/70 border-transparent hover:text-red-500 hover:border-red-900/40 hover:bg-red-900/5'
                  ]"
                >
                    {{ item.cmd }}
                </button>
            </nav>

            <div class="h-4 w-px bg-red-900/30 mx-2 shrink-0 hidden md:block"></div>

            <button 
                @click="generatePdf"
                class="hidden md:flex items-center gap-1.5 px-3 py-1 border border-red-900/40 rounded hover:bg-red-900/10 text-red-600 transition-colors text-xs font-bold"
                title="Download CV"
            >
                <Download class="w-3.5 h-3.5" />
                PDF
            </button>
            
            <button 
                @click="toggleLang" 
                class="ml-auto md:ml-0 text-xs font-bold px-2 py-1 border border-red-900/50 rounded hover:bg-red-900/20 text-red-600 transition-colors shrink-0 flex items-center gap-1"
                title="Toggle Language"
            >
                <div class="w-2 h-2 rounded-full" :class="currentLang === 'pt' ? 'bg-green-500' : 'bg-blue-500'"></div>
                {{ currentLang.toUpperCase() }}
            </button>
        </div>
    </div>
  </header>
</template>

<style scoped>
.no-scrollbar::-webkit-scrollbar { display: none; }
.no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
</style>
