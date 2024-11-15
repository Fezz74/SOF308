<script setup>
import logo from '../assets/image/logo.png'  
</script>
<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light shadow-sm fixed-top row">
        <div class="container">
            <a class="navbar-brand" href="#">
                <img :src="logo" alt="Energy Pilates" height="40">
            </a>

            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarContent">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#">Bài viết</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Video</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Giới thiệu</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Sự kiện</a>
                    </li>
                </ul>

                <ul class="navbar-nav">
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">
                            Tài khoản
                        </a>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="#">Đăng nhập</a></li>
                            <li><a class="dropdown-item" href="#">Đăng ký</a></li>
                        </ul>
                    </li>
                    <li class="nav-item dropdown ms-2">
                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">
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
  max-width: 100%; /* Ensures full width */  
  padding: 0; /* Removes default padding */  
  margin: auto;  
}  
</style> 