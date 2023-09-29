<template>
  <q-card class="my-card cursor-pointer text">
    <img :src="urlToImage" />

    <q-card-section>
      <a :href="url"
        ><div class="text-h6">{{ title }}</div>
      </a>
      <div class="text-subtitle2">by {{ author }}</div>
    </q-card-section>

    <q-card-section class="q-pt-none">
      {{ description }}
    </q-card-section>
    <q-card-section>
      {{ time }}
    </q-card-section>
  </q-card>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { formatDistance } from 'date-fns';

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

const { title, description, author, publishedAt, url, urlToImage } =
  defineProps<ArticleProps>();

// Converting time format into really human readable format
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
