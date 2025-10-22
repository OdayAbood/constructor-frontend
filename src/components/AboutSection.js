import React, { useState, useEffect } from 'react';

// النص الطويل الذي سيتم عرضه بتأثير الكتابة
const fullText = 
  "MTCbuild Co. is not just a construction company; we are partners in progress. For over 20 years, we have specialized in delivering high-end, bespoke architectural solutions, ranging from state-of-the-art commercial centers to landmark residential estates. Our mission transcends mere structural integrity—we build with precision, commitment, and a golden standard of client satisfaction. We believe in engineering spaces that define the future.";

const AboutSection = () => {
  const [displayText, setDisplayText] = useState('');
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    // تحقق مما إذا كنا قد انتهينا من كتابة النص
    if (charIndex < fullText.length) {
      // تعيين مؤقت لتأخير عرض الحرف التالي (سرعة الكتابة)
      const typingTimeout = setTimeout(() => {
        setDisplayText(prev => prev + fullText[charIndex]);
        setCharIndex(prev => prev + 1);
      }, 30); // 30 ميلي ثانية لكل حرف

      return () => clearTimeout(typingTimeout);
    }
  }, [charIndex]); // تعتمد هذه الدالة على charIndex للتكرار

  return (
    <section className="py-20 md:py-32 bg-black flex justify-center p-4 w-full min-h-screen">
      <div className="w-full max-w-4xl px-6">
        
        {/* العنوان الرئيسي للقسم */}
        <h2 className="text-5xl font-extrabold text-gold mb-12 text-center">
          Our Foundation
        </h2>
        
        {/* الـ Div الذي يحتوي على الفقرة - مع تصميم احترافي */}
        <div 
          className="p-8 bg-gray-900 border border-gray-800 rounded-xl shadow-2xl transition duration-500 ease-in-out"
        >
          <p className="text-xl leading-relaxed text-gray-300 text-left font-mono whitespace-pre-wrap">
            {displayText}
            
            {/* مؤشر الكتابة الوامض - يختفي عند الانتهاء من النص */}
            {charIndex < fullText.length && (
              <span className="inline-block w-1 bg-gold h-6 ml-1 align-middle animate-pulse"></span>
            )}
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;