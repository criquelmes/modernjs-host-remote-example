import { create } from 'zustand';

export const useCounterStore = create((set, get) => ({
  count: 0,
  increment: value => set({ count: get().count + value }),
  decrement: value => set({ count: get().count - value }),
  reset: () => set({ count: 0 }),
}));
