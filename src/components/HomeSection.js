import React from 'react';
import { Link } from 'react-router-dom';

// NOTE: Ensure your Tailwind configuration defines the custom colors:
// e.g., gold: '#FFD700', 'charcoal-black': '#1E1E1E', 'steel-gray': '#A0A0A0'

const HomeSection = () => {
  return (
    <div className="font-sans antialiased w-full bg-black">
      {/* 1. Hero Section */}
      <section id="hero" className="relative h-screen flex items-center bg-cover bg-center text-white " 
               style={{ backgroundImage: "url('./home.jpg')" }}>
          
          {/* Dark Overlay for Contrast */}
          <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
              <div className="max-w-4xl text-center p-6 relative">
                  {/* Headline */}
                  <h1 className="text-xl md:text-4xl font-black mb-4 leading-tight drop-shadow-lg">
                      The Foundation of Excellence. Engineered for Tomorrow.
                  </h1>
                  {/* Subheadline */}
                  <p className="text-xl md:text-3xl text-gray-300 mb-10 tracking-wide">
                      We don't just erect structures; we build legacies. Our commitment to precision, safety, and sustainable innovation delivers projects that stand the test of time.
                  </p>
                  {/* Call-to-Action (CTA) Button with Hover) */}
                  <a href="#contact" 
                     className="inline-block px-12 py-4 text-xl font-semibold text-charcoal-black bg-gold rounded transition duration-300 ease-in-out hover:bg-white hover:text-gold hover:scale-[1.05] shadow-2xl">
                      START YOUR PROJECT CONSULTATION
                  </a>
              </div>
          </div>
      </section>

      {/* 2. About Us Section */}
      <section id="about" className="py-24 bg-charcoal-black text-white">
          <div className="max-w-6xl mx-auto px-6">
              <h2 className="text-5xl font-bold text-gold mb-12 text-center">
                  About MTCbuild Co.
              </h2>
              <div className="max-w-3xl mx-auto text-center">
                  <p className="text-xl leading-relaxed text-gray-300 mb-6">
                      MTCbuild Co. was founded two decades ago on the pillars of **integrity, innovation, and unwavering client partnership**. Our mission is simple: to redefine the construction experience by delivering complex projects—from high-rise commercial facilities to bespoke residential estates—with unmatched efficiency and quality.
                  </p>
                  <p className="text-lg leading-relaxed text-steel-gray">
                      We believe that true craftsmanship is non-negotiable. Our experienced team of engineers, project managers, and certified tradesmen ensures every detail reflects the highest standard of structural and aesthetic perfection. Choose SolidBuild Co. for a partner who builds with certainty.
                  </p>
              </div>
          </div>
      </section>
      
      {/* 3. Services Section */}
      <section id="services" className="py-24 bg-white text-charcoal-black">
          <div className="max-w-6xl mx-auto px-6">
              <h2 className="text-5xl font-bold text-charcoal-black mb-12 text-center">
                  Our Specialized Offerings
              </h2>
              <div className="grid md:grid-cols-3 gap-10">
                  {/* Service Card 1: Residential */}
                  <div className="p-8 border-t-4 border-gold shadow-lg transition duration-300 hover:shadow-2xl hover:scale-[1.02]">
                      <h3 className="text-2xl font-bold mb-3">Residential Construction</h3>
                      <p className="text-gray-600">Creating custom, luxury single-family homes and multi-unit developments known for their modern design and superior durability.</p>
                  </div>
                  {/* Service Card 2: Commercial */}
                  <div className="p-8 border-t-4 border-gold shadow-lg transition duration-300 hover:shadow-2xl hover:scale-[1.02]">
                      <h3 className="text-2xl font-bold mb-3">Commercial Projects</h3>
                      <p className="text-gray-600">Specializing in complex builds including large-scale corporate campuses, manufacturing plants, and retail centers.</p>
                  </div>
                  {/* Service Card 3: Renovations */}
                  <div className="p-8 border-t-4 border-gold shadow-lg transition duration-300 hover:shadow-2xl hover:scale-[1.02]">
                      <h3 className="text-2xl font-bold mb-3">Architectural Renovations</h3>
                      <p className="text-gray-600">Full-spectrum refurbishment services for existing properties, modernizing functionality while preserving essential character.</p>
                  </div>
              </div>
          </div>
      </section>

      {/* 4. Portfolio Preview & Testimonials */}
      <section id="portfolio" className="py-24 bg-charcoal-black text-white">
          <div className="max-w-6xl mx-auto px-6">
              <h2 className="text-5xl font-bold text-gold mb-12 text-center">
                  Projects & Praise
              </h2>
              
              {/* Portfolio Preview */}
              <div className="grid md:grid-cols-3 gap-8 mb-20">
                  {/* Project 1 Card */}
                  <div className="bg-gray-800 p-5 rounded transition duration-300 hover:bg-gray-700 hover:shadow-gold/50 shadow-xl">
                      <h4 class="text-xl font-semibold text-gold mb-2">The Zenith Tower</h4>
                      <p class="text-gray-400">A 45-story, LEED Gold certified, mixed-use development featuring innovative concrete and glass facades.</p>
                  </div>
                  {/* Project 2 Card */}
                  <div className="bg-gray-800 p-5 rounded transition duration-300 hover:bg-gray-700 hover:shadow-gold/50 shadow-xl">
                      <h4 class="text-xl font-semibold text-gold mb-2">Willow Creek Estates</h4>
                      <p class="text-gray-400">A gated community of 12 custom, luxury homes distinguished by their smart technology integration and complex landscaping.</p>
                  </div>
                  {/* Project 3 Card */}
                  <div className="bg-gray-800 p-5 rounded transition duration-300 hover:bg-gray-700 hover:shadow-gold/50 shadow-xl">
                      <h4 class="text-xl font-semibold text-gold mb-2">MetroTech Hub Renovation</h4>
                      <p class="text-gray-400">Conversion of a historic industrial warehouse into a vibrant, flexible workspace for a leading technology firm.</p>
                  </div>
              </div>

              {/* Client Testimonials */}
              <div className="grid md:grid-cols-2 gap-8 pt-10 border-t border-gray-700">
                  {/* Testimonial 1 */}
                  <blockquote className="border-l-4 border-gold pl-6 italic text-gray-300">
                      "SolidBuild Co. exceeded our expectations on the commercial center build. Their safety record was flawless, and they delivered two weeks ahead of schedule. They are, quite simply, the most reliable firm we've worked with."
                      <footer className="mt-2 text-sm font-semibold text-gold">— A. Thompson, Apex Holdings</footer>
                  </blockquote>
                  {/* Testimonial 2 */}
                  <blockquote className="border-l-4 border-gold pl-6 italic text-gray-300">
                      "Building our family estate was a smooth, transparent process thanks to their dedicated project manager. The quality of the finish and attention to detail is truly phenomenal. Highly recommended."
                      <footer className="mt-2 text-sm font-semibold text-gold">— The Hawthorne Family, Residential Client</footer>
                  </blockquote>
              </div>
          </div>
      </section>

      {/* 5. Contact Section */}
      <section id="contact" className="py-24 bg-gray-100 text-charcoal-black">
          <div className="max-w-6xl mx-auto px-6">
              <h2 className="text-5xl font-bold text-charcoal-black mb-12 text-center">
                  Connect with SolidBuild Co.
              </h2>
              
              <div className="grid md:grid-cols-2 gap-12">
                  {/* Contact Info */}
                  <div>
                      <h3 className="text-3xl font-semibold mb-6 border-b pb-2 border-gold">Contact Information</h3>
                      <div className="space-y-4 text-lg">
                          <p><strong>Address:</strong> 123 Sterling Ave, Suite 500, Major City, State 10001, USA</p>
                          <p><strong>Phone:</strong> <a href="tel:+15555552845" className="text-blue-700 hover:text-gold transition duration-300">+1 (555) 555-2845 (BUILD)</a></p>
                          <p><strong>Email:</strong> <a href="mailto:contact@solidbuildco.com" className="text-blue-700 hover:text-gold transition duration-300">contact@solidbuildco.com</a></p>
                      </div>
                  </div>

              </div>
          </div>
      </section>

      {/* Footer (Optional) */}
      <footer className="py-8 bg-black text-gray-500 text-center text-sm">
        <p>&copy; {new Date().getFullYear()} SolidBuild Co. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default HomeSection;