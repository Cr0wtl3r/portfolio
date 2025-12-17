<script setup lang="ts">
import '~/assets/css/main.css'

const { content } = useContent()
const currentSection = ref('home')

const handleNavigate = (id: string) => {
    currentSection.value = id
    const element = document.getElementById(id)
    if (element) {
        const headerOffset = 100
        const elementPosition = element.getBoundingClientRect().top
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset
        
        window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
        })
    }
}

// Simple Intersection Observer to update current section on scroll
let observer: IntersectionObserver | null = null

onMounted(() => {
    const options = {
        root: null,
        rootMargin: '-50% 0px -50% 0px', // Active when element is in middle of screen
        threshold: 0
    }
    
    observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                currentSection.value = entry.target.id
            }
        })
    }, options)

    document.querySelectorAll('section[id]').forEach(section => {
        observer?.observe(section)
    })
})

onUnmounted(() => {
    observer?.disconnect()
})
</script>

<template>
  <div class="min-h-screen bg-red-team-bg text-gray-300 font-mono selection:bg-red-900/30 selection:text-white pb-20">
    <!-- Scanlines overlay -->
    <div class="scanlines fixed inset-0 z-50 pointer-events-none opacity-20"></div>

    <AppHeader :current-section="currentSection" @navigate="handleNavigate" />

    <main class="max-w-5xl mx-auto px-6 pt-12 md:pt-16 pb-12 space-y-32">
        
        <TerminalSection id="home" :title-prompt="content.headerPrompt">
            <HomeSection @navigate="handleNavigate" />
        </TerminalSection>

        <TerminalSection id="about" :title-prompt="content.aboutPrompt">
            <AboutSection />
        </TerminalSection>

        <TerminalSection id="skills" :title-prompt="content.skillsPrompt">
            <SkillsSection />
        </TerminalSection>

        <TerminalSection id="projects" :title-prompt="content.projectsPrompt">
            <ProjectsSection />
        </TerminalSection>

        <TerminalSection id="experience" :title-prompt="content.experiencePrompt">
            <ExperienceSection />
        </TerminalSection>

        <TerminalSection id="contact" :title-prompt="content.contactPrompt">
             <div class="max-w-2xl bg-[#0a0a0a] p-8 border border-red-900/30 rounded-sm">
                <GlitchText text="CONTACT PROTOCOLS" class="text-xl mb-8 block" />
                
                <div class="space-y-4 font-mono text-base md:text-lg">
                  <div class="flex flex-col md:flex-row md:items-center gap-2">
                    <span class="w-32 text-red-900 font-bold shrink-0">EMAIL ::</span>
                    <a :href="`mailto:${content.contact.email}`" class="text-red-700 hover:text-red-500 hover:underline transition-colors">{{ content.contact.email }}</a>
                  </div>
                  <div class="flex flex-col md:flex-row md:items-center gap-2">
                    <span class="w-32 text-red-900 font-bold shrink-0">LINKEDIN ::</span>
                     <a :href="content.contact.linkedin" target="_blank" class="text-red-700 hover:text-red-500 hover:underline transition-colors">Albino M. Santos</a>
                  </div>
                  <div class="flex flex-col md:flex-row md:items-center gap-2">
                    <span class="w-32 text-red-900 font-bold shrink-0">GITHUB ::</span>
                     <a :href="content.contact.github" target="_blank" class="text-red-700 hover:text-red-500 hover:underline transition-colors">Cr0wtl3r</a>
                  </div>
                  <div class="pt-6 mt-6 border-t border-red-900/20 text-gray-600 text-sm italic">
                    "Exploit knowledge. Patch ignorance."
                  </div>
                </div>
              </div>
        </TerminalSection>
    </main>
    
    <AppFooter />
  </div>
</template>
