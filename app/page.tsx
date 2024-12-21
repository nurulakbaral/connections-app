import { Box } from '~/src/ui/components'
import { AppMain, AppMenu } from '~/src/ui/layouts'
import { CardUserList } from '~/src/features/user/card-user-list'

export function AppContent() {
  return (
    <Box className='p-12'>
      <CardUserList />
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
