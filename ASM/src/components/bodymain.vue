<template>  
    <div class="container mb-5">  
        <!-- Hero Section -->  
        <div class="row mt-5 pt-5">  
            <div class="text-center mb-5">  
                <h1 class="display-4 mb-3">Energy Pilates Blog</h1>  
                <p class="lead text-muted">Chia sẻ kiến thức và trải nghiệm về Pilates</p>  
            </div>  
        </div>  

        <!-- Main Content -->  
        <div class="row">  
            <!-- Blog Posts Column -->  
            <div class="col-lg-8">  
                <!-- Featured Post -->  

                <!-- Recent Posts -->  
                <div class="row" v-for="post in posts" :key="post.id">  
                    <div class="col-12">  
                        <div class="card mb-4 shadow-sm">  
                            <div class="row g-0">  
                                <div class="col-md-4">  
                                    <img :src="post.image" class="img-fluid rounded-start" :alt="post.title">  
                                </div>  
                                <div class="col-md-8">  
                                    <div class="card-body">  
                                        <div class="small text-muted mb-1">{{ post.date }}</div>  
                                        <h3 class="card-title h4">{{ post.title }}</h3>  
                                        <p class="card-text">{{ post.excerpt }}</p>  
                                        <div class="d-flex justify-content-between align-items-center">  
                                            <router-link :to="`/detail/${post.id}`" class="btn btn-outline-primary">Đọc tiếp</router-link>  
                                            <div class="d-flex gap-2">  
                                                <span v-for="tag in post.tags"   
                                                      :key="tag"   
                                                      class="badge bg-secondary">  
                                                    {{ tag }}  
                                                </span>  
                                            </div>  
                                        </div>  
                                    </div>  
                                </div>  
                            </div>  
                        </div>  
                    </div>  
                </div>  

                <!-- Pagination -->  
                <nav aria-label="Blog pagination">  
                    <ul class="pagination justify-content-center">  
                        <li class="page-item disabled">  
                            <a class="page-link" href="#" tabindex="-1">Trước</a>  
                        </li>  
                        <li class="page-item active"><a class="page-link" href="#">1</a></li>  
                        <li class="page-item"><a class="page-link" href="#">2</a></li>  
                        <li class="page-item"><a class="page-link" href="#">3</a></li>  
                        <li class="page-item">  
                            <a class="page-link" href="#">Sau</a>  
                        </li>  
                    </ul>  
                </nav>  
            </div>  

            <!-- Sidebar -->  
            <div class="col-lg-4">  
                <!-- Search -->  
                <div class="card mb-4 shadow-sm">  
                    <div class="card-body">  
                        <h5 class="card-title">Tìm kiếm</h5>  
                        <div class="input-group">  
                            <input type="text" class="form-control" placeholder="Nhập từ khóa...">  
                            <button class="btn btn-primary" type="button">  
                                <i class="fas fa-search"></i>  
                            </button>  
                        </div>  
                    </div>  
                </div>  

                <!-- Categories -->  
                <div class="card mb-4 shadow-sm">  
                    <div class="card-body">  
                        <h5 class="card-title">Danh mục</h5>  
                        <div class="list-group list-group-flush">  
                            <a href="#" class="list-group-item d-flex justify-content-between align-items-center">  
                                Hướng dẫn tập  
                                <span class="badge bg-primary rounded-pill">14</span>  
                            </a>  
                            <a href="#" class="list-group-item d-flex justify-content-between align-items-center">  
                                Dinh dưỡng  
                                <span class="badge bg-primary rounded-pill">8</span>  
                            </a>  
                            <a href="#" class="list-group-item d-flex justify-content-between align-items-center">  
                                Thiết bị  
                                <span class="badge bg-primary rounded-pill">5</span>  
                            </a>  
                        </div>  
                    </div>  
                </div>  

                <!-- Popular Posts -->  
                <div class="card mb-4 shadow-sm">  
                    <div class="card-body">  
                        <h5 class="card-title">Bài viết nổi bật</h5>  
                        <div class="list-group list-group-flush">  
                            <a href="#" class="list-group-item" v-for="post in popularPosts" :key="post.id">  
                                <div class="d-flex w-100 justify-content-between">  
                                    <h6 class="mb-1">{{ post.title }}</h6>  
                                    <small class="text-muted">{{ post.views }} lượt xem</small>  
                                </div>   
                            </a>  
                        </div>  
                    </div>  
                </div>  
            </div>  
        </div>  
    </div>  
</template>  

<script setup>  
import { ref , onMounted,watch } from 'vue';  
import { defineProps, defineEmits } from 'vue';  

const props = defineProps({  
    blogPosts: {  
    type: Array,  
    required: true  
  }  
}); 
// Tạo một ref để quản lý state của posts
const posts = ref([]);

// Định nghĩa hàm loadPosts
const loadPosts = () => {
    const storedPosts = localStorage.getItem('blogPosts');
    
    if (storedPosts) {
        posts.value = JSON.parse(storedPosts);
    } else {
        posts.value = props.blogPosts;
        localStorage.setItem('blogPosts', JSON.stringify(props.blogPosts));
    }
};

// Khởi tạo dữ liệu
onMounted(() => {
    loadPosts();
});

// Watch props.blogPosts để load lại khi có thay đổi
watch(() => props.blogPosts, (newValue) => {
    if (newValue) {
        loadPosts();
    }
}, { deep: true });

// Popular posts data  
const popularPosts = ref([  
    {  
        id: 1,  
        title: 'Top 10 bài tập Pilates tại nhà',  
        views: 1500  
    },  
    {  
        id: 2,  
        title: 'Chế độ ăn cho người tập Pilates',  
        views: 1200  
    },  
    {  
        id: 3,  
        title: 'Pilates vs Yoga: Nên chọn môn nào?',  
        views: 1000  
    }  
]);  

</script>  

<style scoped>  
.card {  
    border: none;  
    transition: transform 0.2s;  
}  

.card:hover {  
    transform: translateY(-5px);  
}  

.badge {  
    font-weight: 500;  
}  

.list-group-item {  
    border: none;  
    padding: 0.75rem 0;  
}  

.page-link {  
    color: #0d6efd;  
    border: none;  
}  

.page-item.active .page-link {  
    background-color: #0d6efd;  
    border-color: #0d6efd;  
}  

.input-group {  
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);  
    border-radius: 0.25rem;  
}  

.input-group .form-control {  
    border: none;  
}  

.input-group .btn {  
    border: none;  
}  
</style>