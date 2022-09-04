// import React from 'react'
import React, {useState, useEffect} from 'react'
import styles from '../../styles/Home.module.css'
import adminStyles from '../../styles/Admin.module.css'
import songStyles from '../../styles/Song.module.css'
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
    event.preventDefault() // prevents form fomr refreshing page, just in case you want it later
    console.log(event.target[0].files[0].name)
    if (fileUpload == null) return;

    const fileNameRegexed = event.target[0].files[0].name.replace(/.wav|.mp3|.jpg|.jpeg/, '')

    let downloadURL = ''
    const songTitle = event.target[1].value 
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
    // event.target.value = null // unsure if i need this, keeping it for later in case debugging and need option
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
        <div className={adminStyles.selectFileContainer}>
          <label htmlFor='fileSelectionButton' className={adminStyles.adminFormButton}>Select File</label>
          <input id='fileSelectionButton' type="file" style={{display: 'none'}} onChange={(event) => {fileInputOnChange(event)}}/>
          <p className={adminStyles.fileSelectedName}>{fileUpload ? fileUpload.name : ""}</p>
        </div>
        <input type='text' defaultValue={songSelected}/>
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

      
      {/* {clientSelected && <h5>client selected: {clientSelected.displayName} {clientSelected.uid}</h5>} */}

      <ul className={styles.list}>
        {clientListArray &&
          clientListArray.map((x) => {
            return (
              <ul key={x.uid} className={adminStyles.client} onClick={() => setClientSelected(x)}>
                <li className={adminStyles.clientInfoCard}>
                  {<Image 
                  key={x.uid}
                  src={x.photoURL} 
                  // className={styles.userIcon}
                  alt="User Photo" 
                  width={'100%'} 
                  height={'100%'} 
                  style={{
                    overflow:'hidden',
                    borderRadius: '50%',
                    borderStyle: 'solid',
                    borderWidth: '2px',
                    borderColor: 'rgb(255, 255, 255)'
                    
                  }}
                  /> }
                  <section className={adminStyles.clientInfo}>
                    {x.displayName}
                    <br />
                    <p className={adminStyles.clientInfoCardEmail}>{x.uid}</p>
                    <p className={adminStyles.clientInfoCardEmail}>{x.email}</p>
                  </section>
                </li>

                <ul className={songStyles.songList}>
                  {x.songs.map((song, index) => <ul key={x.uid + index} className={songStyles.fileListItem}>
                    {Object.keys(song).map((songData, index) => <ul key={index} className={songStyles.fileVersion} onClick={() => setSongSelected(song[songData].songName)}>
                      <li className={songStyles.songName}>{song[songData].songName}</li>
                      {/* <li>{songData}</li> */}
                      <li className={songStyles.filename}>{song[songData].fileNameRaw}</li>
                      <br />
                      <li className={songStyles.revisionNote}>{song[songData].revisionNote}</li>
                      <br />
                      {/* <li>{returnDate(song[songData].date.seconds).toLocaleString()}</li> */}
                      <li><audio className={styles.audio} key={song[songData].getDownloadURL} controls src={song[songData].downloadURL}></audio></li>
                      {/* <label htmlFor='deleteSongButton' className={adminStyles.adminFormButton}>delete</label> */}
                      <div style={{display: 'flex', justifyContent: 'end'}}>
                        <button onClick={() => deleteSong(song[songData].fileNameRaw, song[songData].songName, x)} className={songStyles.songDeleteButton}>DELETE</button>
                      </div>
                      
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