<template>
    <div class="reader-container" v-if="story">
      <button class = "return-btn" @click="$router.push('/home')">Return to home</button>
      <h1 class="story-title">{{ story.title }}</h1>
      <h2 class="chapter-title">{{ story.chapterTitle }}</h2>
      <div class="story-content" v-html="formattedContent"></div>
    </div>
  </template>
  
  <script>
  import axios from 'axios'
  
  export default {
    data() {
      return {
        story: null
      }
    },
    computed: {
      formattedContent() {
        // Preserve line breaks
        return this.story?.content.replace(/\n/g, '<br>') || ''
      }
    },
    async mounted() {
      const id = this.$route.params.id
      try {
        const res = await axios.get(`http://localhost:2000/api/stories/read/${id}`)
        this.story = res.data
      } catch (err) {
        console.error('❌ Failed to fetch story:', err)
      }
    }
  }
  </script>
  
  <style scoped>
  .reader-container {
    max-width: 800px;
    margin: auto;
    padding: 3rem;
    background-color: #0f0f0f;
    color: white;
    line-height: 1.8;
    font-size: 1.2rem;
    font-family: 'Arial', serif;
  }
  
  .return-btn {
    background-color: transparent;
    color: #fff;
    border: 1px solid #888;
    border-radius: 30px;
    padding: 0.4rem 1.5rem;
    font-weight: bold;
    font-size: 1.1rem;
    cursor: pointer;
    position: absolute;
    top: 10px;
}

.return-btn:hover {
  background-color: #ffa733;
}


  .story-title {
    text-align: center;
    color: #ffa500;
    font-size: 2rem;
    margin-bottom: 0.5rem;
  }
  
  .chapter-title {
    text-align: center;
    color: #eee;
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }
  
  .story-content {
    white-space: pre-wrap;
  }
  </style>
  