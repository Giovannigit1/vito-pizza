"use client";

import { useCartStore } from '@/store/cartStore';
import { calculateCartTotal, formatCLP } from '@/utils/orderLogic';

export function FloatingCart() {
  const items = useCartStore(state => state.items);
  const setCartOpen = useCartStore(state => state.setCartOpen);
  
  if (items.length === 0) return null;
  
  const totalItems = items.reduce((acc, i) => acc + i.quantity, 0);
  const totalAmount = calculateCartTotal(items);

  return (
    <div className="fixed bottom-8 left-0 right-0 px-4 z-40 animate-in fade-in slide-in-from-bottom-8 duration-500">
      <button 
        onClick={() => setCartOpen(true)}
        className="w-full max-w-md mx-auto bg-[#f2c75d] text-[#2f1b13] rounded-full p-4 font-black shadow-[6px_6px_0px_rgba(47,27,19,1)] flex justify-between items-center transition-all hover:scale-[1.03] active:scale-95 border-4 border-[#2f1b13]"
      >
        <div className="flex items-center gap-4">
          <span className="bg-[#2f1b13] text-[#faecc0] px-4 py-2 rounded-full text-lg shadow-inner flex items-center gap-2">
            🛒 {totalItems}
          </span>
          <span className="text-xl uppercase tracking-widest hidden sm:block">Mi Pedido</span>
        </div>
        <span className="text-2xl bg-white px-4 py-2 rounded-full border-2 border-[#2f1b13] rotate-[-2deg]">{formatCLP(totalAmount)}</span>
      </button>
    </div>
  );
}
