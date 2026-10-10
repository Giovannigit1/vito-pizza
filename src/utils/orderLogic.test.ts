import { describe, it, expect } from 'vitest';
import { formatCLP, calculateCartTotal, validateCartLimit, generateWhatsAppLink, CartItem } from './orderLogic';

describe('orderLogic', () => {
  describe('formatCLP', () => {
    it('debe formatear correctamente montos en CLP', () => {
      expect(formatCLP(12990)).toBe('$12.990');
      expect(formatCLP(0)).toBe('$0');
      expect(formatCLP(1000000)).toBe('$1.000.000');
    });

    it('debe rechazar montos negativos o con decimales lanzando un error', () => {
      expect(() => formatCLP(-100)).toThrow();
      expect(() => formatCLP(12.5)).toThrow();
    });
  });

  describe('calculateCartTotal', () => {
    it('debe calcular el total sin delivery', () => {
      const items: CartItem[] = [
        { id: '1', productName: 'Pizza Pepperoni', sizeName: 'Familiar', price: 13990, quantity: 2 },
        { id: '2', productName: 'Bebida', sizeName: 'Única', price: 2000, quantity: 1 }
      ];
      expect(calculateCartTotal(items)).toBe(29980); // (13990*2) + 2000
    });

    it('debe calcular el total con costo de delivery', () => {
      const items: CartItem[] = [
        { id: '1', productName: 'Pizza Pepperoni', sizeName: 'Familiar', price: 13990, quantity: 1 }
      ];
      expect(calculateCartTotal(items, 2500)).toBe(16490);
    });
  });

  describe('validateCartLimit', () => {
    it('debe validar cuando el total de items está bajo o en el límite', () => {
      const items: CartItem[] = [
        { id: '1', productName: 'Pizza', sizeName: 'Familiar', price: 1000, quantity: 5 },
        { id: '2', productName: 'Bebida', sizeName: 'Única', price: 1000, quantity: 10 }
      ];
      expect(validateCartLimit(items, 15)).toBe(true);
    });

    it('debe rechazar cuando excede el límite', () => {
      const items: CartItem[] = [
        { id: '1', productName: 'Pizza', sizeName: 'Familiar', price: 1000, quantity: 16 }
      ];
      expect(validateCartLimit(items, 15)).toBe(false);
    });
  });

  describe('generateWhatsAppLink', () => {
    const phone = '56912345678';
    
    it('debe generar el enlace correctamente para retiro', () => {
      const items: CartItem[] = [
        { id: '1', productName: 'Pepperoni', sizeName: 'Familiar', price: 13990, quantity: 1 }
      ];
      const link = generateWhatsAppLink(items, 13990, 'retiro', phone);
      expect(link).toContain('https://wa.me/56912345678?text=');
      // Debe contener la url encodeada
      const decoded = decodeURIComponent(link.split('text=')[1]);
      expect(decoded).toContain('Nuevo Pedido Vito Pizza');
      expect(decoded).toContain('1x Pepperoni (Familiar)');
      expect(decoded).toContain('Retiro en local');
      expect(decoded).toContain('Total: $13.990');
    });

    it('debe generar el enlace correctamente para delivery con dirección', () => {
      const items: CartItem[] = [
        { id: '1', productName: 'Pepperoni', sizeName: 'Familiar', price: 13990, quantity: 1 }
      ];
      const link = generateWhatsAppLink(items, 16490, 'delivery', phone, 'Calle Falsa 123', 2500);
      const decoded = decodeURIComponent(link.split('text=')[1]);
      expect(decoded).toContain('Delivery');
      expect(decoded).toContain('*Dirección:* Calle Falsa 123');
      expect(decoded).toContain('*Costo Delivery:* $2.500');
      expect(decoded).toContain('*Total: $16.490*');
    });
  });
});
