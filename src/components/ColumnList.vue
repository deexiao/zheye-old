<!--
 * @Author: Dee.Xiao
 * @Date: 2022-09-05 02:01:11
 * @LastEditors: Dee.Xiao
 * @LastEditTime: 2022-09-05 03:38:03
 * @Description: 专栏列表
-->
<template>
  <div class="row">
    <div v-for="column in columnList" :key="column.id" class="col-4 mb-4">
      <div class="card h-100 shadow-sm">
        <div class="card-body text-center">
          <img
            :src="column.avatar"
            :alt="column.title"
            class="rounded-circle border border-light w-25 my-3"
          />
          <h5 class="card-title">{{ column.title }}</h5>
          <p class="card-text text-left">{{ column.description }}</p>
          <a href="#" class="btn btn-outline-primary">进入专栏</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { PropType } from "vue";
import { computed } from "vue";
import noImageIcon from "@/assets/no-image-icon.png";

export interface ColumnProps {
  id: number;
  title: string;
  avatar?: string;
  description: string;
}

const props = defineProps({
  list: {
    type: Array as PropType<ColumnProps[]>,
    required: true,
  },
});

const columnList = computed(() => {
  return props.list.map((column) => {
    if (!column.avatar) {
      column.avatar = noImageIcon;
    }
    return column;
  });
});
</script>

<style scoped></style>
