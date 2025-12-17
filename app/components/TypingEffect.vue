<script setup lang="ts">
const props = defineProps<{ lines: string[] }>()

const currentText = ref('')
const lineIndex = ref(0)
const charIndex = ref(0)
const isDeleting = ref(false)
const pause = ref(false)

const typeSpeed = 50
const deleteSpeed = 30
const delayAfterType = 2000
const delayAfterDelete = 500

const typeLoop = () => {
    if (pause.value) return

    const currentLine = props.lines[lineIndex.value]

    if (isDeleting.value) {
        currentText.value = currentLine.substring(0, charIndex.value - 1)
        charIndex.value--
    } else {
        currentText.value = currentLine.substring(0, charIndex.value + 1)
        charIndex.value++
    }

    if (!isDeleting.value && charIndex.value === currentLine.length) {
        isDeleting.value = true
        pause.value = true
        setTimeout(() => {
            pause.value = false
            typeLoop()
        }, delayAfterType)
    } else if (isDeleting.value && charIndex.value === 0) {
        isDeleting.value = false
        lineIndex.value = (lineIndex.value + 1) % props.lines.length
        pause.value = true
        setTimeout(() => {
            pause.value = false
            typeLoop()
        }, delayAfterDelete)
    } else {
        setTimeout(typeLoop, isDeleting.value ? deleteSpeed : typeSpeed)
    }
}

onMounted(() => {
    typeLoop()
})
</script>

<template>
  <div class="font-mono text-gray-400 min-h-[60px] md:min-h-[80px]">
     <span class="text-red-900 mr-2 select-none">$</span>
     <span class="whitespace-pre-wrap">{{ currentText }}</span>
     <span class="animate-pulse inline-block w-2.5 h-5 bg-red-700 ml-1 align-middle"></span>
  </div>
</template>
