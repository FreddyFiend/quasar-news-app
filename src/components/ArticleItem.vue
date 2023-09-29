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
//Simplifying the date for user experience
import { formatDistance, subDays } from 'date-fns';
import ArticleFullscreenDialog from './ArticleFullscreenDialog.vue';
import { useArticleStore } from 'src/stores/article-store';

const articleStore = useArticleStore();

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
