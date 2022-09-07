"use strict";
exports.id = 752;
exports.ids = [752];
exports.modules = {

/***/ 1752:
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
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1288);
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _styles_Admin_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9539);
/* harmony import */ var _styles_Admin_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_Admin_module_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _styles_Song_module_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1064);
/* harmony import */ var _styles_Song_module_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_styles_Song_module_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var firebase_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3392);
/* harmony import */ var _firebase_clientApp__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3916);
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1492);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_5__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([firebase_storage__WEBPACK_IMPORTED_MODULE_2__, _firebase_clientApp__WEBPACK_IMPORTED_MODULE_3__, firebase_firestore__WEBPACK_IMPORTED_MODULE_4__]);
([firebase_storage__WEBPACK_IMPORTED_MODULE_2__, _firebase_clientApp__WEBPACK_IMPORTED_MODULE_3__, firebase_firestore__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
// import React from 'react'










// const storage = getStorage();
function Admin() {
    const { 0: clientList , 1: setClientList  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const { 0: clientListArray , 1: setClientListArray  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const { 0: clientSelected , 1: setClientSelected  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const { 0: songSelected , 1: setSongSelected  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        async function getClientList() {
            // get all clients
            const docRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_4__.doc)(_firebase_clientApp__WEBPACK_IMPORTED_MODULE_3__.db, "admin", "clientList");
            const docSnap = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_4__.getDoc)(docRef);
            if (docSnap.exists()) {
                // getting list of clients uid to populate form
                if (clientList.length == 0) {
                    Object.keys(docSnap.data()).map((value)=>setClientList((current)=>{
                            return [
                                ...current,
                                value
                            ];
                        }));
                }
                // get all client data, except songs
                const tempArray = [];
                Object.values(docSnap.data()).map((value)=>tempArray.push(value));
                // get all songs for each client
                for(let z = 0; z < tempArray.length; z++){
                    const tempSongsArray = [];
                    let songDoc = tempArray[z].uidWithoutNumberAtTheStart // getting uids from admin's client list to be able to iterate over the documents within each collection
                    ;
                    const querySnapshot = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_4__.getDocs)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_4__.collection)(_firebase_clientApp__WEBPACK_IMPORTED_MODULE_3__.db, songDoc));
                    querySnapshot.forEach((doc)=>{
                        if (doc.id !== "settings") {
                            tempSongsArray.push(doc.data());
                        }
                    });
                    tempArray[z].songs = tempSongsArray;
                }
                setClientListArray(tempArray);
            } else {
                console.log("No such document!");
            }
        }
        getClientList();
    }, []);
    function check() {
        console.log(clientListArray);
    }
    const { 0: fileUpload , 1: setFileUpload  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null) // this gets set to a file
    ;
    const { 0: fileUrl , 1: setFileUrl  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const uploadFile = async (event)=>{
        event.preventDefault() // prevents form fomr refreshing page, just in case you want it later
        ;
        console.log(event.target[0].files[0].name);
        if (fileUpload == null) return;
        const fileNameRegexed = event.target[0].files[0].name.replace(/.wav|.mp3|.jpg|.jpeg/, "");
        let downloadURL = "";
        const songTitle = event.target[1].value;
        const folderRef = (0,firebase_storage__WEBPACK_IMPORTED_MODULE_2__.ref)(_firebase_clientApp__WEBPACK_IMPORTED_MODULE_3__/* .storage */ .tO, `masters/${fileUpload.name}`) // making a reference to the bucket + name to give file
        ;
        const docRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_4__.doc)(_firebase_clientApp__WEBPACK_IMPORTED_MODULE_3__.db, clientSelected.uidWithoutNumberAtTheStart, songTitle);
        const docSnap = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_4__.getDoc)(docRef);
        await (0,firebase_storage__WEBPACK_IMPORTED_MODULE_2__.uploadBytes)(folderRef, fileUpload).then((snapshot)=>{
            (0,firebase_storage__WEBPACK_IMPORTED_MODULE_2__.getDownloadURL)(snapshot.ref).then((url)=>{
                downloadURL = url;
                if (docSnap.exists()) {
                    (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_4__.setDoc)(docRef, {
                        [fileNameRegexed]: {
                            downloadURL: downloadURL,
                            // date: Date.parse(new Date()),
                            fileNameRegexed: fileNameRegexed,
                            songName: songTitle,
                            date: new Date(),
                            revisionNote: "",
                            fileNameRaw: event.target[0].files[0].name
                        }
                    });
                } else {
                    (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_4__.setDoc)(docRef, {
                        [fileNameRegexed]: {
                            downloadURL: downloadURL,
                            // date: Date.parse(new Date()),
                            fileNameRegexed: fileNameRegexed,
                            songName: songTitle,
                            date: new Date(),
                            revisionNote: "",
                            fileNameRaw: event.target[0].files[0].name
                        }
                    });
                }
            });
        });
    };
    const fileInputOnChange = (event)=>{
        setFileUpload(event.target.files[0]);
    // event.target.value = null // unsure if i need this, keeping it for later in case debugging and need option
    };
    const returnDate = (utcStringDate)=>{
        const yer = new Date(utcStringDate * 1000);
        return yer;
    };
    const deleteSong = async (fileNameOfSongToBeDeletedFromFirestore, songNameOfSongToBeDeletedFromFirestore, clientUidWithoutNumberAtTheStart)=>{
        if (fileNameOfSongToBeDeletedFromFirestore) {
            const songReference = (0,firebase_storage__WEBPACK_IMPORTED_MODULE_2__.ref)(_firebase_clientApp__WEBPACK_IMPORTED_MODULE_3__/* .storage */ .tO, "masters/" + fileNameOfSongToBeDeletedFromFirestore);
            (0,firebase_storage__WEBPACK_IMPORTED_MODULE_2__.deleteObject)(songReference).then(()=>{
                (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_4__.deleteDoc)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_4__.doc)(_firebase_clientApp__WEBPACK_IMPORTED_MODULE_3__.db, clientUidWithoutNumberAtTheStart.uidWithoutNumberAtTheStart, songNameOfSongToBeDeletedFromFirestore));
                console.log("file deleted!");
            }).catch((error)=>{
                console.log(error);
            });
        } else {
            console.log("file didnt exist apparently");
        }
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_styles_Admin_module_css__WEBPACK_IMPORTED_MODULE_6___default().admin),
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                className: (_styles_Admin_module_css__WEBPACK_IMPORTED_MODULE_6___default().adminForm),
                onSubmit: uploadFile,
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: (_styles_Admin_module_css__WEBPACK_IMPORTED_MODULE_6___default().selectFileContainer),
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                htmlFor: "fileSelectionButton",
                                className: (_styles_Admin_module_css__WEBPACK_IMPORTED_MODULE_6___default().adminFormButton),
                                children: "Select File"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                id: "fileSelectionButton",
                                type: "file",
                                style: {
                                    display: "none"
                                },
                                onChange: (event)=>{
                                    fileInputOnChange(event);
                                }
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: (_styles_Admin_module_css__WEBPACK_IMPORTED_MODULE_6___default().fileSelectedName),
                                children: fileUpload ? fileUpload.name : ""
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                        type: "text",
                        defaultValue: songSelected
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("select", {
                        children: clientList.map((client)=>{
                            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                children: client
                            }, client);
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        type: "submit",
                        className: (_styles_Admin_module_css__WEBPACK_IMPORTED_MODULE_6___default().adminFormButtonUpload),
                        children: "upload file"
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().list),
                children: clientListArray && clientListArray.map((x)=>{
                    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                        className: (_styles_Admin_module_css__WEBPACK_IMPORTED_MODULE_6___default().client),
                        onClick: ()=>setClientSelected(x),
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                className: (_styles_Admin_module_css__WEBPACK_IMPORTED_MODULE_6___default().clientInfoCard),
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_5___default()), {
                                        src: x.photoURL,
                                        // className={styles.userIcon}
                                        alt: "User Photo",
                                        width: "100%",
                                        height: "100%",
                                        style: {
                                            overflow: "hidden",
                                            borderRadius: "50%",
                                            borderStyle: "solid",
                                            borderWidth: "2px",
                                            borderColor: "rgb(255, 255, 255)"
                                        }
                                    }, x.uid),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
                                        className: (_styles_Admin_module_css__WEBPACK_IMPORTED_MODULE_6___default().clientInfo),
                                        children: [
                                            x.displayName,
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                className: (_styles_Admin_module_css__WEBPACK_IMPORTED_MODULE_6___default().clientInfoCardEmail),
                                                children: x.uid
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                className: (_styles_Admin_module_css__WEBPACK_IMPORTED_MODULE_6___default().clientInfoCardEmail),
                                                children: x.email
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                                className: (_styles_Song_module_css__WEBPACK_IMPORTED_MODULE_8___default().songList),
                                children: x.songs.map((song, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                                        className: (_styles_Song_module_css__WEBPACK_IMPORTED_MODULE_8___default().fileListItem),
                                        children: Object.keys(song).map((songData, index)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                                className: (_styles_Song_module_css__WEBPACK_IMPORTED_MODULE_8___default().fileVersion),
                                                onClick: ()=>setSongSelected(song[songData].songName),
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                                        className: (_styles_Song_module_css__WEBPACK_IMPORTED_MODULE_8___default().songName),
                                                        children: [
                                                            song[songData].songName,
                                                            " ",
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                                onClick: ()=>deleteSong(song[songData].fileNameRaw, song[songData].songName, x),
                                                                className: (_styles_Song_module_css__WEBPACK_IMPORTED_MODULE_8___default().songDeleteButton),
                                                                children: "delete"
                                                            }),
                                                            " "
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                        className: (_styles_Song_module_css__WEBPACK_IMPORTED_MODULE_8___default().filename),
                                                        children: song[songData].fileNameRaw
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                        className: (_styles_Song_module_css__WEBPACK_IMPORTED_MODULE_8___default().revisionNote),
                                                        children: song[songData].revisionNote
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("audio", {
                                                            className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().audio),
                                                            controls: true,
                                                            src: "FAKE URL"
                                                        }, song[songData].getDownloadURL)
                                                    })
                                                ]
                                            }, index))
                                    }, x.uid + index))
                            })
                        ]
                    }, x.uid);
                })
            })
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Admin);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;