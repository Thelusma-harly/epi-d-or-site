
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900 overflow-x-hidden">
      {/* AI Design System Context
      ## Design System: EPI D'OR

### Pattern
- Name: Hero + Features + CTA
- CTA Placement: Above fold
- Sections: Hero > Features > CTA

### Style
- Name: Glassmorphism
- Keywords: Frosted glass, transparent, blurred background, layered, vibrant background, light source, depth, multi-layer
- Best For: Modern SaaS, financial dashboards, high-end corporate, lifestyle apps, modal overlays, navigation
- Performance: ⚠ Good | Accessibility: ⚠ Ensure 4.5:1

### Colors
| Role | Hex |
|------|-----|
| Primary | #2563EB |
| Secondary | #3B82F6 |
| CTA | #F97316 |
| Background | #F8FAFC |
      */}

      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 md:px-8 h-20 flex items-center justify-between">
          <div className="text-2xl font-black tracking-tighter text-red-600 uppercase">
            Epi D'or
          </div>
          <div className="hidden md:flex items-center gap-10">
            {['Services', 'About', 'Menu', 'Contact'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`} 
                className="text-sm font-bold text-gray-600 hover:text-red-600 transition-all uppercase tracking-widest"
              >
                {item}
              </a>
            ))}
            <button className="bg-red-600 text-white px-8 py-3 rounded-full font-black text-sm uppercase tracking-tighter hover:bg-black transition-all shadow-xl hover:shadow-red-500/20 active:scale-95">
              Order Online
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20">
        <div className="absolute inset-0 z-0">
          <img 
            src="haitian_restaurant_hero_mockup_1772644160509.png" 
            alt="Epi D'or Hero" 
            className="w-full h-full object-cover brightness-50"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8">
          <div className="max-w-3xl">
            <h1 className="text-6xl md:text-9xl font-black text-white leading-none tracking-tighter mb-8 animate-in fade-in slide-in-from-bottom-10 duration-1000">
              Epi D'or Haiti - Boulangerie, Pâtisserie & Restauration
            </h1>
            <p className="text-xl md:text-3xl text-gray-200 font-light mb-12 animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-200">
              Le leader Haïtien de la boulangerie et de la restauration rapide depuis 1979. Découvrez l'authenticité de nos saveurs.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 animate-in fade-in slide-in-from-bottom-14 duration-1000 delay-500">
              <button className="bg-red-600 text-white px-12 py-6 rounded-full font-black text-lg uppercase tracking-tighter hover:bg-white hover:text-red-600 transition-all shadow-2xl">
                Explore Menu
              </button>
              <button className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-12 py-6 rounded-full font-black text-lg uppercase tracking-tighter hover:bg-white hover:text-black transition-all">
                Our Story
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 md:px-8 grid md:grid-cols-2 gap-20 items-center">
          <div className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&q=80" 
              alt="Authentic Kitchen" 
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h2 className="text-sm font-black text-red-600 uppercase tracking-[0.5em] mb-6">Discovery</h2>
            <h3 className="text-5xl md:text-7xl font-black text-gray-900 leading-tight mb-8">
              Founded in 1979 in Haiti.
            </h3>
            <p className="text-xl text-gray-600 leading-relaxed font-medium">
              Fondée en 1979 par Roger ATTIE, Epi d'Or est une entreprise familiale haïtienne devenue leader dans la boulangerie, pâtisserie et restauration rapide. Notre mission est de favoriser l'accès à des produits de qualité au plus grand nombre.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services" className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-24">
            <h2 className="text-sm font-black text-red-600 uppercase tracking-[0.5em] mb-6">Our Expertise</h2>
            <h3 className="text-6xl font-black text-gray-900">What We Offer</h3>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            
              <div className="p-12 bg-gray-50 rounded-3xl border border-gray-100 transition-all hover:-translate-y-4 hover:shadow-3xl group">
                <h4 className="text-3xl font-black text-gray-900 mb-6 group-hover:text-red-600 transition-colors">Boulangerie</h4>
                <p className="text-lg text-gray-600 font-medium leading-relaxed">Pains frais, baguettes traditionnelles et spécialités locales.</p>
              </div>
            
              <div className="p-12 bg-gray-50 rounded-3xl border border-gray-100 transition-all hover:-translate-y-4 hover:shadow-3xl group">
                <h4 className="text-3xl font-black text-gray-900 mb-6 group-hover:text-red-600 transition-colors">Pâtisserie</h4>
                <p className="text-lg text-gray-600 font-medium leading-relaxed">Mille-feuilles, tartes aux fruits, éclairs et gâteaux personnalisés.</p>
              </div>
            
              <div className="p-12 bg-gray-50 rounded-3xl border border-gray-100 transition-all hover:-translate-y-4 hover:shadow-3xl group">
                <h4 className="text-3xl font-black text-gray-900 mb-6 group-hover:text-red-600 transition-colors">Restauraton Rapide</h4>
                <p className="text-lg text-gray-600 font-medium leading-relaxed">Pizzas, lasagnes, et plats traditionnels haïtiens comme le griot.</p>
              </div>
            
          </div>
        </div>
      </section>

      {/* Menu / CTA Section */}
      <section id="menu" className="py-32 bg-black text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-20 bg-gradient-to-l from-red-600 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10 flex flex-col items-center text-center">
          <h3 className="text-6xl md:text-9xl font-black tracking-tighter mb-12">
            TASTE THE ORIGINALITY
          </h3>
          <button className="bg-white text-black px-16 py-8 rounded-full font-black text-2xl uppercase tracking-tighter hover:bg-red-600 hover:text-white transition-all">
            Download Menu PDF
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-24 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 md:px-8 grid md:grid-cols-4 gap-16">
          <div className="col-span-2">
            <div className="text-4xl font-black tracking-tighter text-red-600 mb-8 uppercase">Epi D'or</div>
            <p className="text-xl text-gray-500 font-medium max-w-sm">
              The Haitian leader in bakery and fast food since 1979. Quality, authenticity, and innovation.
            </p>
          </div>
          <div>
            <h5 className="font-black uppercase tracking-widest text-sm mb-8">Navigation</h5>
            <ul className="space-y-4 text-gray-500 font-bold">
              <li><a href="#about" className="hover:text-red-600 transition-colors">About Us</a></li>
              <li><a href="#services" className="hover:text-red-600 transition-colors">Our Services</a></li>
              <li><a href="#contact" className="hover:text-red-600 transition-colors">Locations</a></li>
            </ul>
          </div>
          <div>
            <h5 className="font-black uppercase tracking-widest text-sm mb-8">Connect</h5>
            <div className="flex gap-6">
              <a href="https://facebook.com" className="bg-gray-100 p-4 rounded-full hover:bg-red-600 hover:text-white transition-all">FB</a>
              <a href="https://instagram.com" className="bg-gray-100 p-4 rounded-full hover:bg-red-600 hover:text-white transition-all">IG</a>
              <a href="https://twitter.com" className="bg-gray-100 p-4 rounded-full hover:bg-red-600 hover:text-white transition-all">TW</a>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 md:px-8 mt-24 pt-12 border-t border-gray-50 text-gray-400 text-sm font-bold flex justify-between items-center">
            <p>&copy; {new Date().getFullYear()} Epi D'or. All rights reserved.</p>
            <p className="text-red-600 uppercase tracking-widest">Designed for Excellence</p>
        </div>
      </footer>
    </main>
  );
}
