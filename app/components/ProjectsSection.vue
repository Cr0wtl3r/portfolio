<script setup lang="ts">
import { useContent } from '~/composables/useContent'
import { useGithub } from '~/composables/useGithub'
import { ExternalLink, Star, GitFork, BookOpen } from 'lucide-vue-next'

const { content } = useContent()
const { repos, fetchRepos } = useGithub()

onMounted(() => {
    fetchRepos()
})
</script>

<template>
  <div>
    <p class="text-gray-400 mb-6 italic">Featured repositories from <a :href="content.contact.github" target="_blank" class="text-red-500 hover:underline">GitHub</a>:</p>
    
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div v-for="repo in repos" :key="repo.id" 
            class="group bg-[#0a0a0a] border border-red-900/20 p-6 rounded-sm hover:border-red-700/60 transition-all duration-300 flex flex-col h-full relative overflow-hidden shadow-sm hover:shadow-[0_0_15px_rgba(127,29,29,0.15)]"
        >
            <div class="absolute inset-0 bg-linear-to-br from-transparent to-red-900/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>

            <div class="flex justify-between items-start mb-3 relative z-10">
                <div class="flex items-center gap-2">
                    <BookOpen class="w-4 h-4 text-red-700" />
                    <h3 class="font-bold text-gray-200 text-lg group-hover:text-red-500 transition-colors truncate max-w-[200px]">{{ repo.name }}</h3>
                </div>
                <span v-if="repo.language" class="text-[10px] uppercase border border-red-900/30 px-2 py-0.5 rounded text-red-800 font-bold bg-[#0f0505]">{{ repo.language }}</span>
            </div>
            
            <p class="text-gray-400 text-sm grow mb-6 relative z-10 line-clamp-3 leading-relaxed">
                {{ repo.description || 'No description provided.' }}
            </p>

            <div class="flex justify-between items-center text-xs text-red-900 font-mono relative z-10 border-t border-red-900/10 pt-4 mt-auto w-full">
                <div class="flex gap-4">
                    <span class="flex items-center gap-1.5"><Star class="w-3.5 h-3.5"/> {{ repo.stargazers_count }}</span>
                    <span class="flex items-center gap-1.5"><GitFork class="w-3.5 h-3.5"/> {{ repo.forks_count }}</span>
                </div>
                <a :href="repo.html_url" target="_blank" class="flex items-center gap-1.5 font-bold hover:text-red-500 transition-colors">
                    SOURCE <ExternalLink class="w-3.5 h-3.5" />
                </a>
            </div>
        </div>
    </div>
    
    <div class="mt-8 text-center">
        <a :href="content.contact.github" target="_blank" class="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-red-500 transition-colors border-b border-transparent hover:border-red-500 pb-0.5">
            View all projects on GitHub <ExternalLink class="w-3 h-3" />
        </a>
    </div>
  </div>
</template>
