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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Client; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @swc/helpers/src/_to_consumable_array.mjs */ \"./node_modules/@swc/helpers/src/_to_consumable_array.mjs\");\n/* harmony import */ var _Users_dylanking6132_xylvnking_xktransfer_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_dylanking6132_xylvnking_xktransfer_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_dylanking6132_xylvnking_xktransfer_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _firebase_clientApp__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../firebase/clientApp */ \"./firebase/clientApp.js\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase/firestore */ \"./node_modules/firebase/firestore/dist/index.esm.js\");\n/* harmony import */ var react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-firebase-hooks/auth */ \"./node_modules/react-firebase-hooks/auth/dist/index.esm.js\");\n/* harmony import */ var react_textarea_autosize__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-textarea-autosize */ \"./node_modules/react-textarea-autosize/dist/react-textarea-autosize.browser.esm.js\");\n\n\n\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction Client(props) {\n    var _this = this;\n    var check = function check() {\n        console.log(clientSongs);\n    };\n    _s();\n    // const [userAuth, userAuthIsLoading, userAuthError] = useAuthState(auth)\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]), clientSongs = ref[0], setClientSongs = ref[1];\n    // load client songs\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        if (props.userAuth && clientSongs.length == 0) {\n            var clientCollection = \"clientID\" + props.userAuth.uid;\n            function getClientSongs() {\n                return _getClientSongs.apply(this, arguments);\n            }\n            function _getClientSongs() {\n                _getClientSongs = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(_Users_dylanking6132_xylvnking_xktransfer_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n                    var querySnapshot;\n                    return _Users_dylanking6132_xylvnking_xktransfer_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                        while(1)switch(_ctx.prev = _ctx.next){\n                            case 0:\n                                _ctx.next = 2;\n                                return (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_4__.getDocs)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_4__.collection)(_firebase_clientApp__WEBPACK_IMPORTED_MODULE_3__.db, clientCollection));\n                            case 2:\n                                querySnapshot = _ctx.sent;\n                                querySnapshot.forEach(function(doc) {\n                                    if (doc.id !== \"settings\") {\n                                        setClientSongs(function(current) {\n                                            // you could probably get the song name (document name) here, but it might change\n                                            // the data structure which you're then iterating over\n                                            // another option is to just save it with each song entry, \n                                            // which might be better tbh even if it's duplicate data - it is simpler\n                                            return (0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(current).concat([\n                                                [\n                                                    doc.id,\n                                                    doc.data()\n                                                ]\n                                            ]);\n                                        });\n                                    }\n                                });\n                            case 4:\n                            case \"end\":\n                                return _ctx.stop();\n                        }\n                    }, _callee);\n                }));\n                return _getClientSongs.apply(this, arguments);\n            }\n            getClientSongs();\n        }\n    }, [\n        props.userAuth\n    ]);\n    var handleTyping = function(textareaValue, song) {\n    // console.log(song)\n    };\n    var saveRevisionNotes = function(event) {\n        var clientCollection = \"clientID\" + props.userAuth.uid;\n        event.preventDefault();\n        // console.log('updating firebase with revision notes...')\n        var newRevisionNoteToBeSaved = event.target[0].value;\n        // console.log(event.target[0].value)\n        console.log(\"the revision note is: \".concat(event.target[0].value));\n        console.log(\"the song/document name is: \".concat(event.target[1].value));\n        console.log(\"collection to be updated is: \".concat(clientCollection));\n    /*\n            you cut a corner and will pay the price now\n            you need to be able to reference the document name (song title)\n            here so that you can update it with the new revision note\n\n        */ };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"main\", {\n        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default().clientContainer),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                onClick: function() {\n                    return check();\n                },\n                children: \"CHECK\"\n            }, void 0, false, {\n                fileName: \"/Users/dylanking6132/xylvnking/xktransfer/pages/Components/Client.js\",\n                lineNumber: 75,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"/Users/dylanking6132/xylvnking/xktransfer/pages/Components/Client.js\",\n                lineNumber: 76,\n                columnNumber: 9\n            }, this),\n            props.userAuth && props.userAuth.uid,\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"section\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default().songList),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"ul\", {\n                    className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default().clientSongList),\n                    children: clientSongs && clientSongs.map(function(song, index1) {\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"ul\", {\n                            className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default().fileListItem),\n                            children: Object.values(song).map(function(songDataValue) {\n                                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"ul\", {\n                                    className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default().fileVersion),\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"li\", {\n                                            children: Date.parse(Date(songDataValue.date))\n                                        }, void 0, false, {\n                                            fileName: \"/Users/dylanking6132/xylvnking/xktransfer/pages/Components/Client.js\",\n                                            lineNumber: 90,\n                                            columnNumber: 41\n                                        }, _this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"audio\", {\n                                            controls: true,\n                                            src: songDataValue.downloadURL\n                                        }, void 0, false, {\n                                            fileName: \"/Users/dylanking6132/xylvnking/xktransfer/pages/Components/Client.js\",\n                                            lineNumber: 92,\n                                            columnNumber: 41\n                                        }, _this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"br\", {}, void 0, false, {\n                                            fileName: \"/Users/dylanking6132/xylvnking/xktransfer/pages/Components/Client.js\",\n                                            lineNumber: 93,\n                                            columnNumber: 41\n                                        }, _this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"form\", {\n                                            onSubmit: saveRevisionNotes,\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"br\", {}, void 0, false, {\n                                                    fileName: \"/Users/dylanking6132/xylvnking/xktransfer/pages/Components/Client.js\",\n                                                    lineNumber: 96,\n                                                    columnNumber: 45\n                                                }, _this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_textarea_autosize__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                                                    defaultValue: songDataValue.revisionNote,\n                                                    className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default().revisionTextArea),\n                                                    onChange: function(e) {\n                                                        return handleTyping(e.target.value, song);\n                                                    }\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/dylanking6132/xylvnking/xktransfer/pages/Components/Client.js\",\n                                                    lineNumber: 97,\n                                                    columnNumber: 45\n                                                }, _this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                                                    readOnly: true,\n                                                    value: \"this should be the song/document name\",\n                                                    style: {\n                                                        display: \"none\"\n                                                    }\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/dylanking6132/xylvnking/xktransfer/pages/Components/Client.js\",\n                                                    lineNumber: 105,\n                                                    columnNumber: 45\n                                                }, _this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"br\", {}, void 0, false, {\n                                                    fileName: \"/Users/dylanking6132/xylvnking/xktransfer/pages/Components/Client.js\",\n                                                    lineNumber: 106,\n                                                    columnNumber: 45\n                                                }, _this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                                                    type: \"submit\",\n                                                    children: \"save changes\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/dylanking6132/xylvnking/xktransfer/pages/Components/Client.js\",\n                                                    lineNumber: 107,\n                                                    columnNumber: 45\n                                                }, _this)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/dylanking6132/xylvnking/xktransfer/pages/Components/Client.js\",\n                                            lineNumber: 95,\n                                            columnNumber: 41\n                                        }, _this)\n                                    ]\n                                }, songDataValue.date, true, {\n                                    fileName: \"/Users/dylanking6132/xylvnking/xktransfer/pages/Components/Client.js\",\n                                    lineNumber: 89,\n                                    columnNumber: 37\n                                }, _this);\n                            })\n                        }, index1, false, {\n                            fileName: \"/Users/dylanking6132/xylvnking/xktransfer/pages/Components/Client.js\",\n                            lineNumber: 87,\n                            columnNumber: 29\n                        }, _this);\n                    })\n                }, void 0, false, {\n                    fileName: \"/Users/dylanking6132/xylvnking/xktransfer/pages/Components/Client.js\",\n                    lineNumber: 82,\n                    columnNumber: 13\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/dylanking6132/xylvnking/xktransfer/pages/Components/Client.js\",\n                lineNumber: 81,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/dylanking6132/xylvnking/xktransfer/pages/Components/Client.js\",\n        lineNumber: 74,\n        columnNumber: 5\n    }, this);\n};\n_s(Client, \"0R7l53CiwQu7ziyMeHtgYF+Ya+E=\");\n_c = Client;\nvar _c;\n$RefreshReg$(_c, \"Client\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q3VDLE9BQUs7b0RBQUNDLFFBQVEsRUFBRSxJQUFJO29EQUFFbEMsS0FBSyxFQUFFLHVDQUF1QztvREFBRW1DLEtBQUssRUFBRTt3REFBQ0MsT0FBTyxFQUFFLE1BQU07cURBQUM7Ozs7O3lEQUFVOzhEQUN6Ryw4REFBQzlCLElBQUU7Ozs7eURBQUc7OERBQ04sOERBQUNGLFFBQU07b0RBQUNpQyxJQUFJLEVBQUMsUUFBUTs4REFBQyxjQUFZOzs7Ozt5REFBUzs7Ozs7O2lEQUV4Qzs7bUNBcEJGckIsYUFBYSxDQUFDSyxJQUFJOzs7O3lDQXFCdEI7NkJBQUEsQ0FDUjsyQkF4QklULE1BQU07Ozs7aUNBeUJWLENBQ1I7cUJBQ0osQ0FBQzs7Ozs7d0JBRUw7Ozs7O29CQUNDOzs7Ozs7WUFDUCxDQUNSO0NBQ0Y7R0E3R3VCckMsTUFBTTtBQUFOQSxLQUFBQSxNQUFNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL0NvbXBvbmVudHMvQ2xpZW50LmpzPzI4N2EiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGUsIHVzZUVmZmVjdH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uLy4uL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3MnXG5pbXBvcnQgZmlyZWJhc2UsIHthdXRoLCBkYiwgcHJvdmlkZXIsIHN0b3JhZ2V9IGZyb20gJy4uLy4uL2ZpcmViYXNlL2NsaWVudEFwcCdcbmltcG9ydCB7IGNvbGxlY3Rpb24sIGdldERvY3MsIGRvYywgZ2V0RG9jLCB1cGRhdGVEb2MsIHNldERvYyB9IGZyb20gXCJmaXJlYmFzZS9maXJlc3RvcmVcIjtcbmltcG9ydCB7dXNlQXV0aFN0YXRlfSBmcm9tIFwicmVhY3QtZmlyZWJhc2UtaG9va3MvYXV0aFwiXG5cbmltcG9ydCBUZXh0YXJlYUF1dG9zaXplIGZyb20gJ3JlYWN0LXRleHRhcmVhLWF1dG9zaXplJztcblxuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENsaWVudChwcm9wcykge1xuICAgIGZ1bmN0aW9uIGNoZWNrKCkge1xuICAgICAgICBjb25zb2xlLmxvZyhjbGllbnRTb25ncylcbiAgICB9XG4gICAgLy8gY29uc3QgW3VzZXJBdXRoLCB1c2VyQXV0aElzTG9hZGluZywgdXNlckF1dGhFcnJvcl0gPSB1c2VBdXRoU3RhdGUoYXV0aClcbiAgICBjb25zdCBbY2xpZW50U29uZ3MsIHNldENsaWVudFNvbmdzXSA9IHVzZVN0YXRlKFtdKVxuXG4gICAgLy8gbG9hZCBjbGllbnQgc29uZ3NcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBpZiAocHJvcHMudXNlckF1dGggJiYgY2xpZW50U29uZ3MubGVuZ3RoID09IDApIHtcbiAgICAgICAgICAgIGNvbnN0IGNsaWVudENvbGxlY3Rpb24gPSAnY2xpZW50SUQnICsgcHJvcHMudXNlckF1dGgudWlkXG4gICAgICAgICAgICBhc3luYyBmdW5jdGlvbiBnZXRDbGllbnRTb25ncygpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBxdWVyeVNuYXBzaG90ID0gYXdhaXQgZ2V0RG9jcyhjb2xsZWN0aW9uKGRiLCBjbGllbnRDb2xsZWN0aW9uKSk7XG4gICAgICAgICAgICAgICAgcXVlcnlTbmFwc2hvdC5mb3JFYWNoKChkb2MpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRvYy5pZCAhPT0gJ3NldHRpbmdzJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2V0Q2xpZW50U29uZ3MoY3VycmVudCA9PiB7XG5cblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8geW91IGNvdWxkIHByb2JhYmx5IGdldCB0aGUgc29uZyBuYW1lIChkb2N1bWVudCBuYW1lKSBoZXJlLCBidXQgaXQgbWlnaHQgY2hhbmdlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gdGhlIGRhdGEgc3RydWN0dXJlIHdoaWNoIHlvdSdyZSB0aGVuIGl0ZXJhdGluZyBvdmVyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gYW5vdGhlciBvcHRpb24gaXMgdG8ganVzdCBzYXZlIGl0IHdpdGggZWFjaCBzb25nIGVudHJ5LCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB3aGljaCBtaWdodCBiZSBiZXR0ZXIgdGJoIGV2ZW4gaWYgaXQncyBkdXBsaWNhdGUgZGF0YSAtIGl0IGlzIHNpbXBsZXJcblxuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuLi5jdXJyZW50LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbZG9jLmlkLCBkb2MuZGF0YSgpXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0gIFxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBnZXRDbGllbnRTb25ncygpXG4gICAgICAgIH1cbiAgICB9LFtwcm9wcy51c2VyQXV0aF0pXG5cbiAgICBjb25zdCBoYW5kbGVUeXBpbmcgPSAodGV4dGFyZWFWYWx1ZSwgc29uZykgPT4ge1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhzb25nKVxuICAgIH1cblxuICAgIGNvbnN0IHNhdmVSZXZpc2lvbk5vdGVzID0gKGV2ZW50KSA9PiB7XG4gICAgICAgIGNvbnN0IGNsaWVudENvbGxlY3Rpb24gPSAnY2xpZW50SUQnICsgcHJvcHMudXNlckF1dGgudWlkXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ3VwZGF0aW5nIGZpcmViYXNlIHdpdGggcmV2aXNpb24gbm90ZXMuLi4nKVxuICAgICAgICBjb25zdCBuZXdSZXZpc2lvbk5vdGVUb0JlU2F2ZWQgPSBldmVudC50YXJnZXRbMF0udmFsdWVcbiAgICAgICAgLy8gY29uc29sZS5sb2coZXZlbnQudGFyZ2V0WzBdLnZhbHVlKVxuICAgICAgICBjb25zb2xlLmxvZyhgdGhlIHJldmlzaW9uIG5vdGUgaXM6ICR7ZXZlbnQudGFyZ2V0WzBdLnZhbHVlfWApXG4gICAgICAgIGNvbnNvbGUubG9nKGB0aGUgc29uZy9kb2N1bWVudCBuYW1lIGlzOiAke2V2ZW50LnRhcmdldFsxXS52YWx1ZX1gKVxuICAgICAgICBjb25zb2xlLmxvZyhgY29sbGVjdGlvbiB0byBiZSB1cGRhdGVkIGlzOiAke2NsaWVudENvbGxlY3Rpb259YClcblxuXG4gICAgICAgIC8qXG4gICAgICAgICAgICB5b3UgY3V0IGEgY29ybmVyIGFuZCB3aWxsIHBheSB0aGUgcHJpY2Ugbm93XG4gICAgICAgICAgICB5b3UgbmVlZCB0byBiZSBhYmxlIHRvIHJlZmVyZW5jZSB0aGUgZG9jdW1lbnQgbmFtZSAoc29uZyB0aXRsZSlcbiAgICAgICAgICAgIGhlcmUgc28gdGhhdCB5b3UgY2FuIHVwZGF0ZSBpdCB3aXRoIHRoZSBuZXcgcmV2aXNpb24gbm90ZVxuXG4gICAgICAgICovXG5cbiAgICB9XG5cbiAgcmV0dXJuIChcbiAgICA8bWFpbiBjbGFzc05hbWU9e3N0eWxlcy5jbGllbnRDb250YWluZXJ9PlxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IGNoZWNrKCl9PkNIRUNLPC9idXR0b24+XG4gICAgICAgIDxiciAvPlxuICAgICAgICB7XG4gICAgICAgICAgICBwcm9wcy51c2VyQXV0aCAmJlxuICAgICAgICAgICAgcHJvcHMudXNlckF1dGgudWlkXG4gICAgICAgIH1cbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPXtzdHlsZXMuc29uZ0xpc3R9PlxuICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT17c3R5bGVzLmNsaWVudFNvbmdMaXN0fT5cbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGNsaWVudFNvbmdzICYmXG4gICAgICAgICAgICAgICAgICAgIGNsaWVudFNvbmdzLm1hcCgoc29uZywgaW5kZXgxKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBrZXk9e2luZGV4MX1jbGFzc05hbWU9e3N0eWxlcy5maWxlTGlzdEl0ZW19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7T2JqZWN0LnZhbHVlcyhzb25nKS5tYXAoKHNvbmdEYXRhVmFsdWUpID0+IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGtleT17c29uZ0RhdGFWYWx1ZS5kYXRlfSBjbGFzc05hbWU9e3N0eWxlcy5maWxlVmVyc2lvbn0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPntEYXRlLnBhcnNlKERhdGUoc29uZ0RhdGFWYWx1ZS5kYXRlKSl9PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogPGxpPntzb25nRGF0YVZhbHVlLnJldmlzaW9uTm90ZX08L2xpPiAqL31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YXVkaW8gY29udHJvbHMgc3JjPXtzb25nRGF0YVZhbHVlLmRvd25sb2FkVVJMfS8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e3NhdmVSZXZpc2lvbk5vdGVzfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0YXJlYUF1dG9zaXplIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXtzb25nRGF0YVZhbHVlLnJldmlzaW9uTm90ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLnJldmlzaW9uVGV4dEFyZWF9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IGhhbmRsZVR5cGluZyhlLnRhcmdldC52YWx1ZSwgc29uZyl9IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8aW5wdXQgcmVhZE9ubHk9e3RydWV9IHZhbHVlPXtPYmplY3Qua2V5cyhzb25nKS5tYXAoKHNvbmdOYW1lKSA9PiBzb25nTmFtZSl9IHN0eWxlPXt7ZGlzcGxheTogJ25vbmUnfX0+PC9pbnB1dD4gKi99XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgcmVhZE9ubHk9e3RydWV9IHZhbHVlPXsndGhpcyBzaG91bGQgYmUgdGhlIHNvbmcvZG9jdW1lbnQgbmFtZSd9IHN0eWxlPXt7ZGlzcGxheTogJ25vbmUnfX0+PC9pbnB1dD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPnNhdmUgY2hhbmdlczwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogPGlucHV0IHR5cGU9XCJidXR0b25cIj5zdXV1YjwvaW5wdXQ+ICovfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICA8L3VsPlxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgPC9tYWluPlxuICApXG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInN0eWxlcyIsImZpcmViYXNlIiwiYXV0aCIsImRiIiwicHJvdmlkZXIiLCJzdG9yYWdlIiwiY29sbGVjdGlvbiIsImdldERvY3MiLCJkb2MiLCJnZXREb2MiLCJ1cGRhdGVEb2MiLCJzZXREb2MiLCJ1c2VBdXRoU3RhdGUiLCJUZXh0YXJlYUF1dG9zaXplIiwiQ2xpZW50IiwicHJvcHMiLCJjaGVjayIsImNvbnNvbGUiLCJsb2ciLCJjbGllbnRTb25ncyIsInNldENsaWVudFNvbmdzIiwidXNlckF1dGgiLCJsZW5ndGgiLCJjbGllbnRDb2xsZWN0aW9uIiwidWlkIiwiZ2V0Q2xpZW50U29uZ3MiLCJxdWVyeVNuYXBzaG90IiwiZm9yRWFjaCIsImlkIiwiY3VycmVudCIsImRhdGEiLCJoYW5kbGVUeXBpbmciLCJ0ZXh0YXJlYVZhbHVlIiwic29uZyIsInNhdmVSZXZpc2lvbk5vdGVzIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsIm5ld1JldmlzaW9uTm90ZVRvQmVTYXZlZCIsInRhcmdldCIsInZhbHVlIiwibWFpbiIsImNsYXNzTmFtZSIsImNsaWVudENvbnRhaW5lciIsImJ1dHRvbiIsIm9uQ2xpY2siLCJiciIsInNlY3Rpb24iLCJzb25nTGlzdCIsInVsIiwiY2xpZW50U29uZ0xpc3QiLCJtYXAiLCJpbmRleDEiLCJmaWxlTGlzdEl0ZW0iLCJPYmplY3QiLCJ2YWx1ZXMiLCJzb25nRGF0YVZhbHVlIiwiZmlsZVZlcnNpb24iLCJsaSIsIkRhdGUiLCJwYXJzZSIsImRhdGUiLCJhdWRpbyIsImNvbnRyb2xzIiwic3JjIiwiZG93bmxvYWRVUkwiLCJmb3JtIiwib25TdWJtaXQiLCJkZWZhdWx0VmFsdWUiLCJyZXZpc2lvbk5vdGUiLCJyZXZpc2lvblRleHRBcmVhIiwib25DaGFuZ2UiLCJlIiwiaW5wdXQiLCJyZWFkT25seSIsInN0eWxlIiwiZGlzcGxheSIsInR5cGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/Components/Client.js\n"));

/***/ })

});