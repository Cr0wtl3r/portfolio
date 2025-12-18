import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  srcDir: 'app',

  vite: {
    plugins: [
      tailwindcss(),
    ],
  },

  modules: [
    '@vueuse/nuxt',
  ],

  app: {
    head: {
      title: 'Cr0wtl3r | Offensive Security Portfolio',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Portfolio of Albino M. Santos (Cr0wtl3r) - Offensive Security, Pentest, IAM' },
        { property: 'og:type', content: 'website' },
        { property: 'og:title', content: 'Cr0wtl3r | Offensive Security Portfolio' },
        { property: 'og:description', content: 'Pentester Jr | Red Team Operator | Bug Hunter | Tool Developer' },
        { property: 'og:image', content: 'https://avatars.githubusercontent.com/u/108479576?v=4' },
        { name: 'twitter:card', content: 'summary' },
        { name: 'twitter:title', content: 'Cr0wtl3r | Offensive Security Portfolio' },
        { name: 'twitter:description', content: 'Pentester Jr | Red Team Operator | Bug Hunter | Tool Developer' },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600;700;800&display=swap' }
      ]
    }
  }
})
