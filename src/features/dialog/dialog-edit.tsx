'use client'
import * as React from 'react'
import cx from 'clsx'
import Image from 'next/image'
import { useMutation } from '@tanstack/react-query'
import { TResponseUserList } from '~/src/services/user/user.model'
import { Box } from '~/src/ui/components/box'
import { Show } from '~/src/ui/components/show'
import { httpRequest } from '~/src/libraries/http-request'
import { CheckCircleIcon, XCircleIcon, XMarkIcon } from '@heroicons/react/24/outline'

interface TDialogEditProps extends React.HTMLAttributes<HTMLDialogElement> {
  userDetail: NonNullable<TResponseUserList['data']>[number]
}

export function DialogEdit({ className, userDetail, ...props }: TDialogEditProps) {
  const [statusEdit, setStatusEdit] = React.useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [open, setOpen] = React.useState(false)
  const { mutate, isPending } = useMutation({
    mutationKey: ['editUser', userDetail.id],
    mutationFn: async (formValues: Pick<NonNullable<TResponseUserList['data']>[number], 'first_name' | 'email'>) =>
      httpRequest.post(`/users`, formValues),
    onSuccess: () => {
      setStatusEdit('success')
    },
    onError: () => {
      setStatusEdit('error')
    },
  })

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = new FormData(event.currentTarget)
    const formValues = Object.fromEntries(form.entries()) as Pick<
      NonNullable<TResponseUserList['data']>[number],
      'first_name' | 'email'
    >
    mutate(formValues)
  }

  function handleClosing() {
    if (!isPending) {
      setOpen(false)
    }
  }

  return (
    <React.Fragment>
      <Show when={open}>
        <Box onClick={handleClosing} className='fixed inset-0 bg-black bg-opacity-50 z-40' aria-hidden='true' />
      </Show>

      <dialog
        className={cx('fixed inset-y-0 z-50 px-10 py-6 rounded-md bg-white min-w-[600px]')}
        open={open}
        {...props}
      >
        <form onSubmit={handleSubmit} className='flex flex-col justify-between h-full gap-32' method='dialog'>
          <section className='flex flex-col gap-10'>
            <Box className='flex flex-1 items-center gap-2'>
              <Image
                priority
                className='rounded-full'
                src={userDetail.avatar || ''}
                alt='hero'
                width={64}
                height={64}
              />

              <Box>
                <h1 className='font-bold text-lg'>{`${userDetail.first_name} ${userDetail.last_name}`}</h1>
                <p className='text-base font-normal'>{userDetail.email}</p>
              </Box>
            </Box>

            <Box className='flex-1 flex flex-col gap-4'>
              <p>
                <Show when={statusEdit === 'success'}>
                  <Box className='flex justify-between items-center mb-4'>
                    <Box className='flex gap-2 items-center p-2 '>
                      <CheckCircleIcon className='size-6 text-green-500' />
                      <span className='text-green-600'>Success! Your data has been saved successfully.</span>
                    </Box>

                    <button onClick={() => setStatusEdit('idle')}>
                      <XCircleIcon className='size-5 text-gray-300' />
                    </button>
                  </Box>
                </Show>

                <Show when={statusEdit === 'error'}>
                  <Box className='flex justify-between items-center mb-4'>
                    <Box className='flex gap-2 items-center p-2'>
                      <XMarkIcon className='size-6 text-red-500' />
                      <span className='text-red-600'>Failed! Your data failed to save.</span>
                    </Box>

                    <button onClick={() => setStatusEdit('idle')}>
                      <XCircleIcon className='size-5 text-gray-300' />
                    </button>
                  </Box>
                </Show>
              </p>

              <p>
                <label htmlFor='name' className='block text-gray-700 text-lg font-medium'>
                  First Name
                </label>
                <input
                  disabled={isPending}
                  defaultValue={userDetail.first_name || ''}
                  id='name'
                  name='name'
                  className={cx('py-2 px-3 border-2 rounded-md border-gray-200', 'w-full')}
                  type='text'
                  placeholder='Search here'
                />
              </p>

              <p>
                <label htmlFor='email' className='block text-gray-700 text-lg font-medium'>
                  Email
                </label>
                <input
                  disabled={isPending}
                  defaultValue={userDetail.email || ''}
                  id='email'
                  name='email'
                  className={cx('py-2 px-3 border-2 rounded-md border-gray-200', 'w-full')}
                  type='email'
                  placeholder='Search here'
                />
              </p>
            </Box>
          </section>

          <Box className='flex flex-col gap-4 flex-1'>
            <button
              type='submit'
              className={cx('bg-gray-100 rounded-md py-2 w-full font-medium', !isPending && 'hover:bg-gray-200')}
            >
              {isPending ? 'Loading...' : 'Edit'}
            </button>

            <button
              disabled={isPending}
              className={cx(
                'rounded-md py-2 w-full font-medium',
                isPending && 'bg-gray-100',
                !isPending && 'hover:bg-gray-200',
                !isPending && 'bg-gray-300',
              )}
              onClick={handleClosing}
            >
              Cancel
            </button>
          </Box>
        </form>
      </dialog>

      <button
        onClick={() => setOpen(true)}
        className='bg-gray-300 hover:bg-gray-200 rounded-md py-2 w-full font-medium'
      >
        Edit
      </button>
    </React.Fragment>
  )
}
