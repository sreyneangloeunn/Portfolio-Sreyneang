<template>
  <div class="text-center">
      <h2 class="text-2xl font-bold text-gray-800 mb-2">About Me</h2>
      <div class="border-b border-blue-500 w-16 mx-auto"></div>
    </div>
  <section class="w-[90%] mx-auto px-4 py-12">
    <div
      class="bg-white p-6 rounded-xl shadow-xl flex flex-col lg:flex-row items-start animate-fade-in-up"
    >
      <!-- Profile Picture -->
      <div class="mb-6 lg:mb-0 lg:mr-8">
        <img
          src="../../public/image/IMG_6186.JPG"
          alt="Sreyneang Loeun"
          class="w-32 h-32 rounded-full object-cover border-4 border-blue-300"
        />
      </div>

      <!-- Content -->
      <div class="flex-1">
        <!-- Header Line -->
        <div class="border-b border-blue-500 w-16 mb-4"></div>

        <h3 class="text-2xl font-semibold text-blue-700 mb-2">
          Hello! I'm Sreyneang Loeun
        </h3>
        <p class="text-gray-700 mb-4">
          My name is Sreyneang Loeun. I was born on <strong>May 05, 2006</strong>,
          in <strong>Pursat, Cambodia</strong>. I enjoy learning new things and
          practicing my skills. I believe that teamwork, idea-sharing, and continuous
          improvement are key to helping a company grow and succeed.
        </p>

        <p class="text-gray-700 mb-6">
          Currently, I am a <strong>second-year student</strong> at
          <strong>Passerelles Numériques Cambodia (PNC)</strong>, pursuing an
          associate degree in <strong>Computer Science</strong>. I’ve worked on real
          projects and built strong technical skills in modern web development.
        </p>

        <!-- Personal Info -->
        <div class="mb-4">
          <div class="flex items-center mb-2">
            <div class="w-4 h-4 bg-yellow-300 rounded-full mr-2"></div>
            <h4 class="text-lg font-semibold text-gray-800">Personal Infomation</h4>
          </div>
          <ul class="text-gray-700 space-y-1 pl-6">
            <li><strong>Born:</strong> May 05, 2006</li>
            <li><strong>From:</strong> Pursat, Cambodia</li>
            <li><strong>Student at:</strong> PNC - Computer Science</li>
          </ul>
        </div>

        <!-- Skills -->
        <div class="flex flex-wrap gap-2 mb-6">
          <span class="px-3 py-1 bg-blue-100 rounded-full text-sm shadow-sm">
            Teamwork
          </span>
          <span class="px-3 py-1 bg-blue-100 rounded-full text-sm shadow-sm">
            Leadership
          </span>
          <span class="px-3 py-1 bg-blue-100 rounded-full text-sm shadow-sm">
            Problem-solving
          </span>
          <span class="px-3 py-1 bg-blue-100 rounded-full text-sm shadow-sm">
            Communication
          </span>
          <span class="px-3 py-1 bg-blue-100 rounded-full text-sm shadow-sm">
            Collaboration
          </span>
        </div>

        <!-- CTA Button -->
        <a
          href="#contact"
          class="inline-block px-6 py-2 bg-blue-600 text-white rounded-full text-sm hover:bg-blue-700 transition"
        >
          Let's Work Together
        </a>
      </div>
    </div>
  </section>
</template>
