
import Image from "next/image";

export default function Home() {
  return (
    <div className="relative font-sans antialiased text-gray-900">
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
             <div className="w-10 h-10 bg-brand-red rounded-xl flex items-center justify-center text-white font-black text-xl shadow-lg ring-4 ring-brand-red/10">E</div>
             <span className="text-2xl font-black tracking-tighter uppercase text-gray-900">Epi D'or</span>
          </div>
          <div className="hidden md:flex items-center gap-8 lg:gap-12">
            <a href="#about" className="text-xs font-black uppercase tracking-widest text-gray-400 hover:text-brand-red transition-all">L'Histoire</a>
            <a href="#expertise" className="text-xs font-black uppercase tracking-widest text-gray-400 hover:text-brand-red transition-all">Savoir-Faire</a>
            <a href="#menu" className="text-xs font-black uppercase tracking-widest text-gray-400 hover:text-brand-red transition-all">Le Menu</a>
            <button className="bg-brand-red text-white hover:bg-black px-8 py-3 rounded-full text-xs font-black uppercase tracking-widest transition-all shadow-xl shadow-brand-red/10">
              Commandez
            </button>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative h-screen flex items-center">
        <div className="absolute inset-0 z-0">
          <Image 
            src="haitian_restaurant_hero_mockup_1772644160509.png" 
            alt="Hero Background" 
            fill 
            className="object-cover brightness-50"
            priority
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6">
           <div className="max-w-4xl space-y-8 animate-in fade-in slide-in-from-bottom-10 duration-1000">
              <div className="inline-block px-4 py-2 bg-brand-red/20 backdrop-blur-xl border border-white/20 rounded-full">
                <span className="text-brand-yellow text-xs font-black uppercase tracking-[0.4em]">Depuis 1979</span>
              </div>
              <h1 className="text-6xl md:text-8xl lg:text-9xl font-black text-white leading-[0.9] tracking-tighter">
                Epi D'or Haiti - Boulangerie, Pâtisserie & Restauration
              </h1>
              <p className="text-xl md:text-3xl text-gray-200 font-light max-w-2xl leading-relaxed">
                Le leader Haïtien de la boulangerie et de la restauration rapide depuis 1979. Découvrez l'authenticité de nos saveurs.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 pt-4">
                 <button className="btn-primary">Découvrir l'Epi D'or</button>
                 <button className="btn-outline">Nos Restaurants</button>
              </div>
           </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-24 md:py-48 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-24 items-center">
          <div className="relative group">
            <div className="absolute -inset-6 bg-brand-red/5 rounded-[40px] rotate-3 group-hover:rotate-0 transition-all duration-700"></div>
            <div className="relative rounded-[40px] overflow-hidden shadow-2xl aspect-[4/5]">
               <Image 
                 src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&q=80" 
                 alt="Heritage" 
                 fill 
                 className="object-cover transition-transform duration-1000 group-hover:scale-110"
               />
            </div>
            <div className="absolute -bottom-10 -right-10 glass-card p-10 rounded-3xl text-center animate-bounce duration-[3s]">
               <div className="text-5xl font-black text-brand-red tracking-tighter">1979</div>
               <div className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400 mt-2">Port-au-Prince</div>
            </div>
          </div>
          <div className="space-y-10">
            <div className="flex items-center gap-4">
               <div className="w-12 h-[2px] bg-brand-red"></div>
               <span className="text-brand-red text-xs font-black uppercase tracking-[0.5em]">L'Héritage</span>
            </div>
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-black text-gray-900 leading-none tracking-tighter">
              Une Tradition<br/>Inégalée.
            </h2>
            <p className="text-xl md:text-2xl text-gray-500 leading-relaxed font-medium italic border-l-4 border-brand-red/20 pl-8">
              Fondée en 1979 par Roger ATTIE, Epi d'Or est une entreprise familiale haïtienne devenue leader dans la boulangerie, pâtisserie et restauration rapide. Notre mission est de favoriser l'accès à des produits de qualité au plus grand nombre.
            </p>
            <button className="btn-primary !bg-black hover:!bg-brand-red">Découvrez Plus</button>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="expertise" className="py-24 md:py-48 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
           <div className="text-center max-w-3xl mx-auto mb-32 space-y-6">
              <div className="text-brand-red text-xs font-black uppercase tracking-[0.5em]">Nos Services</div>
              <h2 className="text-5xl md:text-7xl font-black text-gray-900 tracking-tighter">Un Savoir-Faire Unique</h2>
           </div>
           <div className="grid md:grid-cols-3 gap-12">
             
               <div key={0} className="bg-white p-12 rounded-[40px] shadow-sm hover:shadow-2xl hover:-translate-y-4 transition-all duration-500 group">
                 <div className="w-20 h-20 bg-gray-50 rounded-2xl flex items-center justify-center text-4xl mb-10 group-hover:bg-brand-red group-hover:text-white transition-all duration-500">
                    ${['🥖', '🥐', '🍗'][0]}
                 </div>
                 <h3 className="text-3xl font-black text-gray-900 mb-6">Boulangerie</h3>
                 <p className="text-lg text-gray-500 font-medium leading-relaxed">Pains frais, baguettes traditionnelles et spécialités locales.</p>
               </div>
             
               <div key={1} className="bg-white p-12 rounded-[40px] shadow-sm hover:shadow-2xl hover:-translate-y-4 transition-all duration-500 group">
                 <div className="w-20 h-20 bg-gray-50 rounded-2xl flex items-center justify-center text-4xl mb-10 group-hover:bg-brand-red group-hover:text-white transition-all duration-500">
                    ${['🥖', '🥐', '🍗'][1]}
                 </div>
                 <h3 className="text-3xl font-black text-gray-900 mb-6">Pâtisserie</h3>
                 <p className="text-lg text-gray-500 font-medium leading-relaxed">Mille-feuilles, tartes aux fruits, éclairs et gâteaux personnalisés.</p>
               </div>
             
               <div key={2} className="bg-white p-12 rounded-[40px] shadow-sm hover:shadow-2xl hover:-translate-y-4 transition-all duration-500 group">
                 <div className="w-20 h-20 bg-gray-50 rounded-2xl flex items-center justify-center text-4xl mb-10 group-hover:bg-brand-red group-hover:text-white transition-all duration-500">
                    ${['🥖', '🥐', '🍗'][2]}
                 </div>
                 <h3 className="text-3xl font-black text-gray-900 mb-6">Restauraton Rapide</h3>
                 <p className="text-lg text-gray-500 font-medium leading-relaxed">Pizzas, lasagnes, et plats traditionnels haïtiens comme le griot.</p>
               </div>
             
           </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-100 pt-32 pb-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-12 gap-16 mb-32">
            <div className="md:col-span-6 space-y-10">
              <div className="text-4xl font-black tracking-tighter uppercase text-brand-red">Epi D'or</div>
              <p className="text-2xl text-gray-400 font-medium max-w-xl">
                 Le leader incontesté de la boulangerie et de la restauration rapide en Haïti.
              </p>
              <div className="flex gap-8">
                 {['facebook', 'instagram', 'twitter'].map(p => (
                   <a key={p} href="#" className="w-14 h-14 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 hover:bg-brand-red hover:text-white transition-all shadow-sm">
                      <div className="w-6 h-6 border-2 border-current rounded-sm"></div>
                   </a>
                 ))}
              </div>
            </div>
            <div className="md:col-span-3 space-y-8">
              <h4 className="text-xs font-black uppercase tracking-widest text-gray-900">Navigation</h4>
              <nav className="flex flex-col gap-4 text-gray-500 font-bold">
                <a href="#about" className="hover:text-brand-red transition-colors">L'Histoire</a>
                <a href="#expertise" className="hover:text-brand-red transition-colors">Savoir-Faire</a>
                <a href="#" className="hover:text-brand-red transition-colors">Nos Magasins</a>
              </nav>
            </div>
            <div className="md:col-span-3 space-y-8">
              <h4 className="text-xs font-black uppercase tracking-widest text-gray-900">Contact</h4>
              <p className="text-gray-500 font-bold">
                Port-au-Prince, Haïti<br/>
                info@epidorhaiti.com<br/>
                +509 2813 1313
              </p>
            </div>
          </div>
          <div className="pt-12 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-6">
             <p className="text-xs font-bold text-gray-300 uppercase tracking-widest">&copy; {new Date().getFullYear()} Epi D'or. Tous droits réservés.</p>
             <div className="flex gap-8 text-[10px] font-black uppercase tracking-[0.2em] text-gray-300">
                <a href="#" className="hover:text-gray-900">Confidentialité</a>
                <a href="#" className="hover:text-gray-900">Mentions Légales</a>
             </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
