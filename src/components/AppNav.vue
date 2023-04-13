<template>
    <section>
        <div class="container">
            <div class="d-flex align-center j-content-between ptb-2">
               <div>
                   <img class="img-logo" src="../assets/img/dc-logo.png" alt="logo">
               </div>
               <div>
                   <ul class="d-flex">
                       <li class="ps-2" v-for="(link, index) in navLink">
                          <a href="#">{{ link }}</a>
                       </li>
                   </ul>
               </div>
            </div>
        </div>
    </section>
</template>


<script>
export default{
    name: 'AppNav',
    data(){
        return{
            navLink:[
                'Characters',
                'Comics',
                'Movies',
                'Tv',
                'Games',
                'Collectibles',
                'Videos',
                'Fans',
                'News',
                'Shop',
            ]
            
        }
    }
}
</script>
<style lang="css" scoped>




</style>