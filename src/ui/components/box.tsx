import type { HTMLAttributes } from 'react'
import { forwardRef } from 'react'

export interface TBoxProps extends HTMLAttributes<HTMLDivElement> {}

export const Box = forwardRef<HTMLDivElement, TBoxProps>(function Component({ children, ...props }, ref) {
  return (
    <div id='layout-box' aria-label='layout-box' data-testid='layout-box' ref={ref} {...props}>
      {children}
    </div>
  )
})
