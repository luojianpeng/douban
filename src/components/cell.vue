<template>
  <div class="cell" :class="{'hot':hotStyle}">
    <div class="cell-left">
      <slot name="cell-left-img"></slot>
      <span>
        {{cellTxt}}
      </span>
    </div>
    <div class="cell-right">
      <slot name="cell-right-img"></slot>
    </div>
  </div>
</template>


<script>
  export default {
    props:{
      cellTxt:{
        type:String,
        default:""
      },
      hotStyle:{
        type:Boolean,
        default:false
      }
    }
  }
</script>

<style>
  .cell{
    width: 100%;
    height: 40px;
    border-bottom: 1px solid #c9c9c9;
    position: relative;
  }
.cell-left{
  padding-left: 10px;
  line-height: 40px;
  text-indent: 2em;
}
  .cell .cell-left img{
    width: 25px;
    position: absolute;
    top:8px;
    left: 10px;
  }
  .cell .cell-right img{
    width: 25px;
    position: absolute;
    top:8px;
    right: 15px;
  }
  .hot{
    border-bottom: none;
    color: orange;
  }
  .hot :before{
    content: "";
    width: 5px;
    height: 25px;
    background: orange;
    position: absolute;
    left: 0;
    top:8px;
  }
</style>
