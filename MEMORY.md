# Memoria de Vito Pizza (Lecciones Aprendidas)

## Diseño y Maquetación (Hero Section)
1. **Posicionamiento y Solapamiento**: NUNCA usar `absolute bottom-[20%]` o similares para posicionar elementos centrales como la pizza. Esto causa que en diferentes tamaños de pantalla la imagen se superponga horriblemente sobre los textos y botones. Siempre usar **Flexbox** en el flujo normal del documento para que cada elemento tenga su espacio respetado y fluya naturalmente.
2. **Efecto Ola en la Cinta**: Para hacer un efecto de "ola" en la cinta inferior, usar un SVG en la parte superior e inferior que esté animado con `animate-ticker`, y asegurarse de que NO queden espacios (1px gap) entre el SVG y el contenedor sólido, ya que se asoma el fondo punteado naranja (usar márgenes negativos `-mb-[1px]` / `-mt-[1px]` para sellar).
3. **Borde Negro en Imágenes de Pizza**: Al tratar de recortar la imagen circular de la pizza, NO confiar solo en porcentajes de tamaño. Usar `rounded-full` + `overflow-hidden` en el contenedor y un escalado fuerte (`scale-[1.2]` o mayor) directo a la etiqueta `img` con `object-cover`, para asegurar que cualquier borde negro de la imagen original quede 100% fuera del recorte circular.
4. **Posicionamiento horizontal de la Pizza**: Si la pizza debe ir exactamente en el centro, **NO** usar `translate-x`. Confiar plenamente en el centrado natural que otorga Flexbox (`flex justify-center`). Los offsets manuales solo causan dolores de cabeza al quitar animaciones que tiraban hacia los lados.
5. **Animaciones Flotantes Controladas**: La animación de `float` (en `globals.css`) debe ser muy sutil (ej. `translateY(-5px)`). Si se le da demasiada altura, los elementos terminan chocando con el contenido que tienen arriba en pantallas pequeñas.
6. **Cumplimiento Estricto de Tareas**: NUNCA hacer cambios estructurales ni de orden de componentes que el usuario no haya solicitado de forma explícita. Actuar siempre como un asistente ceñido exclusivamente a las órdenes dadas sin asumir rediseños no pedidos.

## Deploy (Netlify)
7. **Secrets scanning y NEXT_PUBLIC_***: Netlify falla el build si detecta valores de env vars en el output. Las `NEXT_PUBLIC_*` siempre se incrustan en el bundle, así que deben listarse en `SECRETS_SCAN_OMIT_KEYS` en `netlify.toml`. Al agregar una nueva `NEXT_PUBLIC_*`, sumarla ahí. Nunca omitir secretos reales (service_role).
