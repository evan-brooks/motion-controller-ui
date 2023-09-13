import { defineStore } from 'pinia';

interface State {
  // Define your state properties here
  axes: Axis[];
}

export const useRobotStore = defineStore({
  id: 'robotStore',
  state: (): State => ({
    // Initialize your state properties here
    axes: [
      { name: 'J1', position: 50 },
      { name: 'J2', position: 0 },
      { name: 'J3', position: 0 },
      { name: 'J4', position: 0 },
      { name: 'J5', position: 0 },
      { name: 'J6', position: 0 },
    ],
  }),
  // Define your getters, actions, and mutations here
});

export interface Axis {
  name: string;
  position: number;
}
