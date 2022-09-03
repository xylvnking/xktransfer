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

  const [clientList, setClientList] = useState(null)
  const [clientListArray, setClientListArray] = useState([])
  const [clientSelected, setClientSelected] = useState(null)
  
  
  useEffect(() => { // load client list

    const cloneOfClientListArray = []
    
    async function getClientList() {

          // get all clients
          const docRef = doc(db, "admin", "clientList");
          const docSnap = await getDoc(docRef);
          if (docSnap.exists()) {
            const yes = docSnap.data()
            setClientList(yes)
            const tempArray = []
            Object.values(docSnap.data()).map((value) => tempArray.push(value))

            // setClientListArray(tempArray)

            // get all songs for each client
            for (let z = 0; z < tempArray.length; z++) {
              let songDoc = tempArray[z].uidWithoutNumberAtTheStart
              const querySnapshot = await getDocs(collection(db, songDoc));
              querySnapshot.forEach((doc) => {
                    if (doc.id !== 'settings') {
                      tempArray[z].songs = doc.data()
                    }
                  });
            }
        
            setClientListArray(tempArray)

            
            // cloneOfClientListArray = tempArray
            
            
          } else {
            console.log("No such document!");
          }
    }
    getClientList()

  }, [])
  



  function check() {
    getAllSongsByClient()
  }





  
  // const getAllSongsByClient = async () => {
  async function getAllSongsByClient () {
    const cloneOfClientListArray = JSON.parse(JSON.stringify(clientListArray))
    for (let z = 0; z < cloneOfClientListArray.length; z++) {
      let songDoc = cloneOfClientListArray[z].uidWithoutNumberAtTheStart
      const querySnapshot = await getDocs(collection(db, songDoc));
      querySnapshot.forEach((doc) => {
            if (doc.id !== 'settings') {
              cloneOfClientListArray[z].songs = doc.data()
            }
          });
    }

    setClientListArray(cloneOfClientListArray)
  }



  const [fileUpload, setFileUpload] = useState(null)
  const [fileUrl, setFileUrl] = useState(null)

  const uploadFile = async () => {
    if (fileUpload == null) return;

    const fileNameRegexed = fileUpload.name.replace(/.wav|.mp3|.jpg|.jpeg/, '')
    // console.log(`file name regexed is ${fileNameRegexed}`)
    const songTitle = 'temporarySong2'
    let downloadURL = ''
    const folderRef = ref(storage, `masters/${fileUpload.name}`) // making a reference to the bucket + name to give file
    const docRef = doc(db, clientSelected.uidWithoutNumberAtTheStart, songTitle)
    const docSnap = await getDoc(docRef)

    await uploadBytes(folderRef, fileUpload).then((snapshot) => { // upload document

      getDownloadURL(snapshot.ref).then((url) => { // get uploaded document URL
        downloadURL = url

        if (docSnap.exists()) { // if the song has already been created, update it
          console.log('song exists')
          updateDoc(docRef, {
            [fileNameRegexed]: {
              downloadURL: downloadURL,
              date: Date.parse(new Date()),
              revisionNote: 'this iTHIRRRD schema works.'
            }
          })

        } else { // if th song doesn't exist, create a document for it
          console.log('song doesnt exist')
          setDoc(docRef, {
            [fileNameRegexed]: {
              downloadURL: downloadURL,
              date: Date.parse(new Date()),
              revisionNote: 'this is a SECOND REVISIONink this schema works.'
            }
          })
        }
      })
    })
  }

  const fileInputOnChange = (event) => {
    setFileUpload(event.target.files[0])
    event.target.value = null;
  }

  return ( 
    <div className={styles.admin}>
      <label htmlFor='fileSelectionButton' className={styles.uploadButton}>Select file...</label>
      <input id='fileSelectionButton' type="file" style={{display: 'none'}} onChange={(event) => {fileInputOnChange(event)}}/>

      <label htmlFor='uploadButton' className={styles.uploadButton}>Upload File</label>
      <button id='uploadButton' onClick={uploadFile} style={{display: 'none'}} > Upload Image</button>

      <h3>File chosen for upload: {fileUpload ? fileUpload.name : ""}</h3>
      <button onClick={() => check()}>CHECK</button>
      {clientSelected && <h5>client selected: {clientSelected.displayName} {clientSelected.uid}</h5>}

      <ul>
        {clientListArray &&
          clientListArray.map((x) => {
            return (

              <ul key={x.uid} className={styles.clientInfoListItem} onClick={() => setClientSelected(x)}>
                {<Image 
                  key={x.uid}
                  src={x.photoURL} 
                  className={styles.userIcon}
                  alt="User Photo" 
                  width={'100%'} 
                  height={'100%'} /> }
                  <section className={styles.clientInfo}>
                    {Object.values(x).map((value) => <li key={value} className={styles.clientInfoListItemListItem}>
                      {
                      typeof value == 'string' ?
                      value
                      :
                      null
                      
                      }
                      {/* {
                        typeof value !== 'string' ?
                        'YERRRR' : null
                      } */}
                    </li>)}
                  </section>

                <ul className={styles.songList}>
                {Object.values(x).map((value) => <ul key={value} className={styles.songListItem}>
                      {
                        typeof value !== 'string' 
                        ?
                        Object.keys(value).map((value2) => <li key={value2} className={styles.songListItemListItem}>{value2}</li>)
                        : 
                        ""
                      }
                    </ul>)}
                  <li>song1</li>
                  <li>song2</li>
                  <li>song3</li>
                  <li>song4</li>
                  {
                  }
                </ul>
              </ul>
            )
          })
        }
      </ul>
      
        {/* <audio controls src="https://firebasestorage.googleapis.com/v0/b/xktransfer-30d93.appspot.com/o/masters%2FOCHE%CC%81%20-%20Amina%20%5Bdy_26082022_mp3%5D.mp3?alt=media&token=1c7a207d-4467-4dfe-8b65-3b533356d783"></audio> */}
    </div>
  )
}

export default Admin