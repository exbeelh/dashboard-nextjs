import { Inter, Acme, Lusitana } from 'next/font/google';

export const inter = Inter({ subsets: ['latin'] });
export const acme = Acme({ subsets: ['latin'], weight: '400' });
export const lusitana = Lusitana({
  subsets: ['latin'],
  weight: ['400', '700'],
});
