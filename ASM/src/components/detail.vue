<template>
  <div class="min-h-screen bg-gray-50 p-5">
    <div class="max-w-4xl mx-auto">
      <!-- Exercise Detail -->
      <article class="bg-white rounded-lg shadow-sm overflow-hidden mb-8" v-if="post">
        <img
          :src="post.image"
          :alt="post.title"
          width="700px"
          height="600px"
          class="w-full h-[400px] object-cover">

        <div class="p-6">
          <h1 class="text-2xl font-bold mb-4">{{ post.title }}</h1>
          <p class="text-gray-600">
            {{ post.excerpt }}
          </p>
        </div>
      </article>

      <!-- Comments Section -->
      <div class="bg-white rounded-lg shadow-sm p-6">
        <!-- Comment Form -->
        <form @submit.prevent="submitComment" class="mb-8">
          <textarea
            v-model="newComment.content"
            rows="5"
            class="w-full p-3 border rounded mb-3"
            placeholder="Viết bình luận..."
            style="width: 120%;"
          ></textarea>

          <button
            type="submit"
            class="bg-blue-500 text-black px-4 py-2 rounded hover:bg-blue-600"
          >
            Gửi
          </button>
        </form>

        <!-- Comments List -->
        <div class="space-y-4">
          <div v-for="comment in comments"
               :key="comment.id"
               class="border-b pb-4">
            <div class="flex justify-between mb-2">
              <div>
                <span class="font-medium">{{ comment.name }}</span> || 
                <span class="text-gray-500 text-sm ml-2">
                  {{ formatDate(comment.date) }}
                </span>
              </div>
              <button
                v-if="canDeleteComment(comment)"
                @click="deleteComment(comment.id)"
                class="text-red-500 text-sm"
              >
                Xóa
              </button>
            </div>
            <p class="text-gray-600">{{ comment.content }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const post = ref(null)
const postId = parseInt(route.params.id)
const comments = ref([
  {
    id: 1,
    name: 'Nguyễn Văn A',
    email: 'example@email.com',
    content: 'Bài viết rất hữu ích, cảm ơn tác giả!',
    date: new Date('2024-01-15'),
    userId: 1
  }
])


// Load post khi component được mount
onMounted(() => {
  loadPost()
  // Cập nhật name cho newComment sau khi có nameId
  if (nameId.value) {
    newComment.value.name = nameId.value.name
  }
})

const nameId = ref(null)

const loadPost = () => {
  // const postId = parseInt(route.params.id)
  const storedPosts = localStorage.getItem('blogPosts')
  const userProfile = localStorage.getItem('users')

  if (storedPosts) {
    try {
      const posts = JSON.parse(storedPosts)
      post.value = posts.find(p => p.id === postId)
      
      if (!post.value) {
        console.log('Không tìm thấy bài viết')
      }
    } catch (error) {
      console.error('Lỗi khi parse dữ liệu:', error)
    }
  }
  if (userProfile){
    try {
      const users = JSON.parse(userProfile)
      nameId.value = users.find(u => u.activeAccount === 1)
      
      if (nameId.value) {
        // Cập nhật name cho newComment
        newComment.value.name = nameId.value.name
      } else {
        console.log('Không tìm thấy user')
      }
    } catch (error) {
      console.error('Lỗi khi parse dữ liệu user:', error)
    }
  }
}
// console.log(nameId);
const newComment = ref({
  name: '',
  email: '',
  content: ''
})

const submitComment = () => {
  if (!newComment.value.content.trim()) return

  const comment = {
    id: comments.value.length + 1,
    ...newComment.value,
    date: new Date(),
    userId: 1
  }
  comments.value.push(comment)
  newComment.value.content = ''
}

const deleteComment = (commentId) => {
  comments.value = comments.value.filter(c => c.id !== commentId)
}

const canDeleteComment = (comment) => {
  return true
}

const formatDate = (date) => {
  return new Date(date).toLocaleDateString('vi-VN')
}
</script>

<style scoped>
.prose {
  max-width: none;
}

.focus-visible:focus {
  outline: none;
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.5);
}
</style>
