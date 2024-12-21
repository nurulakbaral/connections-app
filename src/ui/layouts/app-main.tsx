/**
 * =======================================
 * App Main
 * ========================================
 */

interface TAppMainProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode
}

export function AppMain({ className, children, ...props }: TAppMainProps) {
  return <main className='min-h-screen md:flex'>{children}</main>
}
