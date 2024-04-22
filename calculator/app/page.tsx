import Link from 'next/link'
import Calculator from '@/src/components/calculator'

export default function Home() {
  return (
    <div>
      <div>
        <Link href="/about">About</Link>
      </div>
      <div>
        <h1>Calculator</h1>
        <Calculator />
      </div>
    </div>
  )
}
