<template>
  <div class="viewport" ref="viewport"></div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useSceneStore } from '../stores/scene-store';

const viewport = ref<HTMLElement | null>(null);
const scene = useSceneStore();

onMounted(async () => {
  if (viewport.value) {
    await scene.init({
      width: 400,
      height: 400,
      element: viewport.value,
    });
    scene.animate();
  }
});
</script>

<style scoped>
.viewport {
  height: 100%;
  width: 100%;
}
</style>
