# Spec 000: Setup y Bases

## Objetivo
Inicializar el proyecto Next.js con TypeScript, configurar el linter, y preparar el entorno de tests unitarios (Vitest) antes de escribir código de negocio o de interfaz.

## Requisitos (EARS)
1. **The system shall** ser inicializado usando Next.js App Router, React, TypeScript y Tailwind CSS (opcional, para diseño estático).
2. **The system shall** estar contenido en la carpeta raíz del repositorio sin anidamientos innecesarios.
3. **The system shall** tener configurado Vitest como test runner para asegurar la ejecución de tests rápidos sin dependencias complejas.
4. **The system shall** contar con un archivo `.env.example` donde se listen las variables públicas (ej. `NEXT_PUBLIC_WA_NUMBER`) sin incluir valores secretos.

## Tareas
- [ ] 0.1 Ejecutar `create-next-app` en modo no interactivo en el directorio actual.
- [ ] 0.2 Instalar Vitest y herramientas necesarias.
- [ ] 0.3 Configurar script de `test` en `package.json`.
- [ ] 0.4 Crear `.env.example`.
- [ ] 0.5 Limpiar archivos por defecto de Next.js (`page.tsx`, `globals.css` base) para dejar un lienzo en blanco.

## Riesgos y Trampas
- Vercel Hobby no se usa; no agregar `vercel.json` o dependencias exclusivas.
- No instalar componentes UI pesados; mantenerlo liviano para el Netlify Free tier.
