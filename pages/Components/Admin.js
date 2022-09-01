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
import { collection, getDocs, doc, getDoc, updateDoc } from "firebase/firestore";

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
    console.log(clientSelected)
  }

  const [fileUpload, setFileUpload] = useState(null)
  const [fileUrl, setFileUrl] = useState(null)
  const uploadFile = async () => {
    let downloadURL = ''
    if (fileUpload == null) return;
    const folderRef = ref(storage, `masters/${fileUpload.name}`) // making a reference to the bucket + name to give file

    await uploadBytes(folderRef, fileUpload).then((snapshot) => {

      getDownloadURL(snapshot.ref).then((url) => {
        downloadURL = url
        console.log(url)
        console.log(downloadURL)

      updateDoc(doc(db, clientSelected.uidWithoutNumberAtTheStart, "songs"), {
        createSongNameMethodVariable: downloadURL
        
      })

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