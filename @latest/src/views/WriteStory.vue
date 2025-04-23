<template>
  <div class="write-story">
    <h2>📝 Write New Story</h2>

    <!-- Cover Image Upload -->
    <div class="cover-upload">
      <label for="cover">📷 Cover Image</label>
      <input type="file" @change="handleImageUpload" />
      <img v-if="preview" :src="preview" class="preview" />
    </div>

    <!-- Title -->
    <div class="form-group">
      <label>📌 Title</label>
      <input v-model="title" placeholder="Enter title" />
    </div>

    <!-- Description -->
    <div class="form-group">
      <label>📝 Description</label>
      <textarea v-model="description" placeholder="Write a short description..." rows="4" />
    </div>

    <!-- Buttons -->
    <div class="actions">
      <button @click="cancel">Cancel</button>
      <button @click="next">Next</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: '',
      description: '',
      cover: null,
      preview: null
    }
  },
  methods: {
    handleImageUpload(e) {
      const file = e.target.files[0]
      this.cover = file
      this.preview = URL.createObjectURL(file)
    },
    cancel() {
      this.$router.push('/home')
    },
    next() {
      if (!this.title || !this.description) return alert('Please fill in all fields.')

      const draft = {
        title: this.title,
        description: this.description,
        cover: this.cover ? this.preview : null 
      }
      localStorage.setItem('draft', JSON.stringify(draft))
      this.$router.push('/register')
    }
  }
}
</script>

<style scoped>
.write-story {
  max-width: 600px;
  margin: auto;
  padding: 1rem;
}

.form-group {
  margin-bottom: 1rem;
}

input, textarea {
  width: 100%;
  padding: 0.5rem;
  background: #222;
  border: 1px solid #444;
  border-radius: 5px;
  color: #fff;
}

.actions {
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;
}

.actions button {
  padding: 0.5rem 1rem;
  font-weight: bold;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.cover-upload {
  margin-bottom: 1rem;
}

.preview {
  margin-top: 0.5rem;
  max-width: 100%;
  border-radius: 5px;
}
</style>
