<script>  
import { library } from '@fortawesome/fontawesome-svg-core'  
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'  
import { faFacebookF, faTwitter, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'  
library.add(faFacebookF, faTwitter, faInstagram, faLinkedinIn)  
</script>  

<template>  
  <footer class="footer-dark">  
    <div class="container">  
      <div class="row">  
        <div class="col-md-4 mb-4">  
          <h5 class="mb-4">Về Chúng Tôi</h5>  
          <p>Chúng tôi là công ty chuyên cung cấp các giải pháp công nghệ hàng đầu, mang đến những trải nghiệm tốt nhất cho khách hàng.</p>  
        </div>  

        <div class="col-md-4 mb-4">  
          <h5 class="mb-4">Thông Tin Liên Hệ</h5>  
          <ul class="list-unstyled">  
            <li class="mb-3">  
              <font-awesome-icon icon="map-marker-alt" class="me-2" />  
              123 Đường ABC, Quận XYZ, TP.HCM  
            </li>  
            <li class="mb-3">  
              <font-awesome-icon icon="phone" class="me-2" />  
              +84 123 456 789  
            </li>  
            <li class="mb-3">  
              <font-awesome-icon icon="envelope" class="me-2" />  
              info@example.com  
            </li>  
          </ul>  
        </div>  

        <div class="col-md-4 mb-4">  
          <h5 class="mb-4">Đăng Ký Nhận Tin</h5>  
          <p>Đăng ký để nhận những thông tin mới nhất từ chúng tôi</p>  
          <div class="input-group mb-3">  
            <input type="email" class="form-control" placeholder="Email của bạn">  
            <button class="btn btn-info" type="button">Đăng Ký</button>  
          </div>  
          <div class="social-icons mt-4">  
            <a href="#" class="social-icon"><font-awesome-icon :icon="['fab', 'facebook-f']" /></a>  
            <a href="#" class="social-icon"><font-awesome-icon :icon="['fab', 'twitter']" /></a>  
            <a href="#" class="social-icon"><font-awesome-icon :icon="['fab', 'instagram']" /></a>  
            <a href="#" class="social-icon"><font-awesome-icon :icon="['fab', 'linkedin-in']" /></a>  
          </div>  
        </div>  
      </div>  
    </div>  

    <div class="footer-bottom mt-3">  
      <div class="container">  
        <div class="row align-items-center">  
          <div class="col-md-12 text-center">  
            <p class="mb-0">&copy; 2024 Company Name. All rights reserved. | Designed with <font-awesome-icon icon="heart" class="text-danger" /> by YourName</p>  
          </div>  
        </div>  
      </div>  
    </div>  
  </footer>  
</template>   

<style scoped>  
.footer-dark {  
  background-color: #2d3436;  
  color: #ffffff;  
  padding: 60px 0;  
}  

.footer-dark a {  
  color: #ffffff;  
  text-decoration: none;  
}  

.footer-dark a:hover {  
  color: #17a2b8;  
}  

.social-icons a.social-icon { /* Added class selector */  
  width: 35px;  
  height: 35px;  
  display: inline-flex;  
  align-items: center;  
  justify-content: center;  
  background-color: rgba(255, 255, 255, 0.1);  
  border-radius: 50%;  
  margin-right: 10px;  
  transition: all 0.3s ease;  
}  

.social-icons a:hover {  
  background-color: #17a2b8;  
  transform: translateY(-3px);  
}  

.footer-links li {  
  margin-bottom: 10px;  
}  

.footer-bottom {  
  background-color: #222831;  
  padding: 20px 0;  
}  
</style>