<template>
    <section class="bg-image overflow-hidden">
        <div class="container d-flex justify-content-between pt-4">
            <div class="">
                <div>
                    <ul class="d-flex m-0 p-0">
                        <li class="pe-4" v-for="(items, index) in footerLink">
                            <h3 class="white">{{ items.title }}</h3>
                            <ul class="m-0 p-0">
                                <li v-for="links in items.link">
                                  <a class="white" href="#">{{ links }}</a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="">
                <img class="img-logo-bg m--50" src="../assets/img/dc-logo-bg.png" alt="logo bg">
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