import { create } from 'zustand';

type Store = {
  count: number;
  inc: () => void;
};

const useStore = create<Store>()(set => ({
  count: 1,
  inc: () => set(state => ({ count: state.count + 1 })),
}));

type Bg = {
  use: boolean;
  changeBg: () => void;
};

const useBg = create<Bg>(set => ({
  use: false,
  changeBg: () => set(state => ({ use: !state.use })),
}));

type Bio = {
  human: {
    name: string;
    age: number;
    gender?: 'male' | 'female';
    hobbies: string[];
  };
  updateHuman: (data: Partial<Bio['human']>) => void;
};

const useBioStore = create<Bio>(set => ({
  human: {
    name: 'John Doe',
    age: 25,
    hobbies: ['reading', 'painting'],
  },
  updateHuman: data =>
    set(state => ({
      human: {
        ...state.human,
        ...data,
      },
    })),
}));

export { useStore, useBg, useBioStore };
