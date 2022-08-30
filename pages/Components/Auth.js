import React, {useState, useEffect} from 'react'
// import "firebase/auth";
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from 'firebase/auth'

import { db, auth, provider } from '../../firebase/clientApp';


function Auth() {

    const [loginStatus, setLoginStatus] = useState(false)

    const signInWithGoogle = async () => {
        console.log('yeah')
        await signInWithPopup(auth, provider).then((result) => {
            setLoginStatus(true)
            console.log(result)
            console.log("signing in")
        }) 
    }
    const signUserOut = async () => {
        await signOut(auth).then(() => {
            setLoginStatus(true)
            console.log("signing out")
        })
    }

    // onAuthStateChanged(auth, (user) => {
    //     console.log('auth state changed')
    //     if (user) {
    //         setUserInfo(user)
    //         checkIfNewUser(user)
          
    //     } else {
    //         setUserInfo()
    //     }
    // })

    return (
        <div>
            <button onClick={signInWithGoogle}
                className="button6"
            
            > Sign In</button>
            
            <button onClick={signUserOut}
                className="button6"
            
            > Sign Out</button>
            <h1
                style={{
                    borderStyle: 'solid',
                    borderColor: '#00C5FF',
                    padding: '10px',
                    borderRadius: '10px',
                    fontSize: '24px',
                    cursor: 'pointer',
                    color: 'white'
                }}
            >
            yer {loginStatus ? "logged in" : "logged out"}
            </h1>
        </div>
  )
}

export default Auth