<template>
    <div class="col-12 col-sm-6 col-md-4 col-lg-3">
        <div class="d-flex flex-column align-items-center p-3">
            <div class="img-cont">
                <img :src="image" :alt="title">
            </div>
            <div>
                <p class="p-0 m-0">{{ title }}</p>
            </div>
        </div>
    </div>
</template>


<script>
export default{
    props: ['image', 'title'],
    name: 'CardProps',
    
    data(){
        return{
             
             
            
        }
    },
    methods:{
         

    },
}
</script>
<style lang="scss" scoped>
img{
    width: 100%;
    height: 100%;
    object-fit: cover;
    
     
}
.img-cont{
    width: 150px;
    height: 150px;
    position: relative;
}

p{
    text-align: center;
    width: 100%;
}


</style>