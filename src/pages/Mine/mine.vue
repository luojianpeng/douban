<template>
  <div>
    <Header headerT="我的">
      <!--<img src="../../assets/images/ic_actionbar_search_icon.png" slot="leftImg" class="leftImg">-->
      <img src="../../assets/images/ic_settings.png" slot="rightImg" class="rightImg">
    </Header>

    <cell cellTxt="提醒">
      <slot slot="cell-left-img"><img src="../../assets/images/ic_mine_notification.png" alt=""></slot>
      <slot slot="cell-right-img"><img src="../../assets/images/ic_group_topic_right_arrow.png" alt=""></slot>
    </cell>
  </div>
</template>



<script>

  import Header from '../../components/header.vue'
  import Cell from '../../components/cell.vue'

  export default {
    components:{

      Header,Cell
    }
  }

</script>
