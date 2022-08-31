// import React from 'react'
import React, {useState, useEffect} from 'react'
import {
  ref,
  uploadBytes,
  getDownloadURL,
  listAll,
  list,
} from "firebase/storage";
import { storage } from '../../firebase/clientApp'

function Admin() {

  const [fileUpload, setFileUpload] = useState(null)
  // console.log(fileUpload.name)

  return (
    <div>
      <h1>ADMIN COMPONENT:</h1>
      <input
        type="file"
        onChange={(event) => {
          setFileUpload(event.target.files[0])
          console.log(event.target.files[0].name);
        }}
      />

      
      {/* <button onClick={uploadFile}> Upload Image</button> */}
    </div>
  )
}

export default Admin