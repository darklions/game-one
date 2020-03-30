<template>
  <div class="leftBox" :style="{left:left+'px'}">
    <img class="leftImg" :src="id.img">
  </div>
</template>

<script>
export default {
  name: 'leftBox',
  props:{
    id: {
      default: {}
    },
    left:{
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
    left:{
      handler(n,o){ //n为新值,o为旧值;
        this.left = n;
      }
    },
  },
  mounted() {
    console.log(this.id)
    // this.srcId = this.props.id;
  },
}
</script>

<style scoped>
.leftBox{
  width: 400px;
  height: 600px;
  position: absolute;
  left: -400px;
  top: 0;
  transition: 1s;
}
.leftImg{
  width: 400px;
  height: 600px;
}
</style>
