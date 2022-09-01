import React, {useState, useEffect} from 'react'
// import "firebase/auth";
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from 'firebase/auth'

import { db, auth, provider } from '../../firebase/clientApp';

import { collection, addDoc, doc, getDoc, setDoc, updateDoc } from "firebase/firestore"; 

// import {useAuthState} from "react-firebase-hooks/auth"
import {useAuthState} from "react-firebase-hooks/auth"





function Auth() {

    const [userAuth, userAuthIsLoading, userAuthError] = useAuthState(auth)

    const [client, setClient] = useState()

    const signInWithGoogle = async () => {
        await signInWithPopup(auth, provider).then((result) => {
            setClient(result.user)
            checkIfNewClient(result.user)
        })
        .catch(function (error) {
            console.error("there was an error signing in", error);
        })
    }
    const signUserOut = async () => {
        await signOut(auth, provider).then(() => {
            setClient(null)
        })
        .catch(function (error) {
            console.error("there was an error signing out", error);
        })
    }

    const createNewClient = async (user) => {
        const uidWithoutNumberAtTheStart = 'clientID' + user.uid

        try { // create a document in a collection with user's uid who's existence will be validated on sign in to check if they're a new user or not
            // await setDoc(doc(db, user.uid, 'settings'), {
            await setDoc(doc(db, uidWithoutNumberAtTheStart, 'settings'), {
                uid: user.uid,
                displayName: user.displayName,
                email: user.email,
                photoUrl: user.photoURL,
                uidWithoutNumberAtTheStart: uidWithoutNumberAtTheStart,
                creationTime: user.metadata.creationTime
            });
        } catch (error) {
            console.error("Error adding document: ", error);
        }




        // create 'songs' default doc
        // try { // create a document in a collection with user's uid who's existence will be validated on sign in to check if they're a new user or not
        //     // await setDoc(doc(db, user.uid, 'settings'), {
        //     await setDoc(doc(db, uidWithoutNumberAtTheStart, 'settings'), {
        //         uid: user.uid,
        //         displayName: user.displayName,
        //         email: user.email,
        //         photoUrl: user.photoURL,
        //         uidWithoutNumberAtTheStart: uidWithoutNumberAtTheStart,
        //         creationTime: user.metadata.creationTime
        //     });
        // } catch (error) {
        //     console.error("Error adding document: ", error);
        // }






        try {
            await updateDoc(doc(db, 'admin', "clientList"), {
                [uidWithoutNumberAtTheStart] : {
                    uid: user.uid,
                    displayName: user.displayName,
                    email: user.email,
                    photoURL: user.photoURL,
                    uidWithoutNumberAtTheStart: uidWithoutNumberAtTheStart
                },
            })
        } catch (error) {
            console.log("Error updating admin's list of users", error)
        }

        
    }

    const checkIfNewClient = async (user) => {
        const docRef = doc(db, `${user.uid}`, 'settings')
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
        } else {
            createNewClient(user)
        }
    }

    // onAuthStateChanged(auth, (user) => { // old auth check method used in other app. causes rerender and recheck every time, using hook instead
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
            <button onClick={logIt}>log user info</button>
        </div>
  )
}

export default Auth