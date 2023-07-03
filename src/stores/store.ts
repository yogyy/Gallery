import { create } from 'zustand';

type Store = {
  count: number;
  inc: () => void;
};

export const useStore = create<Store>()(set => ({
  count: 1,
  inc: () => set(state => ({ count: state.count + 1 })),
}));

type Bg = {
  use: boolean;
  changeBg: () => void;
};

export const useBg = create<Bg>(set => ({
  use: false,
  changeBg: () => set(state => ({ use: !state.use })),
}));
