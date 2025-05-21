import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const poppins = Poppins({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
})

export const metadata: Metadata = {
  title: 'Pet-Friendly City | Making Cities Better for Pets and People',
  description: 'Join our movement to make cities more pet-friendly. Volunteer, adopt, and help create a better world for pets and their owners.',
  keywords: 'pet-friendly, city, volunteer, pet adoption, community, animal welfare',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body>
        {children}
      </body>
    </html>
  )
} 