<template>
  <div class="login-container">
    <h2>Login</h2>
    <input v-model="email" placeholder="Email" />
    <input v-model="password" :type="showPassword ? 'text' : 'password'" placeholder="Password" />

    <label>
      <input type="checkbox" v-model="showPassword"  />Show Password
    </label>

    <button @click="login">Login</button>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      email: '',
      password: '',
      showPassword: false
    }
  },
  methods: {
    async login() {
      try {
        const res = await axios.post('https://readw.onrender.com/api/users/login', {
          email: this.email.trim(),
          password: this.password
        })

        console.log('✅ Login response:', res.data)

        // Save to localStorage
        localStorage.setItem('user', JSON.stringify(res.data))

        // Redirect
        this.$router.push('/home')
      } catch (err) {
        console.error('❌ Login error:', err)
        alert('Login failed')
      }
    }
  }
}
</script>

<style>
.login-container {
  max-width: 400px;
  margin: 80px auto;
  padding: 2rem;
  background-color: #121212;
  border-radius: 10px;
  box-shadow: 0 0 20px rgba(255, 128, 0, 0.3);
  text-align: center;
}



.login-title {
  color: #ff4d4d;
  font-size: 2rem;
  margin-bottom: 1.5rem;
}

.login-input {
  width: 100%;
  padding: 0.8rem;
  margin-bottom: 1rem;
  border-radius: 6px;
  border: none;
  background-color: #1e1e1e;
  color: white;
  font-size: 1rem;
}

.checkbox-label {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #ddd;
  font-size: 0.95rem;
  margin: 0.5rem 0 1.5rem;
  cursor: pointer;
  user-select: none;
}

.checkbox-label input[type="checkbox"] {
  accent-color: #ff8000;
  width: 16px;
  height: 16px;
  cursor: pointer;
}

.login-input:focus {
  outline: 2px solid #ff8000;
}



.login-button {
  width: 100%;
  padding: 0.8rem;
  background-color: #cc0000;
  color: white;
  font-size: 1rem;
  border: none;
  border-radius: 6px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s;
}

.login-button:hover {
  background-color: #ff4d4d;
}
</style>
