<template>
  <div class="resume-container">
    <h1>📄 My Resume</h1>
    <p>Click below to view or download my resume.</p>

    <div class="buttons">
      <a
        href="/SreyneangLoeun_CV.pdf"
        target="_blank"
        rel="noopener"
        class="view-button"
      >
        🔍 View Resume
      </a>

      <a
        href="/SreyneangLoeun_CV.pdf"
        download
        class="download-button"
      >
        ⬇️ Download Resume
      </a>
    </div>
  </div>
</template>

<script setup>
// No script logic needed
</script>

<style scoped>
.resume-container {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 20px;
  background: #f5f6fa;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
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
}

.buttons {
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
}

.view-button,
.download-button {
  padding: 12px 24px;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 600;
  font-size: 1rem;
  transition: background-color 0.3s ease;
}

.view-button {
  background-color: #28a745;
  color: white;
}

.view-button:hover {
  background-color: #218838;
}

.download-button {
  background-color: #007bff;
  color: white;
}

.download-button:hover {
  background-color: #0056b3;
}
</style>
