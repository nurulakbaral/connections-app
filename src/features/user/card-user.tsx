import Image from 'next/image'
import { Box } from '~/src/ui/components'
import cx from 'clsx'
import { TResponseUserList } from '~/src/services/user/user.model'
import { DialogEdit } from '~/src/features/dialog/dialog-edit'

/**
 * =======================================
 * Card Post
 * ========================================
 */

interface TCardUserProps extends React.HTMLAttributes<HTMLElement> {
  userDetail: NonNullable<TResponseUserList['data']>[number]
}

export function CardUser({ className, userDetail, ...props }: TCardUserProps) {
  return (
    <section
      className={cx(
        className,
        'gap-4',
        'px-4 py-4 rounded-md bg-gray-50 min-h-72 w-full min-w-44 max-w-56 mx-auto',
        'flex flex-col justify-center items-center',
      )}
      {...props}
    >
      <Image priority className='rounded-full' src={userDetail.avatar || ''} alt='hero' width={64} height={64} />

      <Box>
        <h1 className='text-center'>{`${userDetail.first_name} ${userDetail.last_name}`} </h1>
        <p className='text-center'>{userDetail.email}</p>
      </Box>

      <DialogEdit userDetail={userDetail} />
    </section>
  )
}
