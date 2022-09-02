// import React from 'react'
import React, {useState, useEffect} from 'react'
import styles from '../../styles/Home.module.css'
import {
  ref,
  uploadBytes,
  getDownloadURL,
  listAll,
  list,
} from "firebase/storage";
import { storage } from '../../firebase/clientApp'
import { collection, getDocs, doc, getDoc, updateDoc, setDoc } from "firebase/firestore";

import firebase, {auth, db, provider} from '../../firebase/clientApp'
import Image from 'next/image';

function Admin() {

  const docRef = doc(db, "admin", "listOfAllUsers");
  const [clientList, setClientList] = useState(null)
  const [clientListArray, setClientListArray] = useState([])
  const [clientSelected, setClientSelected] = useState(null)
  
  useEffect(() => {
    
    async function getClientList() {

          const docRef = doc(db, "admin", "clientList");
          const docSnap = await getDoc(docRef);
      
          if (docSnap.exists()) {
            const yes = docSnap.data()
            setClientList(yes)
            const tempArray = []
            Object.values(docSnap.data()).map((value) => tempArray.push(value))
            setClientListArray(tempArray)
          } else {
            console.log("No such document!");
          }
    }
    getClientList()
  }, [])
  
  function check() {
    // Object.keys(clientSelected).map((key) => console.log(key))
    // console.log(clientSelected)
    // console.log(clientSelected.uidWithoutNumberAtTheStart)
    // const dateUtc = new Date()
    console.log(Date.parse(new Date()))
    
  }

  const [fileUpload, setFileUpload] = useState(null)
  const [fileUrl, setFileUrl] = useState(null)
  const uploadFile = async () => {

    const fileNameRegexed = fileUpload.name.replace(/.wav|.mp3|.jpg|.jpeg|/, '')
    console.log(fileNameRegexed)
    console.log('called')

    const songTitle = 'temporarySong'
    let downloadURL = ''
    if (fileUpload == null) return;
    const folderRef = ref(storage, `masters/${fileUpload.name}`) // making a reference to the bucket + name to give file


    const docRef = doc(db, clientSelected.uidWithoutNumberAtTheStart, songTitle)
    const docSnap = await getDoc(docRef)


    await uploadBytes(folderRef, fileUpload).then((snapshot) => {

      getDownloadURL(snapshot.ref).then((url) => {
        downloadURL = url
        console.log(url)
        console.log(downloadURL)
      

      if (docSnap.exists()) {
        console.log('song exists')
        updateDoc(docRef, {
          [fileNameRegexed]: {
            downloadURL: downloadURL,
            date: Date.parse(new Date()),
            revisionNote: 'this iTHIRRRD schema works.'
          }
        })

      } else {
        console.log('song doesnt exist')
        setDoc(docRef, {
          [fileNameRegexed]: {
            downloadURL: downloadURL,
            date: Date.parse(new Date()),
            revisionNote: 'this is a SECOND REVISIONink this schema works.'
          }
          
        })
      }

      // setDoc(songRef, {
      //   [fileNameRegexed]: {
      //     downloadURL: downloadURL,
      //     date: Date.parse(new Date()),
      //     revisionNote: 'this is a SECOND REVISIONink this schema works.'
      //   }
        
      // })






      // if (songRef) {
      //   // update it
      //   console.log('song exists, updating now...')
      // } else {
      //   // create it
      //   console.log('new song, creating document...')
      //   setDoc(songRef, {
      //     [fileNameRegexed]: {
      //       downloadURL: downloadURL,
      //       date: 123,
      //       revisionNote: 'this is a SECOND REVISIONink this schema works.'
      //     }
          
      //   })
      // }
      
      // setDoc(doc(db, clientSelected.uidWithoutNumberAtTheStart, songTitle), {


        /*
           i think the solution here is to
           either GET all the array data, push new data onto that, then reupload it, which feels fine at this scale
           otherwise
           i could store the revisions in an object, adding keys to make them easily iterable (or using the date)
           so adding the date with the file uploads and then sorting them by that when i need to display the revisions
           but that feels like i'm creating more data than i need, 

        */


      // updateDoc(songRef, {
      //   revisions: [
      //     {
      //       downloadURL: downloadURL,
      //       fileName: fileUpload.name,
      //       revisionNote: 'this is a revision nyeahyeahyeahem. i think this schema works.'
      //     }
      //   ]
      // }, {merge: true})

      // setDoc(songRef, {
      //   revisions: [
      //     {
      //       downloadURL: downloadURL,
      //       fileName: fileUpload.name,
      //       revisionNote: 'this is a revision nyeahyeahyeahem. i think this schema works.'
      //     }
      //   ]
      // }, {merge: true})
      // const dateUtc = new Date().toUTCString

      // setDoc(songRef, {
      //   [fileNameRegexed]: {
      //     downloadURL: downloadURL,
      //     date: 123,
      //     revisionNote: 'this is a SECOND REVISIONink this schema works.'
      //   }
        
      // })


      })
    })
  }

  // database architecture
  // i think the first is better - having a document per song
  // it allows me more flexibility later if I want to store metadata or other info
  // it also doesn't risk hitting the 1mb limit for documents,
    // which allows me to not *need* to clear the data once the final master is delivered
  /*
  collection: client
  document: song name
  field: [{download url0, revision notes0}, [download url1, revision notes1], [download url2, revision notes2]] - changes every round
  */

  /*
  collection: client
  document: songs
  song: [[download url0, revision notes0], [download url1, revision notes1], [download url2, revision notes2]] - changes every round
  */

  const fileInputOnChange = (event) => {
    const x = event.target.files[0]
    setFileUpload(event.target.files[0])
    event.target.value = null;
    // const fileNameRegexed = x.name.replace(/.wav|.mp3/, '')
    // console.log(fileNameRegexed)
  }

  return ( 
    <div className={styles.admin}>
      <label htmlFor='fileSelectionButton' className={styles.uploadButton}>Select file...</label>
      <input id='fileSelectionButton' type="file" style={{display: 'none'}} onChange={(event) => {fileInputOnChange(event)}}/>

      <label htmlFor='uploadButton' className={styles.uploadButton}>Upload File</label>
      <button id='uploadButton' onClick={uploadFile} style={{display: 'none'}} > Upload Image</button>

      <h3>File chosen for upload: {fileUpload ? fileUpload.name : ""}</h3>
      <button onClick={() => check()}>log list</button>
      {clientSelected && <h5>client selected: {clientSelected.displayName} {clientSelected.uid}</h5>}
      <ul>

        {clientListArray &&
          clientListArray.map((x) => {

            return (
              <ul key={x.uid} className={styles.clientInfoListItem} onClick={() => setClientSelected(x)}>
              {/* <ul key={x.uid} className={styles.clientInfoListItem}> */}
                                {<Image 
                  key={x.uid}
                  src={x.photoURL} 
                  className={styles.userIcon}
                  alt="User Photo" 
                  width={'100%'} 
                  height={'100%'} /> }
                {/* {Object.values(x).map((value) => <li key={value} className={styles.clientInfoListItemListItem} onClick={() => setClientSelected(value)}> */}
                {Object.values(x).map((value) => <li key={value} className={styles.clientInfoListItemListItem}>
                  {/* {value} */}
                  {value}
                </li>)}
              </ul>
            )
          })
        }
        {/* {clientListArray && clientListArray[0]} */}





      </ul>
        {/* <audio controls src="https://firebasestorage.googleapis.com/v0/b/xktransfer-30d93.appspot.com/o/masters%2FOCHE%CC%81%20-%20Amina%20%5Bdy_26082022_mp3%5D.mp3?alt=media&token=1c7a207d-4467-4dfe-8b65-3b533356d783"></audio> */}
    </div>
  )
}

export default Admin