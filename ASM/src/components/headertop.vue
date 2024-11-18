<script setup>
import logo from '../assets/image/logo.png'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {
    faNewspaper,
    faVideo,
    faInfoCircle,
    faCalendarAlt,
    faUser,
    faGlobe
} from '@fortawesome/free-solid-svg-icons'
import { ref } from 'vue'

// Thêm icons vào library
library.add(faNewspaper, faVideo, faInfoCircle, faCalendarAlt, faUser, faGlobe)

// Khai báo biến trạng thái
const isAccountDropdownOpen = ref(false)

// Khai báo phương thức để toggle dropdown
const toggleAccountDropdown = () => {
  isAccountDropdownOpen.value = !isAccountDropdownOpen.value
}
</script>

<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light shadow-sm fixed-top row">
        <div class="container">
            <router-link to="/" class="navbar-brand"><img :src="logo" alt="Energy Pilates" height="40"></router-link> 

            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarContent">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#">
                            <font-awesome-icon icon="newspaper" class="me-1" />
                            Bài viết
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">
                            <font-awesome-icon icon="video" class="me-1" />
                            Video
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">
                            <font-awesome-icon icon="info-circle" class="me-1" />
                            Giới thiệu
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">
                            <font-awesome-icon icon="calendar-alt" class="me-1" />
                            Sự kiện
                        </a>
                    </li>
                </ul>

                <ul class="navbar-nav">
                    <li class="nav-item dropdown" :class="{ show: isAccountDropdownOpen }">
                        <a class="nav-link dropdown-toggle" href="#" role="button" @click="toggleAccountDropdown">
                            <font-awesome-icon icon="user" class="me-1" />
                            Tài khoản
                        </a>
                        <ul class="dropdown-menu" :class="{ show: isAccountDropdownOpen }">
                            
                            <li><router-link to="/login" class="dropdown-item">Đăng nhập</router-link></li>
                            <li><router-link to="/register" class="dropdown-item">Đăng ký</router-link></li>
                        
                        </ul>
                    </li>
                    <li class="nav-item dropdown ms-2">
                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">
                            <font-awesome-icon icon="globe" class="me-1" />
                            Ngôn ngữ
                        </a>
                        <ul class="dropdown-menu dropdown-menu-end">
                            <li><a class="dropdown-item" href="#">Tiếng Việt</a></li>
                            <li><a class="dropdown-item" href="#">Tiếng Anh</a></li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<style scoped>
.navbar {
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
}

.container-fluid {
    max-width: 100%;
    padding: 0;
    margin: auto;
}
</style>