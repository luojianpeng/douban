<template>
  <div>
    <Header bol="true">
      <!--<img src="../../assets/images/ic_actionbar_search_icon.png" slot="leftImg" class="leftImg">-->
      <img src="../../assets/images/ic_chat_white.png" slot="rightImg" class="rightImg">
      <div slot="search" class="search-box">
        <input type="text" placeholder="111111"/>
        <img src="../../assets/images/ic_search_gray.png" class="search-gray">
        <img src="../../assets/images/ic_scan_gray.png" class="scan-gray">
      </div>

    </Header>

    <banner swiperid="swiper-container" paginationdesition="right">
      <div class="swiper-slide">
        <img src="../../assets/images/banner/01.jpg" alt="">
      </div>
      <div class="swiper-slide">
        <img src="../../assets/images/banner/02.jpg" alt="">
      </div>
      <div class="swiper-slide">
        <img src="../../assets/images/banner/03.jpg" alt="">
      </div>
    </banner>

    <cell cell-txt="热点" hot-style=true></cell>

    <news-list></news-list>
    <news-list></news-list>
    <news-list></news-list>
    <news-list></news-list>
    <news-list></news-list>
    <news-list></news-list>
    <news-list></news-list>



  </div>
</template>



<script>

  import Header from '../../components/header.vue'
  import Banner from '../../components/banner.vue'
  import Cell from '../../components/cell.vue'
  import NewsList from '../../components/newsList.vue'


  export default {
    components:{

      Header,Banner,Cell,NewsList
    },


  }

</script>
