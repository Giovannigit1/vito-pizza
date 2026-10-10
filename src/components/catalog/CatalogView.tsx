'use client';
import { useState } from 'react';
import { ProductCard } from './ProductCard';
import { Database } from '@/types/database';

type Category = Database['public']['Tables']['categories']['Row'];
type Product = Database['public']['Tables']['products']['Row'];
type ProductSize = Database['public']['Tables']['product_sizes']['Row'];

interface CatalogViewProps {
  categories: Category[];
  products: Product[];
  sizes: ProductSize[];
}

export function CatalogView({ categories, products, sizes }: CatalogViewProps) {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const filteredProducts = activeCategory === 'all' 
    ? products.filter(p => p.category_id === 'cat-1' || p.category_id === 'cat-2')
    : products.filter(p => p.category_id === activeCategory);

  return (
    <section id="menu" className="w-full bg-[#faecc0] pt-20 pb-32 px-4 rounded-t-[3rem] shadow-[0_-10px_40px_rgba(0,0,0,0.2)] relative z-30">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-serif text-5xl md:text-7xl font-black text-[#008c45] text-center mb-6 tracking-tight">
          Elige tu sabor
        </h2>
        
        <p className="text-[#008c45]/80 text-center max-w-xl mx-auto font-bold mb-10 text-sm md:text-base">
          10 sabores, cero dramas. Toca una pizza para sumarla a tu pedido, la armas acá y la mandas por WhatsApp.
        </p>

        {/* Filter Pills */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          <button
            onClick={() => setActiveCategory('all')}
            className={`px-6 py-2 rounded-full font-bold transition-all border-2 border-[#008c45] text-sm md:text-base ${
              activeCategory === 'all' 
                ? 'bg-[#008c45] text-[#faecc0]' 
                : 'bg-transparent text-[#008c45] hover:bg-[#008c45]/10'
            }`}
          >
            Todos
          </button>
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-6 py-2 rounded-full font-bold transition-all border-2 border-[#008c45] text-sm md:text-base ${
                activeCategory === cat.id 
                  ? 'bg-[#008c45] text-[#faecc0]' 
                  : 'bg-transparent text-[#008c45] hover:bg-[#008c45]/10'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
          {filteredProducts.map((product, index) => {
             const productCategory = categories.find(c => c.id === product.category_id);
             return (
               <ProductCard
                 key={product.id}
                 product={product}
                 categoryName={productCategory?.name || ''}
                 sizes={sizes.filter(s => s.product_id === product.id)}
                 index={index + 1}
               />
             )
          })}
        </div>
      </div>
    </section>
  );
}
