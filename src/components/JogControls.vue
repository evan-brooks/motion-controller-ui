<template>
  <q-card :style="{ width: '220px' }" flat bordered>
    <q-card-section class="q-pb-none">
      <q-item-label>Jog Speed: {{ jogSpeed }}</q-item-label>
      <q-slider v-model="jogSpeed" :min="1" :max="100" />
    </q-card-section>
    <q-card-section>
      <q-list>
        <JogControlsAxis
          v-for="axis in robot.axes"
          :key="axis.name"
          :axis="axis"
        />
      </q-list>
    </q-card-section>
  </q-card>
</template>

<script setup lang="ts">
import JogControlsAxis from './JogControlsAxis.vue';
import { ref } from 'vue';
import { useRobotStore } from 'src/stores/robot-store';

const robot = useRobotStore();

const jogSpeed = ref(50);
const axis_count = 6;
</script>
