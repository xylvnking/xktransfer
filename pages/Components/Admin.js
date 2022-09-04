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
    
    async function getClientList() {

          // get all clients
          const docRef = doc(db, "admin", "clientList");
          const docSnap = await getDoc(docRef);
          if (docSnap.exists()) {
            const yes = docSnap.data()
            setClientList(yes)
            const tempArray = []
            Object.values(docSnap.data()).map((value) => tempArray.push(value))

            // get all songs for each client
            for (let z = 0; z < tempArray.length; z++) {
              const tempSongsArray = []
              let songDoc = tempArray[z].uidWithoutNumberAtTheStart
              const querySnapshot = await getDocs(collection(db, songDoc));
              // console.log('looper')
              querySnapshot.forEach((doc) => {
                if (doc.id !== 'settings') {
                  tempSongsArray.push(doc.data())
                }
              });
              tempArray[z].songs = tempSongsArray
            }
            setClientListArray(tempArray)
          } else {
            console.log("No such document!");
          }
    }
    getClientList()

  }, [])

  function check() {
    console.log(clientListArray)
  }

  const [fileUpload, setFileUpload] = useState(null)
  const [fileUrl, setFileUrl] = useState(null)

  const uploadFile = async (event) => {
    event.preventDefault()
    // console.log(event.target.files[0])
    console.log(event.target[0].files[0].name)
    // console.log(event.target[1].value)
    if (fileUpload == null) return;

    // const fileNameRegexed = fileUpload.name.replace(/.wav|.mp3|.jpg|.jpeg/, '')
    const fileNameRegexed = event.target[0].files[0].name.replace(/.wav|.mp3|.jpg|.jpeg/, '')
    // console.log(`file name regexed is ${fileNameRegexed}`)



    // const songTitle = 'song2' // MAKE THIS THE FILENAME !!!!
    const songTitle = event.target[1].value 



    // const songTitle = fileNameRegexed // MAKE THIS THE FILENAME !!!!
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
              // date: Date.parse(new Date()),
              fileNameRegexed: fileNameRegexed,
              songName: songTitle,
              date: new Date(),
              revisionNote: 'this iTHIRRRD schema works.'
            }
          })

        } else { // if th song doesn't exist, create a document for it
          console.log('song doesnt exist')
          setDoc(docRef, {
            [fileNameRegexed]: {
              downloadURL: downloadURL,
              // date: Date.parse(new Date()),
              fileNameRegexed: fileNameRegexed,
              songName: songTitle,
              date: new Date(),
              revisionNote: 'this is a SECOND REVISIONink this schema works.'
            }
          })
        }
      })
    })
  }

  const fileInputOnChange = (event) => {
    setFileUpload(event.target.files[0])
    // console.log(event.target.files[0])
    // event.target.value = null;
  }

  const returnDate = (utcStringDate) => {
    const yer = new Date(utcStringDate * 1000)
    return yer
  }

  return ( 
    <div className={styles.admin}>

      {/* YOU HAVE TO MAKE THIS A FORM instead */}

      <form onSubmit={uploadFile}>
        <label htmlFor='fileSelectionButton' className={styles.uploadButton}>Select file...</label>
        <input id='fileSelectionButton' type="file" style={{display: 'none'}} onChange={(event) => {fileInputOnChange(event)}}/>
        <input type='text' defaultValue='enter the song title here'></input>
        <button type="submit">upload file</button>
      </form>
      {/* <label htmlFor='uploadButton' className={styles.uploadButton}>Upload File</label>
      <button id='uploadButton' onClick={uploadFile} style={{display: 'none'}} > Upload Image</button> */}

      <h3>File chosen for upload: {fileUpload ? fileUpload.name : ""}</h3>
      <button onClick={() => check()}>CHECK</button>
      {clientSelected && <h5>client selected: {clientSelected.displayName} {clientSelected.uid}</h5>}

      <ul className={styles.list}>
        {clientListArray &&
          clientListArray.map((x) => {
            return (
              <ul key={x.uid} className={styles.clientInfoListItem} onClick={() => setClientSelected(x)}>
                <li className={styles.clientInfoCard}>
                  {<Image 
                  key={x.uid}
                  src={x.photoURL} 
                  className={styles.userIcon}
                  alt="User Photo" 
                  width={'100%'} 
                  height={'100%'} 
                  /> }
                  <section className={styles.clientInfo}>
                    {x.displayName}
                    <br />
                    <p className={styles.clientInfoCardEmail}>{x.uid}</p>
                    <p className={styles.clientInfoCardEmail}>{x.email}</p>
                  </section>
                </li>

                <ul className={styles.songList}>
                  {x.songs.map((song, index) => <ul key={x.uid + index} className={styles.fileListItem}>

                    <li>{Object.values(song).map((songDataValues) => songDataValues.songName)}</li>

                    {Object.keys(song).map((songData, index) => <ul key={index} className={styles.fileVersion}>
                      <li>{song[songData].songName}</li>
                      <li>{songData}</li>
                      <br />
                      <li>{song[songData].revisionNote}</li>
                      <br />
                      <li>{returnDate(song[songData].date.seconds).toLocaleString()}</li>
                      <li><audio className={styles.audio} key={song[songData].getDownloadURL} controls src={song[songData].downloadURL}></audio></li>
                      
                    </ul>)}
                  </ul>)}
                </ul>
              </ul>
            )
          })
        }
      </ul>
    
    </div>
  )
}

export default Admin