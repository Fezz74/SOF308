<script setup>
  import Bai1 from './components/Bai1.vue';
  import Bai2 from './components/Bai2.vue';
  import Bai3 from './components/Bai3.vue';

  import { ref } from 'vue';
  import CommentComponent from './components/CommentComponent.vue';

  // quan ly trang thai dang nhap va ten nguoi dung da dang nhap
  const isLoggedIn = ref(false);
  const logedInUser = ref('');

  // xu ly khi nguoi dung dang nhap thanh cong
  function handleLoginSuccess(username) {
    isLoggedIn.value = true;
    logedInUser.value = username;
  }
 
</script>

<template>
  <div>
    <Bai1 />
    <Bai3 />
    <!-- Nếu người dùng chưa đang nhập, hiển thị form đăng nhập -->
    <Bai2 v-if="!isLoggedIn" @logged-In="handleLoginSuccess"/>
    
    <!-- Nếu người dùng đã đăng nhập, hiển thị componet bình luận -->
    <CommentComponent v-else :username="logedInUser"/>
 
  </div>
</template>

<style scoped>

</style>
