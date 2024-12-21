import { Box } from '~/src/ui/components'
import { AppMain, AppMenu } from '~/src/ui/layouts'

export function AppContent() {
  return (
    <Box className='p-3'>
      <h1>Hello World!</h1>
    </Box>
  )
}

export default function Home() {
  return (
    <AppMain>
      <AppMenu>
        <AppContent />
      </AppMenu>
    </AppMain>
  )
}
