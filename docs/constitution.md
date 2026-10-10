# Constitución del Proyecto (Vito Pizza)
1. **Stack Simple y Portable**: Priorizar renderizado estático y evitar APIs acopladas a plataformas (ej. Netlify/Vercel functions propietarias) para asegurar portabilidad.
2. **La Spec Manda**: Implementar estrictamente lo especificado en el SDD. Nada se asume, no se agregan "mejoras" sin aprobación previa.
3. **Lógica Aislada y Pura**: Los cálculos de precios, totales y formateo de mensajes de WhatsApp deben ser funciones puras probadas unitariamente, totalmente desacopladas de la UI.
4. **Política de Tests Preventiva**: Ningún código lógico se escribe sin un test previo (Vitest). La instalación del runner requiere autorización.
5. **Seguridad y Privacidad Estricta**: RLS activo por defecto. Cero almacenamiento de datos de clientes en DB. Solo el administrador autenticado tiene permisos de escritura.
6. **Idioma**: Todo el código, variables y commits en inglés; interfaces de usuario y documentación del proyecto en español de Chile.
