<template>
    <div class='Home'>
        <div class="test">欢迎</div>
    </div>
</template>

<script>
export default {
   name:'Home',
   created(){
       console.log()
       this.$http._api_product_getListByCon().then(res=>{
           console.log(res)
       })
   }
};
</script>

<style scoped lang="less">
.test{
    width: 2rem;
    height: 2rem;
    font-size: .16rem;
    color:white;
    background-color: red;
}
</style>
