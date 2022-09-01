// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import React, {useState, useEffect} from 'react'
import { db, auth, provider } from '../../firebase/clientApp';

import { collection, addDoc, doc, getDoc, setDoc, updateDoc } from "firebase/firestore"; 

import {useAuthState} from "react-firebase-hooks/auth"
// import "firebase/auth";
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from 'firebase/auth'





export default async function handler(req, res) {
  console.log(auth)
  console.log('trying to create document from the server')
  try { // create a document in a collection with user's uid who's existence will be validated on sign in to check if they're a new user or not
    await setDoc(doc(db, 'skipWaiters', 'createdViaApi'), {
        testfield: 'testValue!'
    });
} catch (error) {
    console.error("Error adding document from the server: ", error);
}
const thing = 'status from api!'
res.status(200).json(thing)




// let response
// console.log(req.method)
// fetch('https://pokeapi.co/api/v2/pokemon/ditto')
//       .then((res) => res.json())
//       .then((x) => {
//         response = x
//         res.status(200).json(response)
//       })
}
