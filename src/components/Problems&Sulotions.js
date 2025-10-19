import React from "react";

const ProblemsAndSulotios =()=>{
    return(
        <section className="py-20 bg-black  flex justify-center p-4 w-full min-h-screen  ">
      
      {/* الـ Div الرئيسي - بطاقة المشكلة */}
      {/* 'group' class لتفعيل تأثيرات التمرير على العناصر الداخلية */}
      <div className="mt-10 flex-wrap md:gap-5 flex gap-3">

      <div 
        className="group relative w-full max-w-96 p-6 rounded-xl shadow-2xl bg-gray-900 border border-gray-800 
                   overflow-hidden transition duration-500 ease-in-out transform hover:scale-[1.01] hover:shadow-gold/40"
      >
        
        {/* عنوان المشكلة */}
        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6 text-center drop-shadow-lg">
          Title Of Problem
        </h1>
        
        {/* مكان الصورة - مع خلفية زرقاء وتأثير تمرير خفيف */}
        <div 
          className="relative w-full h-48 sm:h-64 bg-blue-600 rounded-lg overflow-hidden mb-8 
                     shadow-lg transition duration-300 ease-in-out group-hover:shadow-blue-500/50"
        >
          {/* يمكنك وضع صورة هنا إذا أردت، وإلا ستبقى الخلفية الزرقاء */}
          {/* <img src="your-image.jpg" alt="Problem Illustration" className="w-full h-full object-cover" /> */}
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-white text-xl font-semibold">Image Placeholder</span>
          </div>
        </div>
        
        {/* قسم الروابط - يظهر فقط عند التمرير على الـ div الرئيسي */}
        <div 
          className="flex flex-col space-y-4 items-center 
                     opacity-0 group-hover:opacity-100 transform group-hover:translate-y-0 -translate-y-4 
                     transition-all duration-500 ease-in-out"
        >
          <a 
            href="#" 
            className="w-full px-6 py-3 text-center text-lg font-semibold text-black bg-gold rounded-lg 
                       hover:bg-white transition duration-300 ease-in-out transform hover:scale-[1.02]"
          >
            Video
          </a>
          <a 
            href="#" 
            className="w-full px-6 py-3 text-center text-lg font-semibold text-white bg-gray-700 rounded-lg 
                       hover:bg-gold hover:text-black transition duration-300 ease-in-out transform hover:scale-[1.02]"
          >
            Solution
          </a>
          <a 
            href="#" 
            className="w-full px-6 py-3 text-center text-lg font-semibold text-white bg-gray-700 rounded-lg 
                       hover:bg-gold hover:text-black transition duration-300 ease-in-out transform hover:scale-[1.02]"
          >
            Contact Us
          </a>
        </div>

      </div>

      
      </div>
      
    </section>
    )
} 
export default ProblemsAndSulotios;