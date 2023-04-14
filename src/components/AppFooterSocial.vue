<template>
    <section class="bg-black">
        <div class="container">
            <div class="pt-2 pb-2">
                <div class="d-flex justify-content-between align-items-center">
                   <div>
                     <button type="button" class="white btn border border-2 rounded-0 border-primary">Sing-up now!</button>
                   </div>
                   <div>
                    <ul class="d-flex align-items-center m-0 p-0">
                        <li class="list-group-item" v-for="(item, index) in footerSocial">
                            <a class="white" href="#">{{item.title}}</a>
                            <img class="d-block ps-2" :src="item.imgSocial" alt="">
                        </li>
                    </ul>
                   </div>
                </div>
            </div>
        </div>
    </section>
</template>


<script>
import image1 from '../assets/img/footer-facebook.png';
export default{
   name: 'AppFooterSocial',
   data(){
       return{
        footerSocial:[
            {
                title: 'Follow Us',
            },
            {
                imgSocial: image1,
            },
            {
                imgSocial: image1,
            },
            {
                imgSocial: image1,
            },
            {
                imgSocial: image1,
            },
        ]
           
       }
   }
}
</script>
<style lang="css" scoped></style>