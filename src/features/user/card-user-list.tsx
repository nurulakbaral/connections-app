'use client'
import cx from 'clsx'
import { services } from '~/src/services'
import { CardUser } from './card-user'
import { useInfiniteQuery } from '@tanstack/react-query'
import { FallbackUserList } from '~/src/features'

/**
 * =======================================
 * Card Post List
 * ========================================
 */

interface TCardUserListProps extends React.HTMLAttributes<HTMLElement> {}

export function CardUserList({ className, ...props }: TCardUserListProps) {
  const { data: userList, isLoading } = useInfiniteQuery({
    queryKey: ['userList'],
    queryFn: async ({ pageParam = 1 }) => {
      return await services.user.getUserList({
        params: {
          page: pageParam,
          per_page: 8,
        },
      })
    },
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => (lastPage?.length ? allPages.length + 1 : undefined),
    select: (data) => ({
      pages: data.pages.flat(),
      pageParams: [...data.pageParams],
    }),
  })

  return (
    <section
      className={cx(
        className,
        'grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4',
        'gap-12',
      )}
      {...props}
    >
      <FallbackUserList isLoading={isLoading}>
        {userList?.pages.map((userDetail) => <CardUser key={`item-${userDetail.id}`} userDetail={userDetail} />)}
      </FallbackUserList>
    </section>
  )
}
