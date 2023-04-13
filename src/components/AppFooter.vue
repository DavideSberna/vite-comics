<template>
    <section>
        <div>
            <div>
                <div>
                    <ul class="d-flex">
                        <li v-for="(items, index) in footerLink">
                            <h3>{{ items.title }}</h3>
                            <ul>
                                <li v-for="links in items.link">
                                    {{ links }}
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
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