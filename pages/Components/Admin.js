// import React from 'react'
import React, {useState, useEffect} from 'react'
import styles from '../../styles/Home.module.css'
import adminStyles from '../../styles/Admin.module.css'
import { ref, uploadBytes, getDownloadURL, listAll, list, getStorage, deleteObject} from "firebase/storage";
import { storage } from '../../firebase/clientApp'
import { collection, getDocs, doc, getDoc, updateDoc, setDoc, deleteDoc } from "firebase/firestore";
import firebase, {auth, db, provider} from '../../firebase/clientApp'
import Image from 'next/image';

// const storage = getStorage();

function Admin() {

  const [clientList, setClientList] = useState([])
  const [clientListArray, setClientListArray] = useState([])
  const [clientSelected, setClientSelected] = useState(null)
  const [songSelected, setSongSelected] = useState('')
  
  
  useEffect(() => { // load client list
    
    async function getClientList() {

          // get all clients
          const docRef = doc(db, "admin", "clientList");
          const docSnap = await getDoc(docRef);
          if (docSnap.exists()) {

            // getting list of clients uid to populate form
            if (clientList.length == 0) {
              Object.keys(docSnap.data()).map((value) => setClientList((current) => {
                return [
                  ...current,
                  value
                ]
              }))
            }
            
            // get all client data, except songs
            const tempArray = []
            Object.values(docSnap.data()).map((value) => tempArray.push(value))

            // get all songs for each client
            for (let z = 0; z < tempArray.length; z++) {
              const tempSongsArray = []
              let songDoc = tempArray[z].uidWithoutNumberAtTheStart
              const querySnapshot = await getDocs(collection(db, songDoc));
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
    console.log(clientSelected)
  }


  const [fileUpload, setFileUpload] = useState(null) // this gets set to a file
  const [fileUrl, setFileUrl] = useState(null)

  const uploadFile = async (event) => {
    event.preventDefault()
    // console.log(event.target.files[0])
    console.log(event.target[0].files[0].name)
    // console.log(event.target[1].value)
    if (fileUpload == null) return;

    // const fileNameRegexed = fileUpload.name.replace(/.wav|.mp3|.jpg|.jpeg/, '')
    const fileNameRegexed = event.target[0].files[0].name.replace(/.wav|.mp3|.jpg|.jpeg/, '')


    const songTitle = event.target[1].value 




    let downloadURL = ''
    const folderRef = ref(storage, `masters/${fileUpload.name}`) // making a reference to the bucket + name to give file
    const docRef = doc(db, clientSelected.uidWithoutNumberAtTheStart, songTitle)
    const docSnap = await getDoc(docRef)

    await uploadBytes(folderRef, fileUpload).then((snapshot) => { // upload document

      getDownloadURL(snapshot.ref).then((url) => { // get uploaded document URL
        downloadURL = url

        if (docSnap.exists()) {

          setDoc(docRef, {
            [fileNameRegexed]: {
              downloadURL: downloadURL,
              // date: Date.parse(new Date()),
              fileNameRegexed: fileNameRegexed,
              songName: songTitle,
              date: new Date(),
              revisionNote: '',
              fileNameRaw: event.target[0].files[0].name

            }
          })
          // updateDoc(docRef, {
          //   [fileNameRegexed]: {
          //     downloadURL: downloadURL,
          //     // date: Date.parse(new Date()),
          //     fileNameRegexed: fileNameRegexed,
          //     songName: songTitle,
          //     date: new Date(),
          //     revisionNote: 'this iTHIRRRD schema works.',
          //     isMostRecentVersion: true
          //   }
          // })

        } else {
          setDoc(docRef, {
            [fileNameRegexed]: {
              downloadURL: downloadURL,
              // date: Date.parse(new Date()),
              fileNameRegexed: fileNameRegexed,
              songName: songTitle,
              date: new Date(),
              revisionNote: '',
              fileNameRaw: event.target[0].files[0].name
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

  const deleteSong = async (fileNameOfSongToBeDeletedFromFirestore, songNameOfSongToBeDeletedFromFirestore, clientUidWithoutNumberAtTheStart) => {
    if (fileNameOfSongToBeDeletedFromFirestore) {

      const songReference = ref(storage, 'masters/' + fileNameOfSongToBeDeletedFromFirestore);
      deleteObject(songReference).then(() => {
        deleteDoc(doc(db, clientUidWithoutNumberAtTheStart.uidWithoutNumberAtTheStart, songNameOfSongToBeDeletedFromFirestore))
        console.log('file deleted!')
      }).catch((error) => {
        console.log(error)
      })

      

    } else {
      console.log('file didnt exist apparently')
    }
  } 

  return ( 
    <div className={adminStyles.admin}>
      <form className={adminStyles.adminForm} onSubmit={uploadFile}>
        <label htmlFor='fileSelectionButton' className={adminStyles.adminFormButton}>Select File</label>
        <input id='fileSelectionButton' type="file" style={{display: 'none'}} onChange={(event) => {fileInputOnChange(event)}}/>
        <input type='text' defaultValue={songSelected}></input>
        <select>
          {clientList.map((client) => {
            return (
              <option key={client}>{client}</option>
              )
            })}
        </select>
        <button type="submit" className={adminStyles.adminFormButtonUpload}>upload file</button>
      </form>
      {/* <button onClick={() => check()}>CHECK</button> */}

      <h3>File chosen for upload: {fileUpload ? fileUpload.name : ""}</h3>
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
                    {Object.keys(song).map((songData, index) => <ul key={index} className={styles.fileVersion} onClick={() => setSongSelected(song[songData].songName)}>
                      <li>{song[songData].songName}</li>
                      <li>{songData}</li>
                      <br />
                      <li>{song[songData].revisionNote}</li>
                      <br />
                      <li>{song[songData].fileNameRaw}</li>
                      <button onClick={() => deleteSong(song[songData].fileNameRaw, song[songData].songName, x)}>DELETE</button>
                      <br />
                      {/* <li>{returnDate(song[songData].date.seconds).toLocaleString()}</li> */}
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