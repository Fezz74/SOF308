<script setup>
import { ref, computed, onMounted, onUnmounted, watch } from 'vue'  // Thêm onUnmounted vào đây  
import { useRouter } from 'vue-router'
import logo from '@/assets/image/FPT_Polytechnic.png'

// Font Awesome imports  
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {
    faNewspaper, faVideo, faInfoCircle, faCalendarAlt,
    faUser, faGlobe, faSignInAlt, faUserPlus,
    faUserCircle, faSignOutAlt
} from '@fortawesome/free-solid-svg-icons'

library.add(
    faNewspaper, faVideo, faInfoCircle, faCalendarAlt,
    faUser, faGlobe, faSignInAlt, faUserPlus,
    faUserCircle, faSignOutAlt
)

const props = defineProps({
    registeredUsers: {
        type: Array,
        required: true,
        default: () => []
    }
});

const emit = defineEmits(['logout']);
const router = useRouter();
const isAccountDropdownOpen = ref(false);

// Khởi tạo state từ localStorage  
const localUsers = ref([]);

// Lấy dữ liệu từ localStorage  
const initializeFromLocalStorage = () => {
    const savedUsers = localStorage.getItem('users');
    if (savedUsers) {
        try {
            localUsers.value = JSON.parse(savedUsers);
            console.log('Loaded users from localStorage:', localUsers.value);
        } catch (error) {
            console.error('Error parsing users from localStorage:', error);
        }
    }
};

// Computed property kết hợp cả localStorage và props  
const currentUser = computed(() => {
    // Ưu tiên dữ liệu từ props  
    const propsUser = props.registeredUsers.find(user => user.activeAccount === 1);
    if (propsUser) return propsUser;

    // Nếu không có trong props, kiểm tra localStorage  
    const localUser = localUsers.value.find(user => user.activeAccount === 1);
    return localUser || null;
});

// Watch props để cập nhật localStorage  
watch(() => props.registeredUsers, (newUsers) => {
    if (newUsers.length) {
        localStorage.setItem('users', JSON.stringify(newUsers));
        console.log('Updated localStorage with new users:', newUsers);
    }
}, { deep: true });

// Dropdown handlers  
const showDropdown = () => {
    isAccountDropdownOpen.value = true;
};

const hideDropdown = () => {
    isAccountDropdownOpen.value = false;
};

const handleProfile = () => {
  // Lấy thông tin người dùng từ localStorage
  const userProfile = localStorage.getItem('users');
  
  if (userProfile) {
    try {
      const user = JSON.parse(userProfile);
      console.log('User Profile:', user); // hoặc sử dụng thông tin này như bạn muốn

      // Điều hướng đến trang lược sử hoặc hiển thị thông tin trên trang
      router.push('/profile'); // hoặc bất kỳ đường dẫn nào bạn muốn điều hướng
    } catch (error) {
      console.error('Error parsing user profile from localStorage', error);
    }
  } else {
    console.log('No user profile found in localStorage');
    // Có thể điều hướng đến trang đăng nhập hoặc hiển thị thông báo
  }
};


// Logout handler  
const handleLogout = () => {
    if (currentUser.value) {
        currentUser.value = false;
        emit('logout', currentUser.value.email);
        hideDropdown();
        // Cập nhật localStorage khi logout  
        const updatedUsers = localUsers.value.map(user => ({
            ...user,
            activeAccount: user.email === currentUser.value.email ? 0 : user.activeAccount
        }));
        localStorage.setItem('users', JSON.stringify(updatedUsers));
        localStorage.setItem('isAuthenticated', 'false');
        router.push('/login');
    }
};

// Click outside handler  
const handleClickOutside = (event) => {
    if (!event.target.closest('.nav-item.dropdown')) {
        hideDropdown();
    }
};

// Lifecycle hooks  
onMounted(() => {
    initializeFromLocalStorage();
    import('bootstrap');
    document.addEventListener('click', handleClickOutside);

    // Debug log  
    console.log('Component mounted');
    console.log('Props users:', props.registeredUsers);
    console.log('Local users:', localUsers.value);
    console.log('Current user:', currentUser.value);
});

onUnmounted(() => {
    document.removeEventListener('click', handleClickOutside);
});  
</script>

<template>
    <nav class="navbar navbar-expand-lg custom-navbar fixed-top">
        <div class="container">
            <!-- Logo -->
            <router-link to="/" class="navbar-brand">
                <img :src="logo" alt="Energy Pilates" height="45" class="d-inline-block align-middle">
            </router-link>

            <!-- Toggler Button -->
            <button class="navbar-toggler border-0" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarContent">
                <span class="navbar-toggler-icon"></span>
            </button>

            <!-- Navbar Content -->
            <div class="collapse navbar-collapse" id="navbarContent">
                <!-- Main Menu -->
                <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <a class="nav-link" aria-current="page" href="#">
                            <font-awesome-icon icon="newspaper" class="me-1" />
                            Bài viết
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">
                            <font-awesome-icon icon="video" class="me-1" />
                            Video
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">
                            <font-awesome-icon icon="info-circle" class="me-1" />
                            Giới thiệu
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">
                            <font-awesome-icon icon="calendar-alt" class="me-1" />
                            Sự kiện
                        </a>
                    </li>
                </ul>

                <!-- Right Menu -->
                <ul class="navbar-nav">
                    <li v-if="!currentUser" class="nav-item dropdown" @mouseenter="showDropdown"
                        @mouseleave="hideDropdown">
                        <a class="nav-link btn btn-outline-primary rounded-pill px-3 me-2" href="#" role="button">
                            <font-awesome-icon icon="user" class="me-1" />
                            Tài khoản
                        </a>
                        <ul class="dropdown-menu dropdown-menu-animate" :class="{ show: isAccountDropdownOpen }"
                            @mouseenter="showDropdown" @mouseleave="hideDropdown">
                            <li>
                                <router-link to="/login" class="dropdown-item menu-item">
                                    <font-awesome-icon icon="sign-in-alt" class="me-2" />
                                    <span>Đăng nhập</span>
                                </router-link>
                            </li>
                            <li>
                                <router-link to="/register" class="dropdown-item menu-item">
                                    <font-awesome-icon icon="user-plus" class="me-2" />
                                    <span>Đăng ký</span>
                                </router-link>
                            </li>
                        </ul>
                    </li>
                    <li v-else class="nav-item dropdown">
                        <a class="nav-link btn btn-outline-primary rounded-pill px-3 me-2" href="#" role="button"
                            @mouseenter="showDropdown">
                            <font-awesome-icon icon="user-circle" class="me-1" />
                            {{ currentUser.email }}
                        </a>
                        
                        <ul class="dropdown-menu dropdown-menu-animate" :class="{ show: isAccountDropdownOpen }"
                            @mouseenter="showDropdown" @mouseleave="hideDropdown">
                            <li>
                                <a @click.prevent="handleProfile" class="dropdown-item menu-item" href="#">
                                    <font-awesome-icon icon="sign-out-alt" class="me-2" />
                                    <span>Profile</span>
                                </a>
                            </li>
                            <li>
                                <a @click.prevent="handleLogout" class="dropdown-item menu-item" href="#">
                                    <font-awesome-icon icon="sign-out-alt" class="me-2" />
                                    <span>Đăng xuất</span>
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link btn btn-outline-secondary rounded-pill px-3" href="#" role="button"
                            data-bs-toggle="dropdown">
                            <font-awesome-icon icon="globe" class="me-1" />
                            Ngôn ngữ
                        </a>
                        <ul class="dropdown-menu dropdown-menu-end dropdown-menu-animate">
                            <li><a class="dropdown-item active" href="#">🇻🇳 Tiếng Việt</a></li>
                            <li><a class="dropdown-item" href="#">🇬🇧 English</a></li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<style scoped>
.custom-navbar {
    background-color: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(10px);
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    padding: 0.8rem 0;
}

.navbar-brand {
    padding: 0;
    margin-right: 2rem;
}

.nav-link {
    color: #495057;
    font-weight: 500;
    padding: 0.5rem 1rem;
    transition: all 0.3s ease;
}

.nav-link:hover {
    color: #007bff;
}

.dropdown-menu {
    border: none;
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
    border-radius: 0.5rem;
}

.dropdown-menu-animate {
    animation: dropdownFade 0.2s ease;
}

.dropdown-item {
    padding: 0.7rem 1.5rem;
    font-weight: 500;
}

.dropdown-item:hover {
    background-color: #f8f9fa;
}

.dropdown-item.active {
    background-color: #e9ecef;
    color: #212529;
}

.dropdown-menu {
    display: block;
    /* Luôn hiển thị nhưng ẩn đi khi không có class show */
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease;
    transform: translateY(10px);
}

.dropdown-menu.show {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
}

/* Đảm bảo dropdown menu không bị ẩn khi hover */
.nav-item.dropdown:hover .dropdown-menu {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
}

/* Animation mượt mà hơn */
.dropdown-menu-animate {
    animation: none;
    /* Bỏ animation cũ */
}

/* Thêm transition cho smooth hover effect */
.nav-link {
    transition: all 0.3s ease;
}

/* Điều chỉnh vị trí dropdown menu */
.dropdown-menu {
    margin-top: 0.5rem;
}

.menu-item {
    display: flex;
    align-items: center;
    padding: 0.8rem 1.5rem;
    color: #495057;
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;
}

.menu-item:hover {
    color: #007bff;
    background-color: #f8f9fa;
    padding-left: 2rem;
}

/* Hiệu ứng gạch chân khi hover */
.menu-item::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background-color: #007bff;
    transition: width 0.3s ease;
}

.menu-item:hover::after {
    width: 100%;
}

/* Style cho icon */
.menu-item .svg-inline--fa {
    transition: transform 0.3s ease;
}

.menu-item:hover .svg-inline--fa {
    transform: scale(1.2);
}

/* Hiệu ứng highlight nhẹ */
.menu-item:active {
    background-color: #e9ecef;
}

/* Animation cho text */
.menu-item span {
    transition: transform 0.3s ease;
}

.menu-item:hover span {
    transform: translateX(5px);
}

/* Style cho dropdown menu */
.dropdown-menu {
    border-radius: 0.5rem;
    min-width: 200px;
    padding: 0.5rem 0;
}

/* Responsive styles */
@media (max-width: 991.98px) {
    .menu-item {
        padding: 1rem 1.5rem;
    }

    .menu-item:hover {
        padding-left: 2rem;
    }
}

/* Đảm bảo dropdown hoạt động tốt trên mobile */
@media (max-width: 991.98px) {
    .dropdown-menu {
        position: static;
        float: none;
        width: auto;
        margin-top: 0;
        background-color: transparent;
        border: 0;
        box-shadow: none;
    }
}

@keyframes dropdownFade {
    from {
        opacity: 0;
        transform: translateY(-10px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}

@media (max-width: 991.98px) {
    .navbar-nav {
        padding: 1rem 0;
    }

    .nav-item {
        margin: 0.5rem 0;
    }
}
</style>