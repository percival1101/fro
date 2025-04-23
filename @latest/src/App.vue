<template>
  <div>
    <header class="topbar" v-if="isLoggedIn">
      <div class="logo" @click="$router.push('/home')">📖 ReaderW</div>
    </header>

    <router-view />
  </div>
</template>


<script>
export default {
  methods: {
    logout() {
      localStorage.removeItem('user')
      this.$router.push('/login')
    }
  }
}
</script>

<style scoped>
.topbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: #1f1f1f;
  color: white;
  border-bottom: 1px solid #333;
}
.logo {
  font-size: 1.5rem;
  font-weight: bold;
  cursor: pointer;
}
.search {
  flex: 1;
  margin: 0 1rem;
  padding: 8px;
  border-radius: 4px;
  border: none;
  background: #333;
  color: white;
}
.actions button {
  margin-left: 10px;
  padding: 8px 12px;
  border: none;
  border-radius: 5px;
  background: #ff8000;
  color: white;
  cursor: pointer;
  font-weight: bold;
}
.actions button:hover {
  background-color: #e76f00;
}
</style>
