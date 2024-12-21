'use client'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'

const client = new QueryClient()

interface TProviderQueryClientProps {
  children: React.ReactNode
}

export function ProviderQueryClient({ children }: TProviderQueryClientProps) {
  return <QueryClientProvider client={client}>{children}</QueryClientProvider>
}
