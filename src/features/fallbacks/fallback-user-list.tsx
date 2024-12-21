import { Box } from '~/src/ui/components'
import cx from 'clsx'

interface TFallbackUserListProps {
  isLoading: boolean
  children?: React.ReactNode
}

export function FallbackUserList({ isLoading, children }: TFallbackUserListProps) {
  return isLoading ? (
    Array.from({ length: 4 }).map((_, index) => (
      <Box
        key={`item-${index}`}
        className={cx('p-4 rounded-md bg-gray-100 min-h-64 w-full min-w-32 max-w-56 flex items-center')}
      >
        <Box className='animate-pulse flex flex-col gap-4 flex-1'>
          <Box className='h-8 rounded-md bg-gray-300 w-12' />
          <Box className='h-8 rounded-md bg-gray-300 w-1/2' />
          <Box className='h-8 rounded-md bg-gray-300 w-full' />
        </Box>
      </Box>
    ))
  ) : (
    <>{children}</>
  )
}
