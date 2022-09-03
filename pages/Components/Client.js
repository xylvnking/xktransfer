import React, {useState, useEffect} from 'react'
import styles from '../../styles/Home.module.css'
import firebase, {auth, db, provider, storage} from '../../firebase/clientApp'
import { collection, getDocs, doc, getDoc, updateDoc, setDoc } from "firebase/firestore";
import {useAuthState} from "react-firebase-hooks/auth"

import TextareaAutosize from 'react-textarea-autosize';



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



                            // you could probably get the song name (document name) here, but it might change
                            // the data structure which you're then iterating over
                            // another option is to just save it with each song entry, 
                            // which might be better tbh even if it's duplicate data - it is simpler



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
        const clientCollection = 'clientID' + props.userAuth.uid
        event.preventDefault()
        // console.log('updating firebase with revision notes...')
        const newRevisionNoteToBeSaved = event.target[0].value
        // console.log(event.target[0].value)
        console.log(`the revision note is: ${event.target[0].value}`)
        console.log(`the song/document name is: ${event.target[1].value}`)
        console.log(`collection to be updated is: ${clientCollection}`)


        /*
            you cut a corner and will pay the price now
            you need to be able to reference the document name (song title)
            here so that you can update it with the new revision note

        */

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
                    clientSongs.map((song, index1) => {
                        return (
                            <ul key={index1}className={styles.fileListItem}>
                                {Object.values(song).map((songDataValue) => 
                                    <ul key={songDataValue.date} className={styles.fileVersion}>
                                        <li>{Date.parse(Date(songDataValue.date))}</li>
                                        {/* <li>{songDataValue.revisionNote}</li> */}
                                        <audio controls src={songDataValue.downloadURL}/>
                                        <br />
                                        
                                        <form onSubmit={saveRevisionNotes}>
                                            <br />
                                            <TextareaAutosize 
                                                defaultValue={songDataValue.revisionNote}
                                                className={styles.revisionTextArea}
                                                onChange={(e) => handleTyping(e.target.value, song)} 
                                            />

                                            {/* <input readOnly={true} value={Object.keys(song).map((songName) => songName)} style={{display: 'none'}}></input> */}
                                            
                                            <input readOnly={true} value={'this should be the song/document name'} style={{display: 'none'}}></input>
                                            <br />
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
