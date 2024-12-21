import * as React from 'react'
import { debounce } from 'lodash-es'
import { useProviderClient } from './use-provider-client'

export function useFeatureSearch() {
  const ctx = useProviderClient()

  const handleSearch = React.useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      ctx?.featureSearch.setValue(event.target.value)
    },
    [ctx],
  )

  const debouncedChangeHandler = React.useMemo(() => debounce(handleSearch, 350), [handleSearch])

  React.useEffect(() => {
    return () => {
      debouncedChangeHandler.cancel()
    }
  }, [debouncedChangeHandler])

  return {
    value: ctx?.featureSearch.value,
    onChange: debouncedChangeHandler,
  }
}
