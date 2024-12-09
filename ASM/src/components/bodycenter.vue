<template>
    <!-- <router-view ></router-view> -->
    <router-view @register="register" :registeredUsers="registeredUser"
        @updateActiveAccount="updateActiveAccount"></router-view>

</template>

<script setup>
import { ref } from 'vue';



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

function register(user) {
    registeredUser.value.push(user);
}

// Thêm hàm để cập nhật activeAccount  
function updateActiveAccount(email) {
    const userIndex = registeredUser.value.findIndex(user => user.email === email);
    if (userIndex == 0) {
        registeredUser.value[userIndex].activeAccount = 1;
        console.log('Updated user:', registeredUser.value[userIndex]);
    }
}
console.log(registeredUser.value);
</script>
