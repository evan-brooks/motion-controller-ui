<script setup lang="ts">
import HeaderBarIndicator from './HeaderBarIndicator.vue';
</script>

<template>
  <q-toolbar>
    <HeaderBarIndicator
      icon="settings_ethernet"
      color="green"
      tooltip="Controller Online"
    />
    <HeaderBarIndicator
      icon="precision_manufacturing"
      color="green"
      tooltip="Robot Online"
    />
    <HeaderBarIndicator icon="schema" color="green" tooltip="Interlock" />
    <HeaderBarIndicator
      icon="tune"
      color="red"
      tooltip="Pendant IO Not Connected"
    />
  </q-toolbar>
</template>

<style></style>
