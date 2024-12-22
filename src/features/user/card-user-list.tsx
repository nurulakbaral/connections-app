'use client'
import * as React from 'react'
import cx from 'clsx'
import { services } from '~/src/services'
import { CardUser } from './card-user'
import { useInfiniteQuery } from '@tanstack/react-query'
import { FallbackUserList } from '~/src/features'
import { Box } from '~/src/ui/components'
import { useFeatureSearch } from '~/src/ui/hooks'

/**
 * =======================================
 * Card Post List
 * ========================================
 */

interface TCardUserListProps extends React.HTMLAttributes<HTMLElement> {}

export function CardUserList({ className, ...props }: TCardUserListProps) {
  const { value } = useFeatureSearch()
  const {
    data: userListData,
    isLoading,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery({
    queryKey: ['userList'],
    queryFn: async ({ pageParam = 1 }) => {
      return await services.user.getUserList({
        params: {
          page: pageParam,
          per_page: 4,
          delay: 1,
        },
      })
    },
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {
      return lastPage?.length ? allPages.length + 1 : undefined
    },
    select: (data) => {
      const userList = data.pages.flat()

      return {
        pages: userList,
        totalData: userList?.[0]?.total || 0,
        pageParams: [...data.pageParams],
      }
    },
  })

  const userList = userListData?.pages.filter(
    (user) =>
      user?.first_name?.includes(value || '') ||
      user?.last_name?.includes(value || '') ||
      user?.email?.includes(value || ''),
  )
  const totalData = userListData?.totalData

  React.useEffect(() => {
    let observerOptions: IntersectionObserverInit = {
      root: null,
      rootMargin: '0px',
      threshold: 1,
    }
    let observer = new IntersectionObserver(handleObserver, observerOptions)
    let target = document.getElementById('lastTarget')

    if (!target) {
      return
    }

    observer.observe(target)

    function handleObserver(entries: Array<IntersectionObserverEntry>) {
      if (!hasNextPage) {
        return
      }

      if (entries[0].isIntersecting) {
        if (!isFetchingNextPage && hasNextPage) {
          fetchNextPage()
        }
      }
    }

    return () => {
      observer.disconnect()
    }
  }, [fetchNextPage, hasNextPage, isFetchingNextPage, userList?.length])

  return (
    <section>
      <Box>
        <h1 className='text-xl mb-10'>
          Connections {userList?.length} of {totalData}
        </h1>
      </Box>

      <Box
        className={cx(
          className,
          'grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4',
          'gap-12',
        )}
        {...props}
      >
        <FallbackUserList isLoading={isLoading}>
          {userList?.map((userDetail, idx) => (
            <CardUser
              id={idx === (userList?.length || 0) - 1 ? 'lastTarget' : ''}
              key={`item-${userDetail.id}`}
              userDetail={userDetail}
            />
          ))}

          <FallbackUserList isLoading={isFetchingNextPage} />
        </FallbackUserList>
      </Box>
    </section>
  )
}
