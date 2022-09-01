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
import { collection, getDocs, doc, getDoc } from "firebase/firestore";
import firebase, {auth, db, provider} from '../../firebase/clientApp'


function Admin() {

  const docRef = doc(db, "admin", "listOfAllUsers");
  const [clientList, setClientList] = useState()
  
  // useEffect(() => {
  //   async function loadClientList() {
  //     const docSnap = await getDoc(docRef);
  //     if (docSnap.exists()) {
  //       console.log("Document data:", docSnap.data());
  //       setClientList(docSnap.data())
  //     } else {
  //       console.log("No such document!");
  //     }
  //   }
  //   loadClientList()
  // }, [])

    // const querySnapshot = await getDocs(collection(db, "admin"));
  // querySnapshot.forEach((doc) => {
  //   console.log(`${doc.id} => ${doc.data()}`);
  // });




  const [fileUpload, setFileUpload] = useState(null)
  const [fileUrl, setFileUrl] = useState(null)
  const uploadFile = () => {
    if (fileUpload == null) return;
    const folderRef = ref(storage, `masters/${fileUpload.name}`) // making a reference to the bucket + name to give file
    uploadBytes(folderRef, fileUpload).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        console.log(url)
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
      <input id='fileSelectionButton' type="file" style={{display: 'none'}}
        onChange={(event) => {fileInputOnChange(event)}}/>


      <label htmlFor='uploadButton' className={styles.uploadButton}>Upload File</label>
      <button id='uploadButton' onClick={uploadFile} style={{display: 'none'}} > Upload Image</button>
      <h3>File chosen for upload: {fileUpload ? fileUpload.name : ""}</h3>
      <button onClick={() => console.log(clientList)}>log list</button>
      {/* <audio controls src="https://firebasestorage.googleapis.com/v0/b/xktransfer-30d93.appspot.com/o/masters%2FOCHE%CC%81%20-%20Amina%20%5Bdy_26082022_mp3%5D.mp3?alt=media&token=1c7a207d-4467-4dfe-8b65-3b533356d783"></audio> */}
    </div>
  )
}

export default Admin