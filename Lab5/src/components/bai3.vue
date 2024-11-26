<template>
    <div class="container py-5">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card shadow-lg">
                    <div class="card-header bg-primary text-white">
                        <h2 class="mb-0 text-center">Thông tin cá nhân</h2>
                    </div>
                    <div class="card-body p-4">
                        <form>
                            <div class="mb-4">
                                <label class="form-label fw-bold">Họ và Tên:</label>
                                <div class="input-group">
                                    <span class="input-group-text">
                                        <i class="bi bi-person-fill"></i>
                                    </span>
                                    <input v-model="userInfo.name" type="text" class="form-control form-control-lg"
                                        placeholder="Nhập họ và tên" />
                                </div>
                            </div>

                            <div class="mb-4">
                                <label class="form-label fw-bold">Tuổi:</label>
                                <div class="input-group">
                                    <span class="input-group-text">
                                        <i class="bi bi-calendar-fill"></i>
                                    </span>
                                    <input v-model="userInfo.age" type="number" class="form-control form-control-lg"
                                        placeholder="Nhập tuổi" />
                                </div>
                            </div>

                            <div class="mb-4">
                                <label class="form-label fw-bold">Email:</label>
                                <div class="input-group">
                                    <span class="input-group-text">
                                        <i class="bi bi-envelope-fill"></i>
                                    </span>
                                    <input v-model="userInfo.email" type="email" class="form-control form-control-lg"
                                        placeholder="Nhập email" />
                                </div>
                            </div>
                        </form>

                        <!-- Hiển thị thông tin -->
                        <div class="mt-4 p-4 bg-light rounded-3 border">
                            <h3 class="text-primary mb-4">Thông tin đã nhập:</h3>
                            <div class="row">
                                <div class="col-md-4">
                                    <p class="mb-2"><strong>Họ và Tên:</strong></p>
                                    <p class="text-muted">{{ userInfo.name || 'Chưa nhập' }}</p>
                                </div>
                                <div class="col-md-4">
                                    <p class="mb-2"><strong>Tuổi:</strong></p>
                                    <p class="text-muted">{{ userInfo.age || 'Chưa nhập' }}</p>
                                </div>
                                <div class="col-md-4">
                                    <p class="mb-2"><strong>Email:</strong></p>
                                    <p class="text-muted">{{ userInfo.email || 'Chưa nhập' }}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { reactive } from 'vue';

const userInfo = reactive({
    name: '',
    age: null,
    email: ''
});  
</script>

<style scoped>
.card {
    border: none;
    border-radius: 15px;
}

.input-group-text {
    background-color: #f8f9fa;
    border-right: none;
}

.form-control {
    border-left: none;
}

.form-control:focus {
    box-shadow: none;
    border-color: #ced4da;
}

.input-group:hover {
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
}
</style>