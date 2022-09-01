import React, {useState, useEffect} from 'react'
// import "firebase/auth";
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from 'firebase/auth'

import { db, auth, provider } from '../../firebase/clientApp';

import { collection, addDoc, doc, getDoc, setDoc } from "firebase/firestore"; 

// import {useAuthState} from "react-firebase-hooks/auth"
import {useAuthState} from "react-firebase-hooks/auth"





function Auth() {

    const [userAuth, userAuthIsLoading, userAuthError] = useAuthState(auth)

    const [loginStatus, setLoginStatus] = useState()
    const [client, setClient] = useState()

    const signInWithGoogle = async () => {
        await signInWithPopup(auth, provider).then((result) => {
            setLoginStatus(true)
            setClient(result.user)
            checkIfNewClient(result.user)
            console.log("signing in")
        })
        .catch(function (error) {
            console.error(error);
        })
    }
    const signUserOut = async () => {
        await signOut(auth, provider).then(() => {
            setLoginStatus(false)
            setClient(null)
            console.log("signing out")
        })
        .catch(function (error) {
            console.error(error);
        })
    }

    // console.log(userAuth)

    const createNewClient = async (user) => {
        try {
            // const docRef = await addDoc(collection(db, client.uid), {
            // uid: client.uid,
            // displayName: client.displayName,
            // email: client.email,
            // photoUrl: client.photoUrl,
            // clientInfo: client
            // });
            // console.log("Document written with ID: ", docRef.id);
            console.log(user)
            await setDoc(doc(db, user.uid, 'settings'), {
                uid: user.uid,
                displayName: user.displayName,
                email: user.email,
                photoUrl: user.photoURL,
                // clientInfo: user
              });
              console.log('new thing should be created')
        } catch (e) {
            console.error("Error adding document: ", e);
        }

        
    }

    const checkIfNewClient = async (user) => {
        // console.log(user)
        // console.log('checking if new client')
        const docRef = doc(db, `${user.uid}`, 'settings')
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
        } else {
            // console.log('its a new client!')
            createNewClient(user)
        }
    }


    // onAuthStateChanged(auth, (user) => {
    //     if (user) {
    //         setClient(user)
    //         checkIfNewClient(user)
    //     } else {
    //         setClient(null)
    //         console.log('nobody is logged in')
    //     }
    // })


    function logIt() {
        // console.log(client)
        console.log(client)

    }
    return (
        <div>
            {
                userAuth
                ?
                <button onClick={signUserOut}> Sign Out</button>
                :
                <button onClick={signInWithGoogle}> Sign In</button>
            }
            {/* <h1>Authorized: {loginStatus ? "true" : "false"}</h1> */}
            <button onClick={logIt}>log</button>
        </div>
  )
}

export default Auth