import React, { useState } from 'react';
import { Crown, Sun, Wind, Snowflake, Droplets, Shield, Star, CheckCircle, Phone, ChevronDown } from 'lucide-react';

export default function App() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <div className="min-h-screen bg-don-black text-don-cream font-sans selection:bg-don-gold/30">
      {/* Sticky Header */}
      <header className="fixed top-0 w-full z-50 bg-don-black/90 backdrop-blur-md border-b border-white/10 transition-all">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Crown className="w-8 h-8 text-don-gold" />
            <span className="text-2xl font-serif font-bold tracking-wide text-don-cream">Don of Detail</span>
          </div>
          <a href="tel:+17755550199" className="hidden md:flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-don-black bg-don-gold hover:bg-don-gold/90 px-6 py-2.5 rounded-sm transition-all hover:shadow-[0_0_15px_rgba(212,175,55,0.4)]">
            <Phone className="w-4 h-4" />
            Call Now
          </a>
          <a href="tel:+17755550199" className="md:hidden flex items-center justify-center w-10 h-10 bg-don-gold text-don-black rounded-sm">
            <Phone className="w-5 h-5" />
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/luxury-car/1920/1080?blur=2')] bg-cover bg-center opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-b from-don-black/60 via-don-black/80 to-don-black" />
        
        <div className="relative max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="max-w-2xl">
            <h1 className="text-5xl lg:text-7xl font-serif font-bold tracking-tight leading-[1.1] mb-6 text-don-cream">
              When’s the last time your car was properly <span className="text-don-gold italic">polished and protected?</span>
            </h1>
            <p className="text-lg lg:text-xl text-don-cream/80 font-light leading-relaxed mb-10">
              Luxury isn't just driven—it’s preserved. Don of Detail brings the gold standard of vehicle restoration and high-altitude paint protection directly to your Reno driveway.
            </p>
            <div className="flex items-center gap-6 text-sm font-medium text-don-cream/90 uppercase tracking-widest">
              <div className="flex items-center gap-2">
                <Crown className="w-5 h-5 text-don-gold" />
                <span>Elite Mobile Service</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-don-gold" />
                <span>Ceramic Certified</span>
              </div>
            </div>
          </div>

          {/* Lead Form - Glassmorphism */}
          <div id="quote" className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 lg:p-10 rounded-xl shadow-2xl relative">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-don-gold to-transparent opacity-50 rounded-t-xl" />
            
            {isSubmitted ? (
              <div className="flex flex-col items-center justify-center h-[400px] text-center animate-in fade-in zoom-in duration-500">
                <div className="w-20 h-20 bg-don-gold/10 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle className="w-10 h-10 text-don-gold" />
                </div>
                <h3 className="text-3xl font-serif text-don-gold mb-3">Request Received</h3>
                <p className="text-don-cream/80 font-light text-lg">The Don will be in touch shortly to confirm your elite quote.</p>
              </div>
            ) : (
              <>
                <h2 className="text-3xl font-serif font-bold mb-2 text-don-gold">Request Your Elite Quote</h2>
                <p className="text-don-cream/60 text-sm mb-8 font-light tracking-wide">Experience the gold standard of detailing.</p>
                
                <form className="space-y-5" onSubmit={handleSubmit}>
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-widest text-don-cream/50 mb-2">Full Name</label>
                    <input 
                      type="text" 
                      required
                      placeholder="James Bond" 
                      className="w-full bg-don-black/50 border border-white/10 rounded-sm px-4 py-3.5 text-don-cream placeholder:text-don-cream/30 focus:outline-none focus:ring-1 focus:ring-don-gold focus:border-don-gold transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-widest text-don-cream/50 mb-2">Vehicle Make/Model</label>
                    <input 
                      type="text" 
                      required
                      placeholder="e.g. 2024 Porsche 911" 
                      className="w-full bg-don-black/50 border border-white/10 rounded-sm px-4 py-3.5 text-don-cream placeholder:text-don-cream/30 focus:outline-none focus:ring-1 focus:ring-don-gold focus:border-don-gold transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-widest text-don-cream/50 mb-2">Primary Concern</label>
                    <div className="relative">
                      <select required defaultValue="" className="w-full bg-don-black/50 border border-white/10 rounded-sm px-4 py-3.5 text-don-cream appearance-none focus:outline-none focus:ring-1 focus:ring-don-gold focus:border-don-gold transition-all">
                        <option value="" disabled className="text-don-black">Select an issue...</option>
                        <option value="uv" className="text-don-black">UV Damage & Fading</option>
                        <option value="salt" className="text-don-black">Road Salt & Grime</option>
                        <option value="water" className="text-don-black">Hard Water Spots</option>
                        <option value="restoration" className="text-don-black">Full Restoration</option>
                      </select>
                      <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-don-gold pointer-events-none" />
                    </div>
                  </div>
                  <button type="submit" className="w-full bg-don-gold hover:bg-don-gold/90 text-don-black font-bold uppercase tracking-widest py-4 rounded-sm mt-4 transition-all hover:shadow-[0_0_20px_rgba(212,175,55,0.3)] flex items-center justify-center gap-2 group cursor-pointer">
                    CLAIM MY ELITE QUOTE
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </section>

      {/* Agitation Section */}
      <section className="py-24 bg-don-black border-t border-white/5 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl lg:text-5xl font-serif font-bold tracking-tight mb-6 text-don-cream">
              The Reno Toll: Is Your Investment Surviving the High Desert?
            </h2>
            <div className="w-24 h-1 bg-don-gold mx-auto mb-6"></div>
            <p className="text-don-cream/70 text-lg font-light">
              Standard car washes strip wax and induce swirl marks. In Northern Nevada, your luxury vehicle faces a unique set of environmental hazards that demand a higher standard of care.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/5 border border-white/10 p-10 rounded-xl hover:bg-white/10 transition-colors group">
              <div className="w-14 h-14 bg-don-gold/10 rounded-full flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                <Sun className="w-7 h-7 text-don-gold" />
              </div>
              <h3 className="text-2xl font-serif font-bold mb-4 text-don-cream">300 Days of UV Burn</h3>
              <p className="text-don-cream/70 font-light leading-relaxed">
                At 4,500+ feet, UV radiation is significantly stronger. The high-elevation sun bakes clear coats, "chalks" paint, and cracks premium leather dashboards at an accelerated rate.
              </p>
            </div>
            <div className="bg-white/5 border border-white/10 p-10 rounded-xl hover:bg-white/10 transition-colors group">
              <div className="w-14 h-14 bg-don-gold/10 rounded-full flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                <Wind className="w-7 h-7 text-don-gold" />
              </div>
              <h3 className="text-2xl font-serif font-bold mb-4 text-don-cream">The 'Washoe Zephyr' Grit</h3>
              <p className="text-don-cream/70 font-light leading-relaxed">
                Desert wind turns dust into sandpaper. Every time you drive through a dusty valley, micro-abrasions cut into your clear coat, permanently dulling the finish if left unprotected.
              </p>
            </div>
            <div className="bg-white/5 border border-white/10 p-10 rounded-xl hover:bg-white/10 transition-colors group">
              <div className="w-14 h-14 bg-don-gold/10 rounded-full flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                <Snowflake className="w-7 h-7 text-don-gold" />
              </div>
              <h3 className="text-2xl font-serif font-bold mb-4 text-don-cream">Sierra Road Salt</h3>
              <p className="text-don-cream/70 font-light leading-relaxed">
                Winter trips to Tahoe leave corrosive magnesium chloride and road salt clinging to your undercarriage and lower panels, quietly eating away at your vehicle's value.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-24 bg-[#0f0f0f] border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 relative">
              <div className="aspect-[4/5] rounded-xl overflow-hidden border border-white/10">
                <img 
                  src="https://picsum.photos/seed/luxury-detail/800/1000" 
                  alt="The Don Standard Detailing" 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 bg-don-black border border-don-gold/30 p-8 rounded-xl shadow-2xl hidden md:block">
                <Crown className="w-10 h-10 text-don-gold mb-4" />
                <p className="text-xl font-serif font-bold text-don-cream">The Gold Standard</p>
                <p className="text-sm text-don-cream/60 uppercase tracking-widest mt-2">Reno, Nevada</p>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <h2 className="text-4xl lg:text-5xl font-serif font-bold tracking-tight mb-6 text-don-cream">
                The "Don" Standard.
              </h2>
              <p className="text-don-cream/70 text-lg mb-12 font-light">
                We don't just wash cars; we engineer preservation systems designed specifically for the high desert climate.
              </p>
              
              <div className="space-y-10">
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-don-gold/10 border border-don-gold/30 flex items-center justify-center">
                    <Droplets className="w-5 h-5 text-don-gold" />
                  </div>
                  <div>
                    <h4 className="text-2xl font-serif font-bold mb-2 text-don-cream">Spot-Free Guarantee</h4>
                    <p className="text-don-cream/70 font-light leading-relaxed">Using 100% deionized water filtered to 0 PPM. We eliminate the hard water minerals that etch into glass and paint, ensuring a flawless, mirror-like finish even in direct sun.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-don-gold/10 border border-don-gold/30 flex items-center justify-center">
                    <Shield className="w-5 h-5 text-don-gold" />
                  </div>
                  <div>
                    <h4 className="text-2xl font-serif font-bold mb-2 text-don-cream">High-Elevation Sealants</h4>
                    <p className="text-don-cream/70 font-light leading-relaxed">Our ceramic-infused sealants and professional coatings create a sacrificial, UV-rated barrier against the Sierra sun, lasting months or years, not weeks.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-don-gold/10 border border-don-gold/30 flex items-center justify-center">
                    <Wind className="w-5 h-5 text-don-gold" />
                  </div>
                  <div>
                    <h4 className="text-2xl font-serif font-bold mb-2 text-don-cream">Medical-Grade Steam</h4>
                    <p className="text-don-cream/70 font-light leading-relaxed">We utilize industrial steam extraction to pull fine-powder dust and allergens from deep within carpets and leather pores, sanitizing your interior without harsh chemicals.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof & FAQ Section */}
      <section className="py-24 bg-don-black border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          
          {/* Testimonial */}
          <div className="max-w-4xl mx-auto text-center mb-24">
            <div className="flex justify-center gap-2 mb-8">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="w-8 h-8 text-don-gold fill-don-gold" />
              ))}
            </div>
            <blockquote className="text-2xl md:text-4xl font-serif italic text-don-cream leading-snug mb-8">
              "The only detailer I trust with my Porsche. The deionized water makes a huge difference, and the ceramic coating is absolutely flawless. True luxury service."
            </blockquote>
            <cite className="text-don-cream/60 uppercase tracking-widest text-sm not-italic font-semibold">
              — James T., South Reno
            </cite>
          </div>

          {/* FAQs */}
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-serif font-bold text-center mb-12 text-don-cream">
              Frequently Asked Questions
            </h2>
            
            <div className="space-y-6">
              <div className="bg-white/5 border border-white/10 p-8 rounded-xl">
                <h4 className="text-xl font-serif font-bold mb-3 text-don-gold">Do I need to be home?</h4>
                <p className="text-don-cream/70 font-light leading-relaxed">Not at all. As long as we have access to the vehicle and the keys (if interior work is requested), you can be at work, running errands, or relaxing inside. We are 100% self-sustained with our own power and water.</p>
              </div>
              
              <div className="bg-white/5 border border-white/10 p-8 rounded-xl">
                <h4 className="text-xl font-serif font-bold mb-3 text-don-gold">What areas do you service?</h4>
                <p className="text-don-cream/70 font-light leading-relaxed">We provide elite mobile service to the entire Truckee Meadows area, including Reno, Sparks, Spanish Springs, South Meadows, Montrêux, and Verdi.</p>
              </div>
              
              <div className="bg-white/5 border border-white/10 p-8 rounded-xl">
                <h4 className="text-xl font-serif font-bold mb-3 text-don-gold">Why deionized water?</h4>
                <p className="text-don-cream/70 font-light leading-relaxed">Reno has notoriously hard water. Washing a car with tap water leaves mineral deposits that etch into the clear coat. Our deionized water is purified to 0 PPM, ensuring a perfect, spot-free finish that preserves your paint.</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-don-gold text-don-black text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/gold-texture/1920/1080')] opacity-10 mix-blend-overlay" />
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <Crown className="w-16 h-16 mx-auto mb-8 text-don-black opacity-80" />
          <h2 className="text-4xl lg:text-6xl font-serif font-bold tracking-tight mb-6">
            Stop driving a dusty car.
          </h2>
          <p className="text-xl lg:text-2xl font-medium mb-12 opacity-90 font-sans">
            Protect your resale value today.
          </p>
          <a href="#quote" className="inline-flex items-center justify-center gap-3 bg-don-black text-don-gold hover:bg-[#1a1a1a] font-bold uppercase tracking-widest px-10 py-5 rounded-sm transition-all hover:scale-105 active:scale-95 shadow-2xl w-full sm:w-auto">
            CLAIM MY ELITE QUOTE
          </a>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-don-black py-12 border-t border-white/10 text-center text-don-cream/40 text-sm font-light tracking-wide">
        <div className="flex justify-center items-center gap-2 mb-4">
          <Crown className="w-4 h-4" />
          <span className="font-serif font-bold text-don-cream/60">Don of Detail</span>
        </div>
        <p>&copy; {new Date().getFullYear()} Don of Detail. All rights reserved.</p>
      </footer>
    </div>
  );
}
