import type { People } from "@/types/People";
import { create } from "zustand";

interface PeopleSelectedState {
  selected: People[];
  togglePeople: (people: People) => void;
  unselectAll: () => void;
}

const usePeopleSelectStore = create<PeopleSelectedState>((set) => ({
  selected: [],
  togglePeople: (people: People) => {
    set((state) => {
      const isSelected = state.selected.find(
        (selected) => selected.id === people.id
      );

      return {
        ...state,
        selected: isSelected
          ? state.selected.filter((selected) => selected.id !== people.id)
          : [...state.selected, people],
      };
    });
  },
  unselectAll: () => set((state) => ({ ...state, selected: [] })),
}));

export default usePeopleSelectStore;
