import { create } from "zustand";

export interface Form {
  name: string;
  age: number;
  password: string;
  country: string;
  file: string;
  gender: string;
  addedAt: number;
}

interface CountryStore {
  forms: Form[];
  addForm: (form: Omit<Form, "addedAt">) => void;
}

export const useFormStore = create<CountryStore>((set) => ({
  forms: [],
  addForm: (form) => {
    set((state) => ({
      ...state,
      forms: [...state.forms, { ...form, addedAt: Date.now() }],
    }));
  },
}));
