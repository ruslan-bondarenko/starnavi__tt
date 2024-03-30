import localFont from 'next/font/local';

export const starwars = localFont({
 src: [
  {
   path: './Starjedi.ttf',
   weight: '400',
   style: 'normal',
  },
 ],
 variable: '--font-starwars',
})