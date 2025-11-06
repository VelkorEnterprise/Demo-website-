import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: '3D PDF Converter | Merge, Split, and Convert PDFs for Free',
  description:
    'The ultimate online tool for all your PDF needs. Merge, split, compress, and convert PDFs with ease using our futuristic 3D interface. Fast, secure, and free.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
