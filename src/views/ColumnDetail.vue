<!--
 * @Author: Dee.Xiao
 * @Date: 2022-09-06 01:33:07
 * @LastEditors: Dee.Xiao
 * @LastEditTime: 2022-09-06 01:34:23
 * @Description: 
-->
<template>
  <h1>
    <pre>{{ route }}</pre>
  </h1>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";

const route = useRoute();
</script>
