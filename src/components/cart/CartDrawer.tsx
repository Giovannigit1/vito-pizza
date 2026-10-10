'use client';

import { useState } from 'react';
import { useCartStore } from '@/store/cartStore';
import { calculateCartTotal, formatCLP, generateWhatsAppLink } from '@/utils/orderLogic';

const DELIVERY_COST = 2500;

export function CartDrawer() {
  const { items, isCartOpen, setCartOpen, addItem, decrementItem, removeItem } = useCartStore();
  const [deliveryMethod, setDeliveryMethod] = useState<'retiro' | 'delivery'>('retiro');
  const [address, setAddress] = useState('');

  if (!isCartOpen) return null;

  const totalAmount = calculateCartTotal(items, deliveryMethod === 'delivery' ? DELIVERY_COST : 0);
  
  const handleCheckout = () => {
    if (deliveryMethod === 'delivery' && !address.trim()) {
      alert('Por favor ingresa tu dirección completa para el delivery.');
      return;
    }
    const phone = process.env.NEXT_PUBLIC_WA_NUMBER || '56912345678';
    const link = generateWhatsAppLink(
      items, 
      totalAmount, 
      deliveryMethod, 
      phone, 
      address, 
      DELIVERY_COST
    );
    window.open(link, '_blank');
  };

  const handleAdd = (item: any) => {
    const success = addItem({ ...item, quantity: 1 });
    if (!success) alert("¡Alcanzaste el límite máximo de productos en el pedido! (15)");
  };

  return (
    <div className="fixed inset-0 z-[60] flex justify-end bg-[#2f1b13]/60 backdrop-blur-sm transition-opacity">
      <div className="absolute inset-0 cursor-pointer" onClick={() => setCartOpen(false)} />
      
      <div className="relative w-full max-w-md bg-[#faecc0] h-[100dvh] shadow-2xl flex flex-col border-l-4 border-[#2f1b13] animate-in slide-in-from-right duration-300">
        
        {/* Header */}
        <div className="p-6 border-b-4 border-[#2f1b13] flex justify-between items-center bg-[#f2c75d]">
          <div className="flex items-center gap-3">
            <span className="text-3xl">🛒</span>
            <h2 className="font-serif font-black text-3xl text-[#2f1b13]">Tu Pedido</h2>
          </div>
          <button 
            onClick={() => setCartOpen(false)} 
            className="text-[#2f1b13] hover:text-[#c94b39] w-10 h-10 flex items-center justify-center font-black text-3xl transition-colors border-2 border-transparent hover:border-[#2f1b13] rounded-full"
          >
            &times;
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6 hide-scrollbar">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-[#2f1b13]/50">
              <span className="text-6xl mb-4 opacity-50 grayscale">🍕</span>
              <p className="font-bold text-lg">Tu carrito está vacío.</p>
            </div>
          ) : (
            <div className="space-y-4">
              {items.map(item => (
                <div key={item.id} className="flex flex-col bg-white rounded-2xl p-4 border-2 border-[#2f1b13] shadow-[4px_4px_0px_rgba(47,27,19,1)]">
                  <div className="flex justify-between items-start mb-3">
                    <div className="flex-1 pr-4">
                      <div className="font-serif font-black text-[#2f1b13] text-xl leading-tight mb-1">{item.productName}</div>
                      <div className="text-sm font-bold text-[#c94b39]">{item.sizeName}</div>
                    </div>
                    <div className="font-black text-[#2f1b13] text-lg">{formatCLP(item.price)}</div>
                  </div>
                  
                  <div className="flex items-center justify-between mt-2 pt-3 border-t-2 border-[#2f1b13]/10">
                    <button onClick={() => removeItem(item.id)} className="text-[#c94b39] text-sm font-bold hover:underline">
                      Quitar
                    </button>
                    <div className="flex items-center gap-1 bg-[#faecc0] rounded-xl p-1 border-2 border-[#2f1b13]">
                      <button 
                        onClick={() => decrementItem(item.id)} 
                        className="w-8 h-8 rounded-lg hover:bg-[#2f1b13] hover:text-[#faecc0] text-[#2f1b13] flex items-center justify-center font-black transition-colors"
                      >
                        -
                      </button>
                      <span className="font-black w-8 text-center text-[#2f1b13]">{item.quantity}</span>
                      <button 
                        onClick={() => handleAdd(item)} 
                        className="w-8 h-8 rounded-lg hover:bg-[#2f1b13] hover:text-[#faecc0] text-[#2f1b13] flex items-center justify-center font-black transition-colors"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Delivery Method */}
          {items.length > 0 && (
            <div className="mt-10">
              <h3 className="font-serif font-black mb-4 text-[#2f1b13] text-2xl">¿Cómo lo llevas?</h3>
              <div className="flex flex-col gap-3">
                <label className={`flex items-center gap-4 p-4 border-2 rounded-2xl cursor-pointer transition-colors ${deliveryMethod === 'retiro' ? 'bg-[#c94b39] border-[#2f1b13] text-[#faecc0] shadow-[4px_4px_0px_rgba(47,27,19,1)]' : 'bg-white border-[#2f1b13] text-[#2f1b13] hover:bg-[#faecc0]'}`}>
                  <input type="radio" checked={deliveryMethod === 'retiro'} onChange={() => setDeliveryMethod('retiro')} className="w-5 h-5 accent-[#2f1b13]" />
                  <span className="font-bold text-lg">Paso a retirar</span>
                </label>
                <label className={`flex items-center gap-4 p-4 border-2 rounded-2xl cursor-pointer transition-colors ${deliveryMethod === 'delivery' ? 'bg-[#c94b39] border-[#2f1b13] text-[#faecc0] shadow-[4px_4px_0px_rgba(47,27,19,1)]' : 'bg-white border-[#2f1b13] text-[#2f1b13] hover:bg-[#faecc0]'}`}>
                  <input type="radio" checked={deliveryMethod === 'delivery'} onChange={() => setDeliveryMethod('delivery')} className="w-5 h-5 accent-[#2f1b13]" />
                  <div className="flex flex-col">
                    <span className="font-bold text-lg">Delivery a domicilio</span>
                    <span className={`text-sm font-bold ${deliveryMethod === 'delivery' ? 'text-[#faecc0]/80' : 'text-[#c94b39]'}`}>+{formatCLP(DELIVERY_COST)}</span>
                  </div>
                </label>
              </div>
              
              {deliveryMethod === 'delivery' && (
                <div className="mt-4 p-5 bg-white rounded-2xl border-2 border-[#2f1b13] shadow-[4px_4px_0px_rgba(47,27,19,1)]">
                  <label className="block text-sm font-bold text-[#2f1b13] mb-2">¿A dónde te lo llevamos?</label>
                  <input 
                    type="text" 
                    placeholder="Ej: Calle Principal 123, Depto 4B" 
                    className="w-full bg-[#faecc0] border-2 border-[#2f1b13] rounded-xl p-4 text-[#2f1b13] font-medium focus:ring-4 focus:ring-[#f2c75d] focus:outline-none transition-all placeholder-[#2f1b13]/40"
                    value={address}
                    onChange={e => setAddress(e.target.value)}
                  />
                </div>
              )}
            </div>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="p-6 border-t-4 border-[#2f1b13] bg-[#f2c75d] shadow-[0_-10px_30px_rgba(47,27,19,0.2)]">
            <div className="flex justify-between font-black text-2xl mb-6 text-[#2f1b13]">
              <span>Total a pagar</span>
              <span className="text-[#c94b39] bg-white px-3 py-1 border-2 border-[#2f1b13] rounded-xl shadow-[2px_2px_0px_rgba(47,27,19,1)] rotate-2">{formatCLP(totalAmount)}</span>
            </div>
            <button 
              onClick={handleCheckout}
              className="w-full bg-[#2f1b13] hover:bg-[#1a0f0a] text-[#faecc0] font-black py-5 px-6 rounded-2xl flex justify-center items-center gap-3 transition-all active:scale-95 text-xl shadow-[4px_4px_0px_rgba(201,75,57,1)]"
            >
              <span>¡Pedir por WhatsApp!</span>
            </button>
            <p className="text-xs font-bold text-[#2f1b13]/60 mt-4 text-center">
              Esto enviará un mensaje al local con tu pedido detallado.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
