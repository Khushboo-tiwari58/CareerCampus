// app/layout.tsx
import './globals.css';
import type { ReactNode } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Career Compass',
  description: 'Explore streams, scholarships, and career opportunities for students and graduates.',
  other: {
    'google-site-verification': '5iIgezUiv-pXX5F0MB53cXy_vDAOw5qq3j-ILozVV2c'
  }
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased bg-gray-50 text-slate-800">
        <Header />
        <main className="min-h-[70vh]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
