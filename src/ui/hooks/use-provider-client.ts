import * as React from 'react'
import { ProviderClientContext } from '~/src/ui/contexts'

export function useProviderClient() {
  return React.useContext(ProviderClientContext)
}
