<template>
  <div class="q-pa-md">
    <img :src="urlToImage" />

    <div class="text-h6">{{ title }}</div>
    <div class="text-subtitle2">by {{ author }}</div>
    <div class="text-overline">
      {{ time }}
    </div>

    {{ content }}
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
//Simplifying the date for user experience
import { formatDistance, subDays } from 'date-fns';

export interface ArticleProps {
  title?: string;
  author?: string;
  content?: string;
  description?: string;
  publishedAt?: string;
  url?: string;
  urlToImage?: string;
  source?: {
    id: string;
    name: string;
  };
}

const {
  title,
  description,
  author,
  content,
  publishedAt,
  source,
  url,
  urlToImage,
} = defineProps<ArticleProps>();

const time = computed(() =>
  formatDistance(new Date(publishedAt || ''), new Date(), { addSuffix: true })
);
</script>

<style lang="scss" scoped>
.my-card {
  width: 100%;
  max-width: 350px;
}
</style>
