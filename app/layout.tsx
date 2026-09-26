import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Providers from '@/components/Providers';

const inter = Inter({ subsets: ['latin'] });

const SITE_URL = 'https://walletweb3portafolio.netlify.app';
const DESCRIPTION =
  'Aplicación descentralizada que conecta tu billetera Ethereum (Mainnet y Sepolia) para consultar tu saldo e interactuar con la red.';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: 'Web3 Portfolio | Billetera descentralizada',
  description: DESCRIPTION,
  applicationName: 'Web3 Portfolio',
  keywords: ['Web3', 'Ethereum', 'dApp', 'wallet', 'RainbowKit', 'wagmi', 'Next.js'],
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: '/icon.png',
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    type: 'website',
    locale: 'es_CL',
    url: SITE_URL,
    siteName: 'Web3 Portfolio',
    title: 'Web3 Portfolio | Billetera descentralizada',
    description: DESCRIPTION,
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Web3 Portfolio — billetera descentralizada',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Web3 Portfolio | Billetera descentralizada',
    description: DESCRIPTION,
    images: ['/og-image.png'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
