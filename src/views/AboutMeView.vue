<template>
  <div class="about-page max-w-6xl mx-auto px-4 py-16 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-gray-200 dark:from-gray-900 dark:to-gray-800">
    <div class="text-center mb-12">
      <h2 class="text-3xl sm:text-4xl font-bold text-blue-800 dark:text-blue-300 mb-4 animate-slide-in-down">About Me</h2>
      <div class="border-b-4 border-blue-500 w-20 mx-auto"></div>
    </div>
    <section class="w-full mx-auto">
      <div class="bg-white dark:bg-gray-800 p-6 sm:p-8 rounded-2xl shadow-xl flex flex-col lg:flex-row items-start gap-8 animate-fade-in-up">
        <!-- Profile Picture -->
        <div class="mb-6 lg:mb-0 lg:mr-8 flex shrink-0">
          <img
            src="../../public//image//IMG_6186.JPG"
            alt="Sreyneang Loeun"
            class="w-32 h-32 sm:w-40 sm:h-40 rounded-full object-cover border-4 border-blue-300 dark:border-blue-500 shadow-md transform hover:scale-105 transition-transform duration-300"
          />
        </div>

        <!-- Content -->
        <div class="flex-1">
          <div class="border-b-4 border-blue-500 w-16 mb-6"></div>
          <h3 class="text-2xl sm:text-3xl font-semibold text-blue-700 dark:text-blue-300 mb-4">
            Hello! I'm Sreyneang Loeun
          </h3>
          <p class="text-gray-700 dark:text-gray-300 mb-4 text-base sm:text-lg leading-relaxed">
            My name is Sreyneang Loeun. I was born on <strong>May 05, 2006</strong>, in <strong>Pursat, Cambodia</strong>. I enjoy learning new things and practicing my skills. I believe that teamwork, idea-sharing, and continuous improvement are key to helping a company grow and succeed.
          </p>
          <p class="text-gray-700 dark:text-gray-300 mb-6 text-base sm:text-lg leading-relaxed">
            Currently, I am a <strong>second-year student</strong> at <strong>Passerelles Numériques Cambodia (PNC)</strong>, pursuing an associate degree in <strong>Computer Science</strong>. I’ve worked on real projects and built strong technical skills in modern web development.
          </p>

          <!-- Personal Info -->
          <div class="mb-6">
            <div class="flex items-center mb-3">
              <div class="w-4 h-4 bg-yellow-300 dark:bg-yellow-500 rounded-full mr-2"></div>
              <h4 class="text-lg sm:text-xl font-semibold text-gray-800 dark:text-gray-100">Personal Information</h4>
            </div>
            <ul class="text-gray-700 dark:text-gray-300 space-y-2 pl-6 text-base sm:text-lg">
              <li><strong>Born:</strong> May 05, 2006</li>
              <li><strong>From:</strong> Pursat, Cambodia</li>
              <li><strong>Student at:</strong> PNC - Computer Science</li>
            </ul>
          </div>

          <!-- Skills -->
          <div class="flex flex-wrap gap-2 mb-6">
            <span class="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm sm:text-base shadow-sm hover:bg-blue-200 dark:hover:bg-blue-800 transition-colors">
              Teamwork
            </span>
            <span class="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm sm:text-base shadow-sm hover:bg-blue-200 dark:hover:bg-blue-800 transition-colors">
              Leadership
            </span>
            <span class="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm sm:text-base shadow-sm hover:bg-blue-200 dark:hover:bg-blue-800 transition-colors">
              Problem-solving
            </span>
            <span class="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm sm:text-base shadow-sm hover:bg-blue-200 dark:hover:bg-blue-800 transition-colors">
              Communication
            </span>
            <span class="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm sm:text-base shadow-sm hover:bg-blue-200 dark:hover:bg-blue-800 transition-colors">
              Collaboration
            </span>
          </div>

          <!-- CTA Button -->
          <a
            href="#contact"
            class="inline-block px-6 py-2 bg-blue-600 text-white rounded-full text-base font-semibold hover:bg-blue-700 transition-colors animate-pulse-slow"
          >
            Let's Work Together
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
// No script setup needed unless adding interactivity
</script>

<style>
/* Fallback animations in case tailwind.config.js is not updated */
@keyframes slide-in-down {
  0% {
    opacity: 0;
    transform: translateY(-20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fade-in-up {
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes pulse-slow {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
}

.animate-slide-in-down {
  animation: slide-in-down 0.5s ease-out;
}

.animate-fade-in-up {
  animation: fade-in-up 0.7s ease-out;
}

.animate-pulse-slow {
  animation: pulse-slow 2s ease-in-out infinite;
}
</style>