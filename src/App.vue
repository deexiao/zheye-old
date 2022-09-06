<!--
 * @Author: Dee.Xiao
 * @Date: 2022-09-05 01:40:17
 * @LastEditors: Dee.Xiao
 * @LastEditTime: 2022-09-07 02:22:20
 * @Description: 
-->
<script setup lang="ts">
import { computed, onMounted } from "vue";
import { RouterView } from "vue-router";
import GlobalHeader from "./components/GlobalHeader.vue";
import "bootstrap/dist/css/bootstrap.min.css";
import Loader from "./components/Loader.vue";
import { useStore } from "vuex";
import type { GlobalDataProps } from "./store";
import axios from "axios";
import Message from "./components/Message.vue";

const store = useStore<GlobalDataProps>();
const currentUser = computed(() => store.state.user);
const isLoading = computed(() => store.state.loading);
const token = computed(() => store.state.token);
const error = computed(() => store.state.error);

onMounted(() => {
  if (!currentUser.value.isLogin && token.value) {
    axios.defaults.headers.common.Authorization = `Bearer ${token.value}`;
    store.dispatch("fetchCurrentUser");
  }
});
</script>

<template>
  <div class="container">
    <global-header :user="currentUser"></global-header>
    <loader v-if="isLoading" />
    <message
      type="error"
      :message="error.message"
      v-if="error.status"
    ></message>
    <RouterView />
    <footer class="text-center py-4 text-secondary bg-light mt-6">
      <small>
        <ul class="list-inline mb-0">
          <li class="list-inline-item">© 2020 者也专栏</li>
          <li class="list-inline-item">课程</li>
          <li class="list-inline-item">文档</li>
          <li class="list-inline-item">联系</li>
          <li class="list-inline-item">更多</li>
        </ul>
      </small>
    </footer>
  </div>
</template>

<style scoped></style>
