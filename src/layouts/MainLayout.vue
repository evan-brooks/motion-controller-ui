<template>
  <q-layout view="hHh lpR fFf">
    <q-header bordered>
      <q-toolbar>
        <HeaderBar class="q-pl-none" />
        <div class="q-mr-md">{{ uiVersion }}</div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      side="left"
      mini
      bordered
      :breakpoint="700"
    >
      <q-list>
        <PageLink v-for="link in pageLinks" :key="link.title" v-bind="link" />
      </q-list>
    </q-drawer>

    <q-drawer
      v-model="rightDrawerOpen"
      side="right"
      :width="401"
      :breakpoint="700"
      :style="{ 'background-color': '#121212' }"
    >
      <ViewPort />
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import PageLink, { PageLinkProps } from 'components/PageLink.vue';
import ViewPort from 'components/ViewPort.vue';
import HeaderBar from 'src/components/HeaderBar.vue';
import { version } from '../../package.json';

const uiVersion = version;

const pageLinks: PageLinkProps[] = [
  {
    title: 'Teach',
    icon: 'route',
    path: '/teach',
  },
  {
    title: 'Probe',
    icon: 'troubleshoot',
    path: '/probe',
  },
  {
    title: 'Program',
    icon: 'code',
    path: '/program',
  },
  {
    title: 'Test',
    icon: 'insights',
    path: '/test',
  },
  {
    title: 'Utilities',
    icon: 'handyman',
    path: '/utilities',
  },
  {
    title: 'Setup',
    icon: 'settings',
    path: '/settings',
  },
];

const leftDrawerOpen = ref(true);
const rightDrawerOpen = ref(true);
</script>
