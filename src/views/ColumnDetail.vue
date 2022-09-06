<!--
 * @Author: Dee.Xiao
 * @Date: 2022-09-06 01:33:07
 * @LastEditors: Dee.Xiao
 * @LastEditTime: 2022-09-06 22:32:39
 * @Description: 点击【进入专栏】后的页面
-->
<template>
  <div class="column-detail-page w-75 mx-auto">
    <div
      class="card-body column-info row mb-4 border-bottom pb-4 align-items-center"
      v-if="column"
    >
      <div class="col-3 text-center">
        <img
          :src="column.avatar && column.avatar.url"
          :alt="column.title"
          class="rounded-circle border"
        />
      </div>
      <div class="col-9">
        <h4>{{ column.title }}</h4>
        <p class="text-muted">{{ column.description }}</p>
      </div>
    </div>
    <post-list :list="list"></post-list>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";
import PostList from "../components/PostList.vue";
import { useStore } from "vuex";
import type { GlobalDataProps } from "@/store";
import { computed, onMounted } from "vue";

const route = useRoute();
const store = useStore<GlobalDataProps>();

const currentId = route.params.id;

onMounted(() => {
  store.dispatch("fetchColumn", currentId);
  store.dispatch("fetchPosts", currentId);
});
const column = computed(() => store.getters.getColumnById(currentId));
const list = computed(() => store.getters.getPostsByCid(currentId));
</script>

<style scoped>
.card-body img {
  width: 100px;
  height: 100px;
}
</style>
