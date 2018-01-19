<template>
  <div class = "mainBanner">
    <swiper :options="swiperOption" ref="mySwiper" class = "conBanner">
      <swiper-slide v-for = "item in imgUrl" class = "imgBan"><img :src="item.src" alt=""></swiper-slide>
    </swiper>
  </div>
</template>
<script>
  import {swiper, swiperSlide} from 'vue-awesome-swiper'
  export default{
    name: 'home',
    data () {
      return {
        swiperOption: {
          notNextTick: true,
          autoplay: true,
          speed:1000,
          loop:true,
          effect:"coverflow",
          grabCursor : true,
          setWrapperSize :true,
          mousewheelControl: true,
          autoHeight: true,
          paginationType:"bullets",
          pagination : '.swiper-pagination',
          paginationClickable :true,
          prevButton:'.swiper-button-prev',
          nextButton:'.swiper-button-next',
          scrollbar:'.swiper-scrollbar',
          mousewheelControl : true,
          observeParents:true,
        },
        imgUrl: []
      }
    },
    components: {
      swiper,
      swiperSlide
    },
    //定义这个sweiper对象
    computed: {
      swiper () {
        return this.$refs.mySwiper.swiper;
      }
    },
    mounted () {
      this.$ajax.get('../static/imgBan.json').then((res) =>{
          this.imgUrl = res.data;
          console.log(imgUrl);
          this.swiper();
          console.log(this.GLOBAL.baseUrl);
      })
    }
  }
</script>
<style>
  .mainBanner{width:100%;height:200px;}
  .conBanner .imgBan{width:100%;height:200px;}
  .imgBan img{width:100%;height:200px;}
</style>
