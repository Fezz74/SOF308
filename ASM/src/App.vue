<template>
  <headertop :registeredUsers="registeredUser" @logout="handleLogout" />
  <router-view @register="register" :registeredUsers="registeredUser" @updateActiveAccount="updateActiveAccount"
    :blogPosts="blogPosts" />
  <footerbottom></footerbottom>
</template>

<script setup>
import headertop from './components/headertop.vue';
import bodymain from './components/bodymain.vue';
import footerbottom from './components/footerbottom.vue';
import bodycenter from './components/bodycenter.vue';
import detail from './components/detail.vue';
import { ref, watch, onMounted } from 'vue';

const registeredUser = ref([
  {
    activeAccount: 0,
    email: "vvqhuy1999@gmail.com",
    gender: "Nữ",
    language: ["English", "Vietnamese"],
    phone: "012345678",
    name: "Huy",
    password: "123456",
  }
]);

// Watch để debug  
watch(registeredUser, (newVal) => {
  console.log('registeredUser changed:', newVal);
}, { deep: true });

function register(user) {
  registeredUser.value.push(user);
  // Lưu vào localStorage sau khi đăng ký  
  localStorage.setItem('users', JSON.stringify(registeredUser.value));
}

// Hàm cập nhật activeAccount khi đăng nhập  
function updateActiveAccount(email) {
  registeredUser.value = registeredUser.value.map(user => ({
    ...user,
    activeAccount: user.email === email ? 1 : 0
  }));
  console.log('After login:', registeredUser.value);

  // Lưu vào localStorage  
  localStorage.setItem('users', JSON.stringify(registeredUser.value));
}

// Khôi phục dữ liệu từ localStorage khi component mounted  
const initializeFromLocalStorage = () => {
  const savedUsers = localStorage.getItem('users');
  if (savedUsers) {
    try {
      registeredUser.value = JSON.parse(savedUsers);
      console.log('Loaded users from localStorage:', registeredUser.value);
    } catch (error) {
      console.error('Error parsing users from localStorage:', error);
    }
  } else {
    // Nếu không có dữ liệu trong localStorage, lưu dữ liệu mặc định  
    localStorage.setItem('users', JSON.stringify(registeredUser.value));
  }
};

// Hàm xử lý đăng xuất  
const handleLogout = (email) => {
  registeredUser.value = registeredUser.value.map(user => ({
    ...user,
    activeAccount: user.email === email ? 0 : user.activeAccount
  }));
  console.log('After logout:', registeredUser.value);

  // Cập nhật localStorage  
  localStorage.setItem('users', JSON.stringify(registeredUser.value));
};

// Mounted hook  
onMounted(() => {
  initializeFromLocalStorage();
  // loadBlogPosts();
  console.log('App mounted, users initialized');
});


import img1 from '@/assets/image/tap-piltes.jpg';
import img2 from '@/assets/image/pilates1.jpg';
import img3 from '@/assets/image/pilates2.jpg';
import img4 from '@/assets/image/pilates3.jpg';
// Blog posts data  
const blogPosts = ref([
  {
    id: 1,
    title: 'Lợi ích của Pilates đối với sức khỏe tinh thần',
    excerpt: 'Khám phá cách Pilates có thể cải thiện không chỉ sức khỏe thể chất mà còn cả tinh thần của bạn.',
    date: '01/12/2024',
    image: img1,
    tags: ['Sức khỏe', 'Tinh thần']
  },
  {
    id: 2,
    title: 'Trang thiết bị Pilates cần thiết cho người mới',
    excerpt: 'Danh sách những dụng cụ cơ bản bạn cần để bắt đầu tập Pilates tại nhà.',
    date: '30/11/2024',
    image: img2,
    tags: ['Thiết bị', 'Người mới']
  },
  {
    id: 3,
    title: 'Lợi ích của Pilates đối với sức khỏe tinh thần',
    excerpt: 'Khám phá cách Pilates có thể cải thiện không chỉ sức khỏe thể chất mà còn cả tinh thần của bạn.',
    date: '01/12/2024',
    image: img3,
    tags: ['Sức khỏe', 'Tinh thần']
  },
  {
    id: 4,
    title: 'Lợi ích của Pilates đối với sức khỏe tinh thần',
    excerpt: 'Khám phá cách Pilates có thể cải thiện không chỉ sức khỏe thể chất mà còn cả tinh thần của bạn.',
    date: '01/12/2024',
    image: img4,
    tags: ['Sức khỏe', 'Tinh thần']
  },
]);

// Lưu xuống localStorage
// const saveBlogPosts = () => {
//   localStorage.setItem('blogPosts', JSON.stringify(blogPosts.value));
// }

// Thêm hàm loadBlogPosts
// const loadBlogPosts = () => {
//   const savedPosts = localStorage.getItem('blogPosts');
//   if (savedPosts) {
//     try {
//       const parsedPosts = JSON.parse(savedPosts);
//       // Map lại các đường dẫn hình ảnh
//       blogPosts.value = parsedPosts.map(post => ({
//         ...post,
//         image: getImageByPath(post.image) // Hàm helper để lấy đúng hình ảnh
//       }));
//     } catch (error) {
//       console.error('Error loading blog posts:', error);
//       // Nếu có lỗi, sử dụng dữ liệu mặc định
//       saveBlogPosts(); // Lưu dữ liệu mặc định vào localStorage
//     }
//   } else {
//     // Nếu không có dữ liệu trong localStorage, lưu dữ liệu mặc định
//     saveBlogPosts();
//   }
// };

// Gọi saveBlogPosts mỗi khi blogPosts thay đổi
watch(blogPosts, () => {
  saveBlogPosts();
}, { deep: true });


</script>