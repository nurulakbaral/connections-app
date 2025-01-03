import '~/src/assets/globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ProviderQueryClient, ProviderClient } from '~/src/ui/contexts'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Bythen AI',
  description: '',
}

interface TRootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: Readonly<TRootLayoutProps>) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <ProviderQueryClient>
          <ProviderClient>{children}</ProviderClient>
        </ProviderQueryClient>
      </body>
    </html>
  )
}
