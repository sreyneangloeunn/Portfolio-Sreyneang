<template>
  <section class="max-w-6xl mx-auto px-6 py-12">
    <!-- Header -->
    <div class="text-center mb-10">
      <h2 class="text-3xl font-bold text-blue-700 mb-2">Contact Me</h2>
      <p class="text-gray-600">I'd love to hear from you! Feel free to reach out using the information below or the form.</p>
    </div>

    <!-- Contact Info & Form -->
    <div class="grid md:grid-cols-2 gap-10 items-start bg-white p-8 rounded-xl shadow-md">
      
      <!-- Contact Info -->
      <div class="space-y-6">
        <div class="flex items-start gap-4 group">
          <div class="bg-[#DDEDFF] p-2 rounded-full transition-transform group-hover:scale-110">
            <EnvelopeIcon class="w-6 h-6 text-blue-600" />
          </div>
          <div>
            <h4 class="font-semibold text-gray-800">Email</h4>
            <a href="mailto:sreyneang.loeun@student.passernumeriques.org" class="text-blue-600 hover:underline">
              sreyneang.loeun@student.passernumeriques.org
            </a>
          </div>
        </div>

        <div class="flex items-start gap-4 group">
          <div class="bg-[#DDEDFF] p-2 rounded-full transition-transform group-hover:scale-110">
            <PhoneIcon class="w-6 h-6 text-blue-600" />
          </div>
          <div>
            <h4 class="font-semibold text-gray-800">Phone</h4>
            <p class="text-gray-700">+855 97 336 8734</p>
          </div>
        </div>

        <div class="flex items-start gap-4 group">
          <div class="bg-[#DDEDFF] p-2 rounded-full transition-transform group-hover:scale-110">
            <MapPinIcon class="w-6 h-6 text-blue-600" />
          </div>
          <div>
            <h4 class="font-semibold text-gray-800">Location</h4>
            <p class="text-gray-700">Street 371, Phumpeang Chhuk (Borey Sorla), Sangkat Tek Thla, Khan Sen Sok, Phnom Penh</p>
          </div>
        </div>
      </div>

      <!-- Contact Form -->
      <form @submit.prevent="submitForm" class="space-y-4">
        <div>
          <label class="block text-sm font-medium text-gray-700">Name</label>
          <input v-model="form.name" type="text" required class="mt-1 w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" />
        </div>
        <div>
          <label class="block text-sm font-medium text-gray-700">Email</label>
          <input v-model="form.email" type="email" required class="mt-1 w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" />
        </div>
        <div>
          <label class="block text-sm font-medium text-gray-700">Message</label>
          <textarea v-model="form.message" required rows="4" class="mt-1 w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"></textarea>
        </div>
        <button
          type="submit"
          class="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-lg shadow-md transition"
        >
          Send Message
        </button>
      </form>
    </div>
  </section>
</template>

<script setup>
import { reactive } from 'vue';
import { EnvelopeIcon, PhoneIcon, MapPinIcon } from '@heroicons/vue/24/solid';

const form = reactive({
  name: '',
  email: '',
  message: '',
});

function submitForm() {
  alert(`Message sent by ${form.name} (${form.email})`);
  form.name = '';
  form.email = '';
  form.message = '';
}
</script>

<style scoped>
.group:hover .transition-transform {
  transform: scale(1.1);
}
</style>