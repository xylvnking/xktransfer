import React from 'react'
import { useRouter } from 'next/router'
import shareStyles from '../../styles/Share.module.css'

export default function Song() {
const router = useRouter()
  const { pid, foo, test } = router.query
  let data = []
  if (foo) {
    data = foo.split(/xxxxxxxxxx/)

  }
  console.log(data[0])
//   console.log(router.query.foo)

  return (
        <main>
            <section className={shareStyles.sectionContainer}>
                <div className={shareStyles.sectionContainerInner}>
                    {/* <p>audio file link: {foo}</p> */}
                    {/* <p>audio file link: {foo}</p> */}
                    <h1>{pid}</h1>
                    <audio src="https://firebasestorage.googleapis.com/v0/b/xktransfer-30d93.appspot.com/o/masters%2FOCHE-Playing-With-My-Head-dy-26082022.wav?alt=media&token=d4abb847-9466-4a76-95ab-90b940811460" controls></audio>
                    <br />
                    <textarea className={shareStyles.revision} value={data[0]}></textarea>

                </div>

            </section>

        </main>
  )
}