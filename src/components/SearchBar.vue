<template>
  <div class="q-pa-md flex justify-center">
    <q-form
      @submit="$emit('updateQuery', { searchModel, sortModel, dateFromModel })"
      class="flex q-gutter-md"
    >
      <q-input outlined v-model="searchModel" label="Search" />
      <q-select
        outlined
        v-model="sortModel"
        option-value="value"
        option-label="label"
        :options="sortOptions"
        label="Sort"
        map-options
      />
      <q-select
        outlined
        v-model="dateFromModel"
        option-value="value"
        option-label="label"
        :options="dateOptions"
        label="Date"
        map-options
      />
      <q-btn label="Submit" type="submit" color="primary" />
    </q-form>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

import { subDays, formatISO } from 'date-fns';

const sortOptions = [
  {
    label: 'Recent',
    value: 'publishedAt',
  },
  {
    label: 'Most Relevant',
    value: 'relevancy',
  },
  {
    label: 'Most Popular',
    value: 'popularity',
  },
];

const dateOptions = [
  {
    label: 'Anytime',
    value: '',
  },
  {
    label: 'Today',
    value: formatISO(subDays(new Date(), 1)),
  },
  {
    label: 'This Week',
    value: formatISO(subDays(new Date(), 7)),
  },
  {
    label: 'This Month',
    value: formatISO(subDays(new Date(), 30)),
  },
];

const searchModel = ref('');
const sortModel = ref('publishedAt');
const dateFromModel = ref('');
</script>

<style scoped></style>
