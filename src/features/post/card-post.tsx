import Image from 'next/image'
import { Box } from '~/src/ui/components'
import cx from 'clsx'

/**
 * =======================================
 * Card Post
 * ========================================
 */

interface TCardPostProps extends React.HTMLAttributes<HTMLElement> {}

export function CardPost({ className, ...props }: TCardPostProps) {
  return (
    <section
      className={cx(
        className,
        'gap-4',
        'px-4 py-4 rounded-md bg-gray-100 w-full min-w-32 max-w-56 mx-auto',
        'flex flex-col justify-center items-center',
      )}
      {...props}
    >
      <Image
        className='rounded-full'
        src='https://i.pravatar.cc/150?u=a042581f4e29026024d'
        alt='hero'
        width={64}
        height={64}
      />

      <Box>
        <h1 className='text-center'>Post Title</h1>
        <p className='text-center'>user1@gmail.com</p>
      </Box>

      <button className='bg-gray-300 hover:bg-gray-200 rounded-md py-2 w-full'>Edit</button>
    </section>
  )
}
