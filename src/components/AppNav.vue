<template>
    <section>
        <div class="container">
            <div class="d-flex align-items-center justify-content-between pt-2 pb-2">
               <div>
                   <img class="img-logo" src="../assets/img/dc-logo.png" alt="logo">
               </div>
               <div>
                   <ul class="d-flex p-0 m-0">
                       <li class="list-group-item ps-3" v-for="(link, index) in navLink">
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