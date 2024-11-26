<template>
    <div class="container mb-5">
        <!-- Hero Section -->
        <div class="row mt-5 pt-5">
            <div class="text-center mb-5" style="width: 100%;">
                <h1 class="display-4 mb-3">Chào mừng đến với Energy Pilates</h1>
                <p class="lead text-muted">Khám phá sức khỏe và sự cân bằng cùng chúng tôi</p>
            </div>
        </div>


        <!-- Featured Content -->
        <div class="row g-4 mb-3" style="width: 100%;">
            <div class="col-md-4">
                <div class="card h-100 shadow-sm" style="width: 100%;">
                    <div class="card-body">
                        <h5 class="card-title">Lớp học mới</h5>
                        <p class="card-text">Khám phá các lớp học Pilates mới nhất của chúng tôi.</p>
                        <a href="#" class="btn btn-primary">Xem thêm</a>
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <div class="card h-100 shadow-sm" style="width: 100%;">
                    <div class="card-body">
                        <h5 class="card-title">Hướng dẫn</h5>
                        <p class="card-text">Tìm hiểu các bài tập và kỹ thuật Pilates cơ bản.</p>
                        <a href="#" class="btn btn-primary">Xem thêm</a>
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <div class="card h-100 shadow-sm" style="width: 100%;">
                    <div class="card-body">
                        <h5 class="card-title">Tin tức</h5>
                        <p class="card-text">Cập nhật những tin tức mới nhất về Pilates.</p>
                        <a href="#" class="btn btn-primary">Xem thêm</a>
                    </div>
                </div>
            </div>
        </div>

        <!-- Additional Content -->
        <div class="row" style="width: 100%;">
            <div class="col-lg-7">
                <h2 class="mb-4">Bài viết mới nhất</h2>
                <div class="list-group" style="width: 100%;">
                    <router-link to="/detail" class="list-group-item list-group-item-action shadow-sm"
                        style="width: 100%;"><div class="d-flex w-100 justify-content-between">
                            <h5 class="mb-1">5 bài tập Pilates cho người mới bắt đầu</h5>
                            <small class="text-muted">3 ngày trước</small>
                        </div>
                        <p class="mb-1">Hướng dẫn chi tiết các bài tập Pilates cơ bản cho người mới.</p>
                    </router-link>
                    <a href="#" class="list-group-item list-group-item-action shadow-sm" style="width: 100%;">
                        <div class="d-flex w-100 justify-content-between">
                            <h5 class="mb-1">Lợi ích của Pilates đối với sức khỏe</h5>
                            <small class="text-muted">5 ngày trước</small>
                        </div>
                        <p class="mb-1">Tìm hiểu về những lợi ích tuyệt vời của Pilates.</p>
                    </a>
                </div>
            </div>
            <div class="col-lg-5">
                <h2 class="mb-4">Sự kiện sắp tới</h2>
                <div class="card shadow-sm" style="width: 100%;">
                    <div class="card-body">
                        <h5 class="card-title">Workshop Pilates</h5>
                        <p class="card-text">Ngày 20/11/2024</p>
                        <p class="card-text">Tham gia workshop để học hỏi từ các chuyên gia.</p>
                        <a href="#" class="btn btn-primary">Đăng ký ngay</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.navbar {
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
}

html,
body {
    height: 100%;
    width: 100%;
}

#app {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    width: 100%;
}

footer {
    flex-shrink: 0;
    width: 100%;
}


.container-fluid {
    max-width: 100%;
    /* Ensures full width */
    padding: 0;
    /* Removes default padding */
    margin: auto;
}
</style>