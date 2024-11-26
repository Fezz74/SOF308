<template>
    <div class="container py-5">
        <div class="row justify-content-center">
            <div class="col-md-6">
                <div class="card shadow-lg border-0 rounded-4">
                    <!-- Header -->
                    <div class="card-header bg-primary text-white py-3 rounded-top-4">
                        <h4 class="text-center mb-0">
                            <i class="bi bi-keyboard me-2"></i>
                            Form Nhập Liệu
                        </h4>
                    </div>

                    <!-- Body -->
                    <div class="card-body p-4">
                        <div class="mb-4">
                            <label class="form-label fw-bold">Nhập dữ liệu:</label>
                            <div class="input-group input-group-lg">
                                <span class="input-group-text bg-light">
                                    <i class="bi bi-pencil-square"></i>
                                </span>
                                <input v-model="userInput" type="text" class="form-control"
                                    placeholder="Nhập dữ liệu vào đây" />
                            </div>
                        </div>

                        <!-- Display Area -->
                        <div class="bg-light p-4 rounded-3 text-center">
                            <h5 class="text-primary mb-3">Giá trị đã nhập:</h5>
                            <p class="fs-4 mb-0">{{ userInput || 'Chưa có dữ liệu' }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const userInput = ref('Huy');  
</script>