import { create } from 'zustand';

// Define the Patient type or import it from the correct module
type Patient = {
  // Add appropriate fields for Patient
  id: string;
  name: string;
  // Add more fields as needed
};

export type LoginStore = {
  user: Patient | null;
  login: (user: Patient) => void;
  logout: () => void;
};

export const useLoginStore = create<LoginStore>((set) => ({
  user: null,
  login: (user) => set({ user }),
  logout: () => set({ user: null }),
}));
