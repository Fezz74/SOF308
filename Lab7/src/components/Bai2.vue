<template>
    <div class="container mt-5">
        <div class="row justify-content-center">
            <!-- Form đăng nhập -->
            <div v-if="!isLoggedIn" class="col-md-6 col-sm-12">
                <div class="card shadow-sm">
                    <div class="card-header bg-primary text-white">
                        <h3 class="text-center mb-0">
                            <i class="bi bi-person-circle me-2"></i>Đăng nhập
                        </h3>
                    </div>
                    <div class="card-body p-4">
                        <form @submit.prevent="login">
                            <!-- Email input -->
                            <div class="mb-4">
                                <label class="form-label fw-bold">
                                    <i class="bi bi-envelope me-2"></i>Email:
                                </label>
                                <input type="email" class="form-control form-control-lg" v-model="email"
                                    :class="{ 'is-invalid': emailError }" placeholder="Nhập email của bạn">
                                <div class="invalid-feedback" v-if="emailError">
                                    {{ emailError }}
                                </div>
                            </div>

                            <!-- Password input -->
                            <div class="mb-4">
                                <label class="form-label fw-bold">
                                    <i class="bi bi-lock me-2"></i>Mật khẩu:
                                </label>
                                <div class="input-group">
                                    <input type="password" class="form-control form-control-lg" v-model="password"
                                        :class="{ 'is-invalid': passwordError }" placeholder="Nhập mật khẩu của bạn">
                                    <div class="invalid-feedback" v-if="passwordError">
                                        {{ passwordError }}
                                    </div>
                                </div>
                            </div>

                            <!-- Submit button -->
                            <div class="d-grid gap-2">
                                <button type="submit" class="btn btn-primary btn-lg">
                                    <i class="bi bi-box-arrow-in-right me-2"></i>
                                    Đăng nhập
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            <!-- Welcome message after login -->
            <div v-else class="col-md-6 col-sm-12">
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
            </div>
        </div>
    </div>
</template>

<style scoped>
.card {
    border-radius: 15px;
    border: none;
}

.card-header {
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
}

.form-control {
    border-radius: 8px;
}

.form-control:focus {
    box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.15);
}

.btn {
    border-radius: 8px;
}

.invalid-feedback {
    font-size: 0.875rem;
}
</style>

<script setup>
import { ref } from 'vue';
import { defineEmits } from 'vue';


const isLoggedIn = ref(false);
const email = ref('');
const password = ref('');

const emailError = ref('');
const passwordError = ref('');

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const emit = defineEmits(['loggedIn']);


const login = () => {
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

    // Nếu không có lỗi, xử lý login
    if (!emailError.value && !passwordError.value) {
        isLoggedIn.value = true;
        emit('loggedIn', email.value);
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
