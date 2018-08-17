<template>
  <div id="app">
    <router-view name="head" id="head" />
    <router-view name="menubar" id="menubar" />
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#head {
  height: 100px;
  flex-wrap: nowrap;
}
</style>


