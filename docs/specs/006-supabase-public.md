# Spec 006: Conectar Supabase al Catálogo

## Objetivo
Reemplazar los datos ficticios del catálogo con datos reales obtenidos desde la base de datos de Supabase usando Server Components de Next.js, logrando SEO y renderizado rápido.

## Requisitos (EARS)
1. **The system shall** utilizar `@supabase/ssr` para crear un cliente de Supabase optimizado para Server Components.
2. **The system shall** consultar las tablas `categories`, `products` y `product_sizes` ordenados por `sort_order` y fecha de creación respectiva.
3. **The system shall** inyectar la información obtenida a los componentes del catálogo (`page.tsx`).
4. **The system shall** manejar el caso en que las variables de entorno no estén configuradas o la base de datos esté vacía mostrando un mensaje amigable.

## Tareas Completadas
- [x] Documentar Spec 006.
- [x] Instalar paquetes de Supabase.
- [x] Configurar el cliente de servidor (`src/lib/supabase/server.ts`).
- [x] Actualizar `page.tsx` para leer los datos de la nube.
