<template>
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-6">
          <div class="card">
            <div class="card-header">
              <h3>Nhập điểm của bạn:</h3>
            </div>
            <div class="card-body">
              <div class="form-group">
                <label for="score">Điểm:</label>
                <input type="number" class="form-control" id="score" v-model="score" min="0" max="10">
              </div>
              <div class="mt-3">
                <p v-if="score >= 9" class="alert alert-success">Xuất sắc</p>
                <p v-else-if="score >= 8" class="alert alert-info">Giỏi</p>
                <p v-else-if="score >= 6.5" class="alert alert-primary">Khá</p>
                <p v-else-if="score >= 5" class="alert alert-warning">Trung bình</p>
                <p v-else class="alert alert-danger">Yếu</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>

<script setup>
    import { ref } from 'vue'
    const score = ref(0)
</script>