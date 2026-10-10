# Spec 003: UI Catálogo Público

## Objetivo
Desarrollar el catálogo móvil estático con categorías, productos, manejo de stock (agotado) y texto fijo del horario de atención, usando datos ficticios por ahora.

## Requisitos (EARS)
1. **The system shall** mostrar una cabecera con el nombre "Vito Pizza" y un texto estático del horario de atención.
2. **The system shall** renderizar una lista de productos agrupados por categorías, usando datos ficticios (mock).
3. **The system shall** permitir seleccionar el tamaño del producto (ej. Personal, Mediana, Familiar) si tiene múltiples tamaños.
4. **The system shall** mostrar el precio formateado usando la función pura `formatCLP`.
5. **The system shall** mostrar un estado visual de "Agotado" si el producto o tamaño no está disponible, deshabilitando el botón "Agregar".
6. **The system shall** usar Tailwind CSS para un diseño *mobile-first*.

## Tareas Completadas
- [x] Documentar Spec 003.
- [x] Implementar mock data (`dummyData.ts`).
- [x] Testear renderizado de ProductCard (TDD).
- [x] Implementar `ProductCard` y lógica de selección de tamaño.
- [x] Integrar en `page.tsx`.
