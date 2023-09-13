<template>
  <q-item class="q-pa-none">
    <q-item-section class="q-pa-sm">
      <q-item-label>
        {{ props.axis.name }}
      </q-item-label>
    </q-item-section>
    <q-btn icon="arrow_back" size="sm" />
    <q-knob
      readonly
      show-value
      v-model="position"
      size="30px"
      track-color="primary"
      :thickness="0.22"
      class="q-ma-sm"
    />
    <q-btn icon="arrow_forward" size="sm" />
  </q-item>
</template>

<script setup lang="ts">
import { Axis } from 'src/stores/robot-store';
import { computed } from 'vue';

export interface JogControlsAxisProps {
  axis: Axis;
}
const props = defineProps<JogControlsAxisProps>();

const position = computed(() => props.axis.position);
</script>
