"use strict";
exports.id = 609;
exports.ids = [609];
exports.modules = {

/***/ 4609:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(401);
/* harmony import */ var _firebase_clientApp__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3916);
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1492);
/* harmony import */ var react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(830);
/* harmony import */ var react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1288);
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([firebase_auth__WEBPACK_IMPORTED_MODULE_2__, _firebase_clientApp__WEBPACK_IMPORTED_MODULE_3__, firebase_firestore__WEBPACK_IMPORTED_MODULE_4__]);
([firebase_auth__WEBPACK_IMPORTED_MODULE_2__, _firebase_clientApp__WEBPACK_IMPORTED_MODULE_3__, firebase_firestore__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);


// import "firebase/auth";



// import {useAuthState} from "react-firebase-hooks/auth"


function Auth() {
    const [userAuth, userAuthIsLoading, userAuthError] = (0,react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_5__.useAuthState)(_firebase_clientApp__WEBPACK_IMPORTED_MODULE_3__/* .auth */ .I8);
    const { 0: client , 1: setClient  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const signInWithGoogle = async ()=>{
        await (0,firebase_auth__WEBPACK_IMPORTED_MODULE_2__.signInWithPopup)(_firebase_clientApp__WEBPACK_IMPORTED_MODULE_3__/* .auth */ .I8, _firebase_clientApp__WEBPACK_IMPORTED_MODULE_3__/* .provider */ .Ap).then((result)=>{
            setClient(result.user);
            checkIfNewClient(result.user);
        }).catch(function(error) {
            console.error("there was an error signing in", error);
        });
    };
    const signUserOut = async ()=>{
        await (0,firebase_auth__WEBPACK_IMPORTED_MODULE_2__.signOut)(_firebase_clientApp__WEBPACK_IMPORTED_MODULE_3__/* .auth */ .I8, _firebase_clientApp__WEBPACK_IMPORTED_MODULE_3__/* .provider */ .Ap).then(()=>{
            setClient(null);
        }).catch(function(error) {
            console.error("there was an error signing out", error);
        });
    };
    const createNewClient = async (user)=>{
        const uidWithoutNumberAtTheStart = "clientID" + user.uid;
        try {
            // await setDoc(doc(db, user.uid, 'settings'), {
            await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_4__.setDoc)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_4__.doc)(_firebase_clientApp__WEBPACK_IMPORTED_MODULE_3__.db, uidWithoutNumberAtTheStart, "settings"), {
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
            await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_4__.updateDoc)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_4__.doc)(_firebase_clientApp__WEBPACK_IMPORTED_MODULE_3__.db, "admin", "clientList"), {
                [uidWithoutNumberAtTheStart]: {
                    uid: user.uid,
                    displayName: user.displayName,
                    email: user.email,
                    photoURL: user.photoURL,
                    uidWithoutNumberAtTheStart: uidWithoutNumberAtTheStart
                }
            });
        } catch (error1) {
            console.log("Error updating admin's list of users", error1);
        }
    };
    const checkIfNewClient = async (user)=>{
        const docRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_4__.doc)(_firebase_clientApp__WEBPACK_IMPORTED_MODULE_3__.db, `${user.uid}`, "settings");
        const docSnap = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_4__.getDoc)(docRef);
        if (docSnap.exists()) {} else {
            createNewClient(user);
        }
    };
    // onAuthStateChanged(auth, (user) => { // old auth check method used in other app. causes rerender and recheck every time, using hook instead
    //     if (user) {
    //         setClient(user)
    //         checkIfNewClient(user)
    //     } else {
    //         setClient(null)
    //         console.log('nobody is logged in')
    //     }
    // })
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        children: userAuth ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
            className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default().indexButtons),
            onClick: signUserOut,
            children: " Sign Out"
        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
            className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default().indexButtons),
            onClick: signInWithGoogle,
            children: " Sign In"
        })
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Auth);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;