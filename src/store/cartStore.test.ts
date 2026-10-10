import { describe, it, expect, beforeEach } from 'vitest';
import { useCartStore } from './cartStore';
import { CartItem } from '@/utils/orderLogic';

describe('cartStore', () => {
  beforeEach(() => {
    useCartStore.setState({ items: [] });
  });

  const testItem: CartItem = {
    id: 'p1-s1',
    productName: 'Margarita',
    sizeName: 'Mediana',
    price: 5000,
    quantity: 1,
  };

  it('debe iniciar con el carrito vacío', () => {
    expect(useCartStore.getState().items).toEqual([]);
  });

  it('debe permitir agregar un item nuevo', () => {
    useCartStore.getState().addItem(testItem);
    expect(useCartStore.getState().items).toHaveLength(1);
    expect(useCartStore.getState().items[0].quantity).toBe(1);
  });

  it('debe sumar cantidades al agregar el mismo item', () => {
    useCartStore.getState().addItem(testItem);
    useCartStore.getState().addItem(testItem);
    expect(useCartStore.getState().items).toHaveLength(1);
    expect(useCartStore.getState().items[0].quantity).toBe(2);
  });

  it('debe bloquear agregar items que superen el límite configurado (ej 15)', () => {
    // Agregamos 15
    const bulkItem = { ...testItem, quantity: 15 };
    const success = useCartStore.getState().addItem(bulkItem);
    expect(success).toBe(true);
    expect(useCartStore.getState().items[0].quantity).toBe(15);
    
    // Tratamos de agregar uno más
    const failed = useCartStore.getState().addItem({ ...testItem, quantity: 1 });
    expect(failed).toBe(false);
    expect(useCartStore.getState().items[0].quantity).toBe(15);
  });

  it('debe permitir decrementar la cantidad de un item', () => {
    useCartStore.getState().addItem({ ...testItem, quantity: 2 });
    useCartStore.getState().decrementItem('p1-s1');
    expect(useCartStore.getState().items[0].quantity).toBe(1);
  });

  it('debe remover el item si se decrementa a 0', () => {
    useCartStore.getState().addItem(testItem);
    useCartStore.getState().decrementItem('p1-s1');
    expect(useCartStore.getState().items).toHaveLength(0);
  });

  it('debe permitir remover un item directamente', () => {
    useCartStore.getState().addItem(testItem);
    useCartStore.getState().removeItem('p1-s1');
    expect(useCartStore.getState().items).toHaveLength(0);
  });
});
