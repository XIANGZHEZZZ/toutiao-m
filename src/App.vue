<template>
  <div id="app">
    123
    <i class="toutiao toutiao-wode"></i>
    <van-button type="primary">主要按钮</van-button>
    <van-cell-group>
      <van-cell title="单元格" value="内容" />
      <van-cell title="单元格" value="内容" label="描述信息" />
    </van-cell-group>
    <router-view/>
  </div>
</template>

<script>
export default ({
  name: 'App'
})
</script>

<style lang="less">
</style>
