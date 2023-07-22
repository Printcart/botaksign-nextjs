// eslint-disable-next-line camelcase
import { Nunito } from 'next/font/google';
import localFont from 'next/font/local';

export const nunito = Nunito({
  subsets: ['latin'],
  variable: '--font-nunito'
});

export const oduda = localFont({
  src: './assets/fonts/Oduda-Bold.ttf',
  variable: '--font-oduda-bold'
});
