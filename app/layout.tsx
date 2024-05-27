// "use client";
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { SessionProvider } from 'next-auth/react'
import { auth } from '@/auth'
import './globals.css'
import { Toaster } from "@/components/ui/sonner";

import { ThemeProvider } from "@/components/theme-provider"
import { useTheme } from "next-themes"
import { generateLocale } from "@/components/locale";
import { Navbar } from '@/components/navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title:  "Waicah",
  description: 'What AI Can Add to Healthcare',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await auth();

  return (
    <SessionProvider session={session}>
      <html lang="en">
        <body className={inter.className}>
          <Toaster />
          <ThemeProvider>
            <Navbar session={session} />
          {children}
          </ThemeProvider>

        </body>
      </html>
    </SessionProvider>
  )
}
