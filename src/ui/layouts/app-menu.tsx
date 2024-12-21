'use client'
import * as React from 'react'
import { TBoxProps, Box } from '~/src/ui/components'
import { Bars3Icon, UserIcon, ShieldCheckIcon, ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline'
import cx from 'clsx'
import { Show } from '../components/show'

/**
 * =======================================
 * App Menu Drawer Desktop
 * ========================================
 */

interface TAppMenuDrawerDesktopProps extends TBoxProps {}

export function AppMenuDrawerDesktop({ className, ...props }: TAppMenuDrawerDesktopProps) {
  const [isHide, setIsHide] = React.useState(false)

  return (
    <Box className={cx(className, 'h-full bg-white shadow-lg p-3', isHide && 'w-auto', !isHide && 'w-64')} {...props}>
      <nav className='flex flex-col justify-between h-full'>
        <ul className='space-y-2'>
          <li className='flex gap-3 items-center'>
            <a href='#' className={cx('py-2 px-3 rounded-md hover:bg-gray-100', 'flex gap-4 items-center flex-1')}>
              <ShieldCheckIcon className='size-9 text-black' />
              <Show when={!isHide}>
                <span>Reqmi</span>
              </Show>
            </a>
          </li>

          <li className='flex gap-3 items-center'>
            <a href='#' className={cx('py-2 px-3 rounded-md hover:bg-gray-100', 'flex gap-4 items-center flex-1')}>
              <UserIcon className='size-9 text-black' />
              <Show when={!isHide}>
                <span>Connections</span>
              </Show>
            </a>
          </li>
        </ul>

        <button
          onClick={() => setIsHide((collpased) => !collpased)}
          className='flex justify-center items-center py-2 px-3 rounded-md gap-4 mb-4 hover:bg-gray-100'
        >
          <Show when={!isHide}>
            <ChevronLeftIcon className='size-6 text-black' />
          </Show>

          <Show when={isHide}>
            <ChevronRightIcon className='size-6 text-black' />
          </Show>

          <Show when={!isHide}>Hide</Show>
        </button>
      </nav>
    </Box>
  )
}

/**
 * =======================================
 * App Menu Drawer Mobile
 * ========================================
 */

interface TAppMenuDrawerMobileProps extends TBoxProps {
  onClose?: () => void
}

export function AppMenuDrawerMobile({ className, onClose, ...props }: TAppMenuDrawerMobileProps) {
  return (
    <React.Fragment>
      <Box onClick={onClose} className='fixed inset-0 bg-black bg-opacity-50 z-40' aria-hidden='true' />

      <Box className={cx(className, 'fixed top-0 left-0 z-50 w-64 h-full bg-white shadow-lg p-3')} {...props}>
        <button type='button'>
          <Bars3Icon className='size-10 text-black' />
        </button>

        <nav className='mt-16'>
          <ul className='space-y-2'>
            <li className='flex gap-3 items-center'>
              <a href='#' className={cx('py-2 px-3 rounded-md hover:bg-gray-100', 'flex gap-4 items-center flex-1')}>
                <ShieldCheckIcon className='size-9 text-black' />
                <span>Reqmi</span>
              </a>
            </li>

            <li className='flex gap-3 items-center'>
              <a href='#' className={cx('py-2 px-3 rounded-md hover:bg-gray-100', 'flex gap-4 items-center flex-1')}>
                <UserIcon className='size-9 text-black' />
                <span>Connections</span>
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
    <Box
      className={cx(className, 'px-3 py-3 bg-gray-100 md:bg-white', 'flex justify-between items-center gap-7')}
      {...props}
    >
      <button className='md:hidden' onClick={onOpen} type='button'>
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

interface TAppMenuProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode
}

export function AppMenu({ className, children, ...props }: TAppMenuProps) {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <nav className={cx(className, 'md:flex md:flex-row-reverse md:items-start md:flex-1')} {...props}>
      <Box className='md:flex-1'>
        <AppMenuNavigation onOpen={() => setIsOpen(true)} />
        {children}
      </Box>

      <Show when={isOpen}>
        <AppMenuDrawerMobile onClose={() => setIsOpen(false)} />
      </Show>

      <AppMenuDrawerDesktop className='hidden md:block md:bg-gray-200' />
    </nav>
  )
}
