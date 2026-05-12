import localFont from 'next/font/local';
import { Roboto } from 'next/font/google';

export const fsMagistral = localFont({
  src: [
    { path: '../../public/assets/fonts/FS Magistral-Light.ttf', weight: '300', style: 'normal' },
    { path: '../../public/assets/fonts/FS Magistral-Medium.ttf', weight: '500', style: 'normal' },
    { path: '../../public/assets/fonts/FS Magistral-Bold.ttf', weight: '700', style: 'normal' },
    { path: '../../public/assets/fonts/FS Magistral-ExtraBold.ttf', weight: '800', style: 'normal' },
  ],
  variable: '--font-magistral',
  display: 'swap',
});

export const roboto = Roboto({
  subsets: ['latin', 'vietnamese'],
  weight: ['300', '400', '500', '700'],
  variable: '--font-roboto',
  display: 'swap',
});
