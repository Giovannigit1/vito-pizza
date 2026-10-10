# Spec 004: Estado del Carrito

## Objetivo
Crear la tienda global (store) para el carrito de compras utilizando Zustand, garantizando estado inmutable y protegiéndolo con los límites de nuestra lógica pura.

## Requisitos (EARS)
1. **The system shall** manejar el carrito mediante Zustand.
2. **The system shall** validar usando `validateCartLimit` antes de agregar nuevos ítems, limitándolo a 15 artículos.
3. **The system shall** agrupar ítems idénticos (mismo producto y tamaño) sumando sus cantidades.
4. **The system shall** proveer funciones puras/acciones para agregar, decrementar y remover ítems.
5. **The system shall** estar cubierto por TDD para asegurar la integridad de los datos.

## Tareas Completadas
- [x] Documentar Spec 004.
- [x] Instalar Zustand.
- [x] TDD: Crear `cartStore.test.ts` y fallar.
- [x] Implementar `cartStore.ts`.
- [x] Integrar Zustand en `ProductCard.tsx`.
