import React, {useState, useEffect} from 'react'
import styles from '../../styles/Home.module.css'
import firebase, {auth, db, provider, storage} from '../../firebase/clientApp'
import { collection, getDocs, doc, getDoc, updateDoc, setDoc } from "firebase/firestore";
import {useAuthState} from "react-firebase-hooks/auth"


export default function Client(props) {
    function check() {
        console.log(clientSongs)
    }
    // const [userAuth, userAuthIsLoading, userAuthError] = useAuthState(auth)
    const [clientSongs, setClientSongs] = useState([])

    // load client songs
    useEffect(() => {
        if (props.userAuth && clientSongs.length == 0) {
            const clientCollection = 'clientID' + props.userAuth.uid
            async function getClientSongs() {
                const querySnapshot = await getDocs(collection(db, clientCollection));
                querySnapshot.forEach((doc) => {
                    if (doc.id !== 'settings') {
                        setClientSongs(current => {
                            return [
                                ...current,
                                doc.data()
                            ]  
                        })
                    }
                })
            }
            getClientSongs()
        }
    },[props.userAuth])

    const handleTyping = (textareaValue, song) => {
        // console.log(song)
    }

    const saveRevisionNotes = (event) => {
        event.preventDefault()
        console.log('updating firebase with revision notes...')
        const newRevisionNoteToBeSaved = event.target[0].value

    }

  return (
    <main className={styles.clientContainer}>
        <button onClick={() => check()}>CHECK</button>
        <br />
        {
            props.userAuth &&
            props.userAuth.uid
        }
        <section className={styles.songList}>
            <ul className={styles.clientSongList}>
                {
                    clientSongs &&
                    clientSongs.map((song, index) => {
                        return (
                            <ul key={index}className={styles.fileListItem}>
                                {Object.values(song, index).map((songDataValue) => 
                                    <ul key={songDataValue.date} className={styles.fileVersion}>
                                        <li>{Date.parse(Date(songDataValue.date))}</li>
                                        {/* <li>{songDataValue.revisionNote}</li> */}
                                        <audio controls src={songDataValue.downloadURL}/>
                                        <br />
                                        
                                        <form onSubmit={saveRevisionNotes}>
                                            {/* <label for='revisionNote'>revision note</label> */}
                                            <textarea
                                                // id='revisionNote'
                                                defaultValue={songDataValue.revisionNote}
                                                className={styles.revisionTextArea}
                                                onChange={(e) => handleTyping(e.target.value, song)} 
                                            >
                                            </textarea>
                                            <button type="submit">save changes</button>
                                            {/* <input type="button">suuub</input> */}
                                        </form>
                                    </ul>
                                )}
                            </ul>
                        )
                    })
                }
            </ul>
        </section>
    </main>
  )
}
