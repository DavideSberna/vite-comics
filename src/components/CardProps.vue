<template>
    <!-- col-2 col-sm-3 col-md-6 -->
    <div class="col-6 col-sm-3 col-lg-2 d-flex flex-column align-items-center">
        <div class="fit-content d-flex flex-column align-items-center pt-3">
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
    width: 120px;
    height: 120px;
    object-fit: cover;
    object-position: top;   
}

p{
    text-align: center;   
}

.fit-content{
    width: fit-content;
}


</style>