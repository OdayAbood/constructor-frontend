import React from 'react';

// بيانات المشاريع مع تدرجات لونية فاخرة


const ProjectsSection = () => {
  


  return (
  <section className="py-20 bg-black flex justify-center p-4 w-full min-h-screen  ">
    <div className='flex-wrap gap-5 mt-10 flex justify-center'>

    
      <div 
        className="w-96 max-w-xl p-6 rounded-xl shadow-2xl bg-gray-900 border border-gray-800 
                   transition duration-300 h-fit " 
      >
        <h1 className="text-base md:text-2xl font-extrabold text-white p-4 text-center drop-shadow-lg">
          Title Of Project
        </h1>
        
        <div 
          className="group relative w-full h-64 sm:h-80 rounded-lg overflow-hidden shadow-xl 
                     transition duration-500 ease-in-out cursor-pointer"
        >
          

          <div 
            className="absolute inset-0 bg-cover bg-center bg-green-700 transition duration-500 
                       group-hover:scale-110 group-hover:bg-green-800" 
            style={{ backgroundImage: '' }}
          >
            {/* Overlay داكن ليظهر النص الذهبي بوضوح */}
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition duration-500"></div>
            
            {/* نص placeholder إذا لم تكن هناك صورة */}
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-white text-xl font-semibold opacity-50">Project Image Area</span>
            </div>
          </div>
          
          {/* رابط "Show More Details" - يظهر عند التمرير */}
          <a 
            href="{projectLink}"
            onClick={(e) => { e.preventDefault(); }}
            className="absolute bottom-4 left-1/2 transform -translate-x-1/2 px-6 py-2 text-lg font-bold 
                       text-black bg-gold rounded-full shadow-2xl whitespace-nowrap
                       opacity-0 group-hover:opacity-100 transition duration-300 delay-150 ease-out 
                       group-hover:scale-100 scale-90 hover:text-white"
          >
            Show More Details
          </a>
          
        </div>
        
      </div>
      
      
      
    </div>  
     
    </section>
  );
};

export default ProjectsSection;