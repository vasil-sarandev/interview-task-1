import { FC } from 'react'
import './layout.scss'

interface LayoutProps {
  hasHeader?: boolean
  hasFooter?: boolean
}

export const Layout: FC<LayoutProps> = ({ hasHeader = true, hasFooter = true, children }) => {
  console.log({ children })
  return (
    <div className='layout'>
      {hasHeader && <div className='layout__header'>Hello from header</div>}
      <main className='layout__main'>{children}</main>
      {hasFooter && <div className='layout__footer'>Hello from footer.</div>}
    </div>
  )
}