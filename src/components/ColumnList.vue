<!--
 * @Author: Dee.Xiao
 * @Date: 2022-09-05 02:01:11
 * @LastEditors: Dee.Xiao
 * @LastEditTime: 2022-09-05 02:12:40
 * @Description: 专栏列表
-->
<template>
  <ul>
    <li v-for="column in list" :key="column.id">
      <img :src="column.avatar" :alt="column.title" />
      <h5>{{ column.title }}</h5>
      <p>{{ column.description }}</p>
      <a href="#">进入专栏</a>
    </li>
  </ul>
</template>

<script setup lang="ts">
import type { PropType } from "vue";

export interface ColumnProps {
  id: number;
  title: string;
  avatar: string;
  description: string;
}

defineProps({
  list: {
    type: Array as PropType<ColumnProps[]>,
    required: true,
  },
});
</script>

<style scoped></style>
