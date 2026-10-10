# Spec 001: Base de Datos y Tipos

## Objetivo
Crear la estructura base en Supabase (Categorías, Productos, Tamaños) y configurar sus políticas de seguridad (RLS) para que el frontend pueda tipar la lógica de cálculo de forma estricta.

## Requisitos (EARS)
1. **The system shall** contener una tabla de `categories`, `products` y `product_sizes` con sus respectivas llaves foráneas.
2. **The system shall** imponer que los precios sean enteros (CLP).
3. **The system shall** tener RLS activado permitiendo SELECT público y ALL para `authenticated`.
4. **The system shall** tener una migración SQL limpia en `supabase/migrations/`.
5. **The system shall** exponer los tipos de TypeScript extraídos de esta estructura en `src/types/database.ts`.

## Tareas Completadas
- [x] Diseñar el esquema SQL y crear el archivo de migración con políticas RLS.
- [x] Generar los tipos de TypeScript correspondientes para uso en el frontend.
- [x] Documentar la spec.
