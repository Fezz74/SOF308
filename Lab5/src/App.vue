<template>
  <div id="app">
    <h1>Ứng dụng Blog nhỏ với Vue.js</h1>
    <CreatePost @add-post="addPost" />
    <PostList :posts="posts" />
    <bai1></bai1>
    <bai2></bai2>
    <bai3></bai3>

  </div>
</template>

<script setup>
import { ref } from 'vue';
import CreatePost from './components/CreatePost.vue';
import PostList from './components/PostList.vue';
import bai1 from './components/bai1.vue';
import bai3 from './components/bai3.vue';
import bai2 from './components/bai2.vue';

const posts = ref([]);

function addPost(post) {
  posts.value.push(post);
}
</script>

<style>
#app {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}
</style>
