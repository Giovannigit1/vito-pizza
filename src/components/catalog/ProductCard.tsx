'use client';

import { useState } from 'react';
import { useCartStore } from '@/store/cartStore';
import { Database } from '@/types/database';
import { formatCLP, CartItem } from '@/utils/orderLogic';

type Product = Database['public']['Tables']['products']['Row'];
type ProductSize = Database['public']['Tables']['product_sizes']['Row'];

interface ProductCardProps {
  product: Product;
  categoryName: string;
  sizes: ProductSize[];
  index: number;
}

export function ProductCard({ product, categoryName, sizes, index }: ProductCardProps) {
  const [selectedSizeId, setSelectedSizeId] = useState<string>(sizes[0]?.id || '');
  const addItem = useCartStore(state => state.addItem);
  
  const selectedSize = sizes.find(s => s.id === selectedSizeId) || sizes[0];
  const isAvailable = product.is_available && selectedSize?.is_available;

  const handleAdd = () => {
    if (!selectedSize) return;
    const item: CartItem = {
      id: `${product.id}-${selectedSize.id}`,
      productName: product.name,
      sizeName: selectedSize.name,
      price: selectedSize.price,
      quantity: 1
    };
    const success = addItem(item);
    if (!success) alert("¡Alcanzaste el límite máximo de productos!");
  };

  const bgColors = ['bg-[#e26d5c]', 'bg-[#e28f5c]', 'bg-[#d8a84e]', 'bg-[#7ba05b]'];
  const bgColor = bgColors[index % bgColors.length];
  
  const formattedIndex = index.toString().padStart(2, '0');

  return (
    <div className="flex flex-col h-full bg-[#fdfaf3] rounded-[2rem] p-3 shadow-sm transition-transform hover:-translate-y-1">
      {/* Image Container */}
      <div className={`relative h-40 md:h-48 w-full rounded-[1.5rem] overflow-hidden ${bgColor} flex items-center justify-center p-4 mb-4`}>
        <span className="absolute top-3 left-4 text-white/60 font-black text-sm">
          {formattedIndex}
        </span>
        
        {product.image_url ? (
          <img 
            src={product.image_url} 
            alt={product.name}
            className="w-full h-full object-cover drop-shadow-xl"
            loading="lazy"
          />
        ) : (
          <span className="text-6xl drop-shadow-lg">🍕</span>
        )}
        
        {!isAvailable ? (
          <div className="absolute bottom-3 right-3 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full border border-[#008c45]">
            Agotado
          </div>
        ) : (
          <div className="absolute bottom-3 right-3 bg-white text-[#008c45] text-[10px] font-black px-3 py-1 rounded-full border-2 border-[#008c45] shadow-[2px_2px_0px_rgba(0,140,69,1)] rotate-[-3deg]">
             {categoryName.split(' ')[0]}
          </div>
        )}
      </div>

      <div className="px-2 flex flex-col flex-1 pb-2">
        <span className="text-[10px] font-black tracking-widest text-[#008c45]/50 uppercase mb-1">
          {categoryName}
        </span>
        <h3 className="font-serif text-xl font-black text-[#008c45] leading-tight mb-2">
          {product.name}
        </h3>
        <p className="text-xs text-[#008c45]/70 font-medium line-clamp-2 mb-4 flex-1">
          {product.description || 'Una clásica y deliciosa preparación de la casa.'}
        </p>
        
        {/* Sizes & Price */}
        <div className="mt-auto">
          {sizes.length > 1 && (
            <div className="flex gap-2 mb-3">
              {sizes.map(size => (
                <button
                  key={size.id}
                  onClick={() => setSelectedSizeId(size.id)}
                  className={`flex-1 text-[10px] font-black py-1.5 rounded-lg border-2 transition-all ${
                    selectedSizeId === size.id 
                      ? 'bg-[#008c45] text-[#faecc0] border-[#008c45]'
                      : 'bg-transparent text-[#008c45] border-[#008c45]/20 hover:border-[#008c45]'
                  }`}
                >
                  {size.name}
                </button>
              ))}
            </div>
          )}
          
          <div className="flex items-center justify-between">
            <span className="text-sm font-black text-[#008c45]">
              {selectedSize ? formatCLP(selectedSize.price) : '--'}
            </span>
            <button
              onClick={handleAdd}
              disabled={!isAvailable}
              className="bg-[#ce2b37] text-white font-bold text-xs py-2 px-4 rounded-full hover:bg-[#a83b2a] transition-all flex items-center gap-1 shadow-sm active:scale-95 disabled:opacity-50"
            >
              <span>+ Sumar</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
