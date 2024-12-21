import { Box } from '~/src/ui/components'
import { AppMain, AppMenu } from '~/src/ui/layouts'
import { CardPostList } from '~/src/features/post/card-post-list'

export function AppContent() {
  return (
    <Box className='p-12'>
      <CardPostList />
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
