import Link from 'next/link'

export default function NotFound() {
  return (
    <div style={{ margin: '30px 0' }}>
      <h2>Not Found</h2>
      <p>Could not find requested resource</p>
      <Link prefetch={false} href="/">
        <span style={{ color: '#ff9800' }}>Home</span>
      </Link>
    </div>
  )
}