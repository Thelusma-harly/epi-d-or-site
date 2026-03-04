
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 flex flex-col font-sans">
      {/* 
        AI Design System Rules Applied:
        ---
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
| Text | #1E293B |

### Typography
- Heading: Inter
- Body: Inter
- Mood: Professional + Hierarchy

### Key Effects
Backdrop blur (10-20px), subtle border (1px solid rgba white 0.2), light reflection, Z-depth

      */}
      
      {/* Navbar Minimalist */}
      <nav className="w-full h-20 bg-white shadow-sm flex items-center justify-between px-8 md:px-16 sticky top-0 z-50 transition-all">
        <div className="font-extrabold text-2xl tracking-tighter text-blue-900">Epi D'or</div>
        <div className="hidden md:flex gap-8 text-sm font-medium text-gray-600">
            <a href="#services" className="hover:text-blue-600 transition-colors">Services</a>
            <a href="#about" className="hover:text-blue-600 transition-colors">About Us</a>
            <a href="#testimonials" className="hover:text-blue-600 transition-colors">Testimonials</a>
        </div>
        <button className="bg-blue-600 text-white px-6 py-2.5 rounded-full font-medium hover:bg-blue-700 hover:shadow-lg transition-all duration-300 transform active:scale-95">Contact Us</button>
      </nav>

      {/* Hero Section */}
      <header className="flex-1 w-full bg-gradient-to-br flex flex-col md:flex-row items-center justify-center px-8 md:px-16 py-24 gap-12 text-center md:text-left">
        <div className="max-w-2xl">
            <h1 className="text-5xl md:text-7xl font-bold leading-tight tracking-tight text-gray-900 mb-6 drop-shadow-sm">
              Epi D'or Haiti - Boulangerie, Pâtisserie & Restauration
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-10 leading-relaxed font-light">
              Le leader Haïtien de la boulangerie et de la restauration rapide depuis 1979. Découvrez l'authenticité de nos saveurs.
            </p>
            <div className="flex gap-4 justify-center md:justify-start">
              <button className="bg-yellow-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-yellow-400 hover:shadow-xl transition-all duration-300 transform -translate-y-1">
                Get Started Today
              </button>
              <button className="bg-white text-gray-800 px-8 py-4 rounded-full font-semibold border border-gray-200 text-lg hover:bg-gray-50 hover:shadow-md transition-all duration-300">
                Learn More
              </button>
            </div>
        </div>
        
        {/* Placeholder for dynamic hero image - licensed or generated */}
        <div className="w-full md:w-1/2 aspect-video bg-gray-200 rounded-3xl overflow-hidden shadow-2xl relative">
             <div className="absolute inset-0 bg-blue-100 flex items-center justify-center text-blue-300 flex-col">
                <svg className="w-24 h-24 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                <span className="font-semibold">haitian_restaurant_hero_mockup_1772644160509.png</span>
             </div>
        </div>
      </header>

      {/* Footer Minimal */}
      <footer className="w-full bg-gray-900 text-gray-300 py-12 text-center text-sm border-t border-gray-800">
         <p>&copy; {new Date().getFullYear()} Epi D'or. All rights reserved.</p>
      </footer>
    </main>
  );
}
