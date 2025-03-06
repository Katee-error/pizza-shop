import { create } from 'zustand'

interface CategoryStore {
  categoryId: number;
  setCategoryId: (id: number) => void;
}

export const useCategoryStore = create<CategoryStore>((set) => ({
  categoryId: 1,
  setCategoryId: (id) => set({ categoryId: id }),
}));
