<!--
 * @Author: Dee.Xiao
 * @Date: 2022-09-05 03:59:43
 * @LastEditors: Dee.Xiao
 * @LastEditTime: 2022-09-05 03:59:50
 * @Description: 
-->
<template>
  <nav class="navbar navbar-dark bg-primary justify-content-between mb-4 px-4">
    <a class="navbar-brand" href="#">者也专栏</a>
    <ul v-if="!user.isLogin" class="list-inline mb-0">
      <li class="list-inline-item">
        <a href="#" class="btn btn-outline-light my-2">登陆</a>
      </li>
      <li class="list-inline-item">
        <a href="#" class="btn btn-outline-light my-2">注册</a>
      </li>
    </ul>
    <ul v-else class="list-inline mb-0">
      <li class="list-inline-item">
        <a href="#" class="btn btn-outline-light my-2">你好 {{ user.name }}</a>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts" setup>
import type { PropType } from "vue";

export interface UserProps {
  isLogin: boolean;
  name?: string;
  id?: number;
}

defineProps({
  user: {
    type: Object as PropType<UserProps>,
    required: true,
  },
});
</script>
