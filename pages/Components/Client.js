import React, {useState, useEffect} from 'react'
import styles from '../../styles/Home.module.css'
import firebase, {auth, db, provider, storage} from '../../firebase/clientApp'
import { collection, getDocs, doc, getDoc, updateDoc, setDoc } from "firebase/firestore";
import {useAuthState} from "react-firebase-hooks/auth"


export default function Client(props) {
    // const [userAuth, userAuthIsLoading, userAuthError] = useAuthState(auth)
    const [clientSongs, setClientSongs] = useState([])
    // console.log(userAuth)

    // load client songs
    useEffect(() => {
        if (props.userAuth && clientSongs.length == 0) {
            const clientCollection = 'clientID' + props.userAuth.uid
            async function getClientSongs() {
                const querySnapshot = await getDocs(collection(db, clientCollection));
                querySnapshot.forEach((doc) => {
                    if (doc.id !== 'settings') {
                        setClientSongs(current => {
                            return [
                                ...current,
                                doc.data()
                            ]  
                        })
                    }
                })
            }
            getClientSongs()
        }
    },[props.userAuth])

    function check() {

        console.log(clientSongs)
    }

  return (
    <main>
        <button onClick={() => check()}>CHECK</button>
        {
        props.userAuth &&
        props.userAuth.uid
        }
        <section>
            <ul className={styles.list}>
                {
                    clientSongs &&
                    clientSongs.map((song) => {
                        console.log(clientSongs)
                        return (
                            <ul>
                                {Object.values(song).map((songDataValue) => <ul>
                                <li>{Date.parse(Date(songDataValue.date))}</li>
                                <li>{songDataValue.revisionNote}</li>
                                <audio controls src={songDataValue.downloadURL}/>
                                </ul>)}
                            </ul>
                        )
                    })
                }
            </ul>
        </section>
    </main>
  )
}
