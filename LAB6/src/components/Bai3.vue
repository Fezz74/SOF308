<template>
    <div class="container mt-5">
        <h1 class="text-center">Kiến thức sức khỏe cộng đồng</h1>
        <div class="row">
            <div class="col-sm-4 mb-4" v-for="(item,index) in items" :key="index">
                <div class="card">
                    <img :src="item.image" :alt="item.title" class="img-fluid">
                    <div class="card-body">
                        <h3 class="card-title">{{ item.title }}</h3>
                        <p class="card-text">{{ item.content }}</p>
                        <button class="btn btn-info">Xem chi tiết</button>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<script setup>
import { ref } from 'vue';
import img1 from '../assets/images/eat-clean.png'
import img2 from '../assets/images/tap-pilates1.jpg'
import img3 from '../assets/images/tap-piltes.jpg'
import img4 from '../assets/images/tim-mach.jpg'


const items = ref([
    {
        image: img1,
        title: 'Bài 1',
        content: 'Nội dung bài 1'
    },
    {
        image: img2,
        title: 'Bài 2',
        content: 'Nội dung bài 2'
    },
    {
        image: img3,
        title: 'Bài 3',
        content: 'Nội dung bài 3'
    },
    {
        image: img4,
        title: 'Bài 4',
        content: 'Nội dung bài 4'
    },
    ])
</script>