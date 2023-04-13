<template>
    <section class="bg-image">
        <div class="container position-relative">
            <div class="ptb-4">
                <div>
                    <ul class="d-flex">
                        <li class="pe-3" v-for="(items, index) in footerLink">
                            <h3 class="white">{{ items.title }}</h3>
                            <ul>
                                <li v-for="links in items.link">
                                  <a class="white" href="#">{{ links }}</a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="position-absolute">
                <img class="img-logo-bg" src="../assets/img/dc-logo-bg.png" alt="logo bg">
            </div>
        </div>
    </section>
</template>


<script>
export default{
   name: 'AppFooter',
   data(){
       return{
        footerLink: [
            {
                title: 'Dc comics',
                link: ['Characters', 'Characters','Characters','Characters','Characters','Characters','Characters',]
            },
            {
                title: 'Dc',
                link: ['Characters', 'Characters','Characters','Characters','Characters','Characters',]
            },
            {
                title: 'Sites',
                link: ['Characters', 'Characters','Characters','Characters','Characters',]
            },
            {
                title: 'Shop',
                link: ['Characters', 'Characters',]
            },
        ]
           
       }
   }
}
</script>
<style lang="css" scoped></style>