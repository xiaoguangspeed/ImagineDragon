<template>
    <div class="container" ref="input">
        <input type="text" :value="innerHeight"  @focus="scrolltoshow" placeholder="回复">
    </div>
</template>
<script>
export default {
    data(){
        return {
            innerHeight:window.innerHeight
        }
    },
    methods:{
        scrolltoshow(){
            // alert(navigator.userAgent)
            let input = this.$refs.input
            setTimeout(()=>{
                console.dir(input)
            },2000)
        }
    }
}
</script>
<style>
.container{
    position:fixed;
    bottom:0px;
}
</style>
