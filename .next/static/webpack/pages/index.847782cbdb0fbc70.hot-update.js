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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _Users_dylanking6132_xylvnking_xktransfer_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_dylanking6132_xylvnking_xktransfer_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_dylanking6132_xylvnking_xktransfer_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var firebase_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/storage */ \"./node_modules/firebase/storage/dist/index.esm.js\");\n/* harmony import */ var _firebase_clientApp__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../firebase/clientApp */ \"./firebase/clientApp.js\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! firebase/firestore */ \"./node_modules/firebase/firestore/dist/index.esm.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_6__);\n// import React from 'react'\n\n\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nfunction Admin() {\n    var _this = this;\n    var check = function check() {\n        // Object.keys(clientSelected).map((key) => console.log(key))\n        console.log(clientSelected);\n    };\n    _s();\n    var docRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_5__.doc)(_firebase_clientApp__WEBPACK_IMPORTED_MODULE_4__.db, \"admin\", \"listOfAllUsers\");\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null), clientList = ref1[0], setClientList = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]), clientListArray = ref2[0], setClientListArray = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null), clientSelected = ref3[0], setClientSelected = ref3[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        function getClientList() {\n            return _getClientList.apply(this, arguments);\n        }\n        function _getClientList() {\n            _getClientList = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(_Users_dylanking6132_xylvnking_xktransfer_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n                var docRef, docSnap, yes, tempArray;\n                return _Users_dylanking6132_xylvnking_xktransfer_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                    while(1)switch(_ctx.prev = _ctx.next){\n                        case 0:\n                            docRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_5__.doc)(_firebase_clientApp__WEBPACK_IMPORTED_MODULE_4__.db, \"admin\", \"clientList\");\n                            _ctx.next = 3;\n                            return (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_5__.getDoc)(docRef);\n                        case 3:\n                            docSnap = _ctx.sent;\n                            if (docSnap.exists()) {\n                                yes = docSnap.data();\n                                setClientList(yes);\n                                tempArray = [];\n                                Object.values(docSnap.data()).map(function(value) {\n                                    return tempArray.push(value);\n                                });\n                                setClientListArray(tempArray);\n                            } else {\n                                console.log(\"No such document!\");\n                            }\n                        case 5:\n                        case \"end\":\n                            return _ctx.stop();\n                    }\n                }, _callee);\n            }));\n            return _getClientList.apply(this, arguments);\n        }\n        getClientList();\n    }, []);\n    var ref4 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null), fileUpload = ref4[0], setFileUpload = ref4[1];\n    var ref5 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null), fileUrl = ref5[0], setFileUrl = ref5[1];\n    var uploadFile = function() {\n        var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(_Users_dylanking6132_xylvnking_xktransfer_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var songTitle, downloadURL, folderRef, fileNameRegex;\n            return _Users_dylanking6132_xylvnking_xktransfer_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        songTitle = \"temporarySong\";\n                        downloadURL = \"\";\n                        if (!(fileUpload == null)) {\n                            _ctx.next = 4;\n                            break;\n                        }\n                        return _ctx.abrupt(\"return\");\n                    case 4:\n                        folderRef = (0,firebase_storage__WEBPACK_IMPORTED_MODULE_3__.ref)(_firebase_clientApp__WEBPACK_IMPORTED_MODULE_4__.storage, \"masters/\".concat(fileUpload.name)) // making a reference to the bucket + name to give file\n                        ;\n                        fileNameRegex = fileUpload.name.replace(/.wav/, \"\");\n                        console.log(fileNameRegex);\n                        _ctx.next = 9;\n                        return (0,firebase_storage__WEBPACK_IMPORTED_MODULE_3__.uploadBytes)(folderRef, fileUpload).then(function(snapshot) {\n                            (0,firebase_storage__WEBPACK_IMPORTED_MODULE_3__.getDownloadURL)(snapshot.ref).then(function(url) {\n                                downloadURL = url;\n                                console.log(url);\n                                console.log(downloadURL);\n                                (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_5__.setDoc)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_5__.doc)(_firebase_clientApp__WEBPACK_IMPORTED_MODULE_4__.db, clientSelected.uidWithoutNumberAtTheStart, songTitle), {\n                                    revisions: [\n                                        {\n                                            downloadURL: downloadURL,\n                                            fileName: fileUpload.name,\n                                            revisionNote: \"this is a revision note and there will probably be lots of them. i think this schema works.\"\n                                        }\n                                    ]\n                                });\n                            // updateDoc(doc(db, clientSelected.uidWithoutNumberAtTheStart, \"songs\"), {\n                            //   createSongNameMethodVariable: downloadURL,\n                            //   revision1: \"this would be the first set of revision notes\"\n                            // })\n                            });\n                        });\n                    case 9:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function uploadFile() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    // database architecture\n    // i think the first is better - having a document per song\n    // it allows me more flexibility later if I want to store metadata or other info\n    // it also doesn't risk hitting the 1mb limit for documents,\n    // which allows me to not *need* to clear the data once the final master is delivered\n    /*\n  collection: client\n  document: song name\n  field: [{download url0, revision notes0}, [download url1, revision notes1], [download url2, revision notes2]] - changes every round\n  */ /*\n  collection: client\n  document: songs\n  song: [[download url0, revision notes0], [download url1, revision notes1], [download url2, revision notes2]] - changes every round\n  */ var fileInputOnChange = function(event) {\n        setFileUpload(event.target.files[0]);\n        event.target.value = null;\n        console.log(event.target.files[0]);\n    // const fileNameRegex = fileUpload.name.replace(/.wav/, '')\n    // console.log(fileNameRegex)\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default().admin),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"label\", {\n                htmlFor: \"fileSelectionButton\",\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default().uploadButton),\n                children: \"Select file...\"\n            }, void 0, false, {\n                fileName: \"/Users/dylanking6132/xylvnking/xktransfer/pages/Components/Admin.js\",\n                lineNumber: 115,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                id: \"fileSelectionButton\",\n                type: \"file\",\n                style: {\n                    display: \"none\"\n                },\n                onChange: function(event) {\n                    fileInputOnChange(event);\n                }\n            }, void 0, false, {\n                fileName: \"/Users/dylanking6132/xylvnking/xktransfer/pages/Components/Admin.js\",\n                lineNumber: 116,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"label\", {\n                htmlFor: \"uploadButton\",\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default().uploadButton),\n                children: \"Upload File\"\n            }, void 0, false, {\n                fileName: \"/Users/dylanking6132/xylvnking/xktransfer/pages/Components/Admin.js\",\n                lineNumber: 118,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                id: \"uploadButton\",\n                onClick: uploadFile,\n                style: {\n                    display: \"none\"\n                },\n                children: \" Upload Image\"\n            }, void 0, false, {\n                fileName: \"/Users/dylanking6132/xylvnking/xktransfer/pages/Components/Admin.js\",\n                lineNumber: 119,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h3\", {\n                children: [\n                    \"File chosen for upload: \",\n                    fileUpload ? fileUpload.name : \"\"\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/dylanking6132/xylvnking/xktransfer/pages/Components/Admin.js\",\n                lineNumber: 121,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                onClick: function() {\n                    return check();\n                },\n                children: \"log list\"\n            }, void 0, false, {\n                fileName: \"/Users/dylanking6132/xylvnking/xktransfer/pages/Components/Admin.js\",\n                lineNumber: 122,\n                columnNumber: 7\n            }, this),\n            clientSelected && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h5\", {\n                children: [\n                    \"client selected: \",\n                    clientSelected.displayName,\n                    \" \",\n                    clientSelected.uid\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/dylanking6132/xylvnking/xktransfer/pages/Components/Admin.js\",\n                lineNumber: 123,\n                columnNumber: 26\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"ul\", {\n                children: clientListArray && clientListArray.map(function(x) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"ul\", {\n                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default().clientInfoListItem),\n                        onClick: function() {\n                            return setClientSelected(x);\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_6___default()), {\n                                src: x.photoURL,\n                                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default().userIcon),\n                                alt: \"User Photo\",\n                                width: \"100%\",\n                                height: \"100%\"\n                            }, x.uid, false, {\n                                fileName: \"/Users/dylanking6132/xylvnking/xktransfer/pages/Components/Admin.js\",\n                                lineNumber: 132,\n                                columnNumber: 34\n                            }, _this),\n                            Object.values(x).map(function(value) {\n                                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"li\", {\n                                    className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default().clientInfoListItemListItem),\n                                    children: value\n                                }, value, false, {\n                                    fileName: \"/Users/dylanking6132/xylvnking/xktransfer/pages/Components/Admin.js\",\n                                    lineNumber: 140,\n                                    columnNumber: 50\n                                }, _this);\n                            })\n                        ]\n                    }, x.uid, true, {\n                        fileName: \"/Users/dylanking6132/xylvnking/xktransfer/pages/Components/Admin.js\",\n                        lineNumber: 130,\n                        columnNumber: 15\n                    }, _this);\n                })\n            }, void 0, false, {\n                fileName: \"/Users/dylanking6132/xylvnking/xktransfer/pages/Components/Admin.js\",\n                lineNumber: 124,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/dylanking6132/xylvnking/xktransfer/pages/Components/Admin.js\",\n        lineNumber: 114,\n        columnNumber: 5\n    }, this);\n}\n_s(Admin, \"LyovquM3P0PhBlGzzXjMDr9S+/Q=\");\n_c = Admin;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Admin);\nvar _c;\n$RefreshReg$(_c, \"Admin\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RTs7b0JBQUMsbUJBQWlCO29CQUFDdkQsY0FBYyxDQUFDd0QsV0FBVztvQkFBQyxHQUFDO29CQUFDeEQsY0FBYyxDQUFDeUQsR0FBRzs7Ozs7O29CQUFNOzBCQUM5Riw4REFBQ0MsSUFBRTswQkFFQXRELGVBQWUsSUFDZEEsZUFBZSxDQUFDVyxHQUFHLENBQUMsU0FBQzRDLENBQUMsRUFBSztvQkFFekIscUJBQ0UsOERBQUNELElBQUU7d0JBQWFqQixTQUFTLEVBQUUvRCxtRkFBeUI7d0JBQUUyRSxPQUFPLEVBQUU7bUNBQU0vQyxpQkFBaUIsQ0FBQ3FELENBQUMsQ0FBQzt5QkFBQTs7MENBRXRFLDhEQUFDaEUsbURBQUs7Z0NBRXJCa0UsR0FBRyxFQUFFRixDQUFDLENBQUNHLFFBQVE7Z0NBQ2ZyQixTQUFTLEVBQUUvRCx5RUFBZTtnQ0FDMUJzRixHQUFHLEVBQUMsWUFBWTtnQ0FDaEJDLEtBQUssRUFBRSxNQUFNO2dDQUNiQyxNQUFNLEVBQUUsTUFBTTsrQkFMVFAsQ0FBQyxDQUFDRixHQUFHOzs7O3FDQUtROzRCQUVuQjVDLE1BQU0sQ0FBQ0MsTUFBTSxDQUFDNkMsQ0FBQyxDQUFDLENBQUM1QyxHQUFHLENBQUMsU0FBQ0MsS0FBSztxREFBSyw4REFBQ21ELElBQUU7b0NBQWExQixTQUFTLEVBQUUvRCwyRkFBaUM7OENBRTFGc0MsS0FBSzttQ0FGa0NBLEtBQUs7Ozs7eUNBRzFDOzZCQUFBLENBQUM7O3VCQWJDMkMsQ0FBQyxDQUFDRixHQUFHOzs7OzZCQWNULENBQ047aUJBQ0YsQ0FBQzs7Ozs7b0JBUUQ7Ozs7OztZQUVELENBQ1A7Q0FDRjtHQTdJUTdELEtBQUs7QUFBTEEsS0FBQUEsS0FBSztBQStJZCwrREFBZUEsS0FBSyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9Db21wb25lbnRzL0FkbWluLmpzPzY2NTIiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGUsIHVzZUVmZmVjdH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uLy4uL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3MnXG5pbXBvcnQge1xuICByZWYsXG4gIHVwbG9hZEJ5dGVzLFxuICBnZXREb3dubG9hZFVSTCxcbiAgbGlzdEFsbCxcbiAgbGlzdCxcbn0gZnJvbSBcImZpcmViYXNlL3N0b3JhZ2VcIjtcbmltcG9ydCB7IHN0b3JhZ2UgfSBmcm9tICcuLi8uLi9maXJlYmFzZS9jbGllbnRBcHAnXG5pbXBvcnQgeyBjb2xsZWN0aW9uLCBnZXREb2NzLCBkb2MsIGdldERvYywgdXBkYXRlRG9jLCBzZXREb2MgfSBmcm9tIFwiZmlyZWJhc2UvZmlyZXN0b3JlXCI7XG5cbmltcG9ydCBmaXJlYmFzZSwge2F1dGgsIGRiLCBwcm92aWRlcn0gZnJvbSAnLi4vLi4vZmlyZWJhc2UvY2xpZW50QXBwJ1xuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnO1xuXG5mdW5jdGlvbiBBZG1pbigpIHtcblxuICBjb25zdCBkb2NSZWYgPSBkb2MoZGIsIFwiYWRtaW5cIiwgXCJsaXN0T2ZBbGxVc2Vyc1wiKTtcbiAgY29uc3QgW2NsaWVudExpc3QsIHNldENsaWVudExpc3RdID0gdXNlU3RhdGUobnVsbClcbiAgY29uc3QgW2NsaWVudExpc3RBcnJheSwgc2V0Q2xpZW50TGlzdEFycmF5XSA9IHVzZVN0YXRlKFtdKVxuICBjb25zdCBbY2xpZW50U2VsZWN0ZWQsIHNldENsaWVudFNlbGVjdGVkXSA9IHVzZVN0YXRlKG51bGwpXG4gIFxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIFxuICAgIGFzeW5jIGZ1bmN0aW9uIGdldENsaWVudExpc3QoKSB7XG5cbiAgICAgICAgICBjb25zdCBkb2NSZWYgPSBkb2MoZGIsIFwiYWRtaW5cIiwgXCJjbGllbnRMaXN0XCIpO1xuICAgICAgICAgIGNvbnN0IGRvY1NuYXAgPSBhd2FpdCBnZXREb2MoZG9jUmVmKTtcbiAgICAgIFxuICAgICAgICAgIGlmIChkb2NTbmFwLmV4aXN0cygpKSB7XG4gICAgICAgICAgICBjb25zdCB5ZXMgPSBkb2NTbmFwLmRhdGEoKVxuICAgICAgICAgICAgc2V0Q2xpZW50TGlzdCh5ZXMpXG4gICAgICAgICAgICBjb25zdCB0ZW1wQXJyYXkgPSBbXVxuICAgICAgICAgICAgT2JqZWN0LnZhbHVlcyhkb2NTbmFwLmRhdGEoKSkubWFwKCh2YWx1ZSkgPT4gdGVtcEFycmF5LnB1c2godmFsdWUpKVxuICAgICAgICAgICAgc2V0Q2xpZW50TGlzdEFycmF5KHRlbXBBcnJheSlcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJObyBzdWNoIGRvY3VtZW50IVwiKTtcbiAgICAgICAgICB9XG4gICAgfVxuICAgIGdldENsaWVudExpc3QoKVxuICB9LCBbXSlcbiAgXG4gIGZ1bmN0aW9uIGNoZWNrKCkge1xuICAgIC8vIE9iamVjdC5rZXlzKGNsaWVudFNlbGVjdGVkKS5tYXAoKGtleSkgPT4gY29uc29sZS5sb2coa2V5KSlcbiAgICBjb25zb2xlLmxvZyhjbGllbnRTZWxlY3RlZClcbiAgfVxuXG4gIGNvbnN0IFtmaWxlVXBsb2FkLCBzZXRGaWxlVXBsb2FkXSA9IHVzZVN0YXRlKG51bGwpXG4gIGNvbnN0IFtmaWxlVXJsLCBzZXRGaWxlVXJsXSA9IHVzZVN0YXRlKG51bGwpXG4gIGNvbnN0IHVwbG9hZEZpbGUgPSBhc3luYyAoKSA9PiB7XG4gICAgY29uc3Qgc29uZ1RpdGxlID0gJ3RlbXBvcmFyeVNvbmcnXG4gICAgbGV0IGRvd25sb2FkVVJMID0gJydcbiAgICBpZiAoZmlsZVVwbG9hZCA9PSBudWxsKSByZXR1cm47XG4gICAgY29uc3QgZm9sZGVyUmVmID0gcmVmKHN0b3JhZ2UsIGBtYXN0ZXJzLyR7ZmlsZVVwbG9hZC5uYW1lfWApIC8vIG1ha2luZyBhIHJlZmVyZW5jZSB0byB0aGUgYnVja2V0ICsgbmFtZSB0byBnaXZlIGZpbGVcblxuICAgIGNvbnN0IGZpbGVOYW1lUmVnZXggPSBmaWxlVXBsb2FkLm5hbWUucmVwbGFjZSgvLndhdi8sICcnKVxuICAgIGNvbnNvbGUubG9nKGZpbGVOYW1lUmVnZXgpXG5cbiAgICBhd2FpdCB1cGxvYWRCeXRlcyhmb2xkZXJSZWYsIGZpbGVVcGxvYWQpLnRoZW4oKHNuYXBzaG90KSA9PiB7XG5cbiAgICAgIGdldERvd25sb2FkVVJMKHNuYXBzaG90LnJlZikudGhlbigodXJsKSA9PiB7XG4gICAgICAgIGRvd25sb2FkVVJMID0gdXJsXG4gICAgICAgIGNvbnNvbGUubG9nKHVybClcbiAgICAgICAgY29uc29sZS5sb2coZG93bmxvYWRVUkwpXG4gICAgICBcbiAgICAgIHNldERvYyhkb2MoZGIsIGNsaWVudFNlbGVjdGVkLnVpZFdpdGhvdXROdW1iZXJBdFRoZVN0YXJ0LCBzb25nVGl0bGUpLCB7XG4gICAgICAgIHJldmlzaW9uczogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIGRvd25sb2FkVVJMOiBkb3dubG9hZFVSTCxcbiAgICAgICAgICAgIGZpbGVOYW1lOiBmaWxlVXBsb2FkLm5hbWUsXG4gICAgICAgICAgICByZXZpc2lvbk5vdGU6ICd0aGlzIGlzIGEgcmV2aXNpb24gbm90ZSBhbmQgdGhlcmUgd2lsbCBwcm9iYWJseSBiZSBsb3RzIG9mIHRoZW0uIGkgdGhpbmsgdGhpcyBzY2hlbWEgd29ya3MuJ1xuICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgICAgfSlcblxuICAgICAgLy8gdXBkYXRlRG9jKGRvYyhkYiwgY2xpZW50U2VsZWN0ZWQudWlkV2l0aG91dE51bWJlckF0VGhlU3RhcnQsIFwic29uZ3NcIiksIHtcbiAgICAgIC8vICAgY3JlYXRlU29uZ05hbWVNZXRob2RWYXJpYWJsZTogZG93bmxvYWRVUkwsXG4gICAgICAvLyAgIHJldmlzaW9uMTogXCJ0aGlzIHdvdWxkIGJlIHRoZSBmaXJzdCBzZXQgb2YgcmV2aXNpb24gbm90ZXNcIlxuICAgIFxuICAgICAgLy8gfSlcblxuXG4gICAgICB9KVxuICAgIH0pXG4gIH1cblxuICAvLyBkYXRhYmFzZSBhcmNoaXRlY3R1cmVcbiAgLy8gaSB0aGluayB0aGUgZmlyc3QgaXMgYmV0dGVyIC0gaGF2aW5nIGEgZG9jdW1lbnQgcGVyIHNvbmdcbiAgLy8gaXQgYWxsb3dzIG1lIG1vcmUgZmxleGliaWxpdHkgbGF0ZXIgaWYgSSB3YW50IHRvIHN0b3JlIG1ldGFkYXRhIG9yIG90aGVyIGluZm9cbiAgLy8gaXQgYWxzbyBkb2Vzbid0IHJpc2sgaGl0dGluZyB0aGUgMW1iIGxpbWl0IGZvciBkb2N1bWVudHMsXG4gICAgLy8gd2hpY2ggYWxsb3dzIG1lIHRvIG5vdCAqbmVlZCogdG8gY2xlYXIgdGhlIGRhdGEgb25jZSB0aGUgZmluYWwgbWFzdGVyIGlzIGRlbGl2ZXJlZFxuICAvKlxuICBjb2xsZWN0aW9uOiBjbGllbnRcbiAgZG9jdW1lbnQ6IHNvbmcgbmFtZVxuICBmaWVsZDogW3tkb3dubG9hZCB1cmwwLCByZXZpc2lvbiBub3RlczB9LCBbZG93bmxvYWQgdXJsMSwgcmV2aXNpb24gbm90ZXMxXSwgW2Rvd25sb2FkIHVybDIsIHJldmlzaW9uIG5vdGVzMl1dIC0gY2hhbmdlcyBldmVyeSByb3VuZFxuICAqL1xuXG4gIC8qXG4gIGNvbGxlY3Rpb246IGNsaWVudFxuICBkb2N1bWVudDogc29uZ3NcbiAgc29uZzogW1tkb3dubG9hZCB1cmwwLCByZXZpc2lvbiBub3RlczBdLCBbZG93bmxvYWQgdXJsMSwgcmV2aXNpb24gbm90ZXMxXSwgW2Rvd25sb2FkIHVybDIsIHJldmlzaW9uIG5vdGVzMl1dIC0gY2hhbmdlcyBldmVyeSByb3VuZFxuICAqL1xuXG4gIGNvbnN0IGZpbGVJbnB1dE9uQ2hhbmdlID0gKGV2ZW50KSA9PiB7XG4gICAgc2V0RmlsZVVwbG9hZChldmVudC50YXJnZXQuZmlsZXNbMF0pXG4gICAgZXZlbnQudGFyZ2V0LnZhbHVlID0gbnVsbDtcbiAgICBjb25zb2xlLmxvZyhldmVudC50YXJnZXQuZmlsZXNbMF0pXG4gICAgLy8gY29uc3QgZmlsZU5hbWVSZWdleCA9IGZpbGVVcGxvYWQubmFtZS5yZXBsYWNlKC8ud2F2LywgJycpXG4gICAgLy8gY29uc29sZS5sb2coZmlsZU5hbWVSZWdleClcbiAgfVxuXG4gIHJldHVybiAoIFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYWRtaW59PlxuICAgICAgPGxhYmVsIGh0bWxGb3I9J2ZpbGVTZWxlY3Rpb25CdXR0b24nIGNsYXNzTmFtZT17c3R5bGVzLnVwbG9hZEJ1dHRvbn0+U2VsZWN0IGZpbGUuLi48L2xhYmVsPlxuICAgICAgPGlucHV0IGlkPSdmaWxlU2VsZWN0aW9uQnV0dG9uJyB0eXBlPVwiZmlsZVwiIHN0eWxlPXt7ZGlzcGxheTogJ25vbmUnfX0gb25DaGFuZ2U9eyhldmVudCkgPT4ge2ZpbGVJbnB1dE9uQ2hhbmdlKGV2ZW50KX19Lz5cblxuICAgICAgPGxhYmVsIGh0bWxGb3I9J3VwbG9hZEJ1dHRvbicgY2xhc3NOYW1lPXtzdHlsZXMudXBsb2FkQnV0dG9ufT5VcGxvYWQgRmlsZTwvbGFiZWw+XG4gICAgICA8YnV0dG9uIGlkPSd1cGxvYWRCdXR0b24nIG9uQ2xpY2s9e3VwbG9hZEZpbGV9IHN0eWxlPXt7ZGlzcGxheTogJ25vbmUnfX0gPiBVcGxvYWQgSW1hZ2U8L2J1dHRvbj5cblxuICAgICAgPGgzPkZpbGUgY2hvc2VuIGZvciB1cGxvYWQ6IHtmaWxlVXBsb2FkID8gZmlsZVVwbG9hZC5uYW1lIDogXCJcIn08L2gzPlxuICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBjaGVjaygpfT5sb2cgbGlzdDwvYnV0dG9uPlxuICAgICAge2NsaWVudFNlbGVjdGVkICYmIDxoNT5jbGllbnQgc2VsZWN0ZWQ6IHtjbGllbnRTZWxlY3RlZC5kaXNwbGF5TmFtZX0ge2NsaWVudFNlbGVjdGVkLnVpZH08L2g1Pn1cbiAgICAgIDx1bD5cblxuICAgICAgICB7Y2xpZW50TGlzdEFycmF5ICYmXG4gICAgICAgICAgY2xpZW50TGlzdEFycmF5Lm1hcCgoeCkgPT4ge1xuXG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICA8dWwga2V5PXt4LnVpZH0gY2xhc3NOYW1lPXtzdHlsZXMuY2xpZW50SW5mb0xpc3RJdGVtfSBvbkNsaWNrPXsoKSA9PiBzZXRDbGllbnRTZWxlY3RlZCh4KX0+XG4gICAgICAgICAgICAgIHsvKiA8dWwga2V5PXt4LnVpZH0gY2xhc3NOYW1lPXtzdHlsZXMuY2xpZW50SW5mb0xpc3RJdGVtfT4gKi99XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHs8SW1hZ2UgXG4gICAgICAgICAgICAgICAgICBrZXk9e3gudWlkfVxuICAgICAgICAgICAgICAgICAgc3JjPXt4LnBob3RvVVJMfSBcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLnVzZXJJY29ufVxuICAgICAgICAgICAgICAgICAgYWx0PVwiVXNlciBQaG90b1wiIFxuICAgICAgICAgICAgICAgICAgd2lkdGg9eycxMDAlJ30gXG4gICAgICAgICAgICAgICAgICBoZWlnaHQ9eycxMDAlJ30gLz4gfVxuICAgICAgICAgICAgICAgIHsvKiB7T2JqZWN0LnZhbHVlcyh4KS5tYXAoKHZhbHVlKSA9PiA8bGkga2V5PXt2YWx1ZX0gY2xhc3NOYW1lPXtzdHlsZXMuY2xpZW50SW5mb0xpc3RJdGVtTGlzdEl0ZW19IG9uQ2xpY2s9eygpID0+IHNldENsaWVudFNlbGVjdGVkKHZhbHVlKX0+ICovfVxuICAgICAgICAgICAgICAgIHtPYmplY3QudmFsdWVzKHgpLm1hcCgodmFsdWUpID0+IDxsaSBrZXk9e3ZhbHVlfSBjbGFzc05hbWU9e3N0eWxlcy5jbGllbnRJbmZvTGlzdEl0ZW1MaXN0SXRlbX0+XG4gICAgICAgICAgICAgICAgICB7Lyoge3ZhbHVlfSAqL31cbiAgICAgICAgICAgICAgICAgIHt2YWx1ZX1cbiAgICAgICAgICAgICAgICA8L2xpPil9XG4gICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICApXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgICB7Lyoge2NsaWVudExpc3RBcnJheSAmJiBjbGllbnRMaXN0QXJyYXlbMF19ICovfVxuXG5cblxuXG5cbiAgICAgIDwvdWw+XG4gICAgICAgIHsvKiA8YXVkaW8gY29udHJvbHMgc3JjPVwiaHR0cHM6Ly9maXJlYmFzZXN0b3JhZ2UuZ29vZ2xlYXBpcy5jb20vdjAvYi94a3RyYW5zZmVyLTMwZDkzLmFwcHNwb3QuY29tL28vbWFzdGVycyUyRk9DSEUlQ0MlODElMjAtJTIwQW1pbmElMjAlNUJkeV8yNjA4MjAyMl9tcDMlNUQubXAzP2FsdD1tZWRpYSZ0b2tlbj0xYzdhMjA3ZC00NDY3LTRkZmUtOGI2NS0zYjUzMzM1NmQ3ODNcIj48L2F1ZGlvPiAqL31cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBBZG1pbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0Iiwic3R5bGVzIiwicmVmIiwidXBsb2FkQnl0ZXMiLCJnZXREb3dubG9hZFVSTCIsImxpc3RBbGwiLCJsaXN0Iiwic3RvcmFnZSIsImNvbGxlY3Rpb24iLCJnZXREb2NzIiwiZG9jIiwiZ2V0RG9jIiwidXBkYXRlRG9jIiwic2V0RG9jIiwiZmlyZWJhc2UiLCJhdXRoIiwiZGIiLCJwcm92aWRlciIsIkltYWdlIiwiQWRtaW4iLCJjaGVjayIsImNvbnNvbGUiLCJsb2ciLCJjbGllbnRTZWxlY3RlZCIsImRvY1JlZiIsImNsaWVudExpc3QiLCJzZXRDbGllbnRMaXN0IiwiY2xpZW50TGlzdEFycmF5Iiwic2V0Q2xpZW50TGlzdEFycmF5Iiwic2V0Q2xpZW50U2VsZWN0ZWQiLCJnZXRDbGllbnRMaXN0IiwiZG9jU25hcCIsInllcyIsInRlbXBBcnJheSIsImV4aXN0cyIsImRhdGEiLCJPYmplY3QiLCJ2YWx1ZXMiLCJtYXAiLCJ2YWx1ZSIsInB1c2giLCJmaWxlVXBsb2FkIiwic2V0RmlsZVVwbG9hZCIsImZpbGVVcmwiLCJzZXRGaWxlVXJsIiwidXBsb2FkRmlsZSIsInNvbmdUaXRsZSIsImRvd25sb2FkVVJMIiwiZm9sZGVyUmVmIiwiZmlsZU5hbWVSZWdleCIsIm5hbWUiLCJyZXBsYWNlIiwidGhlbiIsInNuYXBzaG90IiwidXJsIiwidWlkV2l0aG91dE51bWJlckF0VGhlU3RhcnQiLCJyZXZpc2lvbnMiLCJmaWxlTmFtZSIsInJldmlzaW9uTm90ZSIsImZpbGVJbnB1dE9uQ2hhbmdlIiwiZXZlbnQiLCJ0YXJnZXQiLCJmaWxlcyIsImRpdiIsImNsYXNzTmFtZSIsImFkbWluIiwibGFiZWwiLCJodG1sRm9yIiwidXBsb2FkQnV0dG9uIiwiaW5wdXQiLCJpZCIsInR5cGUiLCJzdHlsZSIsImRpc3BsYXkiLCJvbkNoYW5nZSIsImJ1dHRvbiIsIm9uQ2xpY2siLCJoMyIsImg1IiwiZGlzcGxheU5hbWUiLCJ1aWQiLCJ1bCIsIngiLCJjbGllbnRJbmZvTGlzdEl0ZW0iLCJzcmMiLCJwaG90b1VSTCIsInVzZXJJY29uIiwiYWx0Iiwid2lkdGgiLCJoZWlnaHQiLCJsaSIsImNsaWVudEluZm9MaXN0SXRlbUxpc3RJdGVtIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/Components/Admin.js\n"));

/***/ })

});