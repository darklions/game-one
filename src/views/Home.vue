<!-- 首页 -->
<template>
  <div class="Home Box">
    <div @click="showLeft(sidenum)">显示左侧边栏</div>
    <!-- 开场 -->
    <div class="open Box" v-if="openNum == 0">
      <div class="openTitle">橘光游戏，天下第一</div>
      <div class="openContent">
        <div class="openGo" @click="goGame()">点击进入</div>
      </div>
      <div class="openProduce">出品：西二旗十二剑客</div>
    </div>
    <!-- 故事背景介绍 -->
    <div class="introduce Box" v-if="openNum == 1">
      <!-- 故事背景第一屏 -->
      <div class="story1" v-if="storyNum == 0">
        <ul class="story1Ul">
          <li v-for="item in story1" :key="item.index">{{item}}</li>
        </ul>
        <div class="goStory2" @click="goStory2()">下一页</div>
      </div>
      <div class="story1" v-if="storyNum == 1">
        <ul class="story1Ul">
          <li v-for="item in story2" :key="item.index">{{item}}</li>
        </ul>
        <div class="goStory2" @click="goStory3()">卷入纷争</div>
      </div>
    </div>
    <!-- 雪 -->
    <div class="Box">
      <div class="snow-container">
        <div class="snow foreground"></div>
        <div class="snow foreground layered"></div>
        <div class="snow middleground"></div>
        <div class="snow middleground layered"></div>
        <div class="snow background"></div>
        <div class="snow background layered"></div>
      </div>
    </div>
    <!-- 第一章 -->
    <div class="chapter1 Box" v-if="openNum == 2">
      
    </div>
    <!-- 选项框 -->
    <choice></choice>
    <!-- 左侧边栏 -->
    <leftBox
      v-if="isStory"
      :left="sidenum"
      :id="storydata.lid"
    ></leftBox>
    <!-- 右侧边栏 -->
    <rightBox
      v-if="isStory"
      :right="sidenum"
      :id="storydata.rid"
    ></rightBox>
    <!-- 对话框 -->
    <talkBox
      v-if="isStory"
      :id="storydata"
      :down="sidenum"
      @nextBtn="next"
      :storyindex="storyindex"
      :indexmax="indexmax"
    ></talkBox>
  </div>
</template>

<script>
import story from '../assets/js/story.js'
import role from '../assets/js/role.js'
import talkBox from '@/components/talkBox'
import leftBox from '@/components/leftBox'
import rightBox from '@/components/rightBox'
import choice from '@/components/choice'

export default {
  components: {talkBox,leftBox,rightBox,choice},
  name: "Home",
  data() {
    return {
      ...role.data(),//获取
      ...story.data(),//获取
      openNum:1,//数据阶段显示，默认0
      storyNum:2,//数据阶段内部进度，默认0
      storydata:{},//当前数据
      storyindex:1,//当前数据下标，默认1
      indexmax:0,//当前数据上限下标，默认7
      listStory:{},//全部数据
      isStory:false,//是否能渲染组件
      sidenum:0-400,//组件显示位置
    };
  },
  mounted() {
    this.listStory = story.data();
    console.log(this.listStory);
    this.storydata = this.listStory.story3;//默认
    this.storyindex = 3;//默认与当前数据尾号相同
    this.indexmax = 7;
    this.isStory = true;
    console.log(this.storydata);
  },
  methods: {
    showLeft(num){
      if(num == 0-400){
        let num = parseInt(this.storyNum)+1;
        this.storydata = this.listStory["story"+num]
        console.log(typeof(this.storydata));
        this.sidenum = 0;
      }else{
        this.sidenum = 0-400;
      }
    },
    next(num){
      console.log(num)
      if(num == false){
        this.sidenum = 0-400;
      }else{
        this.storyindex = num;
        this.storydata = this.listStory["story"+num];
      }
    },
    goGame(){//开始按钮
      this.openNum = 1;
    },
    goStory2(){//背景第一屏下一页按钮
      this.storyNum = 1;
    },
    goStory3(){//卷入按钮
      this.openNum = 2;
      this.storyNum = 2;
    }
  },
};
</script>
<style scoped>
.Box {
  width: 100vw;
  height: 100vh;
}
.Home {
  overflow: hidden;
  position: relative;
  top: 0;
  left: 0;
}
/* 开场-------------------------------------- */
.open {
  text-align: center;
  padding-top: 150px;
}
.openTitle {
  color: #f39c12;
  font-size: 80px;
  font-family: PingFang SC;
  font-weight: bold;
}
.openContent {
  padding: 200px 0 300px;
}
.openGo {
  color: #000;
  font-size: 40px;
  font-family: PingFang SC;
  font-weight: bold;
  height: 50px;
}
.openGo:hover {
  font-size: 50px;
  color: #f39c12;
}
.openProduce {
  color: #000;
  font-size: 20px;
  font-family: PingFang SC;
}

/* 故事背景介绍-------------------------------------- */
.introduce{
  display: flex;
  justify-content: center;
  align-items: center;
}
.story1{
  width: 806px;
  height: 606px;
  border: 2px solid #f39c12;
  padding: 1px;
  position: relative;
}
.story1Ul{
  border: 2px dashed #f39c12;
  width: 800px;
  height: 600px;
  text-align: center;
}
.story1Ul li{
  font-size: 20px;
  color: #f39c12;
  height: 50px;
  line-height: 50px;
}
.goStory2{
  position: absolute;
  right: 50px;
  bottom: 50px;
  border: 1px solid #f39c12;
  text-align: center;
  font-size: 30px;
  color: #f39c12;
  font-family: PingFang SC;
}

/* 第一章--------------------------------- */
.chapter1{

}

/* 雪--------------------------------- */
.snow-container {
  position: absolute;
  height: 100vh;
  width: 100vw;
  max-width: 100vw;
  top: 0;
  overflow: hidden;
  z-index: 10;
  pointer-events: none;
}
.snow {
  display: block;
  position: absolute;
  z-index: 2;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  pointer-events: none;
  -webkit-transform: translate3d(0, -100%, 0);
          transform: translate3d(0, -100%, 0);
  -webkit-animation: snow linear infinite;
          animation: snow linear infinite;
}
.snow.foreground {
  background-image: url("https://dl6rt3mwcjzxg.cloudfront.net/assets/snow/snow-large-075d267ecbc42e3564c8ed43516dd557.png");
  -webkit-animation-duration: 15s;
          animation-duration: 15s;
}
.snow.foreground.layered {
  -webkit-animation-delay: 7.5s;
          animation-delay: 7.5s;
}
.snow.middleground {
  background-image: url(https://dl6rt3mwcjzxg.cloudfront.net/assets/snow/snow-medium-0b8a5e0732315b68e1f54185be7a1ad9.png);
  -webkit-animation-duration: 20s;
          animation-duration: 20s;
}
.snow.middleground.layered {
  -webkit-animation-delay: 10s;
          animation-delay: 10s;
}
.snow.background {
  background-image: url(https://dl6rt3mwcjzxg.cloudfront.net/assets/snow/snow-small-1ecd03b1fce08c24e064ff8c0a72c519.png);
  -webkit-animation-duration: 30s;
          animation-duration: 30s;
}
.snow.background.layered {
  -webkit-animation-delay: 15s;
          animation-delay: 15s;
}

@-webkit-keyframes snow {
  0% {
    -webkit-transform: translate3d(0, -100%, 0);
            transform: translate3d(0, -100%, 0);
  }
  100% {
    -webkit-transform: translate3d(15%, 100%, 0);
            transform: translate3d(15%, 100%, 0);
  }
}

@keyframes snow {
  0% {
    -webkit-transform: translate3d(0, -100%, 0);
            transform: translate3d(0, -100%, 0);
  }
  100% {
    -webkit-transform: translate3d(15%, 100%, 0);
            transform: translate3d(15%, 100%, 0);
  }
}



</style>
