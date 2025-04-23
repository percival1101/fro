<template>
  <div>
    <h2 style="text-align: center; color: red;">My Stories</h2>

    <h2><div class="home-btn" style="text-align: center; margin-top: 2rem;">
       <button @click="$router.push('/home')" style="background-color:#ff8000">Back to Home</button>
    </div>
    </h2>
    
    <div v-if="stories.length === 0" style="text-align: center; margin-top: 2rem;">
      No stories found.
    </div>

    <div v-for="story in stories" :key="story._id" class="story">
      <h3>{{ story.title }}</h3>
      <p>{{ story.content.slice(0, 200) }}...</p>

      <button @click="editStory(story)">Edit</button>
      <button @click="deleteStory(story._id)">Delete</button>
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
    const user = JSON.parse(localStorage.getItem('user'))
    if (!user || !user._id) return alert('User not found')
    try {
      const res = await axios.get(`https://readw.onrender.com/api/stories`)
      this.stories = res.data 
    } catch (err) {
      console.error('Failed to fetch stories', err)
    }
  },
  methods: {
    async deleteStory(id) {
      try {
        await axios.delete(`https://readw.onrender.com/api/stories/${id}`)
        this.stories = this.stories.filter(story => story._id !== id)
      } catch (err) {
        console.error('Delete failed:', err)
      }
    },
    editStory(story) {
      try {
        localStorage.setItem('editStory', JSON.stringify(story))
        this.$router.push('/editor')
      } catch (err) {
        console.error('Failed to route to editor with draft:', err)
      }
    }
  }
}
</script>

<style scoped>
.story {
  border: 1px solid #ccc;
  padding: 1rem;
  margin: 1rem auto;
  max-width: 600px;
  background-color: #1c1c1c;
  color: white;
  border-radius: 8px;
}
button {
  margin-right: 10px;
  margin-top: 10px;
  padding: 6px 12px;
  border: none;
  background-color: #e74c3c;
  color: white;
  cursor: pointer;
}
button:hover {
  background-color: #c0392b;
}

.home-btn button {
  background-color: #ff8000;
  color: white;
  border: none;
  padding: 0.6rem 1.5rem;
  font-size: 1rem;
  border-radius: 6px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.2s ease;
  position: fixed;           /* or use absolute if it's inside a container */
  top: 10px;
  right: 20px;
  z-index: 999;

}



</style>