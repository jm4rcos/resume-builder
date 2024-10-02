import { create } from "zustand";

interface ScaleState {
  scale: number;
  setScale: (newScale: number) => void;
  zoomIn: () => void;
  zoomOut: () => void;
}

export const useScaleStore = create<ScaleState>((set) => ({
  scale: 1,
  setScale: (newScale) => set({ scale: newScale }),
  zoomIn: () => set((state) => ({ scale: Math.min(state.scale + 0.1, 2) })), // Limita o aumento até 3 (300%)
  zoomOut: () => set((state) => ({ scale: Math.max(state.scale - 0.1, 0.5) })), // Limita a diminuição até 0.3 (30%)
}));
