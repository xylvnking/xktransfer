import React, {useState, useEffect} from 'react'
import styles from '../../styles/Home.module.css'
import adminStyles from '../../styles/Admin.module.css'
import songStyles from '../../styles/Song.module.css'
import firebase, {auth, db, provider, storage} from '../../firebase/clientApp'
import { saveAs } from 'file-saver';
var FileSaver = require('file-saver');

import { getStorage, ref, getDownloadURL, getBlob, getBytes } from "firebase/storage";
// const storage = getStorage();

import { collection, getDocs, doc, getDoc, updateDoc, setDoc } from "firebase/firestore";
import {useAuthState} from "react-firebase-hooks/auth"

import TextareaAutosize from 'react-textarea-autosize';

const siteNameTemporary = 'localhost:3000'

export default function Client(props) {
    function check() {
        // console.log(clientSongs)
        downloadThing()
    }
    const [userAuth, userAuthIsLoading, userAuthError] = useAuthState(auth)
    const [clientSongs, setClientSongs] = useState([])
    
    // load client songs
    useEffect(() => {
        if (userAuth && clientSongs.length == 0) {
            // const clientCollection = 'clientID' + props.userAuth.uid
            const clientCollection = 'clientID' + userAuth.uid
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
    },[userAuth])

    const handleTyping = (textareaValue, song) => {
    }

    const saveRevisionNotes = (event) => {
        event.preventDefault()
        const clientCollection = 'clientID' + userAuth.uid
        const songNameBeingUpdated = event.target[4].value

        const docRef = doc(db, clientCollection, songNameBeingUpdated)
        updateDoc(docRef, {
            [event.target[2].value]: {
            date: new Date(),
            downloadURL: event.target[1].value,
            fileNameRegexed: event.target[2].value,
            revisionNote: event.target[3].value,
            songName: event.target[4].value,
            }
        })
    }

    
    const downloadThing = (yer) => {
        console.log(yer)
        const aBlob = new Blob(['https://firebasestorage.googleapis.com/v0/b/xktransfer-30d93.appspot.com/o/masters%2F083.png?alt=media&token=d71b32ef-12b8-4fdb-a4a9-e2b5c9b25870'])
        const toDownload = window.URL.createObjectURL(aBlob)
        saveAs(toDownload);
        
    }

   

  return (
    <main >
        <button onClick={() => check()}>CHECK</button>
        <br />
        {
            userAuth &&
            userAuth.uid
        }
        <section>
            <ul className={adminStyles.clientClient}>
                {
                    clientSongs &&
                    clientSongs.map((song, index1) => { // for each song
                        return (
                            <ul key={index1} style={{listStyle: 'none', padding: '0px', display:'flex', flexDirection: 'column', alignItems: 'center', width: '100%'}}>
                                {Object.values(song).map((songDataValue) => // for each file version
                                    <ul key={songDataValue.date} className={songStyles.fileVersionClient}>
                                        {/* <li>{Date.parse(Date(songDataValue.date))}</li> */}
                                        <li className={songStyles.songName}>{songDataValue.songName}</li>
                                        <li className={songStyles.filename}>{songDataValue.fileNameRegexed}</li>
                                        {/* this button gets a link to a dynamic page populated with the song name and file url for sharing */}
                                        
                                        {/* <li>{songDataValue.revisionNote}</li> */}
                                        <audio controls src={songDataValue.downloadURL} className={songStyles.audioWithSpace}/>
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
                                            <br />
                                            <input readOnly={true} value={songDataValue.songName} style={{display: 'none'}}></input>
                                            <a target="_blank" href={songDataValue.downloadURL} download="">downloaddd</a>
                                            {/* <a target="_blank" href='' download={downloadThing}>
                                                <button >download please lol</button>
                                            </a> */}
                                            {/* <a target="_blank" href='' download={downloadThing()}></a> */}
                                            {/* <a href='gs://xktransfer-30d93.appspot.com/masters/artistname-songName-dy-13-01-2022-0.jpeg' download="ok">downloaddd</a> */}
                                            <button type="submit">save changes</button>
                                            {/* <input type="button">suuub</input> */}
                                        </form>
                                            <button onClick={() => navigator.clipboard.writeText(siteNameTemporary + '/Components/' + songDataValue.songName + '?foo=' + songDataValue.downloadURL)}>copy shareable URL to clipboard 📋 </button>
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
