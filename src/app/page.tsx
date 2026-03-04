
import Image from "next/image";

export default function Home() {
  return (
    <div className="relative">
      {/* Navigation */}
      <nav className="fixed w-full z-50 transition-all duration-500 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-brand-red rounded-lg flex items-center justify-center text-white font-black text-xl">E</div>
            <span className="text-2xl font-black tracking-tighter uppercase text-gray-900">Epi D'or</span>
          </div>
          <div className="hidden md:flex items-center gap-12">
            <a href="#about" className="text-xs font-black uppercase tracking-widest text-gray-500 hover:text-brand-red transition-colors">L'Histoire</a>
            <a href="#expertise" className="text-xs font-black uppercase tracking-widest text-gray-500 hover:text-brand-red transition-colors">Expertise</a>
            <a href="#menu" className="text-xs font-black uppercase tracking-widest text-gray-500 hover:text-brand-red transition-colors">Menu</a>
            <a href="#contact" className="btn-primary !py-2.5 !text-xs">Commandez</a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0 scale-105 animate-[pulse_10s_infinite_alternate]">
          <Image 
            src="haitian_restaurant_hero_mockup_1772644160509.png" 
            alt="Hero" 
            fill 
            className="object-cover brightness-[0.4]"
            priority
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="max-w-4xl space-y-8">
            <div className="inline-block px-4 py-1.5 bg-brand-red/20 backdrop-blur-md border border-brand-red/30 rounded-full">
              <span className="text-brand-yellow text-xs font-black uppercase tracking-[0.3em]">Authenticité Haïtienne</span>
            </div>
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-black text-white leading-none tracking-tighter">
              Epi D'or Haiti - Boulangerie, Pâtisserie & Restauration
            </h1>
            <p className="text-xl md:text-3xl text-gray-300 font-light max-w-2xl leading-relaxed">
              Le leader Haïtien de la boulangerie et de la restauration rapide depuis 1979. Découvrez l'authenticité de nos saveurs.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 pt-4">
              <button className="btn-primary">Découvrir le Menu</button>
              <button className="btn-outline">Nos Emplacements</button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-px h-16 bg-gradient-to-b from-transparent via-white/50 to-transparent"></div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 bg-white relative">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-24 items-center">
          <div className="relative group">
            <div className="absolute -inset-4 bg-brand-red/5 rounded-[2rem] -rotate-2 group-hover:rotate-0 transition-transform"></div>
            <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl">
              <Image 
                src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&q=80" 
                alt="Kitchen" 
                fill 
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 w-48 h-48 glass-card rounded-3xl p-8 flex flex-col justify-center items-center text-center animate-bounce">
               <span className="text-4xl font-black text-brand-red">1979</span>
               <span className="text-[10px] font-black uppercase tracking-widest text-gray-400 mt-2">Duis 1979</span>
            </div>
          </div>
          <div className="space-y-8">
            <div className="text-brand-red text-sm font-black uppercase tracking-[0.4em]">Le Commencement</div>
            <h2 className="text-5xl md:text-7xl font-black text-gray-900 leading-[1.1] tracking-tighter">
              Une Tradition de Saveurs.
            </h2>
            <p className="text-xl text-gray-500 font-medium leading-relaxed italic border-l-4 border-brand-red pl-8">
              "Fondée en 1979 par Roger ATTIE, Epi d'Or est une entreprise familiale haïtienne devenue leader dans la boulangerie, pâtisserie et restauration rapide. Notre mission est de favoriser l'accès à des produits de qualité au plus grand nombre."
            </p>
            <button className="btn-primary !bg-black !text-white hover:!bg-brand-red">Lire Plus</button>
          </div>
        </div>
      </section>

      {/* Expertise */}
      <section id="expertise" className="py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div className="space-y-4">
              <div className="text-brand-red text-sm font-black uppercase tracking-[0.4em]">Savoir-Faire</div>
              <h2 className="text-5xl md:text-7xl font-black text-gray-900 tracking-tighter">Notre Signature.</h2>
            </div>
            <p className="max-w-md text-gray-400 font-bold text-sm leading-relaxed">
              Chaque produit est le résultat d'un processus artisanal rigoureux, alliant traditions locales et excellence culinaire.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            
              <div className="glass-card !bg-white p-12 space-y-8 group hover:bg-brand-red transition-all duration-500 cursor-default">
                <div className="w-16 h-16 bg-gray-50 rounded-2xl flex items-center justify-center text-3xl group-hover:bg-white/20 transition-colors">
                  ${['🥖', '🥐', '🍗'][0]}
                </div>
                <div className="space-y-4">
                  <h3 className="text-3xl font-black text-gray-900 group-hover:text-white transition-colors">Boulangerie</h3>
                  <p className="text-gray-500 font-medium group-hover:text-white/80 transition-colors leading-relaxed">Pains frais, baguettes traditionnelles et spécialités locales.</p>
                </div>
              </div>
            
              <div className="glass-card !bg-white p-12 space-y-8 group hover:bg-brand-red transition-all duration-500 cursor-default">
                <div className="w-16 h-16 bg-gray-50 rounded-2xl flex items-center justify-center text-3xl group-hover:bg-white/20 transition-colors">
                  ${['🥖', '🥐', '🍗'][1]}
                </div>
                <div className="space-y-4">
                  <h3 className="text-3xl font-black text-gray-900 group-hover:text-white transition-colors">Pâtisserie</h3>
                  <p className="text-gray-500 font-medium group-hover:text-white/80 transition-colors leading-relaxed">Mille-feuilles, tartes aux fruits, éclairs et gâteaux personnalisés.</p>
                </div>
              </div>
            
              <div className="glass-card !bg-white p-12 space-y-8 group hover:bg-brand-red transition-all duration-500 cursor-default">
                <div className="w-16 h-16 bg-gray-50 rounded-2xl flex items-center justify-center text-3xl group-hover:bg-white/20 transition-colors">
                  ${['🥖', '🥐', '🍗'][2]}
                </div>
                <div className="space-y-4">
                  <h3 className="text-3xl font-black text-gray-900 group-hover:text-white transition-colors">Restauraton Rapide</h3>
                  <p className="text-gray-500 font-medium group-hover:text-white/80 transition-colors leading-relaxed">Pizzas, lasagnes, et plats traditionnels haïtiens comme le griot.</p>
                </div>
              </div>
            
          </div>
        </div>
      </section>

      {/* CTA section */}
      <section className="py-20 bg-brand-blue relative overflow-hidden">
         <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-red -skew-x-12 translate-x-1/2"></div>
         <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="flex flex-col md:flex-row items-center justify-between gap-12">
               <h3 className="text-4xl md:text-6xl font-black text-white tracking-tight">Prêt à Goûter l'Excellence ?</h3>
               <button className="btn-primary !bg-white !text-brand-blue hover:!bg-brand-yellow hover:!text-black text-2xl px-12 py-8 shadow-2xl">
                  Voir nos Magasins
               </button>
            </div>
         </div>
      </section>

      {/* Footer */}
      <footer className="bg-white pt-32 pb-12 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-12 gap-16 mb-24">
            <div className="md:col-span-5 space-y-8">
              <div className="text-4xl font-black tracking-tighter uppercase text-brand-red">Epi D'or</div>
              <p className="text-xl text-gray-400 font-medium leading-relaxed">
                Le leader haïtien de la boulangerie et de la restauration rapide. La qualité au service du plus grand nombre.
              </p>
              <div className="flex gap-6">
                {['facebook', 'instagram', 'twitter'].map(platform => (
                  <a key={platform} href="#" className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center text-gray-400 hover:bg-brand-red hover:text-white transition-all">
                    <span className="sr-only">{platform}</span>
                    <div className="w-6 h-6 border-2 border-current rounded-sm"></div>
                  </a>
                ))}
              </div>
            </div>
            <div className="md:col-span-2 space-y-8">
              <h4 className="text-xs font-black uppercase tracking-[0.3em] text-gray-900">Entreprise</h4>
              <ul className="space-y-4 text-sm font-bold text-gray-500">
                <li><a href="#about" className="hover:text-brand-red">Notre Histoire</a></li>
                <li><a href="#" className="hover:text-brand-red">Carrières</a></li>
                <li><a href="#" className="hover:text-brand-red">Nos Produits</a></li>
              </ul>
            </div>
            <div className="md:col-span-2 space-y-8">
              <h4 className="text-xs font-black uppercase tracking-[0.3em] text-gray-900">Support</h4>
              <ul className="space-y-4 text-sm font-bold text-gray-500">
                <li><a href="#" className="hover:text-brand-red">Nous Contacter</a></li>
                <li><a href="#" className="hover:text-brand-red">Magasins</a></li>
                <li><a href="#" className="hover:text-brand-red">FAQ</a></li>
              </ul>
            </div>
            <div className="md:col-span-3 space-y-8">
              <h4 className="text-xs font-black uppercase tracking-[0.3em] text-gray-900">Newsletter</h4>
              <div className="relative">
                <input type="text" placeholder="votre@email.com" className="w-full bg-gray-50 border-none rounded-xl p-4 text-sm font-bold focus:ring-2 focus:ring-brand-red transition-all" />
                <button className="absolute right-2 top-2 bottom-2 bg-brand-red text-white text-[10px] font-black uppercase px-4 rounded-lg">OK</button>
              </div>
            </div>
          </div>
          <div className="pt-12 border-t border-gray-50 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-xs font-bold text-gray-300">&copy; {new Date().getFullYear()} Epi D'or. Tous droits réservés.</p>
            <div className="flex gap-8 text-[10px] font-black uppercase tracking-widest text-gray-300 shrink-0">
               <a href="#" className="hover:text-gray-900 transition-colors">Politique de Confidentialité</a>
               <a href="#" className="hover:text-gray-900 transition-colors">Mentions Légales</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
