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
import Image from 'next/image';


function Admin() {

      // Object.keys(clientList).forEach(function(key, index) {
      //   return (
      //     <li>{key}</li>
      //   )
      // }
      // )

        
        

  const docRef = doc(db, "admin", "listOfAllUsers");
  const [clientList, setClientList] = useState(null)
  const [clientListArray, setClientListArray] = useState([])
  
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


  
  useEffect(() => {
    
    async function getClientList() {



      // const clientList = db.collection('admin').doc('clientList');
      // const doc = await clientList.get();
      // if (!doc.exists) {
      //   console.log('No such document!');
      // } else {
      //   console.log('Document data:', doc.data());
      // }


      
          const docRef = doc(db, "admin", "clientList");
          const docSnap = await getDoc(docRef);
      
          if (docSnap.exists()) {
            const yes = docSnap.data()
            setClientList(yes)

            const tempArray = []
            // Object.keys(docSnap.data()).map((keys) => tempArray.push(docSnap.data()))
            Object.values(docSnap.data()).map((value) => tempArray.push(value))
            // tempArray.push(docSnap.data())
            // console.log(tempArray)
            setClientListArray(tempArray)
            // console.log("Document data:", docSnap.data());
            // console.log(docSnap.data())
          } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
          }




    }
    getClientList()
    




  }, [])


  function check() {
    // Object.keys(clientList).map((key) => console.log(clientList))
    // console.log(clientListArray[0])
    // const thing = clientListArray[0]
    // console.log(clientListArray[0])
    console.log(clientListArray)
    // console.log(clientList.thing)
    // console.log(clientList.81nH8EWF2lSsSXf6Fkc3FaluRMA3)
    // console.log(typeof clientList)
    // console.log(` client array is ${clientListArray[1]}`)
    // console.log(` clientList is ${clientList.dy81nH8EWF2lSsSXf6Fkc3FaluRMA3.email}`)
    // console.log(` clientList is ${clientList[clientListArray[0]]}`)
  }

  
  if (clientList) {
    // Object.keys(clientList).map((key) => console.log(clientList))
    // clientListArray.map((x) => console.log(x))
  }



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
    <input id='fileSelectionButton' type="file" style={{display: 'none'}} onChange={(event) => {fileInputOnChange(event)}}/>
    <label htmlFor='uploadButton' className={styles.uploadButton}>Upload File</label>
    <button id='uploadButton' onClick={uploadFile} style={{display: 'none'}} > Upload Image</button>
    <h3>File chosen for upload: {fileUpload ? fileUpload.name : ""}</h3>
    <button onClick={() => check()}>log list</button>
    <ul>
      {/* {clientList &&
      // Object.keys(clientList).map((key) => (<li key={key}>{key}</li>))
      // Object.values(clientList).map((value) => (<li key={value.uid}>{value.uid}</li>))
      Object.values(clientList).map((value) => (<li key={value.uid}>{value.uid}</li>))
      // Object.values(clientList).map((value) => (<li key={value.uid}>{value.email}</li>))
      }
      {clientList &&
      // Object.keys(clientList).map((key) => (<li key={key}>{key}</li>))
      // Object.values(clientList).map((value) => (<li key={value.uid}>{value.uid}</li>))
      // Object.values(clientList).map((value) => (<li key={value.uid}>{value.uid}</li>))
      Object.values(clientList).map((value) => (<li key={value.uid}>{value.email}</li>))
      } */}


      
      {clientListArray &&
        clientListArray.map((x) => {

          return (
            <ul key={x.uid} className={styles.clientInfoListItem}>
                              {<Image 
                key={x.uid}
                src={x.photoURL} 
                className={styles.userIcon}
                alt="User Photo" 
                width={'100%'} 
                height={'100%'} /> }
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