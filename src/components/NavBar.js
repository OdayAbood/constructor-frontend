import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const navLinks = [
  { name: 'Home', href: '/home' },
  { name: 'About Us', href: '/about' },
  { name: 'Projects', href: '/projects' },
  { name: 'Problem & Solution', href: '/problem&solution' },
  { name: 'Contact us', href: '/contact' },
];

const Navbar = () => {
  // حالة التحكم بفتح وإغلاق قائمة الهاتف
  const [isOpen, setIsOpen] = useState(false);

  // استخدام اللون الأسود لخلفية الـ Navbar والذهبي للتأثير
  return (
    <nav className="bg-black/80 backdrop-blur-sm shadow-xl fixed top-0 left-0 w-full z-50 transition duration-500 border-4 border-gold rounded-lg ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">      
          {/* 1. الشعار (Luxury Brand) */}
          <div className="flex-shrink-0 text-gold text-2xl font-bold tracking-wider">
            LUXURY BRAND
          </div>   
          {/* 2. أيقونة القائمة (تظهر فقط على الشاشات الصغيرة) */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-gold hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gold"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              {/* أيقونة X عند الفتح، وأيقونة الهامبرغر عند الإغلاق */}
              <svg className={`h-6 w-6 ${isOpen ? 'block' : 'hidden'}`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
              <svg className={`h-6 w-6 ${isOpen ? 'hidden' : 'block'}`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>

          {/* 3. عناصر التنقل الرئيسية (تظهر فقط على الشاشات المتوسطة وما فوق) */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navLinks.map((link) => (
                <div key={link.name} className="relative group">
                  <Link
                    to={link.href}
                    className="text-white hover:text-gold px-3 py-2 rounded-md text-sm font-medium transition duration-300 ease-in-out"
                  >
                    {link.name}
                  </Link>
                  {/* الخط السفلي الحركي (Animation) */}
                  <span 
                    className="absolute bottom-0 left-0 w-full h-0.5 bg-gold transform scale-x-0 group-hover:scale-x-100 origin-left 
                                 group-hover:animate-slide-in-underline"
                  ></span>
                </div>
              ))}
              <div className='group'>
              <a target='_blank'
                href="https://constructor-dash.vercel.app/"
                className="text-white hover:text-gold px-3 py-2 rounded-md text-sm font-medium transition duration-300 ease-in-out group"
              >
                Dashboard
              </a>
              {/* الخط السفلي الحركي (Animation) */}
              <span 
                className="absolute bottom-0 left-0 w-full h-0.5 bg-gold transform scale-x-0 group-hover:scale-x-100 origin-left 
                             group-hover:animate-slide-in-underline"
              ></span>
              </div>
            </div>
          </div>
          
        </div>
      </div>
      
      {/* 4. قائمة الهاتف (تظهر فقط عند النقر على أيقونة الهامبرغر) */}
      <div 
        className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
        id="mobile-menu"
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              // تصميم الرابط في قائمة الهاتف
              className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-700 hover:text-gold transition duration-200"
              onClick={() => setIsOpen(false)} // إغلاق القائمة بعد النقر على الرابط
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;