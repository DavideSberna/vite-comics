<template>
    <section>
        <!-- pt-2 pb-2 -->
        <div class="container nav">
            <div class="w-100 d-flex align-items-center justify-content-between">
               <div class="h-100 pt-2 pb-2">
                   <img class="img-logo" src="../assets/img/dc-logo.png" alt="logo">
               </div>
               <div class="h-100 d-md-block d-none">
                   <ul class="d-flex align-items-center p-0 m-0 h-100">
                       <li class="list-group-item ps-3 h-100 d-flex align-items-center" v-for="(link, index) in newNav">
                          <a class="h-100 d-flex align-items-center" href="#">{{ link }}</a>
                       </li>
                   </ul>
               </div>
               <div v-if="!navShow" class="d-md-none">
                <font-awesome-icon @click="openMenu" icon="fa-solid fa-bars" />
               </div>
               <div v-else class="d-md-none">
                <font-awesome-icon @click="openMenu" icon="fa-solid fa-x" />
               </div>
            </div>
            <div v-if="navShow" class="d-md-none h-100 d-block w-100">
                   <ul class="p-0 m-0 text-center pb-3">
                       <li class="list-group-item p-2" v-for="(link, index) in newNav">
                          <a class="pt-2 pb-2" href="#">{{ link }}</a>
                       </li>
                   </ul>
            </div>
        </div>
    </section>
</template>


<script>
    import { navLink } from "../assets/data/data.js"
export default{
    name: 'AppNav',
    data(){
        return{
            newNav: [...navLink],
            navShow: false
           
            
        }
    },
    methods:{
        openMenu(){
            this.navShow = !this.navShow
        }
    }
}
</script>
<style lang="scss" scoped>

.nav a{
    position: relative;

}
.nav a:after{
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 0;
    height: 3px;
    transition: 0.2s;
    background-color: rgb(20, 128, 230);

}
.nav a:hover:after{
    width: 100%;
}
.fit-cont{
    height: fit-content;
}


</style>