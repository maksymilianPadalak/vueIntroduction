<template>
  <div class="root">
    <form @submit.prevent="submitForm">
      <h1>This is a pricing form</h1>
      <div class="inputWrapper">
        <label for="userInput">Name input</label>
        <input id="userInput" v-model="nameInput" placeholder="Username" required />
      </div>

      <div class="inputWrapper">
        <label for="emailInput">Email input</label>
        <input id="emailInput" v-model="emailInput" placeholder="Email" type="email" />
      </div>

      <div class="inputWrapper">
        <label for="telInput">Tel input</label>
        <input id="telInput" v-model="telInput" placeholder="Tel" type="tel" />
      </div>

      <div class="inputWrapper">
        <label for="planInput">This will be a dropdown input</label>
        <select id="planInput" v-model="planSelect">
          <option disabled value="">Please select your plan</option>
          <option>Free</option>
          <option>Standard</option>
          <option>Super Premium</option>
        </select>
      </div>
      <button @click="console.log('Submit clicked')">Submit</button>
    </form>

    <p v-if="isFormSubmitting">Form submitting....</p>
    <p v-if="formSubmitedMessage">{{ formSubmitedMessage }}</p>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const nameInput = ref()
const emailInput = ref()
const telInput = ref()
const planSelect = ref('')

const isFormSubmitting = ref(false)
const formSubmitedMessage = ref()

const submitForm = async () => {
  try {
    formSubmitedMessage.value = null
    isFormSubmitting.value = true
    await fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify({ title: 'test' }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
  } catch (error) {
    console.error(error)
  } finally {
    isFormSubmitting.value = false
    formSubmitedMessage.value = 'Form Submitted Successfuly!'
  }
}
</script>

<style scoped>
.root,
form {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
}

.inputWrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
}

input,
select {
  font-size: 20px;
  border: 2px solid black;
  width: 400px;
  padding: 8px;
}

input:invalid {
  border: 2px dotted red;
}

label {
  font-size: 16px;
  margin-bottom: 10px;
}

button {
  width: 400px;
  padding: 10px;
  cursor: pointer;
}
</style>
