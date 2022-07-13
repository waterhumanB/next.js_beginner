import Head from 'next/head'
import { ReactNode } from 'react'

interface Props {
  title?: ReactNode | undefined
}

export default function Seo({ title }: Props) {
  return (
    <Head>
      <title>{title} | Next Moives</title>
    </Head>
  )
}
