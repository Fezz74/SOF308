<script >  

import register from './components/register.vue'  
import headertop from './components/headertop.vue'
import bodymain from './components/bodymain.vue'
import footerbottom from './components/footerbottom.vue'
import bodycenter from './components/bodycenter.vue';
import detail from './components/detail.vue';

export default {  
  name: 'App',  
  components: {  
    register,  
    headertop,
    bodymain,
    footerbottom,
    bodycenter,
    detail
  }  
}

</script>  

<template> 
  <headertop></headertop>
  <bodycenter></bodycenter>
  <footerbottom></footerbottom>
</template>   
