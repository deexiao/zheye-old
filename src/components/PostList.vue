<!--
 * @Author: Dee.Xiao
 * @Date: 2022-09-06 02:12:43
 * @LastEditors: Dee.Xiao
 * @LastEditTime: 2022-09-06 02:16:26
 * @Description: 
-->
<template>
  <div class="post-list">
    <article v-for="post in list" :key="post.id" class="card mb-3 shadow-sm">
      <div class="card-body">
        <h4>{{ post.title }}</h4>
        <div class="row my-3 align-items-center">
          <div v-if="post.image" class="col-3">
            <img :src="post.image" :alt="post.title" class="rounded-lg w-100" />
          </div>
          <p :class="{ 'col-9': post.image }">{{ post.content }}</p>
        </div>
        <span class="text-muted">{{ post.createdAt }}</span>
      </div>
    </article>
  </div>
</template>

<script setup lang="ts">
import type { PostProps } from "../testData";

defineProps<{ list: PostProps[] }>();
</script>
