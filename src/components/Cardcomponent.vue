<template>
    <div class="d-flex flex-wrap justify-content-center">
        <CardProps v-for="(items, index) in jsonComics" :image="items.thumb" :title="items.series"/>
    </div>
</template>


<script>
import json from '../assets/data/dc-comics.json'
import CardProps from './CardProps.vue'
export default{
    name: 'Cardcomponent',
    // props: ['image', 'title'],
    components:{
    CardProps,
   },
    data(){
        return{
            jsonComics: json,
            
        }
    }
}
</script>
<style lang="scss" scoped>




</style>