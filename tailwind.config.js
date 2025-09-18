/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'xs': '320px',   // iPhone SE, 작은 모바일
      'sm': '375px',   // iPhone 12/13/14, 일반 모바일
      'md': '414px',   // iPhone Plus, 큰 모바일
      'lg': '480px',   // 최대 모바일 크기
      // 데스크톱 breakpoint 제거
    },
    extend: {
      fontFamily: {
        'sans': ['Noto Sans KR', 'sans-serif'],
        'serif': ['Nanum Myeongjo', 'serif'],
        'myeongjo': ['Nanum Myeongjo', 'serif'],
        'songmyung': ['Song Myung', 'serif'],
        'gowundodum': ['Gowun Dodum', 'sans-serif'],
        'chiron-goround-tc': ['Chiron GoRound TC', 'sans-serif'],
        'ibm-plex-sans-kr': ['IBM Plex Sans KR', 'sans-serif'],
        'nanum-gothic': ['Nanum Gothic', 'sans-serif'],
      },
      fontWeight: {
        'thin': '100',
        'extralight': '200',
        'light': '300',
        'normal': '400',
        'medium': '500',
        'semibold': '600',
        'bold': '700',
        'extrabold': '800',
        'black': '900',
      },
    },
  },
  plugins: [],
}
