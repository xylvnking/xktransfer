"use strict";
exports.id = 925;
exports.ids = [925];
exports.modules = {

/***/ 3925:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Client)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(1288);
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _styles_Admin_module_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(9539);
/* harmony import */ var _styles_Admin_module_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_styles_Admin_module_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _styles_Song_module_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1064);
/* harmony import */ var _styles_Song_module_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_styles_Song_module_css__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _firebase_clientApp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3916);
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8109);
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var firebase_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3392);
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1492);
/* harmony import */ var react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(830);
/* harmony import */ var react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_textarea_autosize__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(649);
/* harmony import */ var react_textarea_autosize__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_textarea_autosize__WEBPACK_IMPORTED_MODULE_7__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_firebase_clientApp__WEBPACK_IMPORTED_MODULE_2__, firebase_storage__WEBPACK_IMPORTED_MODULE_4__, firebase_firestore__WEBPACK_IMPORTED_MODULE_5__]);
([_firebase_clientApp__WEBPACK_IMPORTED_MODULE_2__, firebase_storage__WEBPACK_IMPORTED_MODULE_4__, firebase_firestore__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







var FileSaver = __webpack_require__(8109);

// const storage = getStorage();



const siteNameTemporary = "localhost:3000";
function Client(props) {
    function check() {
        console.log(clientSongs);
    // downloadThing()
    }
    const [userAuth, userAuthIsLoading, userAuthError] = (0,react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_6__.useAuthState)(_firebase_clientApp__WEBPACK_IMPORTED_MODULE_2__/* .auth */ .I8);
    const { 0: clientSongs , 1: setClientSongs  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    // const clientCollection = 'clientID' + props.userAuth.uid
    // async function getClientSongs() {
    //     const clientCollection = 'clientID' + userAuth.uid
    //     const querySnapshot = await getDocs(collection(db, clientCollection));
    //     querySnapshot.forEach((doc) => {
    //         if (doc.id !== 'settings') {
    //             setClientSongs(current => {
    //                 return [
    //                     ...current,
    //                     doc.data()
    //                 ]  
    //             })
    //         }
    //     })
    // }
    // load client songs
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (userAuth && clientSongs.length == 0) {
            const clientCollection = "clientID" + userAuth.uid;
            async function getClientSongs() {
                const querySnapshot = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_5__.getDocs)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_5__.collection)(_firebase_clientApp__WEBPACK_IMPORTED_MODULE_2__.db, clientCollection));
                querySnapshot.forEach((doc)=>{
                    if (doc.id !== "settings") {
                        setClientSongs((current)=>{
                            return [
                                ...current,
                                doc.data()
                            ];
                        });
                    }
                });
            }
            getClientSongs();
        }
    }, [
        userAuth
    ]);
    const handleTyping = (textareaValue, song)=>{};
    const saveRevisionNotes = (event)=>{
        event.preventDefault();
        const clientCollection = "clientID" + userAuth.uid;
        const songNameBeingUpdated = event.target[4].value;
        const docRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_5__.doc)(_firebase_clientApp__WEBPACK_IMPORTED_MODULE_2__.db, clientCollection, songNameBeingUpdated);
        (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_5__.updateDoc)(docRef, {
            [event.target[2].value]: {
                date: new Date(),
                downloadURL: event.target[1].value,
                fileNameRegexed: event.target[2].value,
                revisionNote: event.target[3].value,
                songName: event.target[4].value
            }
        });
        alert(`Changes for ${event.target[4].value} have been saved!`);
    // getClientSongs()
    };
    const downloadThing = (yer)=>{
        console.log(yer);
        const aBlob = new Blob([
            "https://firebasestorage.googleapis.com/v0/b/xktransfer-30d93.appspot.com/o/masters%2F083.png?alt=media&token=d71b32ef-12b8-4fdb-a4a9-e2b5c9b25870"
        ]);
        const toDownload = window.URL.createObjectURL(aBlob);
        (0,file_saver__WEBPACK_IMPORTED_MODULE_3__.saveAs)(toDownload);
    };
    const { 0: isLoading , 1: setLoading  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
    const shortenShareUrl = async (songData)=>{
        // const aString = siteNameTemporary + '/Components/' + songData.songName + '?foo=' + encodeURIComponent(songData.revisionNote) + 'xxxxxxxxxx' + songData.fileNameRegexed + 'xxxxxxxxxx' + songData.downloadURL
        // await fetch('https://boilerplate-project-urlshortener.xylvnking.repl.co/api/shorturl',{
        //     method: 'POST',
        //     mode: 'cors',
        //     headers: {
        //         'Accept': 'application/json',
        //         'Content-Type': 'application/json'
        //       },
        //     body: JSON.stringify({url: aString})
        // },
        // ).then((response) => {
        // })
        navigator.clipboard.writeText(siteNameTemporary + "/Components/" + songData.songName + "?foo=" + encodeURIComponent(songData.revisionNote) + "xxxxxxxxxx" + songData.fileNameRegexed + "xxxxxxxxxx" + songData.downloadURL);
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("main", {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                    className: (_styles_Admin_module_css__WEBPACK_IMPORTED_MODULE_8___default().clientClient),
                    children: clientSongs && clientSongs.map((song, index1)=>{
                        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                            style: {
                                listStyle: "none",
                                padding: "0px",
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                width: "100%"
                            },
                            children: Object.values(song).map((songDataValue)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                    className: (_styles_Song_module_css__WEBPACK_IMPORTED_MODULE_9___default().fileVersionClient),
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                            className: (_styles_Song_module_css__WEBPACK_IMPORTED_MODULE_9___default().songName),
                                            style: {
                                                cursor: "default"
                                            },
                                            children: [
                                                songDataValue.songName,
                                                " ",
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                    className: (_styles_Song_module_css__WEBPACK_IMPORTED_MODULE_9___default().songDeleteButtonClient),
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                        target: "_blank",
                                                        href: songDataValue.downloadURL,
                                                        download: "",
                                                        children: "DOWNLOAD"
                                                    })
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                            className: (_styles_Song_module_css__WEBPACK_IMPORTED_MODULE_9___default().filename),
                                            style: {
                                                cursor: "default"
                                            },
                                            children: songDataValue.fileNameRegexed
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("audio", {
                                            controls: true,
                                            src: "fake url",
                                            className: (_styles_Song_module_css__WEBPACK_IMPORTED_MODULE_9___default().audioWithSpace)
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                                            onSubmit: saveRevisionNotes,
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                    readOnly: true,
                                                    value: songDataValue.date,
                                                    style: {
                                                        display: "none"
                                                    }
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                    readOnly: true,
                                                    value: songDataValue.downloadURL,
                                                    style: {
                                                        display: "none"
                                                    }
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                    readOnly: true,
                                                    value: songDataValue.fileNameRegexed,
                                                    style: {
                                                        display: "none"
                                                    }
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_textarea_autosize__WEBPACK_IMPORTED_MODULE_7___default()), {
                                                    defaultValue: songDataValue.revisionNote,
                                                    className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_10___default().revisionTextArea),
                                                    onChange: (e)=>handleTyping(e.target.value, song)
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                    readOnly: true,
                                                    value: songDataValue.songName,
                                                    style: {
                                                        display: "none"
                                                    }
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                    type: "submit",
                                                    className: (_styles_Song_module_css__WEBPACK_IMPORTED_MODULE_9___default().cleanButton),
                                                    children: "save changes"
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                                                    type: "button",
                                                    className: (_styles_Song_module_css__WEBPACK_IMPORTED_MODULE_9___default().songDeleteButtonClient),
                                                    // onClick={() => navigator.clipboard.writeText(siteNameTemporary + '/Components/' + songDataValue.songName + '?foo=' + encodeURIComponent(songDataValue.revisionNote) + 'xxxxxxxxxx' + songDataValue.fileNameRegexed + 'xxxxxxxxxx' + songDataValue.downloadURL)}>
                                                    onClick: ()=>shortenShareUrl(songDataValue),
                                                    children: [
                                                        "copy link",
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                                            xmlns: "http://www.w3.org/2000/svg",
                                                            height: "20",
                                                            width: "20",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                                d: "M5.25 17.188q-.521 0-.885-.365Q4 16.458 4 15.938V5.771h1v10.167q0 .083.083.166.084.084.167.084h8.208v1Zm2.417-2.417q-.521 0-.886-.365-.364-.364-.364-.885V4.167q0-.521.364-.886.365-.364.886-.364h7.395q.542 0 .907.364.364.365.364.886v9.354q0 .521-.364.885-.365.365-.907.365Zm0-1h7.395q.105 0 .188-.083.083-.084.083-.167V4.167q0-.105-.083-.177-.083-.073-.188-.073H7.667q-.084 0-.167.073-.083.072-.083.177v9.354q0 .083.083.167.083.083.167.083Zm-.25 0V3.917v9.854Z"
                                                            })
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    ]
                                }, songDataValue.date))
                        }, index1);
                    })
                })
            })
        ]
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;