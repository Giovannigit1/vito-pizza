export interface CartItem {
  id: string;
  productName: string;
  sizeName: string;
  price: number;
  quantity: number;
}

export function formatCLP(amount: number): string {
  if (amount < 0 || !Number.isInteger(amount)) {
    throw new Error('El monto debe ser un número entero positivo');
  }
  return new Intl.NumberFormat('es-CL', {
    style: 'currency',
    currency: 'CLP',
    maximumFractionDigits: 0
  }).format(amount);
}

export function calculateCartTotal(items: CartItem[], deliveryCost: number = 0): number {
  const subtotal = items.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  return subtotal + deliveryCost;
}

export function validateCartLimit(items: CartItem[], maxItems: number): boolean {
  const totalItems = items.reduce((acc, item) => acc + item.quantity, 0);
  return totalItems <= maxItems;
}

export function generateWhatsAppLink(
  items: CartItem[], 
  total: number, 
  deliveryMethod: 'retiro' | 'delivery', 
  phoneNumber: string,
  address?: string,
  deliveryCost: number = 0
): string {
  let message = `🍕 *Nuevo Pedido Vito Pizza*\n\n`;
  message += `*Detalle:*\n`;
  
  items.forEach(item => {
    message += `- ${item.quantity}x ${item.productName} (${item.sizeName}): ${formatCLP(item.price * item.quantity)}\n`;
  });
  
  message += `\n*Entrega:* ${deliveryMethod === 'retiro' ? 'Retiro en local' : 'Delivery'}\n`;
  
  if (deliveryMethod === 'delivery' && address) {
    message += `*Dirección:* ${address}\n`;
    if (deliveryCost > 0) {
      message += `*Costo Delivery:* ${formatCLP(deliveryCost)}\n`;
    }
  }
  
  message += `\n*Total: ${formatCLP(total)}*\n`;
  message += `\n_Por favor, confirma mi pedido._`;

  return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
}
