<template>
  <div class="container py-4">
    <div class="row justify-content-center">
      <div class="col-md-8">
        <div class="card shadow">
          <div class="card-header bg-primary text-white">
            <h2 class="text-center mb-0">Tạo bài viết mới</h2>
          </div>
          <div class="card-body p-4">
            <!-- Tiêu đề -->
            <div class="mb-3">
              <label class="form-label">Tiêu đề bài viết</label>
              <input v-model="title" type="text" class="form-control" placeholder="Nhập tiêu đề bài viết" />
            </div>

            <!-- Tác giả -->
            <div class="mb-3">
              <label class="form-label">Tên tác giả</label>
              <input v-model="author" type="text" class="form-control" placeholder="Nhập tên tác giả" />
            </div>

            <!-- Nội dung -->
            <div class="mb-4">
              <label class="form-label">Nội dung bài viết</label>
              <textarea v-model="content" class="form-control" rows="5" placeholder="Nhập nội dung bài viết"></textarea>
            </div>

            <!-- Button -->
            <div class="text-center">
              <button @click="submitPost" class="btn btn-primary">
                Đăng bài
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue'

// Sử dụng defineEmits để emit sự kiện
const emit = defineEmits(['add-post'])

const title = ref('')
const content = ref('')
const author = ref('')

function submitPost() {
  if (title.value && content.value && author.value) {

    const newPost = {
      title: title.value,
      content: content.value,
      author: author.value
    }
    // Gửi sự kiện 'add-post' với dữ liệu của bài viết
    emit('add-post', newPost)``

    // Reset fields
    title.value = ''
    content.value = ''
    author.value = ''
  }
}
</script>
<style>
input,
textarea {
  display: block;
  width: 100%;
  margin: 10px 0;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ddd;
}

button {
  padding: 10px 20px;
  background-color: #3498db;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
</style>