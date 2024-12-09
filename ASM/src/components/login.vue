<template>
  <div class="container m-4">
    <div class="row justify-content-center align-items-center min-vh-100">
      <div v-if="!isLoggedIn" class="col-md-6 col-lg-5">
        <div class="card shadow-lg border-0">
          <div class="card-body p-5">
            <!-- Header -->
            <div class="text-center mb-4">
              <h2 class="fw-bold text-primary">Đăng nhập</h2>
              <p class="text-muted">Vui lòng đăng nhập để tiếp tục</p>
            </div>

            <!-- Login Form -->
            <form @submit.prevent="updateActiveAccount">
              <!-- Email Input -->
              <div class="form-floating mb-3">
                <input type="email" class="form-control" :class="{ 'is-invalid': emailError }" id="loginEmail"
                  placeholder="name@example.com" v-model="email">
                <label for="loginEmail">
                  <i class="fas fa-envelope me-2"></i>Email
                </label>
                <div class="invalid-feedback">{{ emailError }}</div>
              </div>

              <!-- Password Input -->
              <div class="form-floating mb-3">
                <input :type="showPassword ? 'text' : 'password'" class="form-control"
                  :class="{ 'is-invalid': passwordError }" id="loginPassword" placeholder="Mật khẩu" v-model="password">
                <label for="loginPassword">
                  <i class="fas fa-lock me-2"></i>Mật khẩu
                </label>
                <div class="invalid-feedback">{{ passwordError }}</div>
              </div>
              

              <!-- Remember Me & Forgot Password -->
              <div class="d-flex justify-content-between align-items-center mb-4">
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" id="rememberMe">
                  <label class="form-check-label text-muted" for="rememberMe">
                    Ghi nhớ đăng nhập
                  </label>
                </div>
                <a href="#" class="text-primary text-decoration-none">Quên mật khẩu?</a>
              </div>

              <!-- Submit Button -->
              <button type="submit" class="btn btn-primary w-100 py-2 mb-4">
                <i class="fas fa-sign-in-alt me-2"></i>Đăng nhập
              </button>

              <!-- Divider -->
              <div class="text-center text-muted mb-4">
                <span>Hoặc đăng nhập với</span>
              </div>

              <!-- Social Login -->
              <div class="d-flex gap-2 mb-4">
                <button type="button" class="btn btn-outline-danger flex-grow-1">
                  <i class="fab fa-google me-2"></i>Google
                </button>
                <button type="button" class="btn btn-outline-primary flex-grow-1">
                  <i class="fab fa-facebook-f me-2"></i>Facebook
                </button>
              </div>

              <!-- Register Link -->
              <div class="text-center">
                <span class="text-muted">Chưa có tài khoản? </span>
                <router-link to="/register" class="text-primary text-decoration-none">
                  Đăng ký ngay
                </router-link>
              </div>
            </form>
          </div>
        </div>
      </div>
      <!-- <div v-else class="col-md-6 col-sm-12">
        <div class="card shadow-sm">
          <div class="card-body text-center p-5">
            <i class="bi bi-person-check display-1 text-success mb-3"></i>
            <h3 class="mb-4">Chào mừng, {{ email }}!</h3>
            <button @click="logout" class="btn btn-danger btn-lg">
              <i class="bi bi-box-arrow-right me-2"></i>
              Đăng xuất
            </button>
          </div>
        </div>
      </div> -->
    </div>
  </div>
</template>

<script setup>

import { ref } from 'vue';
import { defineProps, defineEmits } from 'vue';  
import { useRouter } from 'vue-router';
import { watch } from 'vue' 
const router = useRouter();

const props = defineProps({  
  registeredUsers: {  
    type: Array,  
    required: true  
  }  
}); 




const isLoggedIn = ref(false);
const email = ref('');
const password = ref('');

const emailError = ref('');
const passwordError = ref('');

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const emit = defineEmits(['updateActiveAccount']);


const updateActiveAccount = () => {
  // Reset thông điệp lỗi
  emailError.value = '';
  passwordError.value = '';

  // Validate email
  if (!email.value) {
    emailError.value = 'Email là bắt buộc.';
  } else if (!emailRegex.test(email.value)) {
    emailError.value = 'Vui lòng nhập email hợp lệ.';
  }

  // Validate mật khẩu
  if (!password.value) {
    passwordError.value = 'Mật khẩu là bắt buộc.';
  }

  // Kiểm tra thông tin đăng nhập  
  const user = props.registeredUsers.find(user =>   
        user.email === email.value && user.password === password.value  
    );

  // Nếu không có lỗi, xử lý login
  if (user) {  
        isLoggedIn.value = true;  
        emit('updateActiveAccount', email.value);  
        localStorage.setItem('isAuthenticated', 'true');
        // Thông báo đăng nhập thành công  
        alert(`Chào mừng ${user.name} đã đăng nhập thành công!`);  
      
        // Chuyển hướng đến trang chủ
        setTimeout(() => {  
            router.push('/');   
        }, 500); 
    } else {  
      alert(`Email hoặc mật khẩu không chính xác!`); 
    } 

   
}


const logout = () => {
  isLoggedIn.value = false;
  email.value = '';
  password.value = '';
  emailError.value = '';
  passwordError.value = '';
}


</script>

<style scoped>
.card {
  border-radius: 1rem;
  background: #ffffff;
}

.form-control {
  border-radius: 0.5rem;
}

.form-control:focus {
  box-shadow: none;
  border-color: #0d6efd;
}

.btn {
  border-radius: 0.5rem;
  font-weight: 500;
}

.btn-primary {
  background: linear-gradient(to right, #0d6efd, #0b5ed7);
  border: none;
}

.btn-primary:hover {
  background: linear-gradient(to right, #0b5ed7, #0a58ca);
}

/* Animation cho form */
.card {
  animation: slideUp 0.3s ease-out;
}

@keyframes slideUp {
  from {
    transform: translateY(20px);
    opacity: 0;
  }

  to {
    transform: translateY(0);
    opacity: 1;
  }
}
</style>