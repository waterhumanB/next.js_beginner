import { ReactNode } from 'react'
import Navbar from '../components/Navbar'

interface Props {
  children?: ReactNode | undefined
}

export default function Layout({ children }: Props) {
  return (
    <>
      <Navbar></Navbar>
      <div>{children}</div>
    </>
  )
}
