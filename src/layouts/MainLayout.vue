<template>
  <q-layout view="lHh Lpr lFf">
    <q-header>
      <q-toolbar>
        <q-toolbar-title> </q-toolbar-title>

        <div>{{ uiVersion }}</div>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" mini bordered :breakpoint="700">
      <q-list>
        <NavLink v-for="link in navLinks" :key="link.title" v-bind="link" />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import NavLink, { NavLinkProps } from 'components/NavLink.vue';
import { version } from '../../package.json';

const uiVersion = version;

const navLinks: NavLinkProps[] = [
  {
    title: 'Setup',
    icon: 'settings',
    link: './settings',
  },
  {
    title: 'Teach',
    icon: 'route',
    link: './teach',
  },
  {
    title: 'Probe',
    icon: 'troubleshoot',
    link: './probe',
  },
  {
    title: 'Program',
    icon: 'code',
    link: './program',
  },
  {
    title: 'Test',
    icon: 'insights',
    link: './points',
  },
  {
    title: 'Utilities',
    icon: 'handyman',
    link: './utilities',
  },
];

const leftDrawerOpen = ref(true);

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value;
}
</script>
