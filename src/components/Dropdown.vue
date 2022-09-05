<!--
 * @Author: Dee.Xiao
 * @Date: 2022-09-05 14:45:21
 * @LastEditors: Dee.Xiao
 * @LastEditTime: 2022-09-05 14:55:53
 * @Description: Dropdown
-->

<template>
  <div class="dropdown">
    <a
      href="#"
      class="btn btn-outline-light my-2 dropdown-toggle"
      @click.prevent="toggleOpen"
    >
      {{ title }}
    </a>
    <ul class="dropdown-menu" :style="{ display: 'block' }" v-if="isOpen">
      <slot></slot>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

defineProps({
  title: {
    type: String,
    required: true,
  },
});

const isOpen = ref(false);
const toggleOpen = () => {
  isOpen.value = !isOpen.value;
};
</script>

<style scoped></style>
