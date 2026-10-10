# Spec 005: Checkout y WhatsApp

## Objetivo
Implementar la interfaz del carrito flotante y la hoja de checkout que confirma el pedido redirigiendo a WhatsApp, aplicando la lógica pura construida en el Spec 002.

## Requisitos (EARS)
1. **The system shall** mostrar un botón flotante con el total del carrito y cantidad de ítems si el carrito no está vacío.
2. **The system shall** abrir un modal (Drawer) al hacer click, listando los ítems con opción de eliminar o cambiar cantidades.
3. **The system shall** tener un selector para Delivery o Retiro, mostrando campo de dirección condicionalmente.
4. **The system shall** sumar el costo de delivery al total si aplica.
5. **The system shall** generar y abrir el link de WhatsApp advirtiendo que no es confirmación final.

## Tareas Completadas
- [x] Documentar Spec 005.
- [x] Agregar UI state a `cartStore.ts`.
- [x] Implementar `FloatingCart.tsx`.
- [x] Implementar `CartDrawer.tsx`.
- [x] Integrarlos en `page.tsx`.
