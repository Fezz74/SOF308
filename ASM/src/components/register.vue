<template>
  <div class="container m-5 p-5">
    <div class="row justify-content-center align-items-center min-vh-100">
      <div class="col-md-8 col-lg-6">
        <div class="card shadow-lg border-0">
          <div class="card-body p-5">
            <!-- Header với animation -->
            <div class="text-center mb-4 animate__animated animate__fadeIn">
              <h2 class="fw-bold text-primary">Đăng Ký Tài Khoản</h2>
              <p class="text-muted">Vui lòng điền đầy đủ thông tin bên dưới</p>
            </div>

            <!-- Registration Form -->
            <form @submit.prevent="onRegister" class="needs-validation" action="/login">
              <!-- Alert Message -->
              <div v-if="showAlert" class="alert mb-4 animate__animated animate__fadeInDown" :class="{
                'alert-success': alertType === 'success',
                'alert-danger': alertType === 'danger'
              }" role="alert">
                <div class="d-flex align-items-center">
                  {{ alertMessage }}
                </div>
              </div>

              <!-- Họ và Tên -->
              <div class="form-floating mb-3">
                <input type="text" class="form-control custom-input" :class="{ 'is-invalid': nameError }" v-model="name"
                  id="fullName" placeholder="Họ và Tên">
                <label for="fullName" class="form-label">
                  <i class="fas fa-user me-2"></i>Họ và Tên
                </label>
                <div class="invalid-feedback">{{ nameError }}</div>
              </div>

              <!-- Email -->
              <div class="form-floating mb-3">
                <input type="email" class="form-control custom-input" :class="{ 'is-invalid': emailError }"
                  v-model="email" id="registerEmail" placeholder="Email">
                <label for="registerEmail" class="form-label">
                  <i class="fas fa-envelope me-2"></i>Email
                </label>
                <div class="invalid-feedback">{{ emailError }}</div>
              </div>

              <!-- Số điện thoại -->
              <div class="form-floating mb-3">
                <input type="tel" class="form-control custom-input" :class="{ 'is-invalid': phoneError }"
                  v-model="phone" id="phoneNumber" placeholder="Số điện thoại">
                <label for="phoneNumber" class="form-label">
                  <i class="fas fa-phone me-2"></i>Số Điện Thoại
                </label>
                <div class="invalid-feedback">{{ phoneError }}</div>
              </div>

              <!-- Mật khẩu -->
              <div class="form-floating mb-3 position-relative">
                <input :type="showPassword ? 'text' : 'password'" class="form-control custom-input"
                  :class="{ 'is-invalid': passwordError }" v-model="password" id="registerPassword"
                  placeholder="Mật khẩu">
                <label for="registerPassword" class="form-label">
                  <i class="fas fa-lock me-2"></i>Mật Khẩu
                </label>
                <div class="invalid-feedback">{{ passwordError }}</div>
                <button type="button" class="btn btn-link password-toggle" @click="togglePassword">
                  <i :class="showPassword ? 'fas fa-eye-slash' : 'fas fa-eye'"></i>
                </button>
              </div>

              <!-- Giới tính -->
              <div class="mb-4">
                <label class="form-label fw-bold">Giới Tính</label>
                <div class="d-flex gap-4">
                  <div class="form-check custom-radio">
                    <input type="radio" class="form-check-input" v-model="gender" name="gender" id="male" value="Nam">
                    <label class="form-check-label" for="male">Nam</label>
                  </div>
                  <div class="form-check custom-radio">
                    <input type="radio" class="form-check-input" v-model="gender" name="gender" id="female" value="Nữ">
                    <label class="form-check-label" for="female">Nữ</label>
                  </div>
                  <div class="form-check custom-radio">
                    <input type="radio" class="form-check-input" v-model="gender" name="gender" id="other" value="Khác">
                    <label class="form-check-label" for="other">Khác</label>
                  </div>
                </div>
                <div class="text-danger small mt-1" v-if="genderError">{{ genderError }}</div>
              </div>

              <!-- Ngôn ngữ -->
              <div class="mb-4">
                <label class="form-label fw-bold">Ngôn Ngữ</label>
                <div class="language-options">
                  <div class="form-check custom-checkbox">
                    <input type="checkbox" class="form-check-input" v-model="language" value="Tiếng Việt"
                      id="vietnamese">
                    <label class="form-check-label" for="vietnamese">
                      <i class="fas fa-language me-2"></i>Tiếng Việt
                    </label>
                  </div>
                  <div class="form-check custom-checkbox">
                    <input type="checkbox" class="form-check-input" v-model="language" value="English" id="english">
                    <label class="form-check-label" for="english">
                      <i class="fas fa-language me-2"></i>English
                    </label>
                  </div>
                  <div class="form-check custom-checkbox">
                    <input type="checkbox" class="form-check-input" v-model="language" value="Japanese" id="japanese">
                    <label class="form-check-label" for="japanese">
                      <i class="fas fa-language me-2"></i>Japanese
                    </label>
                  </div>
                </div>
                <div class="text-danger small mt-1" v-if="languageError">{{ languageError }}</div>
              </div>

              <input type="hidden" value="0" v-model="activeAccount">

              <!-- Submit Button -->
              <button type="submit" class="btn btn-primary w-100 py-3 mb-4 custom-button">
                <i class="fas fa-user-plus me-2"></i>Đăng Ký
              </button>

              <!-- Login Link -->
              <div class="text-center">
                <span class="text-muted">Đã có tài khoản? </span>
                <router-link to="/login" class="text-primary text-decoration-none hover-link">
                  Đăng nhập ngay
                </router-link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()
const showPassword = ref(false)


// Khai báo refs cho form data
const name = ref('');
const email = ref('');
const phone = ref('');
const password = ref('');
const gender = ref('');
const language = ref([]);
const activeAccount = ref(0);

// Thêm các ref cho thông báo lỗi  
const nameError = ref('');
const emailError = ref('');
const phoneError = ref('');
const passwordError = ref('');
const genderError = ref('');
const languageError = ref('');

// Thêm regex patterns  
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phoneRegex = /^[0-9]{10}$/;

// Thêm ref cho alert  
const showAlert = ref(false);
const alertMessage = ref('');
const alertType = ref(''); // 'success' hoặc 'danger'  

// Hàm để reset form  
const resetForm = () => {
  name.value = '';
  email.value = '';
  phone.value = '';
  password.value = '';
  gender.value = '';
  language.value = [];

  // Reset các thông báo lỗi  
  nameError.value = '';
  emailError.value = '';
  phoneError.value = '';
  passwordError.value = '';
  genderError.value = '';
  languageError.value = '';
};

// Hàm để hiển thị alert  
const showAlertMessage = (message, type = 'success') => {
  alertMessage.value = message;
  alertType.value = type;
  showAlert.value = true;

  // Tự động ẩn alert sau 3 giây  
  setTimeout(() => {
    showAlert.value = false;
  }, 3000);
};


const emit = defineEmits(['register']) // Định nghĩa emit

const togglePassword = () => {
  showPassword.value = !showPassword.value
}

const onRegister = () => {
  // Reset all error messages  
  nameError.value = '';
  emailError.value = '';
  phoneError.value = '';
  passwordError.value = '';
  genderError.value = '';
  languageError.value = '';

  // Validate name  
  if (!name.value.trim()) {
    nameError.value = 'Họ và tên là bắt buộc.';
  } else if (name.value.trim().length < 2) {
    nameError.value = 'Họ và tên phải có ít nhất 2 ký tự.';
  }

  // Validate email  
  if (!email.value) {
    emailError.value = 'Email là bắt buộc.';
  } else if (!emailRegex.test(email.value)) {
    emailError.value = 'Vui lòng nhập email hợp lệ.';
  }

  // Validate phone  
  if (!phone.value) {
    phoneError.value = 'Số điện thoại là bắt buộc.';
  } else if (!phoneRegex.test(phone.value)) {
    phoneError.value = 'Số điện thoại không hợp lệ.';
  }

  // Validate password  
  if (!password.value) {
    passwordError.value = 'Mật khẩu là bắt buộc.';
  } else if (password.value.length < 6) {
    passwordError.value = 'Mật khẩu phải có ít nhất 6 ký tự.';
  }

  // Validate gender  
  if (!gender.value) {
    genderError.value = 'Vui lòng chọn giới tính.';
  }

  // Validate language  
  if (language.value.length === 0) {
    languageError.value = 'Vui lòng chọn ít nhất một ngôn ngữ.';
  }

  // console.log(activeAccount.value);
  // If no errors, proceed with registration  
  if (!nameError.value && !emailError.value && !phoneError.value &&
    !passwordError.value && !genderError.value && !languageError.value) {
    try {
      const userData = {
        name: name.value,
        email: email.value,
        phone: phone.value,
        password: password.value,
        gender: gender.value,
        language: language.value,
        activeAccount: activeAccount.value
      };

      emit('register', userData);
      // Hiển thị thông báo thành công  
      showAlertMessage(`Chào mừng ${name.value} đã đăng ký thành công!`);
      
      // Reset form  
      resetForm();

    } catch (error) {
      console.error(error);
      // Hiển thị thông báo lỗi  
      showAlertMessage('Có lỗi xảy ra khi đăng ký!', 'danger');
    }
  }
};

</script>

<style scoped>
/* Card Styles */
.card {
  border-radius: 1.5rem;
  background: #ffffff;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
  transition: transform 0.3s ease;
}

.card:hover {
  transform: translateY(-5px);
}

/* Input Styles */
.custom-input {
  border-radius: 0.75rem;
  border: 2px solid #e0e0e0;
  padding: 0.75rem 1rem;
  transition: all 0.3s ease;
}

.custom-input:focus {
  border-color: #0d6efd;
  box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.15);
}

/* Radio & Checkbox Styles */
.custom-radio .form-check-input,
.custom-checkbox .form-check-input {
  cursor: pointer;
  width: 1.2rem;
  height: 1.2rem;
}

.custom-radio .form-check-label,
.custom-checkbox .form-check-label {
  cursor: pointer;
  padding-left: 0.5rem;
}

/* Button Styles */
.custom-button {
  border-radius: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.5px;
  background: linear-gradient(45deg, #0d6efd, #0b5ed7);
  border: none;
  transition: all 0.3s ease;
}

.custom-button:hover {
  background: linear-gradient(45deg, #0b5ed7, #0a58ca);
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(13, 110, 253, 0.3);
}

/* Link Styles */
.hover-link {
  position: relative;
  font-weight: 500;
}

.hover-link::after {
  content: '';
  position: absolute;
  width: 100%;
  height: 2px;
  bottom: -2px;
  left: 0;
  background-color: #0d6efd;
  transform: scaleX(0);
  transition: transform 0.3s ease;
}

.hover-link:hover::after {
  transform: scaleX(1);
}

/* Language Options */
.language-options {
  display: grid;
  gap: 0.5rem;
}

.is-invalid {
  border-color: #dc3545 !important;
}

.is-invalid:focus {
  box-shadow: 0 0 0 0.25rem rgba(220, 53, 69, 0.25) !important;
}

.invalid-feedback {
  display: block;
  font-size: 0.875rem;
  color: #dc3545;
  margin-top: 0.25rem;
}

/* Animations */
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate__fadeIn {
  animation: fadeIn 0.5s ease-out;
}

/* Responsive Adjustments */
@media (max-width: 768px) {
  .card-body {
    padding: 2rem;
  }

  .custom-button {
    padding: 0.75rem;
  }
}

/* Alert Styles */
.alert {
  position: fixed;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1000;
  min-width: 300px;
  text-align: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border: none;
  border-radius: 8px;
}

.alert-success {
  background-color: #d4edda;
  color: #155724;
  border-left: 4px solid #28a745;
}

.alert-danger {
  background-color: #f8d7da;
  color: #721c24;
  border-left: 4px solid #dc3545;
}

/* Animation classes */
.animate__animated {
  animation-duration: 0.5s;
}

.animate__fadeInDown {
  animation-name: fadeInDown;
}

@keyframes fadeInDown {
  from {
    opacity: 0;
    transform: translate3d(-50%, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(-50%, 0, 0);
  }
}

/* Fade out animation */
.alert.fade-out {
  animation: fadeOut 0.5s ease-out forwards;
}

@keyframes fadeOut {
  from {
    opacity: 1;
    transform: translate3d(-50%, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(-50%, -100%, 0);
  }
}
</style>