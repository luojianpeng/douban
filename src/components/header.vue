<template id="video">
  <div :class="{headerWrap:true, green:bol}">
    <span>{{headerT}}</span>
    <div class="leftImg"><slot name="leftImg"></slot></div>
    <div class="rightImg"><slot name="rightImg"></slot></div>
    <div class="search"><slot name="search"></slot></div>
  </div>
</template>

<script>
  export default {

    props:['headerT','bol']
  }
</script>


<style>
  *{margin: 0;padding: 0}
  .headerWrap{
    width:100%;
    height: 50px;
    background-color: #F7F7F7;
    position: relative;
    text-align: center;
  }
  .green{
    background: #90ee90;
  }
  .headerWrap span{
    line-height: 50px;
  }
  .leftImg{
    right: 60px;
  }
  .rightImg{
    right: 20px;
  }
  .headerWrap div img{
    width: 25px;
    position: absolute;
    top:12px;
  }

  .headerWrap .search input{
    width: 80%;
    height: 30px;
    text-indent: 2em;
    position: absolute;
    left: 10px;
    top: 10px;
    border:none;
    border-radius: 5px;
  }
  .headerWrap .search img{
    height: 20px;
    width: 20px;
    position: absolute;

  }
  .headerWrap .search-gray{
    top: 15px;
    left: 15px;
  }
  .headerWrap .scan-gray{
    top: 15px;
    right: 65px;
  }


</style>
