<!--
 * @Author: Dee.Xiao
 * @Date: 2022-09-05 02:01:11
 * @LastEditors: Dee.Xiao
 * @LastEditTime: 2022-09-06 22:36:39
 * @Description: 专栏列表
-->
<template>
  <div class="row">
    <div v-for="column in columnList" :key="column._id" class="col-4 mb-4">
      <div class="card h-100 shadow-sm">
        <div class="card-body text-center">
          <img
            :src="column.avatar && column.avatar.url"
            :alt="column.title"
            class="rounded-circle border border-light my-3"
          />
          <h5 class="card-title">{{ column.title }}</h5>
          <p class="card-text text-left">{{ column.description }}</p>
          <router-link
            :to="`/column/${column._id}`"
            class="btn btn-outline-primary"
          >
            进入专栏
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import noImageIcon from "@/assets/no-image-icon.png";
import type { ColumnProps } from "@/store";

const props = defineProps<{ list: ColumnProps[] }>();

const columnList = computed(() => {
  return props.list.map((column) => {
    if (!column.avatar) {
      column.avatar = {
        url: noImageIcon,
      };
    } else {
      column.avatar.url =
        column.avatar.url + "?x-oss-process=image/resize,m_pad,h_50,w_50";
    }
    return column;
  });
});
</script>

<style scoped>
.card-body img {
  width: 50px;
  height: 50px;
}
</style>
