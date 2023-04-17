<template>
    <section class="bg-black pt-5 pb-5">
        <div class="container d-flex justify-content-center align-items-center">
            <div class="pt-5 pb-5">
               <Cardcomponent/>
            </div>
        </div>
    </section>
</template>


<script>

// import json from '../assets/data/dc-comics.json'
import Cardcomponent from './Cardcomponent.vue';
export default{
   name: 'AppMainContent',
   components:{
    Cardcomponent,
   },
   data(){
       return{
        // newJson: [...json]

        
       }
   }
}
</script>
<style lang="scss" scoped>

 

</style>