import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <h1>Home</h1>
      <Link href="/about">About</Link>
      <div data-testid="example_div">Example div</div>
    </div>
  )
}
