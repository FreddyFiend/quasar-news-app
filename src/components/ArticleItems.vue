<template>
  <div class="q-pa-md row justify-center items-start q-gutter-md">
    <ArticleItemVue
      v-for="(article, idx) in articles"
      :key="idx"
      :title="article.title"
      :author="article.author"
      :content="article.content"
      :source="article.source"
      :description="article.description"
      :publishedAt="article.publishedAt"
      :url="article.url"
      :urlToImage="article.urlToImage"
    />
  </div>
</template>

<script setup lang="ts">
import ArticleItemVue, { ArticleProps } from './ArticleItem.vue';

interface Props {
  articles: ArticleProps[];
}
const { articles } = defineProps<Props>();
console.log(articles);
</script>
