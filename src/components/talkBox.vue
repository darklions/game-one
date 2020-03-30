<template>
  <div class="talkBox" :style="{bottom:down+'px'}">
    <div class="black">
      <div class="talk">
        <img class="talkImg" :src="id.bid.icon">
        <div class="talkText">
          <span>{{id.bid.name}}:</span>
          <div>{{id.txt}}</div>
        </div>
      </div>
      <div class="Continue">
        <span @click="next()">==></span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'talkBox',
  props:{
    id: {
      default: {}
    },
    down:{
      default: 0
    },
    storyindex:{
      default: 0
    },
    indexmax:{
      default: 0
    }
  },
  data () {
    return {

    }
  },
  watch:{
    id:{
        handler(n,o){ //n为新值,o为旧值;
        this.id = n;
      }
    },
    storyindex:{
      handler(n,o){ //n为新值,o为旧值;
        this.storyindex = n;
      }
    },
  },
  mounted() {
    // this.srcId = this.props.id.bid;
    // console.log(this.storyindex)
  },
  methods:{
    next(){
      if(this.storyindex < this.indexmax){
        let num = parseInt(this.storyindex)+1;
        console.log(num)
        this.$emit('nextBtn',num);
      }else{
        this.$emit('nextBtn',false);
      }
    }
  }
}
</script>

<style scoped>
.talkBox{
  width: 100vw;
  height: 200px;
  padding: 0 300px;
  position: fixed;
  bottom: -400px;
  left: 0;
  transition: 1s;
  background: rgba(0, 0, 0, .5);
}
.black{
  width: 100%;
  height: 200px;
  border: 1px dashed #f39c12;
  padding: 30px;
  position: relative;
}
.talk{
  color: #fff;
  position: relative;
  top: 0;
  left: 0;
  height: 130px;
  padding-left: 100px;
}
.talkImg{
  width: 280px;
  height: 350px;
  position: absolute;
  top: -170px;
  left: -220px;
}
.talkText{
  width: 700px;
  height: 130px;
}
.talkText div{
  padding-top: 10px;
}
.Continue{
  position: relative;
  bottom: 0;
  right: 0;
  text-align: right;
}
span{
  color: #f39c12;
  border: 1px dashed #f5f5f5;
}
</style>
