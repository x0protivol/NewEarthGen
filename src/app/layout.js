import './globals.css'
import '../../../Style/rreel.css';
import { Inter } from 'next/font/google';
import Header from '../../component/Header';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'New Earth Gen - Real World Blockchain Applications',
  description: 'New Earth Gen is a dynamic team specializing in building and launching projects in the Web3 space. Discover our innovative blockchain solutions.',
  keywords: 'blockchain, web3, cryptocurrency, NFT, DeFi, New Earth Gen',
  authors: [{ name: 'New Earth Gen' }],
  viewport: 'width=device-width, initial-scale=1, maximum-scale=5',
  themeColor: '#f7f8eb',
  robots: 'index, follow',
  openGraph: {
    title: 'New Earth Gen - Real World Blockchain Applications',
    description: 'Innovative Web3 projects and blockchain solutions',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'New Earth Gen - Real World Blockchain Applications',
    description: 'Innovative Web3 projects and blockchain solutions',
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/favicon.ico',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="New Earth Gen" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={inter.className}>
        <Header />
        <main role="main">
          {children}
        </main>
      </body>
    </html>
  )
}