"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/Components/Admin.js":
/*!***********************************!*\
  !*** ./pages/Components/Admin.js ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _swc_helpers_src_define_property_mjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @swc/helpers/src/_define_property.mjs */ \"./node_modules/@swc/helpers/src/_define_property.mjs\");\n/* harmony import */ var _Users_dylanking6132_xylvnking_xktransfer_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_dylanking6132_xylvnking_xktransfer_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_dylanking6132_xylvnking_xktransfer_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var firebase_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/storage */ \"./node_modules/firebase/storage/dist/index.esm.js\");\n/* harmony import */ var _firebase_clientApp__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../firebase/clientApp */ \"./firebase/clientApp.js\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! firebase/firestore */ \"./node_modules/firebase/firestore/dist/index.esm.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_6__);\n// import React from 'react'\n\n\n\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nfunction Admin() {\n    var check = function check() {\n        console.log(clientListArray);\n    };\n    _s();\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null), clientList = ref1[0], setClientList = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]), clientListArray = ref2[0], setClientListArray = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null), clientSelected = ref3[0], setClientSelected = ref3[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        var cloneOfClientListArray = [];\n        function getClientList() {\n            return _getClientList.apply(this, arguments);\n        }\n        function _getClientList() {\n            _getClientList = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(_Users_dylanking6132_xylvnking_xktransfer_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n                var docRef, docSnap, yes, tempArray, tempSongsArray, z, songDoc, querySnapshot;\n                return _Users_dylanking6132_xylvnking_xktransfer_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                    while(1)switch(_ctx.prev = _ctx.next){\n                        case 0:\n                            docRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_5__.doc)(_firebase_clientApp__WEBPACK_IMPORTED_MODULE_4__.db, \"admin\", \"clientList\");\n                            _ctx.next = 3;\n                            return (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_5__.getDoc)(docRef);\n                        case 3:\n                            docSnap = _ctx.sent;\n                            if (!docSnap.exists()) {\n                                _ctx.next = 23;\n                                break;\n                            }\n                            yes = docSnap.data();\n                            setClientList(yes);\n                            tempArray = [];\n                            Object.values(docSnap.data()).map(function(value) {\n                                return tempArray.push(value);\n                            });\n                            tempSongsArray = [];\n                            z = 0;\n                        case 11:\n                            if (!(z < tempArray.length)) {\n                                _ctx.next = 20;\n                                break;\n                            }\n                            songDoc = tempArray[z].uidWithoutNumberAtTheStart;\n                            _ctx.next = 15;\n                            return (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_5__.getDocs)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_5__.collection)(_firebase_clientApp__WEBPACK_IMPORTED_MODULE_4__.db, songDoc));\n                        case 15:\n                            querySnapshot = _ctx.sent;\n                            querySnapshot.forEach(function(doc) {\n                                if (doc.id !== \"settings\") {\n                                    tempSongsArray.push(doc.data());\n                                // tempArray[z].songs = doc.data()\n                                }\n                            });\n                        case 17:\n                            z++;\n                            _ctx.next = 11;\n                            break;\n                        case 20:\n                            setClientListArray(tempArray);\n                            _ctx.next = 24;\n                            break;\n                        case 23:\n                            {\n                                console.log(\"No such document!\");\n                            }\n                        case 24:\n                        case \"end\":\n                            return _ctx.stop();\n                    }\n                }, _callee);\n            }));\n            return _getClientList.apply(this, arguments);\n        }\n        getClientList();\n    }, []);\n    function getAllSongsByClient() {\n        return _getAllSongsByClient.apply(this, arguments);\n    }\n    function _getAllSongsByClient() {\n        _getAllSongsByClient = // const getAllSongsByClient = async () => {\n        (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(_Users_dylanking6132_xylvnking_xktransfer_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var cloneOfClientListArray, z, songDoc, querySnapshot;\n            return _Users_dylanking6132_xylvnking_xktransfer_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        cloneOfClientListArray = JSON.parse(JSON.stringify(clientListArray));\n                        z = 0;\n                    case 2:\n                        if (!(z < cloneOfClientListArray.length)) {\n                            _ctx.next = 11;\n                            break;\n                        }\n                        songDoc = cloneOfClientListArray[z].uidWithoutNumberAtTheStart;\n                        _ctx.next = 6;\n                        return (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_5__.getDocs)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_5__.collection)(_firebase_clientApp__WEBPACK_IMPORTED_MODULE_4__.db, songDoc));\n                    case 6:\n                        querySnapshot = _ctx.sent;\n                        querySnapshot.forEach(function(doc) {\n                            if (doc.id !== \"settings\") {\n                                cloneOfClientListArray[z].songs = doc.data();\n                            }\n                        });\n                    case 8:\n                        z++;\n                        _ctx.next = 2;\n                        break;\n                    case 11:\n                        setClientListArray(cloneOfClientListArray);\n                    case 12:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return _getAllSongsByClient.apply(this, arguments);\n    }\n    var ref4 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null), fileUpload = ref4[0], setFileUpload = ref4[1];\n    var ref5 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null), fileUrl = ref5[0], setFileUrl = ref5[1];\n    var uploadFile = function() {\n        var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(_Users_dylanking6132_xylvnking_xktransfer_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var fileNameRegexed, songTitle, downloadURL, folderRef, docRef, docSnap;\n            return _Users_dylanking6132_xylvnking_xktransfer_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        if (!(fileUpload == null)) {\n                            _ctx.next = 2;\n                            break;\n                        }\n                        return _ctx.abrupt(\"return\");\n                    case 2:\n                        fileNameRegexed = fileUpload.name.replace(/.wav|.mp3|.jpg|.jpeg/, \"\");\n                        songTitle = \"temporarySong2\";\n                        downloadURL = \"\";\n                        folderRef = (0,firebase_storage__WEBPACK_IMPORTED_MODULE_3__.ref)(_firebase_clientApp__WEBPACK_IMPORTED_MODULE_4__.storage, \"masters/\".concat(fileUpload.name)) // making a reference to the bucket + name to give file\n                        ;\n                        docRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_5__.doc)(_firebase_clientApp__WEBPACK_IMPORTED_MODULE_4__.db, clientSelected.uidWithoutNumberAtTheStart, songTitle);\n                        _ctx.next = 9;\n                        return (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_5__.getDoc)(docRef);\n                    case 9:\n                        docSnap = _ctx.sent;\n                        _ctx.next = 12;\n                        return (0,firebase_storage__WEBPACK_IMPORTED_MODULE_3__.uploadBytes)(folderRef, fileUpload).then(function(snapshot) {\n                            (0,firebase_storage__WEBPACK_IMPORTED_MODULE_3__.getDownloadURL)(snapshot.ref).then(function(url) {\n                                downloadURL = url;\n                                if (docSnap.exists()) {\n                                    console.log(\"song exists\");\n                                    (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_5__.updateDoc)(docRef, (0,_swc_helpers_src_define_property_mjs__WEBPACK_IMPORTED_MODULE_8__[\"default\"])({}, fileNameRegexed, {\n                                        downloadURL: downloadURL,\n                                        date: Date.parse(new Date()),\n                                        revisionNote: \"this iTHIRRRD schema works.\"\n                                    }));\n                                } else {\n                                    console.log(\"song doesnt exist\");\n                                    (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_5__.setDoc)(docRef, (0,_swc_helpers_src_define_property_mjs__WEBPACK_IMPORTED_MODULE_8__[\"default\"])({}, fileNameRegexed, {\n                                        downloadURL: downloadURL,\n                                        date: Date.parse(new Date()),\n                                        revisionNote: \"this is a SECOND REVISIONink this schema works.\"\n                                    }));\n                                }\n                            });\n                        });\n                    case 12:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function uploadFile() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    var fileInputOnChange = function(event) {\n        setFileUpload(event.target.files[0]);\n        event.target.value = null;\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_9___default().admin),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"label\", {\n                htmlFor: \"fileSelectionButton\",\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_9___default().uploadButton),\n                children: \"Select file...\"\n            }, void 0, false, {\n                fileName: \"/Users/dylanking6132/xylvnking/xktransfer/pages/Components/Admin.js\",\n                lineNumber: 150,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                id: \"fileSelectionButton\",\n                type: \"file\",\n                style: {\n                    display: \"none\"\n                },\n                onChange: function(event) {\n                    fileInputOnChange(event);\n                }\n            }, void 0, false, {\n                fileName: \"/Users/dylanking6132/xylvnking/xktransfer/pages/Components/Admin.js\",\n                lineNumber: 151,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"label\", {\n                htmlFor: \"uploadButton\",\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_9___default().uploadButton),\n                children: \"Upload File\"\n            }, void 0, false, {\n                fileName: \"/Users/dylanking6132/xylvnking/xktransfer/pages/Components/Admin.js\",\n                lineNumber: 153,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                id: \"uploadButton\",\n                onClick: uploadFile,\n                style: {\n                    display: \"none\"\n                },\n                children: \" Upload Image\"\n            }, void 0, false, {\n                fileName: \"/Users/dylanking6132/xylvnking/xktransfer/pages/Components/Admin.js\",\n                lineNumber: 154,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h3\", {\n                children: [\n                    \"File chosen for upload: \",\n                    fileUpload ? fileUpload.name : \"\"\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/dylanking6132/xylvnking/xktransfer/pages/Components/Admin.js\",\n                lineNumber: 156,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                onClick: function() {\n                    return check();\n                },\n                children: \"CHECK\"\n            }, void 0, false, {\n                fileName: \"/Users/dylanking6132/xylvnking/xktransfer/pages/Components/Admin.js\",\n                lineNumber: 157,\n                columnNumber: 7\n            }, this),\n            clientSelected && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h5\", {\n                children: [\n                    \"client selected: \",\n                    clientSelected.displayName,\n                    \" \",\n                    clientSelected.uid\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/dylanking6132/xylvnking/xktransfer/pages/Components/Admin.js\",\n                lineNumber: 158,\n                columnNumber: 26\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/dylanking6132/xylvnking/xktransfer/pages/Components/Admin.js\",\n        lineNumber: 149,\n        columnNumber: 5\n    }, this);\n}\n_s(Admin, \"LyovquM3P0PhBlGzzXjMDr9S+/Q=\");\n_c = Admin;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Admin);\nvar _c;\n$RefreshReg$(_c, \"Admin\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Z0JBQUN1QyxPQUFPLEVBQUU3QixVQUFVO2dCQUFFeUIsS0FBSyxFQUFFO29CQUFDQyxPQUFPLEVBQUUsTUFBTTtpQkFBQzswQkFBRyxlQUFhOzs7OztvQkFBUzswQkFFaEcsOERBQUNJLElBQUU7O29CQUFDLDBCQUF3QjtvQkFBQ2xDLFVBQVUsR0FBR0EsVUFBVSxDQUFDUyxJQUFJLEdBQUcsRUFBRTs7Ozs7O29CQUFNOzBCQUNwRSw4REFBQ3VCLFFBQU07Z0JBQUNDLE9BQU8sRUFBRTsyQkFBTXBFLEtBQUssRUFBRTtpQkFBQTswQkFBRSxPQUFLOzs7OztvQkFBUztZQUM3Q08sY0FBYyxrQkFBSSw4REFBQytELElBQUU7O29CQUFDLG1CQUFpQjtvQkFBQy9ELGNBQWMsQ0FBQ2dFLFdBQVc7b0JBQUMsR0FBQztvQkFBQ2hFLGNBQWMsQ0FBQ2lFLEdBQUc7Ozs7OztvQkFBTTs7Ozs7O1lBcUMxRixDQUNQO0NBQ0Y7R0FwTFF6RSxLQUFLO0FBQUxBLEtBQUFBLEtBQUs7QUFzTGQsK0RBQWVBLEtBQUsiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvQ29tcG9uZW50cy9BZG1pbi5qcz82NjUyIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBSZWFjdCwge3VzZVN0YXRlLCB1c2VFZmZlY3R9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi8uLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzJ1xuaW1wb3J0IHtcbiAgcmVmLFxuICB1cGxvYWRCeXRlcyxcbiAgZ2V0RG93bmxvYWRVUkwsXG4gIGxpc3RBbGwsXG4gIGxpc3QsXG59IGZyb20gXCJmaXJlYmFzZS9zdG9yYWdlXCI7XG5pbXBvcnQgeyBzdG9yYWdlIH0gZnJvbSAnLi4vLi4vZmlyZWJhc2UvY2xpZW50QXBwJ1xuaW1wb3J0IHsgY29sbGVjdGlvbiwgZ2V0RG9jcywgZG9jLCBnZXREb2MsIHVwZGF0ZURvYywgc2V0RG9jIH0gZnJvbSBcImZpcmViYXNlL2ZpcmVzdG9yZVwiO1xuXG5pbXBvcnQgZmlyZWJhc2UsIHthdXRoLCBkYiwgcHJvdmlkZXJ9IGZyb20gJy4uLy4uL2ZpcmViYXNlL2NsaWVudEFwcCdcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJztcblxuZnVuY3Rpb24gQWRtaW4oKSB7XG5cbiAgY29uc3QgW2NsaWVudExpc3QsIHNldENsaWVudExpc3RdID0gdXNlU3RhdGUobnVsbClcbiAgY29uc3QgW2NsaWVudExpc3RBcnJheSwgc2V0Q2xpZW50TGlzdEFycmF5XSA9IHVzZVN0YXRlKFtdKVxuICBjb25zdCBbY2xpZW50U2VsZWN0ZWQsIHNldENsaWVudFNlbGVjdGVkXSA9IHVzZVN0YXRlKG51bGwpXG4gIFxuICBcbiAgdXNlRWZmZWN0KCgpID0+IHsgLy8gbG9hZCBjbGllbnQgbGlzdFxuXG4gICAgY29uc3QgY2xvbmVPZkNsaWVudExpc3RBcnJheSA9IFtdXG4gICAgXG4gICAgYXN5bmMgZnVuY3Rpb24gZ2V0Q2xpZW50TGlzdCgpIHtcblxuICAgICAgICAgIC8vIGdldCBhbGwgY2xpZW50c1xuICAgICAgICAgIGNvbnN0IGRvY1JlZiA9IGRvYyhkYiwgXCJhZG1pblwiLCBcImNsaWVudExpc3RcIik7XG4gICAgICAgICAgY29uc3QgZG9jU25hcCA9IGF3YWl0IGdldERvYyhkb2NSZWYpO1xuICAgICAgICAgIGlmIChkb2NTbmFwLmV4aXN0cygpKSB7XG4gICAgICAgICAgICBjb25zdCB5ZXMgPSBkb2NTbmFwLmRhdGEoKVxuICAgICAgICAgICAgc2V0Q2xpZW50TGlzdCh5ZXMpXG4gICAgICAgICAgICBjb25zdCB0ZW1wQXJyYXkgPSBbXVxuICAgICAgICAgICAgT2JqZWN0LnZhbHVlcyhkb2NTbmFwLmRhdGEoKSkubWFwKCh2YWx1ZSkgPT4gdGVtcEFycmF5LnB1c2godmFsdWUpKVxuXG4gICAgICAgICAgICAvLyBzZXRDbGllbnRMaXN0QXJyYXkodGVtcEFycmF5KVxuXG4gICAgICAgICAgICAvLyBnZXQgYWxsIHNvbmdzIGZvciBlYWNoIGNsaWVudFxuICAgICAgICAgICAgY29uc3QgdGVtcFNvbmdzQXJyYXkgPSBbXVxuICAgICAgICAgICAgZm9yIChsZXQgeiA9IDA7IHogPCB0ZW1wQXJyYXkubGVuZ3RoOyB6KyspIHtcbiAgICAgICAgICAgICAgbGV0IHNvbmdEb2MgPSB0ZW1wQXJyYXlbel0udWlkV2l0aG91dE51bWJlckF0VGhlU3RhcnRcbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgIGNvbnN0IHF1ZXJ5U25hcHNob3QgPSBhd2FpdCBnZXREb2NzKGNvbGxlY3Rpb24oZGIsIHNvbmdEb2MpKTtcbiAgICAgICAgICAgICAgcXVlcnlTbmFwc2hvdC5mb3JFYWNoKChkb2MpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRvYy5pZCAhPT0gJ3NldHRpbmdzJykge1xuICAgICAgICAgICAgICAgICAgICAgIHRlbXBTb25nc0FycmF5LnB1c2goZG9jLmRhdGEoKSlcbiAgICAgICAgICAgICAgICAgICAgICAvLyB0ZW1wQXJyYXlbel0uc29uZ3MgPSBkb2MuZGF0YSgpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgLy8gdGVtcEFycmF5W3pdLnNvbmdzID0gdGVtcEFycmF5W3pdXG4gICAgICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAgICAgc2V0Q2xpZW50TGlzdEFycmF5KHRlbXBBcnJheSlcblxuICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyBjbG9uZU9mQ2xpZW50TGlzdEFycmF5ID0gdGVtcEFycmF5XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIFxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIk5vIHN1Y2ggZG9jdW1lbnQhXCIpO1xuICAgICAgICAgIH1cbiAgICB9XG4gICAgZ2V0Q2xpZW50TGlzdCgpXG5cbiAgfSwgW10pXG4gIFxuXG5cblxuICBmdW5jdGlvbiBjaGVjaygpIHtcbiAgICBjb25zb2xlLmxvZyhjbGllbnRMaXN0QXJyYXkpXG4gIH1cblxuXG5cblxuXG4gIFxuICAvLyBjb25zdCBnZXRBbGxTb25nc0J5Q2xpZW50ID0gYXN5bmMgKCkgPT4ge1xuICBhc3luYyBmdW5jdGlvbiBnZXRBbGxTb25nc0J5Q2xpZW50ICgpIHtcbiAgICBjb25zdCBjbG9uZU9mQ2xpZW50TGlzdEFycmF5ID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShjbGllbnRMaXN0QXJyYXkpKVxuICAgIGZvciAobGV0IHogPSAwOyB6IDwgY2xvbmVPZkNsaWVudExpc3RBcnJheS5sZW5ndGg7IHorKykge1xuICAgICAgbGV0IHNvbmdEb2MgPSBjbG9uZU9mQ2xpZW50TGlzdEFycmF5W3pdLnVpZFdpdGhvdXROdW1iZXJBdFRoZVN0YXJ0XG4gICAgICBjb25zdCBxdWVyeVNuYXBzaG90ID0gYXdhaXQgZ2V0RG9jcyhjb2xsZWN0aW9uKGRiLCBzb25nRG9jKSk7XG4gICAgICBxdWVyeVNuYXBzaG90LmZvckVhY2goKGRvYykgPT4ge1xuICAgICAgICAgICAgaWYgKGRvYy5pZCAhPT0gJ3NldHRpbmdzJykge1xuICAgICAgICAgICAgICBjbG9uZU9mQ2xpZW50TGlzdEFycmF5W3pdLnNvbmdzID0gZG9jLmRhdGEoKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgIH1cblxuICAgIHNldENsaWVudExpc3RBcnJheShjbG9uZU9mQ2xpZW50TGlzdEFycmF5KVxuICB9XG5cblxuXG4gIGNvbnN0IFtmaWxlVXBsb2FkLCBzZXRGaWxlVXBsb2FkXSA9IHVzZVN0YXRlKG51bGwpXG4gIGNvbnN0IFtmaWxlVXJsLCBzZXRGaWxlVXJsXSA9IHVzZVN0YXRlKG51bGwpXG5cbiAgY29uc3QgdXBsb2FkRmlsZSA9IGFzeW5jICgpID0+IHtcbiAgICBpZiAoZmlsZVVwbG9hZCA9PSBudWxsKSByZXR1cm47XG5cbiAgICBjb25zdCBmaWxlTmFtZVJlZ2V4ZWQgPSBmaWxlVXBsb2FkLm5hbWUucmVwbGFjZSgvLndhdnwubXAzfC5qcGd8LmpwZWcvLCAnJylcbiAgICAvLyBjb25zb2xlLmxvZyhgZmlsZSBuYW1lIHJlZ2V4ZWQgaXMgJHtmaWxlTmFtZVJlZ2V4ZWR9YClcbiAgICBjb25zdCBzb25nVGl0bGUgPSAndGVtcG9yYXJ5U29uZzInXG4gICAgbGV0IGRvd25sb2FkVVJMID0gJydcbiAgICBjb25zdCBmb2xkZXJSZWYgPSByZWYoc3RvcmFnZSwgYG1hc3RlcnMvJHtmaWxlVXBsb2FkLm5hbWV9YCkgLy8gbWFraW5nIGEgcmVmZXJlbmNlIHRvIHRoZSBidWNrZXQgKyBuYW1lIHRvIGdpdmUgZmlsZVxuICAgIGNvbnN0IGRvY1JlZiA9IGRvYyhkYiwgY2xpZW50U2VsZWN0ZWQudWlkV2l0aG91dE51bWJlckF0VGhlU3RhcnQsIHNvbmdUaXRsZSlcbiAgICBjb25zdCBkb2NTbmFwID0gYXdhaXQgZ2V0RG9jKGRvY1JlZilcblxuICAgIGF3YWl0IHVwbG9hZEJ5dGVzKGZvbGRlclJlZiwgZmlsZVVwbG9hZCkudGhlbigoc25hcHNob3QpID0+IHsgLy8gdXBsb2FkIGRvY3VtZW50XG5cbiAgICAgIGdldERvd25sb2FkVVJMKHNuYXBzaG90LnJlZikudGhlbigodXJsKSA9PiB7IC8vIGdldCB1cGxvYWRlZCBkb2N1bWVudCBVUkxcbiAgICAgICAgZG93bmxvYWRVUkwgPSB1cmxcblxuICAgICAgICBpZiAoZG9jU25hcC5leGlzdHMoKSkgeyAvLyBpZiB0aGUgc29uZyBoYXMgYWxyZWFkeSBiZWVuIGNyZWF0ZWQsIHVwZGF0ZSBpdFxuICAgICAgICAgIGNvbnNvbGUubG9nKCdzb25nIGV4aXN0cycpXG4gICAgICAgICAgdXBkYXRlRG9jKGRvY1JlZiwge1xuICAgICAgICAgICAgW2ZpbGVOYW1lUmVnZXhlZF06IHtcbiAgICAgICAgICAgICAgZG93bmxvYWRVUkw6IGRvd25sb2FkVVJMLFxuICAgICAgICAgICAgICBkYXRlOiBEYXRlLnBhcnNlKG5ldyBEYXRlKCkpLFxuICAgICAgICAgICAgICByZXZpc2lvbk5vdGU6ICd0aGlzIGlUSElSUlJEIHNjaGVtYSB3b3Jrcy4nXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSlcblxuICAgICAgICB9IGVsc2UgeyAvLyBpZiB0aCBzb25nIGRvZXNuJ3QgZXhpc3QsIGNyZWF0ZSBhIGRvY3VtZW50IGZvciBpdFxuICAgICAgICAgIGNvbnNvbGUubG9nKCdzb25nIGRvZXNudCBleGlzdCcpXG4gICAgICAgICAgc2V0RG9jKGRvY1JlZiwge1xuICAgICAgICAgICAgW2ZpbGVOYW1lUmVnZXhlZF06IHtcbiAgICAgICAgICAgICAgZG93bmxvYWRVUkw6IGRvd25sb2FkVVJMLFxuICAgICAgICAgICAgICBkYXRlOiBEYXRlLnBhcnNlKG5ldyBEYXRlKCkpLFxuICAgICAgICAgICAgICByZXZpc2lvbk5vdGU6ICd0aGlzIGlzIGEgU0VDT05EIFJFVklTSU9OaW5rIHRoaXMgc2NoZW1hIHdvcmtzLidcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH0pXG4gIH1cblxuICBjb25zdCBmaWxlSW5wdXRPbkNoYW5nZSA9IChldmVudCkgPT4ge1xuICAgIHNldEZpbGVVcGxvYWQoZXZlbnQudGFyZ2V0LmZpbGVzWzBdKVxuICAgIGV2ZW50LnRhcmdldC52YWx1ZSA9IG51bGw7XG4gIH1cblxuICByZXR1cm4gKCBcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmFkbWlufT5cbiAgICAgIDxsYWJlbCBodG1sRm9yPSdmaWxlU2VsZWN0aW9uQnV0dG9uJyBjbGFzc05hbWU9e3N0eWxlcy51cGxvYWRCdXR0b259PlNlbGVjdCBmaWxlLi4uPC9sYWJlbD5cbiAgICAgIDxpbnB1dCBpZD0nZmlsZVNlbGVjdGlvbkJ1dHRvbicgdHlwZT1cImZpbGVcIiBzdHlsZT17e2Rpc3BsYXk6ICdub25lJ319IG9uQ2hhbmdlPXsoZXZlbnQpID0+IHtmaWxlSW5wdXRPbkNoYW5nZShldmVudCl9fS8+XG5cbiAgICAgIDxsYWJlbCBodG1sRm9yPSd1cGxvYWRCdXR0b24nIGNsYXNzTmFtZT17c3R5bGVzLnVwbG9hZEJ1dHRvbn0+VXBsb2FkIEZpbGU8L2xhYmVsPlxuICAgICAgPGJ1dHRvbiBpZD0ndXBsb2FkQnV0dG9uJyBvbkNsaWNrPXt1cGxvYWRGaWxlfSBzdHlsZT17e2Rpc3BsYXk6ICdub25lJ319ID4gVXBsb2FkIEltYWdlPC9idXR0b24+XG5cbiAgICAgIDxoMz5GaWxlIGNob3NlbiBmb3IgdXBsb2FkOiB7ZmlsZVVwbG9hZCA/IGZpbGVVcGxvYWQubmFtZSA6IFwiXCJ9PC9oMz5cbiAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gY2hlY2soKX0+Q0hFQ0s8L2J1dHRvbj5cbiAgICAgIHtjbGllbnRTZWxlY3RlZCAmJiA8aDU+Y2xpZW50IHNlbGVjdGVkOiB7Y2xpZW50U2VsZWN0ZWQuZGlzcGxheU5hbWV9IHtjbGllbnRTZWxlY3RlZC51aWR9PC9oNT59XG5cbiAgICAgIHsvKiA8dWw+XG4gICAgICAgIHtjbGllbnRMaXN0QXJyYXkgJiZcbiAgICAgICAgICBjbGllbnRMaXN0QXJyYXkubWFwKCh4KSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICA8dWwga2V5PXt4LnVpZH0gY2xhc3NOYW1lPXtzdHlsZXMuY2xpZW50SW5mb0xpc3RJdGVtfSBvbkNsaWNrPXsoKSA9PiBzZXRDbGllbnRTZWxlY3RlZCh4KX0+XG4gICAgICAgICAgICAgICAgezxJbWFnZSBcbiAgICAgICAgICAgICAgICAgIGtleT17eC51aWR9XG4gICAgICAgICAgICAgICAgICBzcmM9e3gucGhvdG9VUkx9IFxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMudXNlckljb259XG4gICAgICAgICAgICAgICAgICBhbHQ9XCJVc2VyIFBob3RvXCIgXG4gICAgICAgICAgICAgICAgICB3aWR0aD17JzEwMCUnfSBcbiAgICAgICAgICAgICAgICAgIGhlaWdodD17JzEwMCUnfSAvPiB9XG4gICAgICAgICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9e3N0eWxlcy5jbGllbnRJbmZvfT5cbiAgICAgICAgICAgICAgICAgICAge09iamVjdC52YWx1ZXMoeCkubWFwKCh2YWx1ZSkgPT4gPGxpIGtleT17dmFsdWV9IGNsYXNzTmFtZT17c3R5bGVzLmNsaWVudEluZm9MaXN0SXRlbUxpc3RJdGVtfT5cbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgdHlwZW9mIHZhbHVlID09ICdzdHJpbmcnID9cbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZVxuICAgICAgICAgICAgICAgICAgICAgIDpcbiAgICAgICAgICAgICAgICAgICAgICBudWxsXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICA8L2xpPil9XG4gICAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XG5cbiAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPXtzdHlsZXMuc29uZ0xpc3R9PlxuICAgICAgICAgICAgICAgICAge09iamVjdC52YWx1ZXMoeC5zb25ncykubWFwKChzb25nRGF0YSkgPT4gPGxpIGtleT17c29uZ0RhdGEuZGF0ZX0+e3NvbmdEYXRhLmRhdGV9PC9saT4pfVxuICAgICAgICAgICAgICAgICAge09iamVjdC52YWx1ZXMoeC5zb25ncykubWFwKChzb25nRGF0YSkgPT4gPGF1ZGlvIGtleT17c29uZ0RhdGEuZGF0ZX0gY29udHJvbHMgc3JjPVwiaHR0cHM6Ly9maXJlYmFzZXN0b3JhZ2UuZ29vZ2xlYXBpcy5jb20vdjAvYi94a3RyYW5zZmVyLTMwZDkzLmFwcHNwb3QuY29tL28vbWFzdGVycyUyRk9DSEUtUGxheWluZy1XaXRoLU15LUhlYWQtZHktMjYwODIwMjIud2F2P2FsdD1tZWRpYSZ0b2tlbj04MWYxZDhmMS05NGNkLTQ5ZmUtYWU1Ni0xOGRlNTcxMGJiMjVcIj48L2F1ZGlvPil9XG4gICAgICAgICAgICAgICAgICB7T2JqZWN0LnZhbHVlcyh4LnNvbmdzKS5tYXAoKHNvbmdEYXRhKSA9PiA8bGkga2V5PXtzb25nRGF0YS5kYXRlfSA+e3NvbmdEYXRhLnJldmlzaW9uTm90ZX08L2xpPil9XG4gICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgIClcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICA8L3VsPiAqL31cbiAgICAgIFxuICAgICAgICB7LyogPGF1ZGlvIGNvbnRyb2xzIHNyYz1cImh0dHBzOi8vZmlyZWJhc2VzdG9yYWdlLmdvb2dsZWFwaXMuY29tL3YwL2IveGt0cmFuc2Zlci0zMGQ5My5hcHBzcG90LmNvbS9vL21hc3RlcnMlMkZPQ0hFJUNDJTgxJTIwLSUyMEFtaW5hJTIwJTVCZHlfMjYwODIwMjJfbXAzJTVELm1wMz9hbHQ9bWVkaWEmdG9rZW49MWM3YTIwN2QtNDQ2Ny00ZGZlLThiNjUtM2I1MzMzNTZkNzgzXCI+PC9hdWRpbz4gKi99XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgQWRtaW4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInN0eWxlcyIsInJlZiIsInVwbG9hZEJ5dGVzIiwiZ2V0RG93bmxvYWRVUkwiLCJsaXN0QWxsIiwibGlzdCIsInN0b3JhZ2UiLCJjb2xsZWN0aW9uIiwiZ2V0RG9jcyIsImRvYyIsImdldERvYyIsInVwZGF0ZURvYyIsInNldERvYyIsImZpcmViYXNlIiwiYXV0aCIsImRiIiwicHJvdmlkZXIiLCJJbWFnZSIsIkFkbWluIiwiY2hlY2siLCJjb25zb2xlIiwibG9nIiwiY2xpZW50TGlzdEFycmF5IiwiY2xpZW50TGlzdCIsInNldENsaWVudExpc3QiLCJzZXRDbGllbnRMaXN0QXJyYXkiLCJjbGllbnRTZWxlY3RlZCIsInNldENsaWVudFNlbGVjdGVkIiwiY2xvbmVPZkNsaWVudExpc3RBcnJheSIsImdldENsaWVudExpc3QiLCJkb2NSZWYiLCJkb2NTbmFwIiwieWVzIiwidGVtcEFycmF5IiwidGVtcFNvbmdzQXJyYXkiLCJ6Iiwic29uZ0RvYyIsInF1ZXJ5U25hcHNob3QiLCJleGlzdHMiLCJkYXRhIiwiT2JqZWN0IiwidmFsdWVzIiwibWFwIiwidmFsdWUiLCJwdXNoIiwibGVuZ3RoIiwidWlkV2l0aG91dE51bWJlckF0VGhlU3RhcnQiLCJmb3JFYWNoIiwiaWQiLCJnZXRBbGxTb25nc0J5Q2xpZW50IiwiSlNPTiIsInBhcnNlIiwic3RyaW5naWZ5Iiwic29uZ3MiLCJmaWxlVXBsb2FkIiwic2V0RmlsZVVwbG9hZCIsImZpbGVVcmwiLCJzZXRGaWxlVXJsIiwidXBsb2FkRmlsZSIsImZpbGVOYW1lUmVnZXhlZCIsInNvbmdUaXRsZSIsImRvd25sb2FkVVJMIiwiZm9sZGVyUmVmIiwibmFtZSIsInJlcGxhY2UiLCJ0aGVuIiwic25hcHNob3QiLCJ1cmwiLCJkYXRlIiwiRGF0ZSIsInJldmlzaW9uTm90ZSIsImZpbGVJbnB1dE9uQ2hhbmdlIiwiZXZlbnQiLCJ0YXJnZXQiLCJmaWxlcyIsImRpdiIsImNsYXNzTmFtZSIsImFkbWluIiwibGFiZWwiLCJodG1sRm9yIiwidXBsb2FkQnV0dG9uIiwiaW5wdXQiLCJ0eXBlIiwic3R5bGUiLCJkaXNwbGF5Iiwib25DaGFuZ2UiLCJidXR0b24iLCJvbkNsaWNrIiwiaDMiLCJoNSIsImRpc3BsYXlOYW1lIiwidWlkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/Components/Admin.js\n"));

/***/ })

});