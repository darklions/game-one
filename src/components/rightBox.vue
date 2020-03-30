<template>
  <div class="rightBox" :style="{right:right+'px'}">
    <img class="rightImg" :src="id.img">
  </div>
</template>

<script>
export default {
  name: 'rightBox',
  props:{
    id: {
      default: {}
    },
    right:{
      default: 0
    },
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
    right:{
      handler(n,o){ //n为新值,o为旧值;
        this.right = n;
      }
    },
  },
  mounted() {
    // this.srcId = this.props.id.rid;
    // console.log(this.id)
  },
}
</script>

<style scoped>
.rightBox{
  width: 400px;
  height: 600px;
  position: absolute;
  right: -400px;
  top: 0;
  transition: 1s;
}
.rightImg{
  width: 400px;
  height: 600px;
}
</style>
