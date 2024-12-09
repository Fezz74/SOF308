<template>
    <div class="container mt-5">
        <div class="row justify-content-center">
            <div class="col-md-6 col-sm-12">
                <!-- Card container -->
                <div class="card shadow">
                    <div class="card-header bg-primary text-white">
                        <h3 class="text-center mb-0">Quản lý công việc</h3>
                    </div>
                    <div class="card-body">
                        <!-- Form -->
                        <form @submit.prevent="addList">
                            <div class="mb-3">
                                <label for="jobInput" class="form-label fw-bold">Tên công việc:</label>
                                <div class="input-group">
                                    <input 
                                        type="text" 
                                        class="form-control" 
                                        id="jobInput"
                                        v-model="newTodo" 
                                        placeholder="Nhập tên công việc"
                                        required
                                    >
                                    <button 
                                        class="btn btn-primary" 
                                        type="submit"
                                    >
                                        <i class="bi bi-plus-lg"></i> Thêm
                                    </button>
                                </div>
                            </div>
                        </form>

                        <!-- Task List -->
                        <div class="mt-4">
                            <h5 class="mb-3">Danh sách công việc:</h5>
                            <ul class="list-group">
                                <li 
                                    class="list-group-item d-flex justify-content-between align-items-center animate__animated animate__fadeIn"
                                    v-for="(job,index) in jobs" 
                                    :key="index"
                                >
                                    <span>{{ job }}</span>
                                    <div class="btn-group">
                                        <button 
                                            class="btn btn-outline-danger btn-sm"
                                            @click="removeList(index)"
                                        >
                                            <i class="bi bi-trash"></i> Xóa
                                        </button>
                                    </div>
                                </li>
                            </ul>
                            
                            <!-- Empty state -->
                            <div 
                                class="text-center text-muted p-3" 
                                v-if="jobs.length === 0"
                            >
                                <p>Chưa có công việc nào</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.card {
    border-radius: 10px;
}

.card-header {
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
}

.list-group-item {
    transition: all 0.3s ease;
}

.list-group-item:hover {
    background-color: #f8f9fa;
}

.btn-group {
    opacity: 0.8;
    transition: opacity 0.3s ease;
}

.list-group-item:hover .btn-group {
    opacity: 1;
}
</style>

<script setup>
import { ref } from 'vue';

const newTodo = ref('');
const jobs = ref(['Ăn sáng', 'Đi học', 'Chơi game']);

const addList = () => {
    if (newTodo.value.trim()){
        jobs.value.push(newTodo.value.trim());
        newTodo.value = '';
    }
  
};

const removeList = (index) => {
    jobs.value.splice(index, 1);
}
</script>