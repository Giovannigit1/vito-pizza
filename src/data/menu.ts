import { Database } from '@/types/database';

type Category = Database['public']['Tables']['categories']['Row'];
type Product = Database['public']['Tables']['products']['Row'];
type ProductSize = Database['public']['Tables']['product_sizes']['Row'];

const now = new Date().toISOString();

export const categories: Category[] = [
  { id: 'cat-1', name: 'Pizzas', sort_order: 1, created_at: now },
  { id: 'cat-2', name: 'Promociones', sort_order: 2, created_at: now },
  { id: 'cat-3', name: 'Acompañamientos', sort_order: 3, created_at: now },
  { id: 'cat-4', name: 'Bebestibles', sort_order: 4, created_at: now },
  { id: 'cat-5', name: 'Agregados', sort_order: 5, created_at: now },
];

export const products: Product[] = [
  // Pizzas
  { id: 'p-1', category_id: 'cat-1', name: 'Pizza Base', description: 'Base de todas nuestras pizzas: salsa de tomate pomodoro y mozzarella', image_url: '/images/pizza_margarita.jpg', is_available: true, created_at: now },
  { id: 'p-2', category_id: 'cat-1', name: 'Margarita', description: 'Albahaca y aceite de oliva', image_url: '/images/pizza_margarita.jpg', is_available: true, created_at: now },
  { id: 'p-3', category_id: 'cat-1', name: 'Pepperoni', description: 'Pepperoni', image_url: '/images/pizza_pepperoni.jpg', is_available: true, created_at: now },
  { id: 'p-4', category_id: 'cat-1', name: 'Vegetariana', description: 'Champiñón, aceituna verde y cebolla', image_url: '/images/pizza_margarita.jpg', is_available: true, created_at: now },
  { id: 'p-5', category_id: 'cat-1', name: 'Napolitana', description: 'Tomate y jamón', image_url: '/images/pizza_margarita.jpg', is_available: true, created_at: now },
  { id: 'p-6', category_id: 'cat-1', name: 'La Campagnola', description: 'Jamón, cebolla y choclo', image_url: '/images/pizza_margarita.jpg', is_available: true, created_at: now },
  { id: 'p-7', category_id: 'cat-1', name: 'La Vito Pizza', description: 'La de la casa - Pepperoni, aceituna verde y cebolla', image_url: '/images/pizza_pepperoni.jpg', is_available: true, created_at: now },
  { id: 'p-8', category_id: 'cat-1', name: 'La Parmigiana', description: 'Parmigiano reggiano y albahaca', image_url: '/images/pizza_margarita.jpg', is_available: true, created_at: now },
  { id: 'p-9', category_id: 'cat-1', name: 'La Di Mare Verde', description: 'Camarones, aceituna verde y choclo', image_url: '/images/pizza_margarita.jpg', is_available: true, created_at: now },
  { id: 'p-10', category_id: 'cat-1', name: 'Ármala tú mismo', description: '3 ingredientes (1 proteína y 2 vegetales)', image_url: '/images/pizza_margarita.jpg', is_available: true, created_at: now },
  { id: 'p-11', category_id: 'cat-1', name: '4 Carnes', description: 'Carne mechada de vacuno, pollo mechado, pepperoni y jamón', image_url: '/images/pizza_pepperoni.jpg', is_available: true, created_at: now },
  { id: 'p-12', category_id: 'cat-1', name: '4 Quesos', description: 'Queso mozzarella, queso azul, queso cabra y parmigiano reggiano', image_url: '/images/pizza_margarita.jpg', is_available: true, created_at: now },

  // Promociones
  { id: 'a-3', category_id: 'cat-2', name: 'Promo 2 Medianas', description: 'Margarita y Pepperoni medianas + 2 bebidas lata 350 ml', image_url: '/images/pizza_pepperoni.jpg', is_available: true, created_at: now },
  { id: 'a-4', category_id: 'cat-2', name: 'Promo 2 Mundos', description: '4 Carnes, 4 Quesos y bebida 2 Lt gratis', image_url: '/images/pizza_margarita.jpg', is_available: true, created_at: now },

  // Acompañamientos
  { id: 'a-1', category_id: 'cat-3', name: 'Palitos de Ajo', description: 'Clásicos palitos horneados con mantequilla de ajo', image_url: '/images/palitos_ajo.jpg', is_available: true, created_at: now },
  { id: 'a-2', category_id: 'cat-3', name: 'Palitos de Queso', description: 'Rellenos de abundante mozzarella', image_url: '/images/palitos_ajo.jpg', is_available: true, created_at: now },

  // Bebestibles
  { id: 'b-1', category_id: 'cat-4', name: 'Bebida Lata 350ml', description: 'Coca-Cola, Sprite, Fanta', image_url: '/images/bebestible_cola.jpg', is_available: true, created_at: now },
  { id: 'b-2', category_id: 'cat-4', name: 'Bebida 1.5 L', description: 'Coca-Cola, Sprite, Fanta', image_url: '/images/bebestible_cola.jpg', is_available: true, created_at: now },
  { id: 'b-3', category_id: 'cat-4', name: 'Jugo Natural', description: 'Naranja o Frambuesa', image_url: '/images/bebestible_cola.jpg', is_available: true, created_at: now },
  { id: 'b-4', category_id: 'cat-4', name: 'Agua Mineral', description: 'Con o sin gas', image_url: '/images/bebestible_cola.jpg', is_available: true, created_at: now },
  { id: 'b-5', category_id: 'cat-4', name: 'Cerveza Lata', description: 'Lager tradicional', image_url: '/images/bebestible_cola.jpg', is_available: true, created_at: now },
  { id: 'b-6', category_id: 'cat-4', name: 'Té Helado', description: 'Limón o Durazno', image_url: '/images/bebestible_cola.jpg', is_available: true, created_at: now },

  // Agregados
  { id: 'e-1', category_id: 'cat-5', name: 'Extra Mozzarella', description: 'Doble queso', image_url: '/images/ingredientes_extra.jpg', is_available: true, created_at: now },
  { id: 'e-2', category_id: 'cat-5', name: 'Extra Pepperoni', description: 'Rodajas de pepperoni', image_url: '/images/ingredientes_extra.jpg', is_available: true, created_at: now },
  { id: 'e-3', category_id: 'cat-5', name: 'Extra Jamón', description: 'Jamón pierna', image_url: '/images/ingredientes_extra.jpg', is_available: true, created_at: now },
  { id: 'e-4', category_id: 'cat-5', name: 'Extra Champiñón', description: 'Frescos laminados', image_url: '/images/ingredientes_extra.jpg', is_available: true, created_at: now },
  { id: 'e-5', category_id: 'cat-5', name: 'Extra Aceitunas', description: 'Aceitunas negras', image_url: '/images/ingredientes_extra.jpg', is_available: true, created_at: now },
  { id: 'e-6', category_id: 'cat-5', name: 'Extra Cebolla', description: 'Cebolla morada', image_url: '/images/ingredientes_extra.jpg', is_available: true, created_at: now },
  { id: 'e-7', category_id: 'cat-5', name: 'Extra Pimiento', description: 'Pimiento rojo', image_url: '/images/ingredientes_extra.jpg', is_available: true, created_at: now },
  { id: 'e-8', category_id: 'cat-5', name: 'Extra Tomate', description: 'Tomate cherry', image_url: '/images/ingredientes_extra.jpg', is_available: true, created_at: now },
  { id: 'e-9', category_id: 'cat-5', name: 'Extra Choclo', description: 'Grano dulce', image_url: '/images/ingredientes_extra.jpg', is_available: true, created_at: now },
  { id: 'e-10', category_id: 'cat-5', name: 'Extra Albahaca', description: 'Hojas frescas', image_url: '/images/ingredientes_extra.jpg', is_available: true, created_at: now },
  { id: 'e-11', category_id: 'cat-5', name: 'Extra Rúcula', description: 'Fresca post-horno', image_url: '/images/ingredientes_extra.jpg', is_available: true, created_at: now },
  { id: 'e-12', category_id: 'cat-5', name: 'Extra Piña', description: 'Trozos dulces', image_url: '/images/ingredientes_extra.jpg', is_available: true, created_at: now },
  { id: 'e-13', category_id: 'cat-5', name: 'Extra Pollo', description: 'Pollo asado', image_url: '/images/ingredientes_extra.jpg', is_available: true, created_at: now },
  { id: 'e-14', category_id: 'cat-5', name: 'Extra Tocino', description: 'Tocino ahumado', image_url: '/images/ingredientes_extra.jpg', is_available: true, created_at: now },
  { id: 'e-15', category_id: 'cat-5', name: 'Extra Carne', description: 'Carne picada', image_url: '/images/ingredientes_extra.jpg', is_available: true, created_at: now },
  { id: 'e-16', category_id: 'cat-5', name: 'Extra Salame', description: 'Salame italiano', image_url: '/images/ingredientes_extra.jpg', is_available: true, created_at: now },
  { id: 'e-17', category_id: 'cat-5', name: 'Extra Queso Azul', description: 'Toque intenso', image_url: '/images/ingredientes_extra.jpg', is_available: true, created_at: now },
];

export const sizes: ProductSize[] = [
  // Pizza Base
  { id: 's-1-f', product_id: 'p-1', name: 'Familiar', price: 10490, is_available: true },
  { id: 's-1-m', product_id: 'p-1', name: 'Mediana', price: 6390, is_available: true },
  { id: 's-1-c', product_id: 'p-1', name: 'Calzone', price: 4590, is_available: true },

  // Margarita
  { id: 's-2-f', product_id: 'p-2', name: 'Familiar', price: 10890, is_available: true },
  { id: 's-2-m', product_id: 'p-2', name: 'Mediana', price: 6690, is_available: true },
  { id: 's-2-c', product_id: 'p-2', name: 'Calzone', price: 4890, is_available: true },

  // Pepperoni
  { id: 's-3-f', product_id: 'p-3', name: 'Familiar', price: 11190, is_available: true },
  { id: 's-3-m', product_id: 'p-3', name: 'Mediana', price: 6890, is_available: true },
  { id: 's-3-c', product_id: 'p-3', name: 'Calzone', price: 4990, is_available: true },

  // Vegetariana
  { id: 's-4-f', product_id: 'p-4', name: 'Familiar', price: 11390, is_available: true },
  { id: 's-4-m', product_id: 'p-4', name: 'Mediana', price: 6990, is_available: true },
  { id: 's-4-c', product_id: 'p-4', name: 'Calzone', price: 5890, is_available: true },

  // Napolitana
  { id: 's-5-f', product_id: 'p-5', name: 'Familiar', price: 11690, is_available: true },
  { id: 's-5-m', product_id: 'p-5', name: 'Mediana', price: 7190, is_available: true },
  { id: 's-5-c', product_id: 'p-5', name: 'Calzone', price: 5990, is_available: true },

  // La Campagnola
  { id: 's-6-f', product_id: 'p-6', name: 'Familiar', price: 11990, is_available: true },
  { id: 's-6-m', product_id: 'p-6', name: 'Mediana', price: 7390, is_available: true },
  { id: 's-6-c', product_id: 'p-6', name: 'Calzone', price: 6190, is_available: true },

  // La Vito Pizza
  { id: 's-7-f', product_id: 'p-7', name: 'Familiar', price: 12590, is_available: true },
  { id: 's-7-m', product_id: 'p-7', name: 'Mediana', price: 7690, is_available: true },
  { id: 's-7-c', product_id: 'p-7', name: 'Calzone', price: 6390, is_available: true },

  // La Parmigiana
  { id: 's-8-f', product_id: 'p-8', name: 'Familiar', price: 12990, is_available: true },
  { id: 's-8-m', product_id: 'p-8', name: 'Mediana', price: 7990, is_available: true },
  { id: 's-8-c', product_id: 'p-8', name: 'Calzone', price: 6490, is_available: true },

  // La Di Mare Verde
  { id: 's-9-f', product_id: 'p-9', name: 'Familiar', price: 13490, is_available: true },
  { id: 's-9-m', product_id: 'p-9', name: 'Mediana', price: 8190, is_available: true },
  { id: 's-9-c', product_id: 'p-9', name: 'Calzone', price: 6590, is_available: true },

  // Ármala tú mismo
  { id: 's-10-f', product_id: 'p-10', name: 'Familiar', price: 13990, is_available: true },
  { id: 's-10-m', product_id: 'p-10', name: 'Mediana', price: 8490, is_available: true },
  { id: 's-10-c', product_id: 'p-10', name: 'Calzone', price: 6990, is_available: true },

  // 4 Carnes
  { id: 's-11-f', product_id: 'p-11', name: 'Familiar', price: 14990, is_available: true },
  { id: 's-11-m', product_id: 'p-11', name: 'Mediana', price: 8990, is_available: true },
  { id: 's-11-c', product_id: 'p-11', name: 'Calzone', price: 7790, is_available: true },

  // 4 Quesos
  { id: 's-12-f', product_id: 'p-12', name: 'Familiar', price: 15790, is_available: true },
  { id: 's-12-m', product_id: 'p-12', name: 'Mediana', price: 9390, is_available: true },
  { id: 's-12-c', product_id: 'p-12', name: 'Calzone', price: 7990, is_available: true },

  // Acompañamientos
  { id: 's-13', product_id: 'a-1', name: 'Único', price: 4390, is_available: true },
  { id: 's-14', product_id: 'a-2', name: 'Único', price: 5990, is_available: true },
  { id: 's-15', product_id: 'a-3', name: 'Único', price: 14990, is_available: true },
  { id: 's-16', product_id: 'a-4', name: 'Único', price: 30780, is_available: true },

  // Bebestibles
  { id: 's-17', product_id: 'b-1', name: 'Único', price: 1490, is_available: true },
  { id: 's-18', product_id: 'b-2', name: 'Único', price: 3490, is_available: true },
  { id: 's-19', product_id: 'b-3', name: 'Único', price: 2990, is_available: true },
  { id: 's-20', product_id: 'b-4', name: 'Único', price: 1790, is_available: true },
  { id: 's-21', product_id: 'b-5', name: 'Único', price: 2890, is_available: true },
  { id: 's-22', product_id: 'b-6', name: 'Único', price: 1790, is_available: true },

  // Ingredientes extra (Familiar / Mediana)
  { id: 's-23-f', product_id: 'e-1', name: 'Familiar', price: 1490, is_available: true },
  { id: 's-23-m', product_id: 'e-1', name: 'Mediana', price: 1190, is_available: true },
  { id: 's-24-f', product_id: 'e-2', name: 'Familiar', price: 1490, is_available: true },
  { id: 's-24-m', product_id: 'e-2', name: 'Mediana', price: 1190, is_available: true },
  { id: 's-25-f', product_id: 'e-3', name: 'Familiar', price: 1490, is_available: true },
  { id: 's-25-m', product_id: 'e-3', name: 'Mediana', price: 1190, is_available: true },
  { id: 's-26-f', product_id: 'e-4', name: 'Familiar', price: 1490, is_available: true },
  { id: 's-26-m', product_id: 'e-4', name: 'Mediana', price: 1190, is_available: true },
  { id: 's-27-f', product_id: 'e-5', name: 'Familiar', price: 1490, is_available: true },
  { id: 's-27-m', product_id: 'e-5', name: 'Mediana', price: 1190, is_available: true },
  { id: 's-28-f', product_id: 'e-6', name: 'Familiar', price: 1490, is_available: true },
  { id: 's-28-m', product_id: 'e-6', name: 'Mediana', price: 1190, is_available: true },
  { id: 's-29-f', product_id: 'e-7', name: 'Familiar', price: 1490, is_available: true },
  { id: 's-29-m', product_id: 'e-7', name: 'Mediana', price: 1190, is_available: true },
  { id: 's-30-f', product_id: 'e-8', name: 'Familiar', price: 1490, is_available: true },
  { id: 's-30-m', product_id: 'e-8', name: 'Mediana', price: 1190, is_available: true },

  { id: 's-31-f', product_id: 'e-9', name: 'Familiar', price: 990, is_available: true },
  { id: 's-31-m', product_id: 'e-9', name: 'Mediana', price: 690, is_available: true },
  { id: 's-32-f', product_id: 'e-10', name: 'Familiar', price: 990, is_available: true },
  { id: 's-32-m', product_id: 'e-10', name: 'Mediana', price: 690, is_available: true },
  { id: 's-33-f', product_id: 'e-11', name: 'Familiar', price: 990, is_available: true },
  { id: 's-33-m', product_id: 'e-11', name: 'Mediana', price: 690, is_available: true },
  { id: 's-34-f', product_id: 'e-12', name: 'Familiar', price: 990, is_available: true },
  { id: 's-34-m', product_id: 'e-12', name: 'Mediana', price: 690, is_available: true },
  { id: 's-35-f', product_id: 'e-13', name: 'Familiar', price: 990, is_available: true },
  { id: 's-35-m', product_id: 'e-13', name: 'Mediana', price: 690, is_available: true },
  { id: 's-36-f', product_id: 'e-14', name: 'Familiar', price: 990, is_available: true },
  { id: 's-36-m', product_id: 'e-14', name: 'Mediana', price: 690, is_available: true },
  { id: 's-37-f', product_id: 'e-15', name: 'Familiar', price: 990, is_available: true },
  { id: 's-37-m', product_id: 'e-15', name: 'Mediana', price: 690, is_available: true },
  { id: 's-38-f', product_id: 'e-16', name: 'Familiar', price: 990, is_available: true },
  { id: 's-38-m', product_id: 'e-16', name: 'Mediana', price: 690, is_available: true },

  { id: 's-39-f', product_id: 'e-17', name: 'Familiar', price: 1990, is_available: true },
  { id: 's-39-m', product_id: 'e-17', name: 'Mediana', price: 1490, is_available: true },
];
