<template>
  <div class="tabbar">
    <item txt="首页" index="Home" :selected='selected' @changeIndex = "changeS">
      <img slot="greenImg" src="../assets/images/ic_tab_home_active.png" alt="">
      <img slot="normalImg" src="../assets/images/ic_tab_home_normal.png" alt="">
    </item>

    <item txt="书影音" index="Audio" :selected='selected' @changeIndex = "changeS">
      <img slot="greenImg" src="../assets/images/ic_tab_subject_active.png" alt="">
      <img slot="normalImg" src="../assets/images/ic_tab_subject_normal.png" alt="">
    </item>

    <item txt="广播" index="Broadcast" :selected='selected' @changeIndex = "changeS">
      <img slot="greenImg" src="../assets/images/ic_tab_status_active.png" alt="">
      <img slot="normalImg" src="../assets/images/ic_tab_status_normal.png" alt="">
    </item>

    <item txt="小组" index="Group" :selected='selected' @changeIndex = "changeS">
      <img slot="greenImg" src="../assets/images/ic_tab_group_active.png" alt="">
      <img slot="normalImg" src="../assets/images/ic_tab_group_normal.png" alt="">
    </item>

    <item txt="我的" index="Mine" :selected='selected' @changeIndex = "changeS">
      <img slot="greenImg" src="../assets/images/ic_tab_profile_female_active.png" alt="">
      <img slot="normalImg" src="../assets/images/ic_tab_profile_female_normal.png" alt="">
    </item>
  </div>
</template>

<script>
  import Item from './item.vue'

  export default {
    components:{

      Item
    },
    data:function () {
      return{
        selected:'Home',
        s:''
      }
    },
    methods:{
      changeS:function (val) {
        /*console.log(val);*/
          this.selected = val;
      }
    }
  }
</script>

<style>
  .tabbar{
    width: 100%;
    height: 50px;
    border-top: 1px solid #999999;
    position: fixed;
    bottom: 0;
    left: 0;
    text-align: center;
    background-color: #F7F7F7;
  }
</style>
