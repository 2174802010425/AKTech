import { Phone } from "@/sanity.types";
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface BasketProps {
  quantity: number;
  product: Phone;
}

interface CartProps {
  items: BasketProps[];
  getItemsCount: (phoneId: string) => number;
  addItems: (product: Phone) => void;
  clearBasket: () => void;
  removeItem: (product: Phone) => void;
}

export const useCart = create<CartProps>()(
  persist(
    (set, get) => ({
      items: [],
      addItems: (product) =>
        set((state) => {
          const existing = state.items.find(
            (item) => item.product._id === product._id
          );
          if (existing) {
            return {
              items: state.items.map((item) =>
                item.product._id === product._id
                  ? { ...item, quantity: item.quantity + 1 }
                  : item
              ),
            };
          }
          return {
            items: [...state.items, { product, quantity: 1 }],
          };
        }),
      clearBasket: () => set({ items: [] }),
      getItemsCount: (phoneId) => {
        const existing = get().items.find(
          (item) => item.product._id === phoneId
        );
        return existing ? existing.quantity : 0;
      },
      removeItem: (product) =>
        set((state) => {
          const existing = state.items.find(
            (i) => i.product._id === product._id
          );
          if (!existing) return state;
          if (existing.quantity > 1) {
            return {
              items: state.items.map((item) =>
                item.product._id === product._id
                  ? { ...item, quantity: item.quantity - 1 }
                  : item
              ),
            };
          }
          else {
            return {items : state.items.filter(i => i.product._id !== product._id)}
          }
        }),
    }),
    {
      name: "phone-storage",
    }
  )
);

