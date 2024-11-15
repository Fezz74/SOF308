<template>
  <footer class="bg-light py-4 fixed-bottom">
    <div class="container-fluid p-0" style="width: 100%;">
      <div class="row text-center text-md-start">
        <div class="col-md-4">
          <h5>Về chúng tôi</h5>
          <p class="text-muted">Energy Pilates - Nơi bạn tìm thấy sự cân bằng và năng lượng tích cực.</p>
        </div>
        <div class="col-md-4">
          <h5>Liên kết</h5>
          <ul class="list-unstyled">
            <li><font-awesome-icon :icon="['fas', 'link']" class="me-2" /><a href="#" class="text-decoration-none text-muted">Chính sách</a></li>
            <li><font-awesome-icon :icon="['fas', 'link']" class="me-2" /><a href="#" class="text-decoration-none text-muted">Điều khoản</a></li>
            <li><font-awesome-icon :icon="['fas', 'link']" class="me-2" /><a href="#" class="text-decoration-none text-muted">Liên hệ</a></li>
          </ul>
        </div>
        <div class="col-md-4 text-center text-md-end">
          <h5>Theo dõi chúng tôi</h5>
          <div class="mt-2">
            <a href="#" class="text-decoration-none text-muted me-2"><font-awesome-icon :icon="['fab', 'facebook-f']" /></a>
            <a href="#" class="text-decoration-none text-muted me-2"><font-awesome-icon :icon="['fab', 'instagram']" /></a>
            <a href="#" class="text-decoration-none text-muted"><font-awesome-icon :icon="['fab', 'youtube']" /></a>
          </div>
        </div>
      </div>
      <hr>
      <p class="text-center text-muted mb-0">© {{ new Date().getFullYear() }} Energy Pilates. All rights reserved.</p>
    </div>
  </footer>
</template>

<style scoped>
footer {
  box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.1);
}

footer a {
  color: #6c757d;
  transition: color 0.3s ease;
}

footer a:hover {
  color: #007bff;
}

footer hr {
  border-color: #dee2e6;
}
</style>