import cx from 'clsx'
import { CardPost } from './card-post'

/**
 * =======================================
 * Card Post List
 * ========================================
 */

interface TCardPostListProps extends React.HTMLAttributes<HTMLElement> {}

export function CardPostList({ className, ...props }: TCardPostListProps) {
  return (
    <section
      className={cx(
        className,
        'grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4',
        'gap-12',
      )}
    >
      <CardPost />

      <CardPost />

      <CardPost />

      <CardPost />

      <CardPost />

      <CardPost />
    </section>
  )
}
