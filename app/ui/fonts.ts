import {
  Inter,
  Poppins,
  Lusitana,
  Space_Mono,
  JetBrains_Mono,
} from 'next/font/google';

export const inter = Inter({ subsets: ['latin'] });
export const acme = Poppins({ subsets: ['latin'], weight: '700' });
export const lusitana = Lusitana({
  subsets: ['latin'],
  weight: ['400', '700'],
});
export const space_mono = Space_Mono({
  subsets: ['latin'],
  weight: ['400', '700'],
});
export const jetbrain_mono = JetBrains_Mono({
  subsets: ['latin'],
});
