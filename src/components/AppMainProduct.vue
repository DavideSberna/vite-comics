<template>
    <section class="bg-blue pt-3 pb-3">
        <div class="container">
           <ul class="d-flex justify-content-center align-items-center flex-wrap m-0 p-0">
            <li class="d-flex align-items-center p-3" v-for="(item, index) in newList">
                <div class="pe-1">
                    <img class="img-product d-block" :src="item.img" alt="">
                </div>
                <div class="">
                    <a class="white text-uppercase" href="#">{{ item.product }}</a>
                </div>
            </li>
           </ul>
        </div>
    </section>
</template>


<script>

import {listProduct} from '../assets/data/data.js';
export default{
   name: 'AppMainProduct',
   data(){
       return{
        newList: [...listProduct]
           
       }
   }
}
</script>
<style lang="scss" scoped>
.img-product{
    width: 55px;
    height: 42px;
    object-fit: contain;
}


</style>