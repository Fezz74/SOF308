<template>
    <div class="col-sm-4 m-5">
        <h2>Bình luận bài viết</h2>
        <div class="card">
            <img :src="img1" alt="Hình ảnh" class="card-img-top">
            <div class="card-body">
                <h3 class="card-title">8 loại rau củ quả giàu canxi</h3>
                <p class="card-text">
                    Canxi là khoáng chất cần thiết đối với cơ thể người. Có nhiều cách để bổ sung canxi, trong đó bổ
                    sung qua đường ăn uống là cách tốt nhất. Có 8 loại rau củ giàu canxi...
                </p>
            </div>
        </div>
        <form @submit.prevent="submitComment">
            <div class="mt-3">
                <textarea id="commentText" cols="60" v-model="commentText" class="form-control"
                    placeholder="Nhập bình luận của bạn"></textarea>
            </div>
            <button type="submit" class="btn btn-success mt-2">Gửi bình luận</button>
        </form>
        <div v-if="comments.length" class="mt-3">
            <h5>Danh sách các bình luận:</h5>
            <ul style="list-style-type: circle;">
                <li v-for="(comment, index) in comments" :key="index">
                    <p><strong>{{ comment.name }}:</strong> {{ comment.text }}</p>
                </li>
            </ul>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import img1  from '../assets/vue.svg';

// Define props to accept a username
const props = defineProps(['username']);

const commentText = ref('');
const comments = ref([]);

// Function to handle the comment submission
function submitComment() {
    if (commentText.value) {
        comments.value.push({
            name: props.username,  // Use the username from props
            text: commentText.value
        });

        // Clear the comment input
        commentText.value = '';
    }
}
</script>
