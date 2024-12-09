<template>
    <div class="container mt-5">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-header bg-primary text-white">
                        <h3 class="mb-0">Form Đăng Ký</h3>
                    </div>
                    <div class="card-body">
                        <form @submit.prevent="register">
                            <div class="mb-3">
                                <label class="form-label">Họ tên:</label>
                                <input type="text" class="form-control" v-model="name" placeholder="Nhập họ tên">
                                <p v-if="nameError" class="text-danger">{{ nameError }}</p>
                            </div>
                            <div class="mb-3">
                                <label class="form-label">Email:</label>
                                <input type="email" class="form-control" v-model="email" placeholder="Nhập email">
                                <p v-if="emailError" class="text-danger">{{ emailError }}</p>
                            </div>
                            <div class="mb-3">
                                <label class="form-label">Mật khẩu:</label>
                                <input type="password" class="form-control" v-model="password" placeholder="Nhập mật khẩu">
                                <p v-if="passwordError" class="text-danger">{{ passwordError }}</p>
                            </div>
                            <div class="mb-3">
                                <label class="form-label">Ngày sinh:</label>
                                <input type="date" class="form-control" v-model="birdate">
                                <p v-if="birdateError" class="text-danger">{{ birdateError }}</p>
                            </div>
                            <div class="mb-3">
                                <label class="form-label">Giới tính:</label>
                                <div>
                                    <div class="form-check form-check-inline">
                                        <input class="form-check-input" type="radio" name="gioitinh" value="Nam" v-model="gioitinh" checked>
                                        <label class="form-check-label">Nam</label>
                                    </div>
                                    <div class="form-check form-check-inline">
                                        <input class="form-check-input" type="radio" name="gioitinh" value="Nu" v-model="gioitinh">
                                        <label class="form-check-label">Nữ</label>
                                    </div>
                                    <div class="form-check form-check-inline">
                                        <input class="form-check-input" type="radio" name="gioitinh" value="Khac" v-model="gioitinh">
                                        <label class="form-check-label">Khác</label>
                                    </div>
                                </div>
                                <p v-if="gioitinhError" class="text-danger">{{ gioitinhError }}</p>
                            </div>
                            <div class="mb-3">
                                <label class="form-label">Ngôn ngữ:</label>
                                <div>
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" name="ngonngu" value="Tiếng Việt" v-model="ngonngu">
                                        <label class="form-check-label">Tiếng Việt</label>
                                    </div>
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" name="ngonngu" value="Tiếng Anh" v-model="ngonngu">
                                        <label class="form-check-label">Tiếng Anh</label>
                                    </div>
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" name="ngonngu" value="Tiếng Nhật" v-model="ngonngu">
                                        <label class="form-check-label">Tiếng Nhật</label>
                                    </div>
                                </div>
                                <p v-if="ngonnguError" class="text-danger">{{ ngonnguError }}</p>
                            </div>
                            <button type="submit" class="btn btn-primary">Đăng Ký</button>
                        </form>
                    </div>
                </div>
            </div>
            <div class="col-md-8 mt-5">
                <div class="card">
                    <div class="card-header bg-secondary text-white">
                        <h3 class="mb-0">Thông tin đã đăng ký</h3>
                    </div>
                    <div class="card-body">
                        <div v-if="isLoggedIn">
                            <p><strong>Họ tên:</strong> {{ name }}</p>
                            <p><strong>Email:</strong> {{ email }}</p>
                            <p><strong>Ngày sinh:</strong> {{ birdate }}</p>
                            <p><strong>Giới tính:</strong> {{ gioitinh }}</p>
                            <p><strong>Ngôn ngữ:</strong> {{ ngonngu.join(', ') }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import { ref } from 'vue';


const isLoggedIn = ref(false);
const name = ref('');
const email = ref('');
const password = ref('');
const birdate = ref('');
const gioitinh = ref('');
const ngonngu = ref([]);

const emailError = ref('');
const passwordError = ref('');
const nameError = ref('');
const birdateError = ref('');
const gioitinhError = ref('');
const ngonnguError = ref('');


const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const register = () => {
    // Reset thông điệp lỗi
    emailError.value = '';
    passwordError.value = '';
    nameError.value = '';
    birdateError.value = '';
    gioitinhError.value = '';
    ngonnguError.value = "";

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

    if (!name.value) {
        nameError.value = 'Họ tên là bắt buộc.';
    }

    if (!birdate.value) {
        birdateError.value = 'Ngày sinh là bắt buộc.';
    }
    if (!gioitinh.value) {
        gioitinhError.value = 'Giới tính là bắt buộc.';
    }
    if (!ngonngu.value) {
        ngonnguError.value = 'Ngôn ngữ là bắt buộc.';
    }

    // Nếu không có lỗi, xử lý login
    if (!emailError.value && !passwordError.value && !nameError.value && !birdateError.value && !gioitinhError.value && !ngonnguError.value) {
        isLoggedIn.value = true;
    }
}


</script>
