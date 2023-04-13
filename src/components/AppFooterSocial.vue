<template>
    <section class="bg-black">
        <div class="container">
            <div class="ptb-4">
                <div class="d-flex j-content-between align-center">
                   <div>
                     <button type="button">Sing-up now!</button>
                   </div>
                   <div>
                    <ul class="d-flex align-center">
                        <li v-for="(item, index) in footerSocial">
                            <a class="white" href="#">{{item.title}}</a>
                            <img class="block" :src="item.imgSocial" alt="">
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