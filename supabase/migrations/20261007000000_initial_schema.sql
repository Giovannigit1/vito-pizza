-- Habilitar extensión pgcrypto para UUIDs genéricos si no está activa
CREATE EXTENSION IF NOT EXISTS "pgcrypto";

-- Tabla de Categorías
CREATE TABLE public.categories (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name TEXT NOT NULL,
    sort_order INTEGER DEFAULT 0,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('America/Santiago', now()) NOT NULL
);

-- Tabla de Productos
CREATE TABLE public.products (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    category_id UUID NOT NULL REFERENCES public.categories(id) ON DELETE CASCADE,
    name TEXT NOT NULL,
    description TEXT,
    image_url TEXT,
    is_available BOOLEAN DEFAULT true NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('America/Santiago', now()) NOT NULL
);

-- Tabla de Tamaños/Variantes (Maneja el precio)
CREATE TABLE public.product_sizes (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    product_id UUID NOT NULL REFERENCES public.products(id) ON DELETE CASCADE,
    name TEXT NOT NULL, -- ej. "Familiar", "Mediana", "Única"
    price INTEGER NOT NULL CHECK (price >= 0), -- Pesos Chilenos (CLP), sin decimales
    is_available BOOLEAN DEFAULT true NOT NULL
);

-- Seguridad (RLS)
ALTER TABLE public.categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.products ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.product_sizes ENABLE ROW LEVEL SECURITY;

-- Políticas de lectura: Cualquier persona puede ver el catálogo
CREATE POLICY "Public read categories" ON public.categories FOR SELECT USING (true);
CREATE POLICY "Public read products" ON public.products FOR SELECT USING (true);
CREATE POLICY "Public read product_sizes" ON public.product_sizes FOR SELECT USING (true);

-- Políticas de escritura: Solo usuarios autenticados (el admin) pueden modificar
CREATE POLICY "Admin full access categories" ON public.categories FOR ALL TO authenticated USING (true) WITH CHECK (true);
CREATE POLICY "Admin full access products" ON public.products FOR ALL TO authenticated USING (true) WITH CHECK (true);
CREATE POLICY "Admin full access product_sizes" ON public.product_sizes FOR ALL TO authenticated USING (true) WITH CHECK (true);
