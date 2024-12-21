'use client'
import * as React from 'react'

/**
 * =======================================
 * Context
 * ========================================
 */

interface TProviderClientContext {}

export const ProviderClientContext = React.createContext<null | TProviderClientContext>(null)

/**
 * =======================================
 * Provider Client
 * ========================================
 */

interface TProviderClientProps {
  children: React.ReactNode
}

export function ProviderClient({ children }: TProviderClientProps) {
  return <ProviderClientContext.Provider value={null}>{children}</ProviderClientContext.Provider>
}
