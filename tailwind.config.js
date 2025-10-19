/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        'slide-in-underline': {
          '0%': { transform: 'scaleX(0)', transformOrigin: 'left' },
          '100%': { transform: 'scaleX(1)', transformOrigin: 'left' },
        },
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        // 2. حركة الظهور من اليمين
        'fade-in-right': {
          '0%': { opacity: '0', transform: 'translateX(20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
      },
      animation: {
        'slide-in-underline': 'slide-in-underline 0.3s ease-out forwards',
        'fade-in-up-1s': 'fade-in-up 1s ease-out forwards', // 1 ثانية
        // ربط الحركة 2 (بتأخير)
        'fade-in-right-1s': 'fade-in-right 1s ease-out 0.5s forwards', // 1 ثانية بتأخير 0.5 ثانية
      },
      // 3. تعريف اللون الذهبي (Gold)
      // هذا مجرد مثال، يمكنك استخدام لون ذهبي دقيق من اختيارك
      colors: {
        'gold': '#FFD700', // كود لون ذهبي كلاسيكي
      },
    },
  },
  plugins: [],
}