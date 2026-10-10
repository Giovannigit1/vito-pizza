"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { createClient } from '@/lib/supabase/client';
import { Database } from '@/types/database';

type Product = Database['public']['Tables']['products']['Row'];

interface Props {
  initialProducts: Product[];
}

export function DashboardClient({ initialProducts }: Props) {
  const [products, setProducts] = useState<Product[]>(initialProducts);
  const [loadingId, setLoadingId] = useState<string | null>(null);
  const router = useRouter();
  const supabase = createClient();

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push('/admin/login');
    router.refresh();
  };

  const toggleAvailability = async (id: string, currentStatus: boolean) => {
    setLoadingId(id);
    const newStatus = !currentStatus;
    
    const { error } = await (supabase.from('products') as any)
      .update({ is_available: newStatus })
      .eq('id', id);

    if (!error) {
      setProducts(products.map(p => p.id === id ? { ...p, is_available: newStatus } : p));
      router.refresh(); // Refrescar ISR en background
    } else {
      alert("Error actualizando producto: " + error.message);
    }
    
    setLoadingId(null);
  };

  return (
    <div className="max-w-4xl mx-auto p-4 text-gray-900">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Gestión de Menú</h1>
        <button 
          onClick={handleLogout}
          className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-4 py-2 rounded font-semibold text-sm"
        >
          Cerrar Sesión
        </button>
      </div>

      <div className="bg-white rounded-lg shadow overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-gray-50 border-b">
              <th className="p-4 font-semibold text-sm">Producto</th>
              <th className="p-4 font-semibold text-sm">Categoría ID</th>
              <th className="p-4 font-semibold text-sm text-center">Estado</th>
              <th className="p-4 font-semibold text-sm text-center">Acción</th>
            </tr>
          </thead>
          <tbody>
            {products.length === 0 ? (
              <tr>
                <td colSpan={4} className="p-4 text-center text-gray-500">No hay productos en la base de datos.</td>
              </tr>
            ) : (
              products.map(product => (
                <tr key={product.id} className="border-b hover:bg-gray-50">
                  <td className="p-4">
                    <div className="font-semibold">{product.name}</div>
                    <div className="text-xs text-gray-500 truncate max-w-xs">{product.description}</div>
                  </td>
                  <td className="p-4 text-sm text-gray-500">{product.category_id}</td>
                  <td className="p-4 text-center">
                    <span className={`inline-block px-2 py-1 rounded-full text-xs font-bold ${
                      product.is_available ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                    }`}>
                      {product.is_available ? 'Disponible' : 'Agotado'}
                    </span>
                  </td>
                  <td className="p-4 text-center">
                    <button
                      disabled={loadingId === product.id}
                      onClick={() => toggleAvailability(product.id, product.is_available)}
                      className="text-sm font-semibold underline text-blue-600 hover:text-blue-800 disabled:opacity-50"
                    >
                      {loadingId === product.id ? 'Guardando...' : (product.is_available ? 'Marcar Agotado' : 'Marcar Disponible')}
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
