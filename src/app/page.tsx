
"use client";
import React from "react";
import Image from "next/image";
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail, ChevronRight, Utensils, Cake, Heart, ArrowDown } from "lucide-react";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-white/90 backdrop-blur-xl border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">
          <div className="flex items-center gap-4 group cursor-pointer" onClick={() => window.scrollTo(0,0)}>
             <div className="w-12 h-12 bg-brand-red rounded-2xl flex items-center justify-center text-white font-black text-2xl shadow-xl shadow-brand-red/20 group-hover:scale-110 transition-transform">E</div>
             <div className="flex flex-col">
                <span className="text-2xl font-black uppercase leading-none tracking-tighter">Epi D'or</span>
                <span className="text-[9px] font-black uppercase tracking-[0.4em] text-gray-400 mt-1">Excellence culinaire</span>
             </div>
          </div>
          
          <div className="hidden lg:flex items-center gap-10">
            {['Histoire', 'Expertise', 'Menu'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`} 
                className="text-xs font-black uppercase tracking-[0.2em] text-gray-400 hover:text-brand-red transition-all"
              >
                {item}
              </a>
            ))}
            <button className="bg-brand-red text-white hover:bg-black px-10 py-3.5 rounded-full text-xs font-black uppercase tracking-widest transition-all shadow-xl shadow-brand-red/10 active:scale-95">
              Commandez
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center pt-24">
        {/* Background Image Container */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/heroImage.png" 
            alt="Hero Background" 
            className="w-full h-full object-cover brightness-[0.4]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <div className="max-w-4xl space-y-10">
            <div className="inline-flex items-center gap-3 px-6 py-2 bg-brand-red/30 backdrop-blur-3xl border border-white/20 rounded-full">
               <Heart className="w-4 h-4 text-brand-yellow fill-brand-yellow" />
               <span className="text-white text-[10px] font-black uppercase tracking-[0.4em]">Le leader Haïtien depuis 1979</span>
            </div>
            <h1 className="text-7xl md:text-[10rem] font-black text-white leading-[0.85] tracking-tighter drop-shadow-2xl">
              Epi D'or Haïti
            </h1>
            <p className="text-xl md:text-3xl text-white/80 font-light max-w-2xl px-1">
              Le leader incontesté de la boulangerie et de la restauration rapide en Haïti. Une tradition d'excellence au service de la nation depuis 1979.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 pt-6">
              <button className="btn-primary group">
                Explorer le Menu <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="btn-outline">Nos Restaurants</button>
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce">
            <ArrowDown className="text-white w-6 h-6 opacity-50" />
        </div>
      </section>

      {/* About Section */}
      <section id="histoire" className="py-44 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-32 items-center">
          <div className="relative group">
            <div className="absolute -inset-12 bg-brand-red/10 rounded-[4rem] rotate-3 transition-transform group-hover:rotate-0"></div>
            <div className="relative rounded-[3rem] overflow-hidden shadow-2xl aspect-[4/5] z-10">
              <img 
                src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&q=80" 
                alt="Our Heritage" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-12 -right-12 glass p-12 rounded-[2.5rem] text-center z-20 border-brand-red/10 animate-float">
               <div className="text-7xl font-black text-brand-red tracking-tighter">1979</div>
               <div className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-400 mt-2">Fondé à Pétionville</div>
            </div>
          </div>
          <div className="space-y-12">
            <div className="flex items-center gap-6">
               <div className="w-16 h-1 bg-brand-red"></div>
               <span className="text-brand-red text-xs font-black uppercase tracking-[0.5em]">L'Héritage</span>
            </div>
            <h2 className="text-6xl md:text-8xl font-black text-gray-900 tracking-tighter leading-none">
              Boulangers<br/>par Nature.
            </h2>
            <p className="text-2xl text-gray-500 font-medium leading-relaxed border-l-8 border-brand-red/10 pl-12 py-4">
              "Fondée en 1979 par Roger ATTIE, Epi d'Or est le leader Haïtien de la boulangerie-pâtisserie et de la restauration rapide. Notre mission est de favoriser l'accès à des produits de qualité au plus grand nombre tout en introduisant des concepts innovants sur le marché."
            </p>
            <button className="bg-black text-white px-14 py-6 rounded-full font-black uppercase tracking-[0.2em] text-xs hover:bg-brand-red transition-all shadow-2xl">
               Lire l'Histoire Complète
            </button>
          </div>
        </div>
      </section>

      {/* Savoir-Faire Section */}
      <section id="expertise" className="py-44 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
           <div className="flex flex-col lg:flex-row justify-between items-end mb-32 gap-12 text-left">
              <div className="space-y-6">
                 <div className="text-brand-red text-xs font-black uppercase tracking-[0.6em]">Savoir-Faire</div>
                 <h2 className="text-6xl md:text-9xl font-black text-gray-900 leading-none tracking-tighter">Signature<br/>Epi D'or.</h2>
              </div>
              <p className="max-w-xl text-xl text-gray-400 font-bold leading-relaxed border-l-4 border-gray-200 pl-12">
                Qualité, authenticité et passion. Nous servons Haïti avec le meilleur des pains et de la gastronomie rapide depuis des décennies.
              </p>
           </div>
           
           <div className="grid md:grid-cols-3 gap-12">
             
               <div key={0} className="bg-white p-16 rounded-[4rem] group hover:bg-brand-red transition-all duration-700 hover:-translate-y-8 shadow-sm">
                 <div className="w-24 h-24 bg-gray-100 rounded-3xl flex items-center justify-center text-gray-900 mb-12 group-hover:bg-white transition-all shadow-xl shadow-black/5">
                    {<Utensils className="w-10 h-10 group-hover:scale-110 transition-transform" />}
                 </div>
                 <h3 className="text-4xl font-black text-gray-900 group-hover:text-white transition-colors mb-6 leading-tight">Boulangerie Artisanale</h3>
                 <p className="text-xl text-gray-400 font-medium group-hover:text-white/80 transition-colors leading-relaxed">Pains frais, baguettes traditionnelles et spécialités locales préparées quotidiennement avec les meilleurs ingrédients.</p>
                 <div className="mt-12 pt-8 border-t border-gray-50 group-hover:border-white/10 flex items-center justify-between">
                    <span className="text-xs font-black uppercase tracking-widest text-brand-red group-hover:text-white transition-colors">Découvrir</span>
                    <ChevronRight className="w-5 h-5 text-brand-red group-hover:text-white transition-colors" />
                 </div>
               </div>
             
               <div key={1} className="bg-white p-16 rounded-[4rem] group hover:bg-brand-red transition-all duration-700 hover:-translate-y-8 shadow-sm">
                 <div className="w-24 h-24 bg-gray-100 rounded-3xl flex items-center justify-center text-gray-900 mb-12 group-hover:bg-white transition-all shadow-xl shadow-black/5">
                    {<Cake className="w-10 h-10 group-hover:scale-110 transition-transform" />}
                 </div>
                 <h3 className="text-4xl font-black text-gray-900 group-hover:text-white transition-colors mb-6 leading-tight">Pâtisserie & Viennoiserie</h3>
                 <p className="text-xl text-gray-400 font-medium group-hover:text-white/80 transition-colors leading-relaxed">Gâteaux raffinés, mille-feuilles, croissants pur beurre et délices sucrés pour toutes vos célébrations.</p>
                 <div className="mt-12 pt-8 border-t border-gray-50 group-hover:border-white/10 flex items-center justify-between">
                    <span className="text-xs font-black uppercase tracking-widest text-brand-red group-hover:text-white transition-colors">Découvrir</span>
                    <ChevronRight className="w-5 h-5 text-brand-red group-hover:text-white transition-colors" />
                 </div>
               </div>
             
               <div key={2} className="bg-white p-16 rounded-[4rem] group hover:bg-brand-red transition-all duration-700 hover:-translate-y-8 shadow-sm">
                 <div className="w-24 h-24 bg-gray-100 rounded-3xl flex items-center justify-center text-gray-900 mb-12 group-hover:bg-white transition-all shadow-xl shadow-black/5">
                    {<Utensils className="w-10 h-10 group-hover:scale-110 transition-transform" />}
                 </div>
                 <h3 className="text-4xl font-black text-gray-900 group-hover:text-white transition-colors mb-6 leading-tight">Restauration & Catering</h3>
                 <p className="text-xl text-gray-400 font-medium group-hover:text-white/80 transition-colors leading-relaxed">Cuisine savoureuse, pizzas, spécialités haïtiennes et service traiteur complet pour vos événements.</p>
                 <div className="mt-12 pt-8 border-t border-gray-50 group-hover:border-white/10 flex items-center justify-between">
                    <span className="text-xs font-black uppercase tracking-widest text-brand-red group-hover:text-white transition-colors">Découvrir</span>
                    <ChevronRight className="w-5 h-5 text-brand-red group-hover:text-white transition-colors" />
                 </div>
               </div>
             
           </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-100 pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-24 mb-32">
            <div className="lg:col-span-12 xl:col-span-5 space-y-12">
              <div className="text-5xl font-black tracking-tighter uppercase text-brand-red flex items-center gap-4">
                 <div className="w-14 h-14 bg-brand-red rounded-2xl flex items-center justify-center text-white text-3xl shadow-xl shadow-brand-red/20">E</div>
                 Epi D'or
              </div>
              <p className="text-3xl text-gray-300 font-bold max-w-xl leading-tight">
                 Le leader incontesté de la gastronomie rapide et boulangère en Haïti. 
              </p>
              <div className="flex gap-6 pt-4">
                <a href="https://www.facebook.com/epidorhaiti" target="_blank" className="w-16 h-16 rounded-3xl bg-gray-50 flex items-center justify-center text-gray-400 hover:bg-brand-red hover:text-white transition-all shadow-xl shadow-black/5">
                   <Facebook className="w-7 h-7" />
                </a>
                <a href="https://www.instagram.com/epidorhaiti/" target="_blank" className="w-16 h-16 rounded-3xl bg-gray-50 flex items-center justify-center text-gray-400 hover:bg-brand-red hover:text-white transition-all shadow-xl shadow-black/5">
                   <Instagram className="w-7 h-7" />
                </a>
                <a href="https://twitter.com/epidorhaiti" target="_blank" className="w-16 h-16 rounded-3xl bg-gray-50 flex items-center justify-center text-gray-400 hover:bg-brand-red hover:text-white transition-all shadow-xl shadow-black/5">
                   <Twitter className="w-7 h-7" />
                </a>
              </div>
            </div>
            
            <div className="lg:col-span-4 xl:col-span-3 space-y-12">
               <h4 className="text-xs font-black uppercase tracking-[0.5em] text-gray-900 border-b-2 border-brand-red w-fit pb-2">Direct</h4>
               <ul className="space-y-8">
                  <li className="flex gap-6 items-start">
                     <MapPin className="w-6 h-6 text-brand-red shrink-0" />
                     <span className="text-gray-400 font-bold leading-relaxed text-sm tracking-widest uppercase">Rue Rigaud, Pétionville<br/>Port-au-Prince, Haïti</span>
                  </li>
                  <li className="flex gap-6 items-start">
                     <Phone className="w-6 h-6 text-brand-red shrink-0" />
                     <span className="text-gray-400 font-bold leading-relaxed text-sm tracking-widest uppercase">+509 3114 2533</span>
                  </li>
                  <li className="flex gap-6 items-start">
                     <Mail className="w-6 h-6 text-brand-red shrink-0" />
                     <span className="text-gray-400 font-bold leading-relaxed text-sm tracking-widest uppercase">info@epidorhaiti.com</span>
                  </li>
               </ul>
            </div>
            
            <div className="lg:col-span-4 xl:col-span-4 space-y-12">
               <h4 className="text-xs font-black uppercase tracking-[0.5em] text-gray-900 border-b-2 border-brand-red w-fit pb-2">Contact</h4>
               <p className="text-gray-400 font-bold uppercase text-[10px] tracking-[0.2em] leading-relaxed">Inscrivez-vous pour recevoir nos actualités et offres spéciales par email.</p>
               <div className="relative">
                  <input type="text" placeholder="Email Address" className="w-full bg-gray-50 border-none rounded-[2rem] px-10 py-6 text-sm font-bold placeholder:text-gray-300 focus:ring-4 focus:ring-brand-red/10 transition-all outline-none" />
                  <button className="absolute right-3 top-3 bottom-3 bg-brand-red text-white text-[10px] font-black uppercase tracking-widest px-8 rounded-full hover:bg-black transition-all">Submit</button>
               </div>
            </div>
          </div>
          
          <div className="pt-16 border-t border-gray-100 flex flex-col lg:flex-row justify-between items-center gap-8">
             <span className="text-[10px] font-black uppercase tracking-[0.5em] text-gray-300">© 2026 Epi D'or. Excellence & Tradition.</span>
             <div className="flex gap-12 text-[9px] font-black uppercase tracking-[0.5em] text-gray-300">
                <a href="#" className="hover:text-gray-900 transition-colors">Privacy</a>
                <a href="#" className="hover:text-gray-900 transition-colors">Terms</a>
             </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
