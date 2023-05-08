<template>
  <div class="container-fluid">
    <div class="row flex-nowrap">
      <div class="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark">
        <Menu />
      </div>
      <div class="col py-3">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import Menu from './components/Menu';

export default {
  name: "App",
  components: {
    Menu,
  },
};
</script>

<style lang="scss"></style>
