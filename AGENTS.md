# Vito Pizza - Web de Pedidos (MVP)
**Proyecto**: Catálogo móvil y carrito que redirige a WhatsApp.
**Stack**: Next.js (App Router, TS), Supabase (Postgres, Auth, RLS), Netlify (Free).

## Comandos
*Pendiente, se completa en la tarea de scaffold.*

## Reglas de Dominio y Trampas
- **Dinero**: Pesos chilenos (CLP), enteros, sin decimales/floats, formato es-CL ($12.990). Subtotal/total/delivery son funciones puras.
- **WhatsApp**: Formato internacional (569XXXXXXXX), en variable `NEXT_PUBLIC_WA_NUMBER`. Texto codificado con `encodeURIComponent`. Validar max ítems.
- **Flujo**: Abrir WhatsApp no confirma el pedido, solo lo envía al local.
- **Productos**: Deben tener >= 1 tamaño. Sin stock = "Agotado" (no agregable). Fotos webp < 150KB en repo.
- **Horario**: Texto fijo web. Sin bloqueo por horario.
- **Seguridad**: RLS estricto. Solo Admin escribe, público lee. `service_role` y secretos nunca en cliente/repo. .env en .gitignore.
- **Privacidad**: Sin registro/cuentas de cliente. Sin analíticas/cookies de 3ros.
- **Fechas**: Sin lógica compleja. Si es necesario: `America/Santiago`, NUNCA `toISOString()` para el día.
- **SQL**: Siempre migraciones versionadas. Yo no ejecuto SQL contra Supabase, lo aplicas tú a mano.

## Forma de Trabajo (SDD)
Constitución → Spec (EARS) → Clarificación → Plan → Tareas → Implementación (TDD: tests 🔴 → código → tests 🟢) → Validación RF → Cambios. **No improvisar.**

## Límites
- ✅ **Siempre**: Preguntar antes de instalar dependencias o configurar servicios.
- ⚠️ **Pregunta antes**: Avanzar a la siguiente fase de SDD.
- 🚫 **Nunca**: Asumir datos reales, usar Vercel Hobby, consumir cuotas excesivas (Netlify/Supabase).

## Memoria
Leer `MEMORY.md` al empezar sesión y actualizar al terminar cada tarea.
