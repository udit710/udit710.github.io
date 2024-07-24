import Head from 'next/head';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Udit Malshe',
  description: "Udit Malshe's Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
          <link rel="shortcut icon" href="/images/favicon.ico" />
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
