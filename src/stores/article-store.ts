import { defineStore } from 'pinia';

export const useArticleStore = defineStore('article', {
  state: () => ({
    isArticleOpen: false,
  }),
  actions: {
    toggleArticle() {
      this.isArticleOpen = !this.isArticleOpen;
    },
  },
});
