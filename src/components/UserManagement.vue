<template lang="">
  <div class="container">
    <div class="row justify-content-end background">
      <div class="col-8">
        <input type="text" />
        <button>조건검색</button>
      </div>
    </div>
  </div>

  <div class="container background mt-5">
    <div class="row justify-content-start">
      <div class="col-4" style="padding-left: 15px">One of two columns</div>

      <div class="panel panel-default">
        <div class="panel-body">asdasdasd</div>
      </div>
    </div>
  </div>

  <div class="panel panel-default">
    <div class="panel-heading">Panel heading without title</div>
    <div class="panel-body">Panel content</div>
  </div>

  <div class="panel panel-default">
    <div class="panel-heading">
      <h3 class="panel-title">조건검색</h3>
    </div>
    <div class="panel-body">Panel content</div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      name: "seokwon",
    };
  },
};
</script>
<style scoped>
.background {
  background-color: antiquewhite;
  border: 1px solid #392922;
}
</style>
