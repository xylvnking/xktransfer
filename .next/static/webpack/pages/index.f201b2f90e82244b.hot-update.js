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

/***/ "./pages/Components/Client.js":
/*!************************************!*\
  !*** ./pages/Components/Client.js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Client; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @swc/helpers/src/_to_consumable_array.mjs */ \"./node_modules/@swc/helpers/src/_to_consumable_array.mjs\");\n/* harmony import */ var _Users_dylanking6132_xylvnking_xktransfer_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_dylanking6132_xylvnking_xktransfer_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_dylanking6132_xylvnking_xktransfer_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _firebase_clientApp__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../firebase/clientApp */ \"./firebase/clientApp.js\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase/firestore */ \"./node_modules/firebase/firestore/dist/index.esm.js\");\n/* harmony import */ var react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-firebase-hooks/auth */ \"./node_modules/react-firebase-hooks/auth/dist/index.esm.js\");\n/* harmony import */ var react_textarea_autosize__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-textarea-autosize */ \"./node_modules/react-textarea-autosize/dist/react-textarea-autosize.browser.esm.js\");\n\n\n\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction Client(props) {\n    var _this = this;\n    var check = function check() {\n        console.log(clientSongs);\n    };\n    _s();\n    // const [userAuth, userAuthIsLoading, userAuthError] = useAuthState(auth)\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]), clientSongs = ref[0], setClientSongs = ref[1];\n    // load client songs\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        if (props.userAuth && clientSongs.length == 0) {\n            var clientCollection = \"clientID\" + props.userAuth.uid;\n            function getClientSongs() {\n                return _getClientSongs.apply(this, arguments);\n            }\n            function _getClientSongs() {\n                _getClientSongs = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(_Users_dylanking6132_xylvnking_xktransfer_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n                    var querySnapshot;\n                    return _Users_dylanking6132_xylvnking_xktransfer_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                        while(1)switch(_ctx.prev = _ctx.next){\n                            case 0:\n                                _ctx.next = 2;\n                                return (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_4__.getDocs)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_4__.collection)(_firebase_clientApp__WEBPACK_IMPORTED_MODULE_3__.db, clientCollection));\n                            case 2:\n                                querySnapshot = _ctx.sent;\n                                querySnapshot.forEach(function(doc) {\n                                    if (doc.id !== \"settings\") {\n                                        setClientSongs(function(current) {\n                                            return (0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(current).concat([\n                                                doc.data()\n                                            ]);\n                                        });\n                                    }\n                                });\n                            case 4:\n                            case \"end\":\n                                return _ctx.stop();\n                        }\n                    }, _callee);\n                }));\n                return _getClientSongs.apply(this, arguments);\n            }\n            getClientSongs();\n        }\n    }, [\n        props.userAuth\n    ]);\n    var handleTyping = function(textareaValue, song) {};\n    var saveRevisionNotes = function(event) {\n        console.log(\"updating firebase with revision notes...\");\n        // const docRef = doc(db, clientSelected.uidWithoutNumberAtTheStart, event.target[0].value)\n        // updateDoc(docRef, {\n        // })\n        var clientCollection = \"clientID\" + props.userAuth.uid;\n        event.preventDefault();\n        var newRevisionNoteToBeSaved = event.target[0].value;\n        // console.log(`the revision note is: ${event.target[1].value}`)\n        // console.log(`the song/document name is: ${event.target[0].value}`)\n        console.log(event.target[0].value);\n        console.log(event.target[1].value);\n        console.log(event.target[2].value);\n        console.log(event.target[3].value);\n    // console.log(event.target[5].value)\n    // console.log(`collection to be updated is: ${clientCollection}`)\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"main\", {\n        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default().clientContainer),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                onClick: function() {\n                    return check();\n                },\n                children: \"CHECK\"\n            }, void 0, false, {\n                fileName: \"/Users/dylanking6132/xylvnking/xktransfer/pages/Components/Client.js\",\n                lineNumber: 68,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"/Users/dylanking6132/xylvnking/xktransfer/pages/Components/Client.js\",\n                lineNumber: 69,\n                columnNumber: 9\n            }, this),\n            props.userAuth && props.userAuth.uid,\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"section\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default().songList),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"ul\", {\n                    className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default().clientSongList),\n                    children: clientSongs && clientSongs.map(function(song, index1) {\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"ul\", {\n                            className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default().fileListItem),\n                            children: Object.values(song).map(function(songDataValue) {\n                                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"ul\", {\n                                    className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default().fileVersion),\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"li\", {\n                                            children: Date.parse(Date(songDataValue.date))\n                                        }, void 0, false, {\n                                            fileName: \"/Users/dylanking6132/xylvnking/xktransfer/pages/Components/Client.js\",\n                                            lineNumber: 83,\n                                            columnNumber: 41\n                                        }, _this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"li\", {\n                                            children: songDataValue.songName\n                                        }, void 0, false, {\n                                            fileName: \"/Users/dylanking6132/xylvnking/xktransfer/pages/Components/Client.js\",\n                                            lineNumber: 84,\n                                            columnNumber: 41\n                                        }, _this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"audio\", {\n                                            controls: true,\n                                            src: songDataValue.downloadURL\n                                        }, void 0, false, {\n                                            fileName: \"/Users/dylanking6132/xylvnking/xktransfer/pages/Components/Client.js\",\n                                            lineNumber: 86,\n                                            columnNumber: 41\n                                        }, _this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"br\", {}, void 0, false, {\n                                            fileName: \"/Users/dylanking6132/xylvnking/xktransfer/pages/Components/Client.js\",\n                                            lineNumber: 87,\n                                            columnNumber: 41\n                                        }, _this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"form\", {\n                                            onSubmit: saveRevisionNotes,\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                                                    readOnly: true,\n                                                    value: songDataValue.songName,\n                                                    style: {\n                                                        display: \"none\"\n                                                    }\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/dylanking6132/xylvnking/xktransfer/pages/Components/Client.js\",\n                                                    lineNumber: 93,\n                                                    columnNumber: 45\n                                                }, _this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                                                    readOnly: true,\n                                                    value: songDataValue.fileNameRegexed,\n                                                    style: {\n                                                        display: \"none\"\n                                                    }\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/dylanking6132/xylvnking/xktransfer/pages/Components/Client.js\",\n                                                    lineNumber: 94,\n                                                    columnNumber: 45\n                                                }, _this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"br\", {}, void 0, false, {\n                                                    fileName: \"/Users/dylanking6132/xylvnking/xktransfer/pages/Components/Client.js\",\n                                                    lineNumber: 96,\n                                                    columnNumber: 45\n                                                }, _this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_textarea_autosize__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                                                    defaultValue: songDataValue.revisionNote,\n                                                    className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default().revisionTextArea),\n                                                    onChange: function(e) {\n                                                        return handleTyping(e.target.value, song);\n                                                    }\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/dylanking6132/xylvnking/xktransfer/pages/Components/Client.js\",\n                                                    lineNumber: 97,\n                                                    columnNumber: 45\n                                                }, _this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"br\", {}, void 0, false, {\n                                                    fileName: \"/Users/dylanking6132/xylvnking/xktransfer/pages/Components/Client.js\",\n                                                    lineNumber: 106,\n                                                    columnNumber: 45\n                                                }, _this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                                                    type: \"submit\",\n                                                    children: \"save changes\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/dylanking6132/xylvnking/xktransfer/pages/Components/Client.js\",\n                                                    lineNumber: 107,\n                                                    columnNumber: 45\n                                                }, _this)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/dylanking6132/xylvnking/xktransfer/pages/Components/Client.js\",\n                                            lineNumber: 92,\n                                            columnNumber: 41\n                                        }, _this)\n                                    ]\n                                }, songDataValue.date, true, {\n                                    fileName: \"/Users/dylanking6132/xylvnking/xktransfer/pages/Components/Client.js\",\n                                    lineNumber: 82,\n                                    columnNumber: 37\n                                }, _this);\n                            })\n                        }, index1, false, {\n                            fileName: \"/Users/dylanking6132/xylvnking/xktransfer/pages/Components/Client.js\",\n                            lineNumber: 80,\n                            columnNumber: 29\n                        }, _this);\n                    })\n                }, void 0, false, {\n                    fileName: \"/Users/dylanking6132/xylvnking/xktransfer/pages/Components/Client.js\",\n                    lineNumber: 75,\n                    columnNumber: 13\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/dylanking6132/xylvnking/xktransfer/pages/Components/Client.js\",\n                lineNumber: 74,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/dylanking6132/xylvnking/xktransfer/pages/Components/Client.js\",\n        lineNumber: 67,\n        columnNumber: 5\n    }, this);\n};\n_s(Client, \"0R7l53CiwQu7ziyMeHtgYF+Ya+E=\");\n_c = Client;\nvar _c;\n$RefreshReg$(_c, \"Client\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFRLEVBQUUsSUFBSTtvREFBRTlCLEtBQUssRUFBRWdCLGFBQWEsQ0FBQ2lCLGVBQWU7b0RBQUVGLEtBQUssRUFBRTt3REFBQ0MsT0FBTyxFQUFFLE1BQU07cURBQUM7Ozs7O3lEQUFVOzhEQUUvRiw4REFBQzFCLElBQUU7Ozs7eURBQUc7OERBQ04sOERBQUNoQywrREFBZ0I7b0RBQ2I0RCxZQUFZLEVBQUVsQixhQUFhLENBQUNtQixZQUFZO29EQUN4Q2pDLFNBQVMsRUFBRXpDLGlGQUF1QjtvREFDbEM0RSxRQUFRLEVBQUUsU0FBQ0MsQ0FBQzsrREFBSzlDLFlBQVksQ0FBQzhDLENBQUMsQ0FBQ3ZDLE1BQU0sQ0FBQ0MsS0FBSyxFQUFFTixJQUFJLENBQUM7cURBQUE7Ozs7O3lEQUNyRDs4REFLRiw4REFBQ1ksSUFBRTs7Ozt5REFBRzs4REFDTiw4REFBQ0YsUUFBTTtvREFBQ21DLElBQUksRUFBQyxRQUFROzhEQUFDLGNBQVk7Ozs7O3lEQUFTOzs7Ozs7aURBRXhDOzttQ0EzQkZ2QixhQUFhLENBQUNLLElBQUk7Ozs7eUNBNEJ0Qjs2QkFBQSxDQUNSOzJCQS9CSVQsTUFBTTs7OztpQ0FnQ1YsQ0FDUjtxQkFDSixDQUFDOzs7Ozt3QkFFTDs7Ozs7b0JBQ0M7Ozs7OztZQUNQLENBQ1I7Q0FDRjtHQTdHdUJyQyxNQUFNO0FBQU5BLEtBQUFBLE1BQU0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvQ29tcG9uZW50cy9DbGllbnQuanM/Mjg3YSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZSwgdXNlRWZmZWN0fSBmcm9tICdyZWFjdCdcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vLi4vc3R5bGVzL0hvbWUubW9kdWxlLmNzcydcbmltcG9ydCBmaXJlYmFzZSwge2F1dGgsIGRiLCBwcm92aWRlciwgc3RvcmFnZX0gZnJvbSAnLi4vLi4vZmlyZWJhc2UvY2xpZW50QXBwJ1xuaW1wb3J0IHsgY29sbGVjdGlvbiwgZ2V0RG9jcywgZG9jLCBnZXREb2MsIHVwZGF0ZURvYywgc2V0RG9jIH0gZnJvbSBcImZpcmViYXNlL2ZpcmVzdG9yZVwiO1xuaW1wb3J0IHt1c2VBdXRoU3RhdGV9IGZyb20gXCJyZWFjdC1maXJlYmFzZS1ob29rcy9hdXRoXCJcblxuaW1wb3J0IFRleHRhcmVhQXV0b3NpemUgZnJvbSAncmVhY3QtdGV4dGFyZWEtYXV0b3NpemUnO1xuXG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ2xpZW50KHByb3BzKSB7XG4gICAgZnVuY3Rpb24gY2hlY2soKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGNsaWVudFNvbmdzKVxuICAgIH1cbiAgICAvLyBjb25zdCBbdXNlckF1dGgsIHVzZXJBdXRoSXNMb2FkaW5nLCB1c2VyQXV0aEVycm9yXSA9IHVzZUF1dGhTdGF0ZShhdXRoKVxuICAgIGNvbnN0IFtjbGllbnRTb25ncywgc2V0Q2xpZW50U29uZ3NdID0gdXNlU3RhdGUoW10pXG5cbiAgICAvLyBsb2FkIGNsaWVudCBzb25nc1xuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGlmIChwcm9wcy51c2VyQXV0aCAmJiBjbGllbnRTb25ncy5sZW5ndGggPT0gMCkge1xuICAgICAgICAgICAgY29uc3QgY2xpZW50Q29sbGVjdGlvbiA9ICdjbGllbnRJRCcgKyBwcm9wcy51c2VyQXV0aC51aWRcbiAgICAgICAgICAgIGFzeW5jIGZ1bmN0aW9uIGdldENsaWVudFNvbmdzKCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHF1ZXJ5U25hcHNob3QgPSBhd2FpdCBnZXREb2NzKGNvbGxlY3Rpb24oZGIsIGNsaWVudENvbGxlY3Rpb24pKTtcbiAgICAgICAgICAgICAgICBxdWVyeVNuYXBzaG90LmZvckVhY2goKGRvYykgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZG9jLmlkICE9PSAnc2V0dGluZ3MnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRDbGllbnRTb25ncyhjdXJyZW50ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuLi5jdXJyZW50LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb2MuZGF0YSgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSAgXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGdldENsaWVudFNvbmdzKClcbiAgICAgICAgfVxuICAgIH0sW3Byb3BzLnVzZXJBdXRoXSlcblxuICAgIGNvbnN0IGhhbmRsZVR5cGluZyA9ICh0ZXh0YXJlYVZhbHVlLCBzb25nKSA9PiB7XG4gICAgfVxuXG4gICAgY29uc3Qgc2F2ZVJldmlzaW9uTm90ZXMgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coJ3VwZGF0aW5nIGZpcmViYXNlIHdpdGggcmV2aXNpb24gbm90ZXMuLi4nKVxuXG4gICAgICAgIC8vIGNvbnN0IGRvY1JlZiA9IGRvYyhkYiwgY2xpZW50U2VsZWN0ZWQudWlkV2l0aG91dE51bWJlckF0VGhlU3RhcnQsIGV2ZW50LnRhcmdldFswXS52YWx1ZSlcbiAgICAgICAgLy8gdXBkYXRlRG9jKGRvY1JlZiwge1xuXG4gICAgICAgIC8vIH0pXG5cbiAgICAgICAgY29uc3QgY2xpZW50Q29sbGVjdGlvbiA9ICdjbGllbnRJRCcgKyBwcm9wcy51c2VyQXV0aC51aWRcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICBjb25zdCBuZXdSZXZpc2lvbk5vdGVUb0JlU2F2ZWQgPSBldmVudC50YXJnZXRbMF0udmFsdWVcbiAgICAgICAgLy8gY29uc29sZS5sb2coYHRoZSByZXZpc2lvbiBub3RlIGlzOiAke2V2ZW50LnRhcmdldFsxXS52YWx1ZX1gKVxuICAgICAgICAvLyBjb25zb2xlLmxvZyhgdGhlIHNvbmcvZG9jdW1lbnQgbmFtZSBpczogJHtldmVudC50YXJnZXRbMF0udmFsdWV9YClcbiAgICAgICAgY29uc29sZS5sb2coZXZlbnQudGFyZ2V0WzBdLnZhbHVlKVxuICAgICAgICBjb25zb2xlLmxvZyhldmVudC50YXJnZXRbMV0udmFsdWUpXG4gICAgICAgIGNvbnNvbGUubG9nKGV2ZW50LnRhcmdldFsyXS52YWx1ZSlcbiAgICAgICAgY29uc29sZS5sb2coZXZlbnQudGFyZ2V0WzNdLnZhbHVlKVxuICAgICAgICAvLyBjb25zb2xlLmxvZyhldmVudC50YXJnZXRbNV0udmFsdWUpXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGBjb2xsZWN0aW9uIHRvIGJlIHVwZGF0ZWQgaXM6ICR7Y2xpZW50Q29sbGVjdGlvbn1gKVxuXG5cblxuICAgIH1cblxuICByZXR1cm4gKFxuICAgIDxtYWluIGNsYXNzTmFtZT17c3R5bGVzLmNsaWVudENvbnRhaW5lcn0+XG4gICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gY2hlY2soKX0+Q0hFQ0s8L2J1dHRvbj5cbiAgICAgICAgPGJyIC8+XG4gICAgICAgIHtcbiAgICAgICAgICAgIHByb3BzLnVzZXJBdXRoICYmXG4gICAgICAgICAgICBwcm9wcy51c2VyQXV0aC51aWRcbiAgICAgICAgfVxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9e3N0eWxlcy5zb25nTGlzdH0+XG4gICAgICAgICAgICA8dWwgY2xhc3NOYW1lPXtzdHlsZXMuY2xpZW50U29uZ0xpc3R9PlxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgY2xpZW50U29uZ3MgJiZcbiAgICAgICAgICAgICAgICAgICAgY2xpZW50U29uZ3MubWFwKChzb25nLCBpbmRleDEpID0+IHsgLy8gZm9yIGVhY2ggc29uZ1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwga2V5PXtpbmRleDF9Y2xhc3NOYW1lPXtzdHlsZXMuZmlsZUxpc3RJdGVtfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge09iamVjdC52YWx1ZXMoc29uZykubWFwKChzb25nRGF0YVZhbHVlKSA9PiAvLyBmb3IgZWFjaCBmaWxlIHZlcnNpb25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBrZXk9e3NvbmdEYXRhVmFsdWUuZGF0ZX0gY2xhc3NOYW1lPXtzdHlsZXMuZmlsZVZlcnNpb259PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT57RGF0ZS5wYXJzZShEYXRlKHNvbmdEYXRhVmFsdWUuZGF0ZSkpfTwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPntzb25nRGF0YVZhbHVlLnNvbmdOYW1lfTwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxsaT57c29uZ0RhdGFWYWx1ZS5yZXZpc2lvbk5vdGV9PC9saT4gKi99XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGF1ZGlvIGNvbnRyb2xzIHNyYz17c29uZ0RhdGFWYWx1ZS5kb3dubG9hZFVSTH0vPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiB7T2JqZWN0LmtleXMoc29uZykubWFwKChmaWxlTmFtZSkgPT4gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGZpbGVOYW1lKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxlTmFtZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9ICovfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtzYXZlUmV2aXNpb25Ob3Rlc30+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCByZWFkT25seT17dHJ1ZX0gdmFsdWU9e3NvbmdEYXRhVmFsdWUuc29uZ05hbWV9IHN0eWxlPXt7ZGlzcGxheTogJ25vbmUnfX0+PC9pbnB1dD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHJlYWRPbmx5PXt0cnVlfSB2YWx1ZT17c29uZ0RhdGFWYWx1ZS5maWxlTmFtZVJlZ2V4ZWR9IHN0eWxlPXt7ZGlzcGxheTogJ25vbmUnfX0+PC9pbnB1dD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxpbnB1dCByZWFkT25seT17dHJ1ZX0gdmFsdWU9e09iamVjdC5rZXlzKHNvbmcpLm1hcCgoZmlsZU5hbWUpID0+IGZpbGVOYW1lKX0gc3R5bGU9e3tkaXNwbGF5OiAnbm9uZSd9fT48L2lucHV0PiAqL31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0YXJlYUF1dG9zaXplIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXtzb25nRGF0YVZhbHVlLnJldmlzaW9uTm90ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLnJldmlzaW9uVGV4dEFyZWF9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IGhhbmRsZVR5cGluZyhlLnRhcmdldC52YWx1ZSwgc29uZyl9IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8aW5wdXQgcmVhZE9ubHk9e3RydWV9IHZhbHVlPXtPYmplY3Qua2V5cyhzb25nKS5tYXAoKHNvbmdOYW1lKSA9PiBzb25nTmFtZSl9IHN0eWxlPXt7ZGlzcGxheTogJ25vbmUnfX0+PC9pbnB1dD4gKi99XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogPGlucHV0IHJlYWRPbmx5PXt0cnVlfSB2YWx1ZT17J3RoaXMgc2hvdWxkIGJlIHRoZSBzb25nL2RvY3VtZW50IG5hbWUnfSBzdHlsZT17e2Rpc3BsYXk6ICdub25lJ319PjwvaW5wdXQ+ICovfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+c2F2ZSBjaGFuZ2VzPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8aW5wdXQgdHlwZT1cImJ1dHRvblwiPnN1dXViPC9pbnB1dD4gKi99XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICA8L21haW4+XG4gIClcbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0Iiwic3R5bGVzIiwiZmlyZWJhc2UiLCJhdXRoIiwiZGIiLCJwcm92aWRlciIsInN0b3JhZ2UiLCJjb2xsZWN0aW9uIiwiZ2V0RG9jcyIsImRvYyIsImdldERvYyIsInVwZGF0ZURvYyIsInNldERvYyIsInVzZUF1dGhTdGF0ZSIsIlRleHRhcmVhQXV0b3NpemUiLCJDbGllbnQiLCJwcm9wcyIsImNoZWNrIiwiY29uc29sZSIsImxvZyIsImNsaWVudFNvbmdzIiwic2V0Q2xpZW50U29uZ3MiLCJ1c2VyQXV0aCIsImxlbmd0aCIsImNsaWVudENvbGxlY3Rpb24iLCJ1aWQiLCJnZXRDbGllbnRTb25ncyIsInF1ZXJ5U25hcHNob3QiLCJmb3JFYWNoIiwiaWQiLCJjdXJyZW50IiwiZGF0YSIsImhhbmRsZVR5cGluZyIsInRleHRhcmVhVmFsdWUiLCJzb25nIiwic2F2ZVJldmlzaW9uTm90ZXMiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwibmV3UmV2aXNpb25Ob3RlVG9CZVNhdmVkIiwidGFyZ2V0IiwidmFsdWUiLCJtYWluIiwiY2xhc3NOYW1lIiwiY2xpZW50Q29udGFpbmVyIiwiYnV0dG9uIiwib25DbGljayIsImJyIiwic2VjdGlvbiIsInNvbmdMaXN0IiwidWwiLCJjbGllbnRTb25nTGlzdCIsIm1hcCIsImluZGV4MSIsImZpbGVMaXN0SXRlbSIsIk9iamVjdCIsInZhbHVlcyIsInNvbmdEYXRhVmFsdWUiLCJmaWxlVmVyc2lvbiIsImxpIiwiRGF0ZSIsInBhcnNlIiwiZGF0ZSIsInNvbmdOYW1lIiwiYXVkaW8iLCJjb250cm9scyIsInNyYyIsImRvd25sb2FkVVJMIiwiZm9ybSIsIm9uU3VibWl0IiwiaW5wdXQiLCJyZWFkT25seSIsInN0eWxlIiwiZGlzcGxheSIsImZpbGVOYW1lUmVnZXhlZCIsImRlZmF1bHRWYWx1ZSIsInJldmlzaW9uTm90ZSIsInJldmlzaW9uVGV4dEFyZWEiLCJvbkNoYW5nZSIsImUiLCJ0eXBlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/Components/Client.js\n"));

/***/ })

});