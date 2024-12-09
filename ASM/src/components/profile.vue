<template>
    <div class="container m-5 p-5 ">
        <div class="card shadow-sm">
            <div v-if="activeUser">
                <div class="card-header bg-primary text-white d-flex justify-content-between align-items-center">
                    <h2 class="mb-0">{{ activeUser.name }}'s Profile</h2>
                    <div>
                        <button class="btn btn-success me-2" @click="togglePostForm">
                            <i class="bi bi-plus-circle me-2"></i>
                            Đăng bài
                        </button>
                        <button class="btn btn-warning" @click="toggleEditForm">
                            <i class="bi bi-pencil-square me-2"></i>
                            Chỉnh sửa hồ sơ
                        </button>
                    </div>
                </div>
                <div class="card-body">
                    <div class="row">
                        <div class="col-md-8">
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item">
                                    <i class="bi bi-envelope me-2"></i>
                                    <strong>Email:</strong> {{ activeUser.email }}
                                </li>
                                <li class="list-group-item">
                                    <i class="bi bi-gender-ambiguous me-2"></i>
                                    <strong>Gender:</strong> {{ activeUser.gender }}
                                </li>
                                <li class="list-group-item">
                                    <i class="bi bi-telephone me-2"></i>
                                    <strong>Phone:</strong> {{ activeUser.phone }}
                                </li>
                                <li class="list-group-item">
                                    <i class="bi bi-telephone me-2"></i>
                                    <strong>Language:</strong> {{ activeUser.language.join(', ') }}
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div v-else class="card-body text-center">
                <div class="alert alert-info mb-0">
                    <i class="bi bi-exclamation-circle me-2"></i>
                    Không có tài khoản nào đang hoạt động.
                </div>
            </div>
        </div>

        <!-- Form đăng bài -->
        <div v-if="showPostForm" class="card shadow-sm m-5 p-5">
            <h3 class="mb-4">Đăng bài mới</h3>
            <form @submit.prevent="submitPost">
                <div class="mb-3">
                    <label class="form-label">Tiêu đề</label>
                    <input type="text" class="form-control" v-model="newPost.title">
                </div>
                <div class="mb-3">
                    <label class="form-label">Nội dung</label>
                    <textarea class="form-control" v-model="newPost.excerpt"></textarea>
                </div>
                <div class="mb-3">
                    <label class="form-label">Hình ảnh</label>
                    <input type="text" class="form-control" v-model="newPost.img">
                </div>
                <div class="d-flex gap-2">
                    <button type="submit" class="btn btn-primary">Đăng bài</button>
                    <button type="button" class="btn btn-secondary" @click="togglePostForm">Hủy</button>
                </div>
            </form>
        </div>

        <!-- Form chỉnh sửa profile -->
        <div v-if="showEditForm" class="card shadow-sm m-5 p-5">
            <h3 class="mb-4">Chỉnh sửa hồ sơ</h3>
            <form @submit.prevent="updateProfile">
                <div class="mb-3">
                    <label class="form-label">Tên</label>
                    <input type="text" class="form-control" v-model="activeUser.name ">
                </div>
                <div class="mb-3">
                    <label class="form-label">Số điện thoại</label>
                    <input type="number" class="form-control" v-model="activeUser.phone">
                </div>
                <div class="mb-3">
                    <label class="form-label">Giới tính</label>
                    <select class="form-control" v-model="activeUser.gender" >
                        <option value="Nam">Nam</option>
                        <option value="Nữ">Nữ</option>
                    </select>
                </div>
                <div class="mb-3">
                    <label class="form-label">Password</label>
                    <input type="password" class="form-control" v-model="activeUser.password">
                </div>
                <div class="d-flex gap-2">
                    <button type="submit" class="btn btn-primary">Lưu thay đổi</button>
                    <button type="button" class="btn btn-secondary" @click="toggleEditForm">Hủy</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'

// Reactive state với ref
const activeUser = ref(null)
const showPostForm = ref(false)
const showEditForm = ref(false)
const newPost = ref({
    title: '',
    excerpt: '',
    image: null,
    date: new Date().toLocaleDateString(),
    tags: []
})

const router = useRouter()  // Khởi tạo router

//  onMounted
onMounted(() => {
    loadUserProfile();
    loadBlogPosts();

})

// Functions
const loadUserProfile = () => {
    const userProfile = localStorage.getItem('users')
    if (userProfile) {
        try {
            const users = JSON.parse(userProfile)
            activeUser.value = users.find(user => user.activeAccount === 1)
            console.log('Active user:', activeUser.value)
        } catch (error) {
            console.error('Failed to parse user data:', error)
        }
    }
}

const loadBlogPosts = () =>{
    const blogPosts = localStorage.getItem('blogPosts')
    if (blogPosts) {
        try {
            const posts = JSON.parse(blogPosts)
            console.log('Loaded blog posts:', posts.length)

        } catch (error) {
            console.error('Failed to parse blog posts:', error)
        }
    }
}

const togglePostForm = () => {
    showPostForm.value = !showPostForm.value
    if (!showPostForm.value) {
        // Reset form when closing
        newPost.value = {
            title: '',
            excerpt: '',
            image: null,
            date: new Date().toLocaleDateString(),
            tags: []
        }
    }
    // Đóng form edit nếu đang mở
    showEditForm.value = false
}

const toggleEditForm = () => {
    showEditForm.value = !showEditForm.value
    if (!showEditForm.value) {
        // Reset form when closing
        editedProfile.value = {
            name: activeUser.value?.name,
            phone: activeUser.value?.phone,
            gender: activeUser.value?.gender,
            password: activeUser.value?.password
        }
    }
    // Đóng form đăng bài nếu đang mở
    showPostForm.value = false
}


const submitPost = () => {
    // Xử lý đăng bài ở đây
    if (!newPost.value.title?.trim()) {
        alert('Vui lòng nhập title!');
        return;
    }
    if (!newPost.value.excerpt?.trim()) {
        alert('Vui lòng nhập mo ta!');
        return;
    }
    if (!newPost.value.img?.trim()) {
        alert('Vui lòng nhập image!');
        return;
    }

    // Lấy danh sách posts từ localStorage
    let posts = [];
    const blogPosts = localStorage.getItem('blogPosts');
    
    // Nếu đã có posts trong localStorage thì parse nó
    if (blogPosts) {
        posts = JSON.parse(blogPosts);
    }

    const date = new Date();
    const formattedDate = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;

    // Tạo post mới
    const post = {
        id: posts.length + 1,
        image: newPost.value.img,
        date: formattedDate,
        excerpt: newPost.value.excerpt,
        title: newPost.value.title,
        tags: newPost.value.tags || []
    };

    // Thêm post mới vào đầu mảng
    posts.unshift(post);

    // Lưu mảng posts mới vào localStorage
    try {
        localStorage.setItem('blogPosts', JSON.stringify(posts));
        alert('Đăng bài thành công!');
        
        // Đóng form
        togglePostForm();
        // Chuyển hướng về trang home
        router.push('/');
    } catch (error) {
        console.error('Failed to save blog posts:', error);
        alert('Có lỗi xảy ra khi lưu bài viết!');
    }
}

const updateProfile = () => {
    if (!activeUser.value.name?.trim()) {
        alert('Vui lòng nhập tên!');
        return;
    }
    if (!activeUser.value.phone?.trim()) {
        alert('Vui lòng nhập số điện thoại!');
        return;
    }
    if (!activeUser.value.gender) {
        alert('Vui lòng chọn giới tính!');
        return;
    }
    if (!activeUser.value.password) {
        alert('Vui lòng nhap mat khau!');
        return;
    }
    // Lấy danh sách users từ localStorage
    const users = JSON.parse(localStorage.getItem('users') || '[]');
      
       // Tìm và cập nhật thông tin user đang active
    const userIndex = users.findIndex(user => user.activeAccount === 1);
    if (userIndex !== -1) {
        users[userIndex] = {
            ...users[userIndex],
            ...activeUser.value
        };
        
        // Lưu lại vào localStorage
        localStorage.setItem('users', JSON.stringify(users));
        
        // Thông báo thành công
        alert('Cập nhật thông tin thành công!');
        
        // Đóng form
        showEditForm.value = false;
    }else{
        alert('Cập nhật thông tin Thất bại!');
    }
    toggleEditForm();
}
</script>

<style scoped>
.card {
    transition: all 0.3s ease;
}

.btn {
    transition: all 0.2s ease;
}

.btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
}

/* Animation for forms */
.card-enter-active,
.card-leave-active {
    transition: opacity 0.3s ease;
}

.card-enter-from,
.card-leave-to {
    opacity: 0;
}
</style>