'use client'
import * as React from 'react'

/**
 * =======================================
 * Context
 * ========================================
 */

interface TProviderClientContext {
  featureSearch: {
    value: string
    setValue: React.Dispatch<React.SetStateAction<string>>
  }
}

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
  const [featureSearch, setFeatureSearch] = React.useState<string>('')

  return (
    <ProviderClientContext.Provider
      value={{
        featureSearch: {
          value: featureSearch,
          setValue: setFeatureSearch,
        },
      }}
    >
      {children}
    </ProviderClientContext.Provider>
  )
}
