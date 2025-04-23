<template>
    <div class="page">
      <div class="floating-save">
        <button class="btn-save" @click="saveStory">Save</button>
      </div>
  
      <div class="editor-container">
        <input class="chapter-title" v-model="chapterTitle" placeholder="Chapter title..." />
        <textarea
          class="story-textarea"
          v-model="content"
          placeholder="Type your story here..."
        ></textarea>
      </div>
    </div>
  </template>
  
  
  <script>
  import axios from 'axios'
  
  export default {
    data() {
      return {
        storyId: null,
        chapterTitle: '',
        content: '',
        story: {},
      }
    },
    mounted() {
      const editStory = JSON.parse(localStorage.getItem('editStory'))
      if (!editStory) return this.$router.push('/writeStory')
  
      this.story = editStory
      this.storyId = editStory._id
      this.chapterTitle = editStory.title || ''
      this.content = editStory.content || ''
    },
    methods: {
  async saveStory() {
    const user = JSON.parse(localStorage.getItem('user'))
    if (!user || !user._id) return alert('User not logged in')
    

    try {
      if (this.storyId) {
        // Editing existing story
        await axios.put(`http://localhost:2000/api/stories/${this.storyId}`, {
          title: this.chapterTitle,
          content: this.content
        })
      } else {
        // Creating new story (only title + description, no content yet)
        await axios.post('http://localhost:2000/api/stories/full', {
          title: this.chapterTitle,
          description: this.description || '',
          userId: user._id
        })
      }

      localStorage.removeItem('editStory')
      localStorage.removeItem('draft')
      this.$router.push('/myStories')
    } catch (err) {
      console.error('Save failed:', err)
      alert('Save failed')
    }
  }
}
  }
  </script>
  
  

  <style scoped>
  .page {
    position: relative;
    padding-top: 3rem;
  }
  
  .floating-save {
    position: absolute;
    top: -8px;
    right: 1.5rem;
    z-index: 1000;
  }
  
  .btn-save {
    background-color: transparent;
    color: #fff;
    border: 1px solid #888;
    border-radius: 30px;
    padding: 0.4rem 1.5rem;
    font-weight: bold;
    font-size: 1.1rem;
    cursor: pointer;
  }
  
  .btn-save:hover {
    background-color: #ff8000;
    color: #000;
  }
  
  .editor-container {
    max-width:full;
    width: 100%;
    margin: auto;
    background: #121212;
    border-radius: 10px;
    padding: 2rem;
  }
  
  .chapter-title {
    width: 100%;
    text-align: center;
    font-size: 2rem;
    font-weight: bold;
    background: transparent;
    border: none;
    border-bottom: 2px solid #ff8000;
    color: white;
    padding: 0.5rem;
    margin-bottom: 1rem;
    outline: none;
  }
  
.story-textarea {
  width: 90%;
  margin: auto;           
  height: 600px;            /* ✅ Sets a fixed height */
  font-size: 1.5rem;
  font-family: 'Calibri', Courier, monospace;
  background: #1c1c1c;
  color: #eee;
  border-radius: 10px;
  padding: 1.5rem;
  resize: vertical;
  outline: none;
}


  
  </style>
  