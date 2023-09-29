<template>
  <q-page class="q-pa-md">
    <SearchBar
      @update-query="
        (payload) =>
          updateQuery({
            q: payload?.searchModel,
            sortBy: payload?.sortModel?.value,
            pageSize: 10,
            dateFrom: payload?.dateFromModel?.value,
          })
      "
    />
    <div class="flex justify-center q-pa-xl" v-if="isLoading">
      <q-spinner color="primary" size="150px" />
    </div>
    <div
      v-if="!isLoading && !data?.articles?.length"
      class="text-h3 text-center"
    >
      No Articles found.
    </div>
    <ArticleItems :articles="data?.articles" />
    <div class="flex justify-center">
      <PaginationComponent
        :max-pages="10"
        @update-query="
          (payload) => updateQuery({ page: payload.currentPage, pageSize: 10 })
        "
      />
    </div>
  </q-page>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useQuery } from '@tanstack/vue-query';
import { api } from 'src/boot/axios';
import ArticleItems from 'src/components/ArticleItems.vue';
import SearchBar from 'src/components/SearchBar.vue';

//For easy manipulation of querying
import qS from 'query-string';
import PaginationComponent from 'src/components/PaginationComponent.vue';

const searchQuery = ref('q=pakistan&pageSize=10');

const updateQuery = (payload: {
  q?: string;
  sortBy?: string;
  page?: number;
  pageSize?: number;
  dateFrom?: string;
}) => {
  console.log('Date from', payload.dateFrom);
  let q = payload?.q?.split(' ').join('+');

  let oldValues = qS.parse(searchQuery.value, {});

  searchQuery.value = qS.stringify({
    q: q || oldValues?.q,
    sortBy: payload?.sortBy || oldValues?.sortBy,
    page: payload?.page || oldValues?.page,
    pageSize: payload?.pageSize || oldValues?.pageSize,
    from: payload?.dateFrom || oldValues?.dateFrom,
  });
};

const { isLoading, data } = useQuery({
  queryKey: [searchQuery],
  queryFn: () => api.get('?' + searchQuery.value),
  select: (response) => response.data,
});
</script>

<style lang="scss"></style>
