# Spec 002: Lógica de Negocio Pura

## Objetivo
Desarrollar las utilidades de formateo, cálculos de carrito y generación de links de WhatsApp como funciones puras sin dependencias de React ni estado de UI.

## Requisitos (EARS)
1. **The system shall** tener una función `formatCLP` que devuelva el formato de moneda chileno estricto (ej. `$12.990`).
2. **The system shall** calcular subtotal y total considerando precio y cantidad, y costo de delivery opcional.
3. **The system shall** validar que el total de ítems no exceda un límite configurado (ej. 15 ítems combinados).
4. **The system shall** generar una URL de WhatsApp escapada con el resumen del pedido.
5. **The system shall** asegurar la correctitud con 100% de TDD en Vitest.

## Tareas Completadas
- [x] Documentar Spec 002.
- [x] Escribir tests (Red).
- [x] Implementar la lógica (Green).
