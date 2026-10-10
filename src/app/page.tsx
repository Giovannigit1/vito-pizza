import { CatalogView } from '@/components/catalog/CatalogView';
import { FloatingCart } from '@/components/cart/FloatingCart';
import { CartDrawer } from '@/components/cart/CartDrawer';
import { Flame, Heart, ShoppingBag, Pizza, Smartphone, Store, MapPin, Clock } from 'lucide-react';
import { categories, products, sizes } from '@/data/menu';

export const instant = false;

export default async function CatalogPage() {
  const hasErrors = false;

  return (
    <main className="min-h-screen bg-[#ce2b37] overflow-x-hidden relative">
      {/* Header */}
      <header className="w-full flex items-center justify-between p-6 absolute top-0 z-50">
        <div className="font-serif text-4xl font-black italic tracking-tighter text-[#ffffff] cursor-default bg-[#008c45] px-5 py-1.5 rounded-2xl shadow-[4px_4px_0px_rgba(255,255,255,1)] border-2 border-[#ffffff]">
          Vito
        </div>
        
        <nav className="hidden md:flex items-center gap-8 text-[#ffffff] font-bold text-sm">
          <a href="#menu" className="hover:opacity-75 transition-opacity">Sabores</a>
          <a href="#" className="hover:opacity-75 transition-opacity">Cómo pedir</a>
        </nav>
        
        <div className="flex items-center gap-2">
          <a 
            href={`https://wa.me/${process.env.NEXT_PUBLIC_WA_NUMBER || '56977705270'}`}
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-[#25D366] text-white px-5 py-2.5 rounded-full font-black flex items-center gap-2 text-sm shadow-[4px_4px_0px_rgba(0,140,69,1)] hover:translate-y-1 hover:shadow-[2px_2px_0px_rgba(0,140,69,1)] transition-all border-2 border-[#008c45]"
          >
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            WhatsApp
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-between pt-24 px-4 h-[100dvh] overflow-hidden">
        
        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 opacity-[0.04] pointer-events-none" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23000000\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }}></div>
        
        {/* Content Wrapper to shift everything up by ~10 units */}
        <div className="flex flex-col items-center justify-center w-full z-20 flex-1 -mt-10 md:-mt-16">
          
          {/* Top Content (Title, text, buttons) */}
          <div className="flex flex-col items-center justify-center w-full mt-4 md:mt-8">
            {/* Subtitle Pill */}
            <div className="bg-[#008c45] text-[#ffffff] text-xs font-bold tracking-widest uppercase px-5 py-2 rounded-full mb-6 z-10 flex items-center gap-3">
              <span className="w-6 h-px bg-[#ffffff]/50" />
              <span>PIZZAS TAKE AWAY</span>
              <span className="w-6 h-px bg-[#ffffff]/50" />
            </div>
            
            {/* Main Title */}
            <h1 className="font-serif text-[12vw] sm:text-7xl md:text-8xl lg:text-[100px] font-black text-[#ffffff] text-center leading-[0.95] tracking-tight z-10 drop-shadow-lg">
              Pizzas con <br />
              mucho cariño.
            </h1>

            <p className="mt-6 text-[#ffffff] max-w-lg text-center font-bold md:text-lg z-10 drop-shadow-md">
              10 sabores de siempre, recién horneadas y listas para llevar. Tú eliges; del resto se encarga Vito.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-4 mt-8 z-10 w-full justify-center">
              <a href="#menu" className="bg-[#ffffff] text-[#008c45] px-8 py-4 rounded-full font-black flex items-center gap-3 shadow-[4px_4px_0px_rgba(0,140,69,1)] hover:translate-y-1 hover:shadow-[2px_2px_0px_rgba(0,140,69,1)] transition-all border-2 border-[#008c45] text-lg">
                <span>Pide ahora</span>
              </a>
              <a href="#menu" className="border-2 border-[#ffffff] text-[#ffffff] px-8 py-3.5 rounded-full font-black flex items-center gap-2 hover:bg-[#ffffff] hover:text-[#ce2b37] transition-all text-lg">
                Ver sabores →
              </a>
            </div>
          </div>

          {/* Bottom Content (Pizza) */}
          <div className="relative w-[160px] md:w-[220px] mt-[30px] mb-8 md:mb-12 z-30 pointer-events-none flex justify-center items-center -translate-y-[20px]">
            <div className="relative w-full aspect-square animate-float flex justify-center items-center">
              
              {/* Strict Circular Cropping Wrapper */}
              <div className="w-full h-full rounded-full overflow-hidden flex justify-center items-center shadow-2xl relative z-10 bg-[#008c45]">
                <img 
                  src="/pizza-hero.jpg" 
                  alt="Pizza recién horneada" 
                  className="w-full h-full object-cover scale-[1.25]"
                />
              </div>

              {/* Steam Particles */}
              <div className="steam-particle steam-1"></div>
              <div className="steam-particle steam-2"></div>
              <div className="steam-particle steam-3"></div>
              <div className="steam-particle steam-4"></div>
            </div>
          </div>
        </div>

        {/* Wavy Ticker (Animated SVG Wave + Text) rotated -3deg */}
        <div className="absolute bottom-6 left-0 w-[120%] -ml-[10%] z-10 pointer-events-none flex flex-col rotate-[-3deg]">
          
          {/* Animated SVG Wave Top */}
          <div className="w-full overflow-hidden leading-[0] -mb-[1px]">
            <div className="w-[200%] flex animate-ticker">
              <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-1/2 h-[20px] md:h-[30px] fill-[#008c45]">
                <path d="M0,60 C150,120 150,0 300,60 C450,120 450,0 600,60 C750,120 750,0 900,60 C1050,120 1050,0 1200,60 L1200,121 L0,121 Z" />
              </svg>
              <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-1/2 h-[20px] md:h-[30px] fill-[#008c45]">
                <path d="M0,60 C150,120 150,0 300,60 C450,120 450,0 600,60 C750,120 750,0 900,60 C1050,120 1050,0 1200,60 L1200,121 L0,121 Z" />
              </svg>
            </div>
          </div>

          {/* Solid Ticker Base with Text */}
          <div className="bg-[#008c45] text-[#ffffff] py-2 md:py-4 shadow-2xl flex whitespace-nowrap overflow-hidden relative z-10">
            <div className="animate-ticker flex items-center gap-12 text-3xl md:text-4xl font-black font-serif tracking-widest">
              <span>✦ Margherita</span> <span>✦ Pepperoni New York</span> <span>✦ La Mítica Vito</span> <span>✦ Cuatro Quesos Trufada</span>
              <span>✦ Margherita</span> <span>✦ Pepperoni New York</span> <span>✦ La Mítica Vito</span> <span>✦ Cuatro Quesos Trufada</span>
              <span>✦ Margherita</span> <span>✦ Pepperoni New York</span> <span>✦ La Mítica Vito</span> <span>✦ Cuatro Quesos Trufada</span>
            </div>
          </div>

          {/* Animated SVG Wave Bottom */}
          <div className="w-full overflow-hidden leading-[0] rotate-180 -mt-[1px]">
            <div className="w-[200%] flex animate-ticker">
              <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-1/2 h-[20px] md:h-[30px] fill-[#008c45]">
                <path d="M0,60 C150,120 150,0 300,60 C450,120 450,0 600,60 C750,120 750,0 900,60 C1050,120 1050,0 1200,60 L1200,121 L0,121 Z" />
              </svg>
              <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-1/2 h-[20px] md:h-[30px] fill-[#008c45]">
                <path d="M0,60 C150,120 150,0 300,60 C450,120 450,0 600,60 C750,120 750,0 900,60 C1050,120 1050,0 1200,60 L1200,121 L0,121 Z" />
              </svg>
            </div>
          </div>

        </div>

        {/* Circular Badge (Overlapping the curved ticker on the left) */}
        <div className="absolute left-[5%] md:left-[10%] bottom-[18%] md:bottom-[22%] bg-[#ffffff] text-[#008c45] font-black text-center rounded-full p-4 w-24 h-24 md:w-32 md:h-32 flex flex-col items-center justify-center rotate-[-12deg] z-40 border-[4px] border-[#ce2b37] shadow-[4px_4px_0px_rgba(0,140,69,1)]">
          <span className="text-[7px] md:text-[9px] uppercase tracking-widest mb-1">Hechas con</span>
          <span className="text-xl md:text-2xl">❤️</span>
          <span className="text-[7px] md:text-[9px] uppercase tracking-widest mt-1">Cariño</span>
        </div>
      </section>

      {hasErrors && (
        <div className="max-w-md mx-auto p-4 mb-4 bg-yellow-100 text-yellow-800 rounded z-40 relative">
          Error cargando menú
        </div>
      )}

      {/* Dynamic Catalog Grid (Menú de Pizzas) */}
      <div id="menu" className="relative z-30">
        {!hasErrors && (
          <CatalogView 
            categories={categories || []} 
            products={products || []} 
            sizes={sizes || []} 
          />
        )}
      </div>

      {/* Why Vito Pizza Section */}
      <section className="bg-[#008c45] text-[#ffffff] py-32 px-4 relative overflow-hidden z-30">
        
        {/* Subtle Background Pattern (Optional) */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#ffffff 2px, transparent 2px)', backgroundSize: '40px 40px' }}></div>

        <div className="max-w-6xl mx-auto relative z-10">
          
          <div className="text-center mb-16">
            <h2 className="font-serif text-5xl md:text-7xl font-black mb-4 tracking-tight">¿Por qué Vito Pizza?</h2>
            <p className="text-[#ffffff]/70 font-bold max-w-xl mx-auto">
              Porque una pizza puede ser solo una pizza... o puede venir con masa madre, cariño y guiño incluido.
            </p>
          </div>
          
          <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16">
            
            {/* Left Cards */}
            <div className="flex flex-col gap-6 w-full lg:w-[350px]">
              <div className="bg-[#1a0f0a]/50 p-6 rounded-[2rem] border border-[#ffffff]/10 flex gap-5 items-start text-left lg:text-right lg:flex-row-reverse transition-transform hover:-translate-y-1">
                 <div className="bg-[#ffffff]/10 p-3.5 rounded-2xl text-[#ffffff] shrink-0 border border-[#ffffff]/20">
                   <Flame className="w-8 h-8 stroke-[2.5]" />
                 </div>
                 <div>
                   <h3 className="font-black text-xl mb-1.5 font-serif text-[#ffffff]">Recién horneadas</h3>
                   <p className="text-[#ffffff]/60 text-xs font-bold leading-relaxed">Salen del horno con ese aroma que te hace cambiar de planes para la cena.</p>
                 </div>
              </div>
              
              <div className="bg-[#1a0f0a]/50 p-6 rounded-[2rem] border border-[#ffffff]/10 flex gap-5 items-start text-left lg:text-right lg:flex-row-reverse transition-transform hover:-translate-y-1">
                 <div className="bg-[#ffffff]/10 p-3.5 rounded-2xl text-[#ffffff] shrink-0 border border-[#ffffff]/20">
                   <Heart className="w-8 h-8 stroke-[2.5]" />
                 </div>
                 <div>
                   <h3 className="font-black text-xl mb-1.5 font-serif text-[#ffffff]">Con mucho cariño</h3>
                   <p className="text-[#ffffff]/60 text-xs font-bold leading-relaxed">No es un slogan, es el sello de la casa y la razón del guiño italiano.</p>
                 </div>
              </div>
            </div>

            {/* Center Circle with Logo & Rotating Text */}
            <div className="relative w-72 h-72 md:w-96 md:h-96 shrink-0 my-10 lg:my-0 flex items-center justify-center">
              <div className="absolute inset-0 bg-[#ce2b37] rounded-full shadow-[0_0_60px_rgba(206,43,55,0.3)]"></div>
              
              {/* Rotating SVG Text */}
              <div className="absolute inset-0 animate-[spin_20s_linear_infinite] p-2 flex items-center justify-center">
                 <svg viewBox="0 0 200 200" className="w-full h-full text-[#ffffff] opacity-90 overflow-visible">
                   <path id="circlePath" d="M 100, 100 m -85, 0 a 85,85 0 1,1 170,0 a 85,85 0 1,1 -170,0" fill="transparent" />
                   <text className="font-black uppercase fill-current" fontSize="11" letterSpacing="1.5">
                     <textPath href="#circlePath" startOffset="0%" textLength="530" lengthAdjust="spacingAndGlyphs">
                        • HECHAS CON MUCHO CARIÑO • PIZZAS TAKE AWAY • HECHAS CON MUCHO CARIÑO • PIZZAS TAKE AWAY
                     </textPath>
                   </text>
                 </svg>
              </div>
              
              {/* Inner Circle for Logo */}
              <div className="absolute w-[65%] h-[65%] bg-[#ffffff] rounded-full flex items-center justify-center p-6 border-4 border-[#008c45] overflow-hidden z-10 shadow-inner">
                <img src="/vito-logo.png" alt="Vito Pizza Logo" className="w-full h-full object-contain scale-110" />
              </div>
            </div>

            {/* Right Cards */}
            <div className="flex flex-col gap-6 w-full lg:w-[350px]">
              <div className="bg-[#1a0f0a]/50 p-6 rounded-[2rem] border border-[#ffffff]/10 flex gap-5 items-start text-left transition-transform hover:-translate-y-1">
                 <div className="bg-[#ffffff]/10 p-3.5 rounded-2xl text-[#ffffff] shrink-0 border border-[#ffffff]/20">
                   <ShoppingBag className="w-8 h-8 stroke-[2.5]" />
                 </div>
                 <div>
                   <h3 className="font-black text-xl mb-1.5 font-serif text-[#ffffff]">Listas para llevar</h3>
                   <p className="text-[#ffffff]/60 text-xs font-bold leading-relaxed">Take away del bueno: pides, pasas y te vas con la caja calentita.</p>
                 </div>
              </div>
              
              <div className="bg-[#1a0f0a]/50 p-6 rounded-[2rem] border border-[#ffffff]/10 flex gap-5 items-start text-left transition-transform hover:-translate-y-1">
                 <div className="bg-[#ffffff]/10 p-3.5 rounded-2xl text-[#ffffff] shrink-0 border border-[#ffffff]/20">
                   <Pizza className="w-8 h-8 stroke-[2.5]" />
                 </div>
                 <div>
                   <h3 className="font-black text-xl mb-1.5 font-serif text-[#ffffff]">Sabores de siempre</h3>
                   <p className="text-[#ffffff]/60 text-xs font-bold leading-relaxed">Las clásicas que esperas y alguna que otra sorpresa gourmet.</p>
                 </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Cómo Pedir Section */}
      <section id="como-pedir" className="py-32 px-4 bg-[#f4f5f0] text-[#111111] relative z-30 overflow-hidden">
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <h2 className="font-serif text-5xl md:text-7xl font-black mb-4 tracking-tight text-[#008c45]">Cómo pedir</h2>
            <p className="font-bold max-w-xl mx-auto opacity-70 text-lg">
              Tres simples pasos para disfrutar de la vera pizza italiana.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 mb-20 text-center relative">
            {/* Connection Line */}
            <div className="hidden md:block absolute top-12 left-[15%] right-[15%] h-1 bg-gradient-to-r from-[#008c45] via-[#ffffff] to-[#ce2b37] opacity-30 z-0 rounded-full"></div>

            {/* Step 1 */}
            <div className="flex flex-col items-center relative z-10 group">
              <div className="w-24 h-24 bg-[#ffffff] text-[#008c45] rounded-full flex items-center justify-center mb-6 shadow-[6px_6px_0px_rgba(0,140,69,1)] border-4 border-[#008c45] group-hover:-translate-y-2 group-hover:scale-110 transition-all duration-300">
                <Pizza className="w-10 h-10 animate-[bounce_3s_ease-in-out_infinite]" />
              </div>
              <h3 className="font-serif text-2xl font-black mb-2 text-[#ce2b37]">Elige tus sabores</h3>
              <p className="font-bold opacity-70 max-w-[250px]">Revisa nuestro menú interactivo y selecciona las pizzas que te harán agua la boca.</p>
            </div>
            {/* Step 2 */}
            <div className="flex flex-col items-center relative z-10 group">
              <div className="w-24 h-24 bg-[#ffffff] text-[#ce2b37] rounded-full flex items-center justify-center mb-6 shadow-[6px_6px_0px_rgba(206,43,55,1)] border-4 border-[#ce2b37] group-hover:-translate-y-2 group-hover:scale-110 transition-all duration-300">
                <Smartphone className="w-10 h-10 animate-[pulse_2s_infinite]" />
              </div>
              <h3 className="font-serif text-2xl font-black mb-2 text-[#008c45]">Manda tu pedido</h3>
              <p className="font-bold opacity-70 max-w-[250px]">Revisa tu carrito y envíanos tu orden directamente al WhatsApp del local.</p>
            </div>
            {/* Step 3 */}
            <div className="flex flex-col items-center relative z-10 group">
              <div className="w-24 h-24 bg-[#ffffff] text-[#111111] rounded-full flex items-center justify-center mb-6 shadow-[6px_6px_0px_rgba(17,17,17,1)] border-4 border-[#111111] group-hover:-translate-y-2 group-hover:scale-110 transition-all duration-300">
                <Store className="w-10 h-10 animate-[pulse_2s_infinite]" />
              </div>
              <h3 className="font-serif text-2xl font-black mb-2 text-[#ce2b37]">Pasa a buscarla</h3>
              <p className="font-bold opacity-70 max-w-[250px]">Te confirmamos el tiempo de preparación para que pases a retirar tu pizza recién horneada.</p>
            </div>
          </div>
          
          <div className="flex justify-center">
            <a 
              href={`https://wa.me/${process.env.NEXT_PUBLIC_WA_NUMBER || '56977705270'}`}
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-[#25D366] text-white px-10 py-5 rounded-full font-black flex items-center gap-3 text-xl shadow-[6px_6px_0px_rgba(17,17,17,1)] hover:translate-y-1 hover:shadow-[2px_2px_0px_rgba(17,17,17,1)] transition-all border-4 border-[#111111] animate-pulse"
            >
              <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              Pedir por WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Ubicación Section */}
      <section className="py-32 px-4 bg-[#ce2b37] text-[#ffffff] relative z-30 overflow-hidden">
        {/* Animated background shape */}
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-[#008c45] rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-pulse"></div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="font-serif text-5xl md:text-7xl font-black mb-4 tracking-tight">Encuéntranos</h2>
            <p className="font-bold max-w-xl mx-auto opacity-90 text-lg">
              Ven a buscar la verdadera pizza italiana.
            </p>
          </div>
          
          <div className="flex flex-col lg:flex-row gap-8 items-stretch justify-center">
            {/* Info Container */}
            <div className="w-full lg:w-1/3 bg-[#ffffff] text-[#111111] rounded-[2rem] p-10 border-[4px] border-[#111111] shadow-[8px_8px_0px_rgba(17,17,17,1)] transform hover:-translate-y-2 transition-transform duration-300 flex flex-col justify-center">
              <h3 className="font-black text-3xl mb-6 text-[#008c45] font-serif">Más Información</h3>
              
              <div className="flex items-start gap-4 mb-6">
                <div className="bg-[#ce2b37]/10 p-3 rounded-xl text-[#ce2b37]">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-black text-lg">Dirección</h4>
                  <p className="font-bold opacity-70">Av. Italia 1234, Providencia<br/>Santiago, Chile</p>
                </div>
              </div>

              <div className="flex items-start gap-4 mb-6">
                <div className="bg-[#008c45]/10 p-3 rounded-xl text-[#008c45]">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-black text-lg">Horario</h4>
                  <p className="font-bold opacity-70">Mar a Dom: 12:30 - 22:30<br/>Lunes Cerrado</p>
                </div>
              </div>

            </div>

            {/* Map Container */}
            <div className="w-full lg:w-2/3 h-[400px] md:h-[500px] rounded-[2rem] border-[4px] border-[#111111] shadow-[8px_8px_0px_rgba(17,17,17,1)] overflow-hidden bg-[#ffffff] relative group">
              {/* Overlay that disappears on hover */}
              <div className="absolute inset-0 bg-[#008c45]/20 mix-blend-color z-10 pointer-events-none group-hover:opacity-0 transition-opacity duration-700"></div>
              
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3329.8454224090515!2d-70.6508215!3d-33.4371077!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662c5a2c4746f31%3A0x892eef8e535a0f2b!2sPlaza%20de%20Armas%20de%20Santiago!5e0!3m2!1ses!2scl!4v1700000000000!5m2!1ses!2scl" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={false} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale-[30%] contrast-125 sepia-[20%] filter transition-all duration-700 group-hover:grayscale-0 group-hover:contrast-100 group-hover:sepia-0"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Banner */}
      <footer className="bg-[#008c45] text-[#ffffff] py-20 px-4 text-center relative z-30 border-t-8 border-[#ce2b37] overflow-hidden">
        {/* Animated Background Text */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200%] overflow-hidden pointer-events-none opacity-5">
           <div className="whitespace-nowrap animate-[spin_60s_linear_infinite] font-black text-[15vw] leading-none text-[#ffffff]">
              VITO PIZZA VITO PIZZA VITO PIZZA
           </div>
        </div>

        <div className="max-w-4xl mx-auto flex flex-col items-center relative z-10">
          <div className="font-serif text-6xl md:text-8xl font-black italic tracking-tighter text-[#ffffff] mb-6 drop-shadow-lg transform hover:scale-110 transition-transform duration-300 cursor-default">
            Vito
          </div>
          <p className="font-bold opacity-90 mb-10 max-w-sm text-lg">
            La auténtica pizza italiana, lista para llevar.
          </p>
          <div className="flex gap-6 mb-12">
            <a href="#" className="w-16 h-16 rounded-full bg-[#ffffff] text-[#008c45] flex items-center justify-center hover:bg-[#ce2b37] hover:text-[#ffffff] transition-all duration-300 border-4 border-transparent hover:border-[#ffffff] transform hover:-translate-y-2 shadow-[4px_4px_0px_rgba(17,17,17,0.3)]">
              <span className="font-black text-xl">IG</span>
            </a>
            <a href="#" className="w-16 h-16 rounded-full bg-[#ffffff] text-[#008c45] flex items-center justify-center hover:bg-[#ce2b37] hover:text-[#ffffff] transition-all duration-300 border-4 border-transparent hover:border-[#ffffff] transform hover:-translate-y-2 shadow-[4px_4px_0px_rgba(17,17,17,0.3)]">
              <span className="font-black text-xl">FB</span>
            </a>
          </div>
          
          <div className="w-24 h-1.5 rounded-full bg-gradient-to-r from-[#008c45] via-[#ffffff] to-[#ce2b37] mb-8"></div>

          <div className="text-sm font-bold opacity-70">
            © 2026 Vito Pizza. Todos los derechos reservados.
          </div>
        </div>
      </footer>

      <FloatingCart />
      <CartDrawer />
    </main>
  );
}
