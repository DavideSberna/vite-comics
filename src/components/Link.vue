<template>
    <a :href="url" :class="{'active': current}"> {{ text }}</a>
    
</template>


<script>
export default{
    
    name: 'Link',
    props: ['url', 'current', 'text'],
    data(){
        return{
            active: false
             
            
        }
    },
    methods:{
        clickActive(){
            this.active = !this.active
        }

    },
}
</script>
<style lang="css" scoped>




</style>