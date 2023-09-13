<template>
  <div class="q-ml-md">
    <q-icon :name="props.icon" :color="props.color" size="1.5em" />
    <q-tooltip> {{ props.tooltip }} </q-tooltip>
  </div>
</template>

<script setup lang="ts">
export interface HeaderBarIndicatorProps {
  icon: string;
  tooltip: string;
  color: string;
}
const props = defineProps<HeaderBarIndicatorProps>();
</script>

<style></style>
