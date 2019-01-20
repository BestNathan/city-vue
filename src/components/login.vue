<template>
  <div class="login">
    <div>{{ data }}</div>
    <button class="btn btn-primary btn-cons m-t-10" @click="login">登陆</button>
  </div>
</template>

<script>
import requests from "../requests";
import store from "../store";

export default {
  name: "login",
  data() {
    return {
      data: "123"
    };
  },
  methods: {
    async login() {
      const res = await requests.session.login("nathan@sensoro.com", "aa1111");
      store.state.userInfo = res.data;
      store.state.sessionId = res.data.sessionID;
      this.$router.push({ name: "home" });
    }
  }
};
</script>

<style lang="postcss" scoped>
.m-t-10 {
  margin-top: 10px;
}
.btn-cons {
  margin-right: 5px;
  min-width: 120px;
}
</style>
