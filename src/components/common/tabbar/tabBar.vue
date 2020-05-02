<template>
  <div>
    <div id="tabbar">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'tabBar'
}
</script>

<style scoped>
#tabbar {
  display: flex;
  height: 49px;

  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;

  background-color: #f6f6f6;
  box-shadow: 0 -1px 3px rgba(122, 122, 122, 0.178);
  overflow: hidden;
}


</style>