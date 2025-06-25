<template>
  <section class="mb-16">
    <h2 class="text-2xl font-bold text-gray-700 mb-8 text-center animate__animated animate__fadeInLeft">
      {{ title }}
    </h2>

    <div class="grid gap-6 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 justify-items-center">
      <div
        v-for="(skill, index) in skills"
        :key="index"
        class="w-36 h-28 bg-white rounded-2xl shadow-md flex flex-col items-center justify-center text-center text-sm font-medium text-gray-800 hover:shadow-xl transition-transform transform hover:scale-105 animate__animated animate__fadeInUp"
        :style="{ animationDelay: `${index * 0.15}s`, animationDuration: '0.8s' }"
        role="listitem"
        aria-label="Soft skill card"
      >
        <span class="text-3xl mb-2" aria-hidden="true">{{ extractEmoji(skill) }}</span>
        <span class="px-1 leading-tight">{{ extractText(skill) }}</span>
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  title: String,
  skills: Array,
})

/**
 * Extracts the leading emoji (supports broad emoji ranges).
 */
const extractEmoji = (skill) => {
  const emojiMatch = skill.match(
    /^([\u{1F600}-\u{1F64F}\u{1F300}-\u{1F9FF}\u{1F680}-\u{1F6FF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}])/u
  )
  return emojiMatch ? emojiMatch[0] : '⏳'
}

/**
 * Removes the emoji from the beginning of the skill string.
 */
const extractText = (skill) => {
  return skill.replace(
    /^[\u{1F600}-\u{1F64F}\u{1F300}-\u{1F9FF}\u{1F680}-\u{1F6FF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}]+/u,
    ''
  ).trim()
}
</script>
