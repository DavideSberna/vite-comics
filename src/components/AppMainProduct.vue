<template>
    <section class="bg-blue ptb-4">
        <div class="container">
           <ul class="d-flex j-center">
            <li class="d-flex align-center p-2" v-for="(item, index) in listProduct">
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

import item1 from '../assets/img/buy-comics-digital-comics.png';
export default{
   name: 'AppMainProduct',
   data(){
       return{
        listProduct:[
            {
                product: 'Digital comics',
                img: item1,
            },
            {
                product: 'Digital comics',
                img: item1,
            },
            {
                product: 'Digital comics',
                img: item1,
            },
            {
                product: 'Digital comics',
                img: item1,
            },
            {
                product: 'Digital comics',
                img: item1,
            },
        ]
           
       }
   }
}
</script>
<style lang="css" scoped></style>