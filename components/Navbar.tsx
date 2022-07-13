import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Navbar() {
  const router = useRouter()
  return (
    <nav>
      <Link href="/">
        <a style={{ color: router.pathname === '/' ? 'red' : 'blue' }}>Home</a>
      </Link>
      <br />
      <Link href="/About">
        <a style={{ color: router.pathname === '/about' ? 'red' : 'blue' }}>
          About
        </a>
      </Link>
    </nav>
  )
}
