import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import { Toaster } from '@/components/ui/sonner'
import { Navigation } from '@/components/layout/navigation'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'shadcn/ui Components Showcase',
  description: 'A comprehensive showcase of shadcn/ui components built with Next.js 15 and React 19',
  keywords: ['React', 'Next.js', 'shadcn/ui', 'Tailwind CSS', 'Components', 'UI Library'],
  authors: [{ name: 'Your Name' }],
  creator: 'Your Name',
  publisher: 'Your Name',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://your-domain.com',
    title: 'shadcn/ui Components Showcase',
    description: 'A comprehensive showcase of shadcn/ui components built with Next.js 15 and React 19',
    siteName: 'shadcn/ui Showcase',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'shadcn/ui Components Showcase',
    description: 'A comprehensive showcase of shadcn/ui components built with Next.js 15 and React 19',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="min-h-screen bg-background">
            <Navigation />
            <main className="container mx-auto px-4 py-8">
              {children}
            </main>
          </div>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}