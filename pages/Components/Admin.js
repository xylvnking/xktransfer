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
    // console.log(Date.parse(new Date()))
    // getAllSongsByClient()
    // console.log(getList())
    // console.log(clientListArray)
    getAllSongsByClient()
  }




  
  // const getAllSongsByClient = async () => {
  async function getAllSongsByClient () {
    

    // Object.values(docSnap.data()).map((value) => tempArray.push(value))
    const tempArray2 = []
    clientListArray.map((x) => tempArray2.push(x))
    // console.log(tempArray2)


    const songListArray = []

    // for each in clientListArray
      // push the docs/songs from the collection matching their uid into a clientData array
        // so that you can iterate over that to create the ui instead
    const toBeClientDataArray = []
    clientListArray.map((client) => {
      // console.log(client.uidWithoutNumberAtTheStart)
      let y = client.uidWithoutNumberAtTheStart
      // console.log(client)


      // const querySnapshot = getDocs(collection(db, y));
      // // console.log(querySnapshot)

      // querySnapshot.forEach((doc) => {
      //   if (doc.id !== 'settings') {
      //     songListArray.push(doc.data())
      //     // console.l
      //     // console.log('yes')
      //     console.log(doc.id, " => ", doc.data());
      //   }
      // });


    })


    // this gets all the songs for the selected client
    // i need it to get all the songs for every client
    // mapping over the client list and doing this per element seems to not work, might have done it wrong so worth retrying
    // maybe get all that data from firebase first, store it in a variable locally, and then iterate over that -
      // because i think the await wasn't working and the promising wasn't resolving if i used .map - maybe there's a way to make map async
        // either way, you've got the data, figure out how to combine it. find index, filter, etc


    const querySnapshot = await getDocs(collection(db, clientSelected.uidWithoutNumberAtTheStart));
    querySnapshot.forEach((doc) => {
      if (doc.id !== 'settings') {
        songListArray.push(doc.data())
        // console.log(doc.id, " => ", doc.data());
      }
    });





    console.log(`songListArray is`)
    console.log(songListArray)
    console.log(`clientListArray is`)
    console.log(clientListArray)


    
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
                      {value}
                    </li>)}
                  </section>

                <ul className={styles.songList}>
                  <li>song1</li>
                  <li>song2</li>
                  <li>song3</li>
                  <li>song4</li>
                  {
                    // clientSelected && getList()
                  }
                </ul>

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