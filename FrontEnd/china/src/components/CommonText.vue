<template>
    <P :style="{color:color}">{{content}}
        <slot></slot>
    </P>
</template>
<script>
export default {
    props:{
        color:String,
        content:String,
    }
}
</script>
<style scoped>

</style>
