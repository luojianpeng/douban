<template>
  <div class="item" @click="pushIndex()">
    <div v-show="bol"> <slot  name="greenImg"></slot> </div>
    <div v-show="!bol"> <slot name="normalImg"></slot> </div>
    <span :class="{fontColor:bol}">{{txt}}</span>
  </div>
</template>


<script>
  export default {
    props:['txt','index','selected'],

    computed:{
      bol:function () {
        if ( this.index == this.selected ){
          return true
        }
        return false
      }
    },
    methods:{
      pushIndex:function () {
        this.$emit('changeIndex',this.index);
        this.$router.push('/'+this.index)
      }
    }

  }
</script>



<style>
  .item{
    width: 20%;
    height: 50px;
    float: left;
  }
  .item div img{
    width: 38px;
  }
  .item span{
    width: 100%;
    bottom: 10px;
    left: 10px;
    font-size: 0.8em;
    display: block;
    margin-top: -8px;
    color: #7c7c7c;
  }
  .item .fontColor{
    color:#42BD56;
  }
</style>
