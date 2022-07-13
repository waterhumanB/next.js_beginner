import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Navbar() {
  const router = useRouter()
  return (
    <nav>
      <Link href="/">
        <a style={{ color: router.pathname === '/' ? 'red' : 'blue' }}>home</a>
      </Link>
      <br />
      <Link href="/about">
        <a style={{ color: router.pathname === '/about' ? 'red' : 'blue' }}>
          about
        </a>
      </Link>
    </nav>
  )
}
