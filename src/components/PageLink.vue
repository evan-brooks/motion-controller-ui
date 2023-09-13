<template>
  <q-item
    clickable
    @click="onClick"
    :active="isActive"
    active-class="bg-accent"
  >
    <q-item-section v-if="icon" avatar>
      <q-icon :name="icon" />
    </q-item-section>

    <q-item-section>
      <q-item-label>{{ title }}</q-item-label>
    </q-item-section>
  </q-item>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
import { computed } from 'vue';

export interface PageLinkProps {
  title: string;
  path: string;
  icon?: string;
}
const props = withDefaults(defineProps<PageLinkProps>(), {
  link: '#',
  icon: '',
});

const router = useRouter();
const onClick = () => {
  router.push(props.path);
};

const isActive = computed(() => {
  console.log(router.currentRoute.value.path + '/' + props.path);
  return router.currentRoute.value.path === props.path;
});
</script>
