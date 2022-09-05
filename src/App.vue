<!--
 * @Author: Dee.Xiao
 * @Date: 2022-09-05 01:40:17
 * @LastEditors: Dee.Xiao
 * @LastEditTime: 2022-09-06 01:12:46
 * @Description: 
-->
<script setup lang="ts">
import { RouterView } from "vue-router";
import GlobalHeader, { type UserProps } from "./components/GlobalHeader.vue";
import "bootstrap/dist/css/bootstrap.min.css";

const currentUser: UserProps = {
  isLogin: true,
  name: "viking",
};
</script>

<template>
  <div class="container">
    <global-header :user="currentUser"></global-header>
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
