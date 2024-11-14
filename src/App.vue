<template>
  <div class="app-container">
    <header>
      <h1 class="main-title">LISTENING PARTY</h1>
    </header>
    <div class="registration-container">
      <div v-if="!registered">
        <h2>Registro para la Fiesta</h2>
        <form @submit.prevent="handleSubmit">
          <div class="form-group">
            <label for="email">Email:</label>
            <input type="email" id="email" v-model="email" required />
          </div>
          <div class="form-group">
            <label for="name">Nombre:</label>
            <input type="text" id="name" v-model="name" required />
          </div>
          <button type="submit" :disabled="isLoading">
            {{ isLoading ? 'Registrando...' : 'Registrarse' }}
          </button>
        </form>
        <p v-if="error" class="error-message">{{ error }}</p>
      </div>
      <div v-else>
        <h2>BIENVENIDO A LA LISTENING PARTY</h2>
        <p>¡{{ name }}, estás registrado!</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import axios from 'axios'

const email = ref('')
const name = ref('')
const registered = ref(false)
const isLoading = ref(false)
const error = ref('')

const handleSubmit = async () => {
  if (isLoading.value) return

  isLoading.value = true
  error.value = ''

  try {
    const response = await axios.post('https://d599-85-48-188-178.ngrok-free.app/api/register', {  // Reemplaza la URL local por la de ngrok
      name: name.value,
      email: email.value
    }, {
      headers: {
        'Content-Type': 'application/json'
      }
    })

    console.log('Respuesta del servidor:', response.data)
    registered.value = true
  } catch (err) {
    console.error('Error al registrar:', err)
    error.value = 'Hubo un error al registrarse. Por favor, intenta de nuevo.'
  } finally {
    isLoading.value = false
  }
}

</script>

<style>
/* Eliminar márgenes y bordes por defecto */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  height: 100vh;
  background: linear-gradient(135deg, rgba(0, 0, 0, 0.8) 0%, rgba(255, 165, 0, 0.8) 100%);
  font-family: Arial, sans-serif;
  font-size: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-size: cover;
}

@media (min-width: 768px) {
  body {
    font-size: 18px;
  }
}

.app-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}

header {
  padding: 2rem 0;
  text-align: center;
}

.main-title {
  font-size: 2.5rem;
  color: #FFA500;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  margin: 0;
}

@media (min-width: 768px) {
  .main-title {
    font-size: 3rem;
  }
}

.registration-container {
  background-color: rgba(0, 0, 0, 0.7);
  padding: 1.5rem;
  border-radius: 8px;
  width: 100%;
  max-width: 400px;
  color: #FFA500;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
}

@media (min-width: 768px) {
  .registration-container {
    padding: 2rem;
  }
}

h2 {
  text-align: center;
  margin-bottom: 1.5rem;
  font-size: 1.5rem;
}

@media (min-width: 768px) {
  h2 {
    font-size: 1.75rem;
    margin-bottom: 2rem;
  }
}

.form-group {
  margin-bottom: 1rem;
  width: 100%;
}

label {
  display: block;
  margin-bottom: 0.3rem;
}

input {
  width: 100%;
  padding: 0.5rem;
  background-color: rgba(0, 0, 0, 0.5);
  border: 1px solid #FFA500;
  color: #FFA500;
  border-radius: 4px;
  font-size: 1rem;
}

button {
  width: 100%;
  padding: 0.75rem;
  background-color: #FFA500;
  color: black;
  border: none;
  cursor: pointer;
  border-radius: 4px;
  transition: background-color 0.3s ease;
  font-size: 1rem;
  margin-top: 1rem;
}

button:hover:not(:disabled) {
  background-color: #FF8C00;
}

button:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

.error-message {
  color: #FF4500;
  text-align: center;
  margin-top: 1rem;
}
</style>
