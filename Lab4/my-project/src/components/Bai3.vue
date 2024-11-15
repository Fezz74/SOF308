<template>
    <!-- Hien thi loi chao-->
     <h1>{{ greeting }}</h1>
     <!-- Tao nut thay doi noi dung-->
      <button v-bind:title="buttonTitle" @click="changeGreeting">
        Click de thay doi 
      </button>
</template>

<script>
export default{
    data(){
        return{
            greeting: 'Xin chào bạn!',
            buttonTitle: 'Nhấn để thay đổi lời chào'
        }
    },
    methods:{
        changeGreeting(){
            this.greeting = 'Hello World!';
            this.buttonTitle = 'Lời chào mới đã được cập nhật';
        }
    }
}
</script>