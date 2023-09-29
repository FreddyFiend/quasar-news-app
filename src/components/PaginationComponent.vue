<template>
  <q-pagination
    v-model="currentPage"
    :max="maxPages"
    direction-links
    push
    color="primary"
    active-design="push"
    active-color="orange"
    @update:model-value="$emit('updateQuery', { currentPage })"
  />
</template>

<script setup lang="ts">
import { ref } from 'vue';

const currentPage = ref(1);

export interface PaginationProps {
  maxPages: number;
}

const { maxPages } = defineProps<PaginationProps>();
</script>

<style scoped></style>
