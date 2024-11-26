<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-6">
                <div class="card">
                    <div class="card-header">
                        <h3>Nhập tháng của bạn:</h3>
                    </div>
                    <div class="card-body">
                        <div class="form-group">
                            <label for="month">Tháng:</label>
                            <input type="number" class="form-control" id="month" v-model="month" min="1" max="12">
                        </div>
                        <div class="mt-3">
                            <p v-if="month < 1 || month > 12" class="alert alert-warning">Vui lòng nhập tháng từ 1 đến
                                12!</p>
                            <p v-else-if="month >= 1 && month <= 3" class="alert alert-info">Mùa xuân</p>
                            <p v-else-if="month >= 4 && month <= 6" class="alert alert-success">Mùa Hè</p>
                            <p v-else-if="month >= 7 && month <= 9" class="alert alert-warning">Mùa Thu</p>
                            <p v-else class="alert alert-primary">Mùa Đông</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
const month = ref(1)
</script>