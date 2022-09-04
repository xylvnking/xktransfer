import React from 'react'
import { useRouter } from 'next/router'

export default function Song() {
const router = useRouter()
  const { pid, foo, test } = router.query
//   console.log(router.query.foo)

  return (
      <main>
          <p>song name: {pid}</p>
          <p>audio file link: {foo}</p>
          <p>{test}</p>

      </main>
  )
}
