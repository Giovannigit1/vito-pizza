# Spec 007: Autenticación y Panel Admin Privado

## Objetivo
Crear una zona segura `/admin` para que el dueño de Vito Pizza pueda iniciar sesión y gestionar el estado de sus productos (Agotado / Disponible) sin tener que usar el panel técnico de Supabase.

## Requisitos (EARS)
1. **The system shall** proveer una ruta `/admin/login` para iniciar sesión usando Auth nativo de Supabase.
2. **The system shall** utilizar `middleware.ts` para proteger todas las rutas que comiencen con `/admin` (redireccionando al login si no hay sesión).
3. **The system shall** tener una ruta `/admin/dashboard` que liste los productos de la BD.
4. **The system shall** permitir alternar el campo `is_available` mediante Server Actions o el cliente de Supabase, refrescando la UI.
5. **The system shall** respetar el RLS (Row Level Security) configurado en la base de datos.

## Tareas Completadas
- [x] Documentar Spec 007.
- [x] Crear cliente Supabase de navegador (`src/lib/supabase/client.ts`).
- [x] Implementar `middleware.ts` para protección de rutas.
- [x] Construir UI de `/admin/login` con manejo de errores.
- [x] Construir `/admin/dashboard` para ver y alternar disponibilidad.
