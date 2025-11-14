import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'IZICONT - Servicio Contable + ERP Cloud | Solo pagas cuando vendes',
  description: 'Servicio contable profesional para empresas peruanas. Incluye ERP Cloud, asesoría tributaria y laboral. Paga solo el 2% + IGV de tus ventas. Sin mensualidades fijas.',
  keywords: 'contabilidad peru, erp cloud, outsourcing contable, contador peru, sunat, sunafil, software contable, pymes peru',
  authors: [{ name: 'IZICONT' }],
  creator: 'IZICONT',
  publisher: 'IZICONT',
  openGraph: {
    type: 'website',
    locale: 'es_PE',
    url: 'https://www.izicont.com',
    title: 'IZICONT - Despreocúpate de los números. Enfócate en crecer.',
    description: 'Servicio contable + ERP Cloud. Paga solo cuando vendes.',
    siteName: 'IZICONT',
    images: [
      {
        url: '/img/og-image.png',
        width: 1200,
        height: 630,
        alt: 'IZICONT - Servicio Contable + ERP Cloud',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'IZICONT - Servicio Contable + ERP Cloud',
    description: 'Paga solo cuando vendes. Sin mensualidades fijas.',
    images: ['/img/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'IZICONT',
  description: 'Servicio contable profesional + ERP Cloud',
  url: 'https://www.izicont.com',
  telephone: '+51993124171',
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'PE',
    addressLocality: 'Lima',
  },
  priceRange: 'S/ 99',
  openingHours: 'Mo-Fr 08:00-17:00',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
