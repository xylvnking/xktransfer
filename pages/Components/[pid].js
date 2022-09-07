import React from 'react'
import { useRouter } from 'next/router'
import shareStyles from '../../styles/Share.module.css'

export default function Song() {
const router = useRouter()
  const { pid, foo, test } = router.query
  let data = []
  if (foo) {
    data = foo.split(/xxxxxxxxxx/)
    // data = foo.split(/xxxxxxxxxx/)

  }
  console.log(data[2])
//   console.log(router.query.foo)

  return (
        <main>
            <section className={shareStyles.sectionContainer}>
                <div className={shareStyles.sectionContainerInner}>
                    {/* <p>audio file link: {foo}</p> */}
                    {/* <p>audio file link: {foo}</p> */}
                    <h1 className={shareStyles.songName}>{pid}</h1>
                    <h1 className={shareStyles.fileVersion}>{data[1]}</h1>
                    <audio className={shareStyles.audio} src='fakeurl' controls></audio>
                    <textarea className={shareStyles.revision} value={data[0]} readOnly></textarea>

                </div>

            </section>

        </main>
  )
}