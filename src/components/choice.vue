<template>
  <div class="choiceBox">
    <div class="choice">
      <div class="choiceTxt">{{}}</div>
      <ul class="choiceUl">
        <li class="choiceLi"></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'choiceBox',
  props:{
    id: {
      default: {}
    },
    choice:{
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
    choice:{
      handler(n,o){ //n为新值,o为旧值;
        this.choice = n;
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
.choiceBox{
  width: 500px;
  height: 300px;
  padding: 20px;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%,-50%);
  transition: 1s;
  background: #f39c12;
  border: 2px dashed #fff;
  border-radius: 20px;
}
.choice{
  width: 100%;
  height: 100%;
  border: 2px dashed #f39c12;
  border-radius: 20px;
  background: #fff;
}
</style>
