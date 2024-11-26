<script setup>
import { ref } from 'vue';

const message = ref('Thông điệp ban đầu');

function updateMessage() {
    message.value = 'Thông điệp đã được thay đổi!';
}  
</script>

<template>
    <div class="container py-5">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <!-- Card với shadow -->
                <div class="card shadow-lg border-0 rounded-4">
                    <!-- Header -->
                    <div class="card-header bg-primary text-white py-3 rounded-top-4">
                        <h3 class="text-center mb-0 fw-bold">Thông Điệp</h3>
                    </div>

                    <!-- Body -->
                    <div class="card-body p-4 p-md-5">
                        <!-- Message Box -->
                        <div class="bg-light p-4 rounded-3 border mb-4 text-center">
                            <p class="fs-3 mb-0">{{ message }}</p>
                        </div>

                        <!-- Button -->
                        <div class="text-center">
                            <button class="btn btn-primary btn-lg px-5" @click="updateMessage">
                                <i class="bi bi-arrow-repeat me-2"></i>
                                Thay đổi thông điệp
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>