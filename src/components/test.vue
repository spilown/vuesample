<template>
  <p>Has published books:</p>
  <span>{{ publishedBooksMessage }}</span>

  <div>
    <a href="#">hello my cnt: {{ count }}</a>
  </div>
  <button class="btn" @click="increase">click me!!</button>

  <button v-on:click="prevent">v-on test</button>
  <div v-bind:id="myId">sdf</div>
  <button :disabled="isButtonDisabled">Button</button>
  asdasd
  <div v-bind="objectOfAttrs">{{ count + 1 }}</div>

  <p :if="isButtonDisabled">Now you see me</p>

  <p v-bind:[myAttrName]="myName">attrName binding</p>

  <form @submit.prevent="onSubmit">
    <input type="text" name="myName" v-model="formValue" />
    <button type="submit">gogo</button>sdfsdf
  </form>
  sdfsdfsdf

  <li v-for="(book, idx) in author.books" :key="idx">
    {{ book }} -- {{ idx }}
  </li>

  <div :class="{ active: isActive }">hello</div>
</template>

<script>
export default {
  data() {
    return {
      isActive: true,
      hasError: false,
      author: {
        name: "John Doe",
        books: [
          "Vue 2 - Advanced Guide",
          "Vue 3 - Basic Guide",
          "Vue 4 - The Mystery",
        ],
      },
      myName: "seokwon",
      count: 0,
      myId: "0102034",
      isButtonDisabled: true,
      formValue: "",
      objectOfAttrs: {
        id: "container",
        class: "wrapper",
      },
      myAttrName: "pao",
    };
  },

  computed: {
    publishedBooksMessage() {
      // `this` points to the component instance
      return this.author.books.length > 0 ? "Yes" : "No";
    },
  },

  methods: {
    increase() {
      this.count++;
    },

    onSubmit(formData) {
      // console.log("formData:", formData.target.value);
      console.log("value:", this.formValue);
    },
  },
};
</script>

<style>
a {
  color: black;
}
.btn {
  color: blue;
}
</style>
