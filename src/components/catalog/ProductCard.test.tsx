import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { ProductCard } from './ProductCard';
import { Database } from '@/types/database';

type Product = Database['public']['Tables']['products']['Row'];
type ProductSize = Database['public']['Tables']['product_sizes']['Row'];

const mockProduct: Product = {
  id: 'p1',
  category_id: 'c1',
  name: 'Pizza Test',
  description: 'Descripción de prueba',
  image_url: null,
  is_available: true,
  created_at: ''
};

const mockSizes: ProductSize[] = [
  { id: 's1', product_id: 'p1', name: 'Personal', price: 5000, is_available: true },
  { id: 's2', product_id: 'p1', name: 'Familiar', price: 10000, is_available: true }
];

describe('ProductCard', () => {
  it('debe renderizar la información básica del producto y precio base', () => {
    render(<ProductCard product={mockProduct} sizes={mockSizes} />);
    expect(screen.getByText('Pizza Test')).toBeInTheDocument();
    expect(screen.getByText('Descripción de prueba')).toBeInTheDocument();
    expect(screen.getByText('$5.000')).toBeInTheDocument(); // Precio del primer tamaño por defecto
  });

  it('debe permitir cambiar de tamaño y actualizar el precio', () => {
    render(<ProductCard product={mockProduct} sizes={mockSizes} />);
    
    // Seleccionar el tamaño "Familiar"
    const select = screen.getByRole('combobox');
    fireEvent.change(select, { target: { value: 's2' } });
    
    // El precio debe actualizarse
    expect(screen.getByText('$10.000')).toBeInTheDocument();
  });

  it('debe mostrar Agotado y deshabilitar el botón si el producto no está disponible', () => {
    const unavailableProduct = { ...mockProduct, is_available: false };
    render(<ProductCard product={unavailableProduct} sizes={mockSizes} />);
    
    expect(screen.getByText('Agotado')).toBeInTheDocument();
    expect(screen.getByRole('button')).toBeDisabled();
  });
});
