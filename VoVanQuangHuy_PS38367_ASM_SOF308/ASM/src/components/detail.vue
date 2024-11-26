<template>  
  <div class="container mx-auto p-5 mt-5 max-w-3xl">  
    <h1 class="text-2xl font-bold mb-6 text-center">5 Bài tập Pilates cho người mới bắt đầu</h1>  

    <div v-for="(exercise, index) in exercises"   
         :key="index"   
         class="card mb-5 shadow-sm rounded-lg bg-white overflow-hidden border border-gray-200">  
      <div class="flex justify-center">  
        <img :src="exercise.image"   
             class="w-full max-w-md h-48 object-cover rounded-t-lg"   
             :alt="exercise.title">  
      </div>  
      <div class="card-body p-4">  
        <h2 class="text-lg font-semibold mb-2 text-gray-800">{{ exercise.title }}</h2>  
        <p class="text-gray-600 text-sm leading-relaxed">{{ exercise.description }}</p>  
      </div>  
    </div>  
  </div>  
</template>  


<script>  
import HundredImg  from '../assets/image/tap-piltes.jpg'
import RollUpImg  from '../assets/image/tap-pilates1.jpg'
import SingleImg  from '../assets/image/tap-piltes.jpg'
import RollingImg  from '../assets/image/tap-pilates1.jpg'
import TeaserImg  from '../assets/image/tap-piltes.jpg'

export default { 
  name: 'detail',  
  data() {  
    return {  
      exercises: [  
        {  
          title: 'Hundred',  
          image: HundredImg,  
          description: 'Nằm ngửa, co đầu gối và nâng chân lên tạo thành góc 90 độ. Nâng đầu và vai lên khỏi sàn, duỗi thẳng tay dọc theo thân. Bắt đầu bơm tay lên xuống nhỏ và nhanh, hít vào 5 nhịp và thở ra 5 nhịp.',  
        },  
        {  
          title: 'Roll Up',  
          image: RollUpImg,  
          description: 'Nằm ngửa, hai tay duỗi thẳng qua đầu. Từ từ cuộn người lên, bắt đầu từ đầu, vai, rồi lưng. Giữ tư thế này trong vài giây, sau đó từ từ cuộn người xuống.',  
        },  
        {  
          title: 'Single Leg Circle',  
          image: SingleImg,  
          description: 'Nằm ngửa, một chân duỗi thẳng lên trần, chân kia gập gối. Xoay chân duỗi thẳng theo chiều kim đồng hồ, sau đó ngược chiều kim đồng hồ. Đổi chân và lặp lại.',  
        },  
        {  
          title: 'Rolling Like a Ball',  
          image: RollingImg,   
          description: 'Ngồi trên sàn, ôm lấy hai chân. Từ từ lăn ra sau, giữ thăng bằng trên xương cụt. Lăn trở lại tư thế ban đầu.',  
        },  
        {  
          title: 'Teaser',  
          image: TeaserImg,   
          description: 'Nằm ngửa, hai tay duỗi thẳng qua đầu. Đồng thời nâng thân và chân lên, tạo thành hình chữ V. Giữ tư thế này trong vài giây, sau đó từ từ hạ xuống.',  
        },  
      ],  
    };  
  },  
};  
</script>