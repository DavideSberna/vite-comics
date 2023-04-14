<template>
    <section class="bg-blue pt-3 pb-3">
        <div class="container">
           <ul class="d-flex justify-content-center align-items-center m-0 p-0">
            <li class="d-flex align-center" v-for="(item, index) in newList">
                <div >
                    <img class="img-product" :src="item.img" alt="">
                </div>
                <div class="ps-1">
                    <a class="white" href="#">{{ item.product }}</a>
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
<style lang="css" scoped></style>