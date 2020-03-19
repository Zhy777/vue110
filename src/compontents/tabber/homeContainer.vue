<template>
    <div>
        <!-- 轮播图区域 -->
        <mt-swipe :auto="4000">
  <mt-swipe-item v-for="item in lunbo" :key="item.url">
<img :src="item.url" alt="">
  </mt-swipe-item>

</mt-swipe>

 <ul class="mui-table-view mui-grid-view mui-grid-9">
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <span class="mui-icon mui-icon-home"></span>
		                    <div class="mui-media-body">新闻资讯</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <span class="mui-icon mui-icon-email"><span class="mui-badge">5</span></span>
		                    <div class="mui-media-body">图片分享</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <span class="mui-icon mui-icon-chatbubble"></span>
		                    <div class="mui-media-body">商品购买</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <span class="mui-icon mui-icon-location"></span>
		                    <div class="mui-media-body">留言反馈</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <span class="mui-icon mui-icon-search"></span>
		                    <div class="mui-media-body">视频反馈</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <span class="mui-icon mui-icon-phone"></span>
		                    <div class="mui-media-body">联系我们</div></a></li>
		         
		        </ul> 
     
    </div>
</template>

<script>
import {Toast} from "mint-ui"
export default{
    data(){
        return {
            lunbo:[]
        }
    },
    created() {
        this.getLunbotu()
    },
    methods: {
        getLunbotu(){
            this.$http.get("../../json/lunbotu.json").then(result=>{ //没有数据我也很无奈 自己模拟json数据 淦
                //console.log(result.body);
                if(result.body){
                    this.lunbo = result.body
                    console.log( this.lunbo);
                    
                    Toast("轮播图加载ok")
                }else{
                     Toast("轮播图加载失败")
                }
               
                
            })
        }
    },
}
</script>

<style lang="scss" scoped>
.mint-swipe{
    height: 200px;
    .mint-swipe-item{
        &:nth-child(1){
            background-color: red;
        }
           &:nth-child(2){
            background-color: rebeccapurple;
        }
           &:nth-child(3){
            background-color: royalblue;
        }

        img{
            width: 100%;
            height: 100%;
        }
    }
}
</style>