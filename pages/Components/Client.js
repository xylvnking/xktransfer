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
    }

    const saveRevisionNotes = (event) => {
        event.preventDefault()
        const clientCollection = 'clientID' + props.userAuth.uid
        console.log('updating firebase with revision notes...')
        // const fileVersionBeingUpdated = event.target[2].value

        const fileVersionBeingUpdated = {
            date: event.target[0].value,
            downloadURL: event.target[1].value,
            fileNameRegexed: event.target[2].value,
            revisionNote: event.target[3].value,
            songName: event.target[4].value,
        } 
        // const songBeingUpdated = event.target[0].value
        // const fileVersionBeingUpdated = event.target[1].value
        // const revisionNoteBeingUpdated = event.target[2].value
        
        // console.log(`songBeingUpdated: ${songBeingUpdated}`)
        // console.log(`file version being updated: ${fileVersionBeingUpdated}`)
        // console.log(`revisionNoteBeingUpdated: ${revisionNoteBeingUpdated}`)

        const docRef = doc(db, clientCollection, fileVersionBeingUpdated.songName)
        updateDoc(docRef, {
            [event.target[2].value]: {
            date: event.target[0].value,
            downloadURL: event.target[1].value,
            fileNameRegexed: event.target[2].value,
            revisionNote: event.target[3].value,
            songName: event.target[4].value,
            }
        })

        // console.log(`the revision note is: ${event.target[1].value}`)
        // console.log(`the song/document name is: ${event.target[0].value}`)
        // console.log(event.target[0].value)
        // console.log(event.target[1].value)
        // console.log(event.target[2].value)
        // console.log(event.target[5].value)
        // console.log(`collection to be updated is: ${clientCollection}`)



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
                    clientSongs.map((song, index1) => { // for each song
                        return (
                            <ul key={index1}className={styles.fileListItem}>
                                {Object.values(song).map((songDataValue) => // for each file version
                                    <ul key={songDataValue.date} className={styles.fileVersion}>
                                        <li>{Date.parse(Date(songDataValue.date))}</li>
                                        <li>{songDataValue.songName}</li>
                                        <li>{songDataValue.fileNameRegexed}</li>
                                        {/* <li>{songDataValue.revisionNote}</li> */}
                                        <audio controls src={songDataValue.downloadURL}/>
                                        <br />
                                        {/* {Object.keys(song).map((fileName) => 
                                            // console.log(fileName)
                                            fileName
                                        )} */}
                                        <form onSubmit={saveRevisionNotes}>
                                            <input readOnly={true} value={songDataValue.date} style={{display: 'none'}}></input>
                                            <input readOnly={true} value={songDataValue.downloadURL} style={{display: 'none'}}></input>
                                            <input readOnly={true} value={songDataValue.fileNameRegexed} style={{display: 'none'}}></input>
                                            <TextareaAutosize 
                                                defaultValue={songDataValue.revisionNote}
                                                className={styles.revisionTextArea}
                                                onChange={(e) => handleTyping(e.target.value, song)} 
                                            />
                                            <input readOnly={true} value={songDataValue.songName} style={{display: 'none'}}></input>
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
