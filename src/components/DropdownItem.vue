<!--
 * @Author: Dee.Xiao
 * @Date: 2022-09-05 14:48:37
 * @LastEditors: Dee.Xiao
 * @LastEditTime: 2022-09-05 16:54:50
 * @Description: 
-->
<template>
  <li class="dropdown-option" :class="{ 'is-disabled': disabled }">
    <slot></slot>
  </li>
</template>

<script setup lang="ts">
defineProps<{ disabled?: boolean }>();
</script>

<style>
.dropdown-option.is-disabled * {
  color: #6c757d;
  pointer-events: none;
  background-color: transparent;
}
</style>
