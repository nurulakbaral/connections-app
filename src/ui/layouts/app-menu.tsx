'use client'
import * as React from 'react'
import { TBoxProps, Box } from '~/src/ui/components'
import { Bars3Icon, ShieldCheckIcon } from '@heroicons/react/24/outline'
import cx from 'clsx'
import { Show } from '../components/show'

/**
 * =======================================
 * App Menu Drawer
 * ========================================
 */

interface TAppMenuDrawerProps extends TBoxProps {
  onClose?: () => void
}

export function AppMenuDrawer({ className, onClose, ...props }: TAppMenuDrawerProps) {
  return (
    <React.Fragment>
      <Box onClick={onClose} className='fixed inset-0 bg-black bg-opacity-50 z-40' aria-hidden='true' />

      <Box className={cx(className, 'fixed top-0 left-0 z-50 w-64 h-full bg-white shadow-lg py-4 px-4')} {...props}>
        <button type='button'>
          <Bars3Icon className='size-10 text-black' />
        </button>

        <nav>
          <ul className='space-y-2'>
            <li className='flex gap-3 items-center'>
              <a href='#' className={cx('py-2 px-3 rounded-md hover:bg-gray-100', 'flex gap-4 items-center flex-1')}>
                <ShieldCheckIcon className='size-9 text-black' />
                <span>Reqmi</span>
              </a>
            </li>
          </ul>
        </nav>
      </Box>
    </React.Fragment>
  )
}

/**
 * =======================================
 * App Menu Navigation
 * ========================================
 */

interface TAppMenuNavigationProps extends TBoxProps {
  onOpen?: () => void
}

export function AppMenuNavigation({ className, onOpen, ...props }: TAppMenuNavigationProps) {
  return (
    <Box className={cx(className, 'px-3 py-3 bg-gray-100', 'flex justify-between items-center gap-7')} {...props}>
      <button onClick={onOpen} type='button'>
        <Bars3Icon className='size-10 text-black' />
      </button>

      <input
        className={cx('py-2 px-3 border-2 rounded-md border-gray-200', 'w-full max-w-xs')}
        type='search'
        placeholder='Search here'
      />
    </Box>
  )
}

/**
 * =======================================
 * App Menu
 * ========================================
 */

interface TAppMenuProps extends React.HTMLAttributes<HTMLElement> {}

export function AppMenu({ ...props }: TAppMenuProps) {
  const [isOpen, setIsOpen] = React.useState(true)

  return (
    <nav {...props}>
      <AppMenuNavigation onOpen={() => setIsOpen(true)} />

      <Show when={isOpen}>
        <AppMenuDrawer onClose={() => setIsOpen(false)} />
      </Show>
    </nav>
  )
}
