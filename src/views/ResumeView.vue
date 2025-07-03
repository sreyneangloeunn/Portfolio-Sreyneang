<template>
  <main class="resume-container animate-fade-in">
    <section>
      <h1>📄 My Resume</h1>
      <p>Click below to view or download my resume.</p>

      <div class="buttons">
        <a
          href="/SreyneangLoeun_CV.pdf"
          target="_blank"
          rel="noopener"
          class="view-button"
          aria-label="View resume in a new tab"
        >
          🔍 View Resume
        </a>

        <a
          href="/SreyneangLoeun_CV.pdf"
          download
          class="download-button"
          aria-label="Download resume"
        >
          ⬇️ Download Resume
        </a>
      </div>
    </section>
  </main>
</template>

<script setup>
// No script logic needed
</script>

<style scoped>
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(15px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in {
  animation: fadeIn 0.8s ease-out forwards;
}

.resume-container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 20px;
  background: #f5f6fa;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  box-sizing: border-box;
}

.resume-container h1 {
  font-size: 2.2rem;
  margin-bottom: 10px;
  color: #2c3e50;
}

.resume-container p {
  font-size: 1.1rem;
  margin-bottom: 30px;
  color: #555;
  max-width: 350px;
  margin-left: auto;
  margin-right: auto;
}

.buttons {
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
  justify-content: center;
}

.view-button,
.download-button {
  padding: 12px 24px;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 600;
  font-size: 1rem;
  transition: background-color 0.3s ease;
  user-select: none;
}

.view-button {
  background-color: #28a745;
  color: white;
}

.view-button:hover,
.view-button:focus {
  background-color: #218838;
  outline: none;
}

.download-button {
  background-color: #007bff;
  color: white;
}

.download-button:hover,
.download-button:focus {
  background-color: #0056b3;
  outline: none;
}

@media (max-width: 400px) {
  .view-button,
  .download-button {
    flex: 1 1 100%;
  }
}
</style>
