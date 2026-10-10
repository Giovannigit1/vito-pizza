import { create } from 'zustand';
import { CartItem } from '@/utils/orderLogic';

interface CartState {
  items: CartItem[];
  isCartOpen: boolean;
  setCartOpen: (isOpen: boolean) => void;
  addItem: (item: CartItem) => boolean;
  decrementItem: (id: string) => void;
  removeItem: (id: string) => void;
  clearCart: () => void;
}

const MAX_ITEMS = 15;

export const useCartStore = create<CartState>((set, get) => ({
  items: [],
  isCartOpen: false,
  setCartOpen: (isOpen) => set({ isCartOpen: isOpen }),
  addItem: (newItem) => {
    const { items } = get();
    const currentTotal = items.reduce((acc, i) => acc + i.quantity, 0);
    
    if (currentTotal + newItem.quantity > MAX_ITEMS) {
      return false;
    }

    set((state) => {
      const existingItem = state.items.find(i => i.id === newItem.id);
      if (existingItem) {
        return {
          items: state.items.map(i => 
            i.id === newItem.id 
              ? { ...i, quantity: i.quantity + newItem.quantity }
              : i
          )
        };
      }
      return { items: [...state.items, newItem] };
    });
    return true;
  },
  decrementItem: (id) => {
    set((state) => {
      const existing = state.items.find(i => i.id === id);
      if (existing && existing.quantity > 1) {
        return {
          items: state.items.map(i => 
            i.id === id ? { ...i, quantity: i.quantity - 1 } : i
          )
        };
      } else {
        return { items: state.items.filter(i => i.id !== id) };
      }
    });
  },
  removeItem: (id) => {
    set((state) => ({
      items: state.items.filter(i => i.id !== id)
    }));
  },
  clearCart: () => set({ items: [] })
}));
