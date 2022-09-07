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
        console.log(clientSongs)
        // downloadThing()
    }
    const [userAuth, userAuthIsLoading, userAuthError] = useAuthState(auth)
    const [clientSongs, setClientSongs] = useState([])

    
    // const clientCollection = 'clientID' + props.userAuth.uid
    // async function getClientSongs() {
    //     const clientCollection = 'clientID' + userAuth.uid
    //     const querySnapshot = await getDocs(collection(db, clientCollection));
    //     querySnapshot.forEach((doc) => {
    //         if (doc.id !== 'settings') {
    //             setClientSongs(current => {
    //                 return [
    //                     ...current,
    //                     doc.data()
    //                 ]  
    //             })
    //         }
    //     })
    // }
    
    // load client songs
    useEffect(() => {
        if (userAuth && clientSongs.length == 0) {
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
        alert(`Changes for ${event.target[4].value} have been saved!`)
        // getClientSongs()
    }

    
    const downloadThing = (yer) => {
        console.log(yer)
        const aBlob = new Blob(['https://firebasestorage.googleapis.com/v0/b/xktransfer-30d93.appspot.com/o/masters%2F083.png?alt=media&token=d71b32ef-12b8-4fdb-a4a9-e2b5c9b25870'])
        const toDownload = window.URL.createObjectURL(aBlob)
        saveAs(toDownload);
        
    }

    const [isLoading, setLoading] = useState(true)
    const shortenShareUrl = async (songData) => {
        // const aString = siteNameTemporary + '/Components/' + songData.songName + '?foo=' + encodeURIComponent(songData.revisionNote) + 'xxxxxxxxxx' + songData.fileNameRegexed + 'xxxxxxxxxx' + songData.downloadURL

        // await fetch('https://boilerplate-project-urlshortener.xylvnking.repl.co/api/shorturl',{

        //     method: 'POST',
        //     mode: 'cors',
        //     headers: {
        //         'Accept': 'application/json',
        //         'Content-Type': 'application/json'
        //       },
        //     body: JSON.stringify({url: aString})
        // },
        // ).then((response) => {
        // })
        
        navigator.clipboard.writeText(siteNameTemporary + '/Components/' + songData.songName + '?foo=' + encodeURIComponent(songData.revisionNote) + 'xxxxxxxxxx' + songData.fileNameRegexed + 'xxxxxxxxxx' + songData.downloadURL)
    }

   

  return (
    <main >
        <br />
        {/* {
            userAuth &&
            userAuth.uid
        } */}
        <section>
        {/* <button onClick={() => check()}>CHECK</button> */}
            <ul className={adminStyles.clientClient}>
                {
                    clientSongs &&
                    clientSongs.map((song, index1) => { // for each song
                        return (
                            <ul key={index1} style={{listStyle: 'none', padding: '0px', display:'flex', flexDirection: 'column', alignItems: 'center', width: '100%'}}>
                                {Object.values(song).map((songDataValue) => // for each file version
                                    <ul key={songDataValue.date} className={songStyles.fileVersionClient}>
                                        {/* <li>{Date.parse(Date(songDataValue.date))}</li> */}
                                        <li className={songStyles.songName} style={{cursor: 'default'}}>{songDataValue.songName} <button className={songStyles.songDeleteButtonClient}><a target="_blank" href={songDataValue.downloadURL} download="">DOWNLOAD</a></button></li>
                                        <li className={songStyles.filename} style={{cursor: 'default'}}>{songDataValue.fileNameRegexed}</li>
                                        {/* this button gets a link to a dynamic page populated with the song name and file url for sharing */}
                                        
                                        {/* <li>{songDataValue.revisionNote}</li> */}
                                        {/* <audio controls src={songDataValue.downloadURL} className={songStyles.audioWithSpace}/> */}
                                        <audio controls src='fake url' className={songStyles.audioWithSpace}/>
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
                                            {/* <a target="_blank" href={songDataValue.downloadURL} download="">downloaddd</a> */}
                                            {/* <a target="_blank" href='' download={downloadThing}>
                                                <button >download please lol</button>
                                            </a> */}
                                            {/* <a target="_blank" href='' download={downloadThing()}></a> */}
                                            {/* <a href='gs://xktransfer-30d93.appspot.com/masters/artistname-songName-dy-13-01-2022-0.jpeg' download="ok">downloaddd</a> */}
                                            <button type="submit" className={songStyles.cleanButton}>save changes</button>
                                            <button 
                                                type="button" 
                                                className={songStyles.songDeleteButtonClient} 


                                                // onClick={() => navigator.clipboard.writeText(siteNameTemporary + '/Components/' + songDataValue.songName + '?foo=' + encodeURIComponent(songDataValue.revisionNote) + 'xxxxxxxxxx' + songDataValue.fileNameRegexed + 'xxxxxxxxxx' + songDataValue.downloadURL)}>
                                                onClick={() => shortenShareUrl(songDataValue)}>


                                                {/* onClick={() => navigator.clipboard.writeText(siteNameTemporary + '/Components/' + songDataValue.songName + '?foo=' + songDataValue.downloadURL + 'xxxxxxxxxx' + songDataValue.revisionNote)}> */}
                                                    copy link
                                                    <svg xmlns="http://www.w3.org/2000/svg" height="20" width="20"><path d="M5.25 17.188q-.521 0-.885-.365Q4 16.458 4 15.938V5.771h1v10.167q0 .083.083.166.084.084.167.084h8.208v1Zm2.417-2.417q-.521 0-.886-.365-.364-.364-.364-.885V4.167q0-.521.364-.886.365-.364.886-.364h7.395q.542 0 .907.364.364.365.364.886v9.354q0 .521-.364.885-.365.365-.907.365Zm0-1h7.395q.105 0 .188-.083.083-.084.083-.167V4.167q0-.105-.083-.177-.083-.073-.188-.073H7.667q-.084 0-.167.073-.083.072-.083.177v9.354q0 .083.083.167.083.083.167.083Zm-.25 0V3.917v9.854Z"/></svg> 
                                                </button>
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
