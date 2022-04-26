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

  <div class="panel panel-default" style="margin-top: 20px">
    <div class="panel-heading">
      <h3 class="panel-title text-right">조건검색</h3>
    </div>
    <div class="panel-body">Panel content</div>
  </div>

  <div>
    <div class="row table-bordered" style="margin-bottom: 10px">
      <div class="col-lg-9 col-md-9">
        <!-- <h2>[{{ detail.eventId }}] {{ detail.eventName }}</h2> -->
        event id eventName
      </div>
      <div class="col-lg-3 col-md-3">
        <div
          class="btn-toolbar"
          role="toolbar"
          aria-label="..."
          style="float: right; margin-top: 15px"
        >
          <button
            type="button"
            class="btn btn-sm btn-default"
            @click="clickModify"
          >
            수정
          </button>
          <button
            type="button"
            class="btn btn-sm btn-default"
            @click="clickRemove"
          >
            삭제
          </button>
        </div>
      </div>
    </div>
  </div>

  <div class="progress">
    <div
      class="progress-bar"
      role="progressbar"
      aria-valuenow="60"
      aria-valuemin="0"
      aria-valuemax="100"
      style="width: 60%"
    >
      <span class="sr-only">60% Complete</span>
    </div>
  </div>

  <table class="table">
    <thead>
      <tr>
        <td>테이블입니다</td>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>name</td>
        <td>seokwon</td>
      </tr>
    </tbody>
  </table>
</template>
<script>
export default {
  data() {
    return {
      name: "seokwon",
    };
  },

  methods: {
    clickRemove() {
      console.log("remove");
    },
    clickModify() {
      console.log("mod");
    },
  },
};
</script>
<style scoped>
.background {
  background-color: antiquewhite;
  border: 1px solid #392922;
}
</style>
