<template>
    <div>
      <!-- Top Bar with Logo, Search, Buttons -->
      <div class="top-bar">
        <div class="logo">📘 <strong>CloneWattpad</strong></div>
        <input type="text" placeholder="Search stories..." class="search" />
        <div class="actions">
          <button class="write" @click="$router.push('/writeStory')">➕ Write</button>
          <button class="my-stories" @click="$router.push('/myStories')">📚 My Stories</button>
          <button class="logout" @click="logout">🚪 Logout</button>
        </div>
      </div>
  
      <div class="home">
        <h2>🔥 Stories For You</h2>
        <div v-if="stories.length === 0" class="empty">No stories yet. Go write one!</div>
        <div v-else class="story-list">
          <div v-for="story in stories" :key="story._id" class="story-card">

        <h3>
          <router-link :to="`/read/${story._id}`" class="story-link">
            {{ story.title }}
          </router-link>
        </h3>

        </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios'
  
  export default {
    data() {
      return {
        stories: []
      }
    },
    async mounted() {
      try {
        const res = await axios.get('http://localhost:2000/api/stories')
        this.stories = res.data
      } catch (err) {
        console.error('Failed to load stories', err)
      }
    },
    methods: {
      logout() {
        localStorage.removeItem('user')
        this.$router.push('/login')
      }
    }
  }
  </script>
  
  <style scoped>
  .top-bar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #111;
    padding: 1rem;
    gap: 1rem;
  }
  
  .logo {
    font-size: 1.5rem;
    color: white;
  }
  
  .search {
    flex-grow: 1;
    max-width: 800px;
    padding: 0.5rem;
    background-color: #222;
    border: none;
    border-radius: 4px;
    color: white;
  }
  
  .actions {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
  
  .actions button {
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    font-weight: bold;
  }
  
  .write {
    background-color: #ff8000;
    color: white;
  }
  
  .my-stories {
    background-color: #ffc107;
    color: black;
  }
  
  .logout {
    background-color: #dc3545;
    color: white;
  }
  
  .home {
    padding: 1rem;
    text-align: center;
  }
  
  .story-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1rem;
    margin-top: 1rem;
  }
  
  .story-card {
    background-color: #222;
    padding: 1rem;
    border-radius: 8px;
    max-width: 300px;
    width: 100%;
    box-shadow: 0 0 8px rgba(249, 24, 24, 0.897);
  }
  
  .story-card h3 {
    color: red;
  }
  
  .story-card p {
    color: #ccc;
  }
  
  .empty {
    text-align: center;
    color: #888;
    margin-top: 1rem;
  }
  .story-link {
  color: white;
  text-decoration: none;
  font-weight: bold;
  font-size: 1.2rem;
  transition: color 0.2s ease;
  display: inline-block;
  text-align: 100%;
  height: 50px;
  
  
}

.story-link:hover {
  color: red; /* Optional highlight on hover */
}


  </style>
  