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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Client; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @swc/helpers/src/_to_consumable_array.mjs */ \"./node_modules/@swc/helpers/src/_to_consumable_array.mjs\");\n/* harmony import */ var _Users_dylanking6132_xylvnking_xktransfer_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_dylanking6132_xylvnking_xktransfer_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_dylanking6132_xylvnking_xktransfer_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _firebase_clientApp__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../firebase/clientApp */ \"./firebase/clientApp.js\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase/firestore */ \"./node_modules/firebase/firestore/dist/index.esm.js\");\n/* harmony import */ var react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-firebase-hooks/auth */ \"./node_modules/react-firebase-hooks/auth/dist/index.esm.js\");\n/* harmony import */ var react_textarea_autosize__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-textarea-autosize */ \"./node_modules/react-textarea-autosize/dist/react-textarea-autosize.browser.esm.js\");\n\n\n\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction Client(props) {\n    var _this = this;\n    var check = function check() {\n        console.log(clientSongs);\n    };\n    _s();\n    // const [userAuth, userAuthIsLoading, userAuthError] = useAuthState(auth)\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]), clientSongs = ref[0], setClientSongs = ref[1];\n    // load client songs\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        if (props.userAuth && clientSongs.length == 0) {\n            var clientCollection = \"clientID\" + props.userAuth.uid;\n            function getClientSongs() {\n                return _getClientSongs.apply(this, arguments);\n            }\n            function _getClientSongs() {\n                _getClientSongs = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(_Users_dylanking6132_xylvnking_xktransfer_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n                    var querySnapshot;\n                    return _Users_dylanking6132_xylvnking_xktransfer_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                        while(1)switch(_ctx.prev = _ctx.next){\n                            case 0:\n                                _ctx.next = 2;\n                                return (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_4__.getDocs)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_4__.collection)(_firebase_clientApp__WEBPACK_IMPORTED_MODULE_3__.db, clientCollection));\n                            case 2:\n                                querySnapshot = _ctx.sent;\n                                querySnapshot.forEach(function(doc) {\n                                    if (doc.id !== \"settings\") {\n                                        setClientSongs(function(current) {\n                                            return (0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(current).concat([\n                                                doc.data()\n                                            ]);\n                                        });\n                                    }\n                                });\n                            case 4:\n                            case \"end\":\n                                return _ctx.stop();\n                        }\n                    }, _callee);\n                }));\n                return _getClientSongs.apply(this, arguments);\n            }\n            getClientSongs();\n        }\n    }, [\n        props.userAuth\n    ]);\n    var handleTyping = function(textareaValue, song) {\n    // console.log(song)\n    };\n    var saveRevisionNotes = function(event) {\n        event.preventDefault();\n        console.log(\"updating firebase with revision notes...\");\n        var newRevisionNoteToBeSaved = event.target[0].value;\n        console.log(event.target[1].value);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"main\", {\n        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default().clientContainer),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                onClick: function() {\n                    return check();\n                },\n                children: \"CHECK\"\n            }, void 0, false, {\n                fileName: \"/Users/dylanking6132/xylvnking/xktransfer/pages/Components/Client.js\",\n                lineNumber: 53,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"/Users/dylanking6132/xylvnking/xktransfer/pages/Components/Client.js\",\n                lineNumber: 54,\n                columnNumber: 9\n            }, this),\n            props.userAuth && props.userAuth.uid,\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"section\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default().songList),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"ul\", {\n                    className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default().clientSongList),\n                    children: clientSongs && clientSongs.map(function(song, index) {\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"ul\", {\n                            className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default().fileListItem),\n                            children: Object.values(song, index).map(function(songDataValue) {\n                                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"ul\", {\n                                    className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default().fileVersion),\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"li\", {\n                                            children: Date.parse(Date(songDataValue.date))\n                                        }, void 0, false, {\n                                            fileName: \"/Users/dylanking6132/xylvnking/xktransfer/pages/Components/Client.js\",\n                                            lineNumber: 68,\n                                            columnNumber: 41\n                                        }, _this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"audio\", {\n                                            controls: true,\n                                            src: songDataValue.downloadURL\n                                        }, void 0, false, {\n                                            fileName: \"/Users/dylanking6132/xylvnking/xktransfer/pages/Components/Client.js\",\n                                            lineNumber: 70,\n                                            columnNumber: 41\n                                        }, _this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"br\", {}, void 0, false, {\n                                            fileName: \"/Users/dylanking6132/xylvnking/xktransfer/pages/Components/Client.js\",\n                                            lineNumber: 71,\n                                            columnNumber: 41\n                                        }, _this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"form\", {\n                                            onSubmit: saveRevisionNotes,\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"br\", {}, void 0, false, {\n                                                    fileName: \"/Users/dylanking6132/xylvnking/xktransfer/pages/Components/Client.js\",\n                                                    lineNumber: 83,\n                                                    columnNumber: 45\n                                                }, _this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_textarea_autosize__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                                                    defaultValue: songDataValue.revisionNote,\n                                                    className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default().revisionTextArea),\n                                                    onChange: function(e) {\n                                                        return handleTyping(e.target.value, song);\n                                                    }\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/dylanking6132/xylvnking/xktransfer/pages/Components/Client.js\",\n                                                    lineNumber: 85,\n                                                    columnNumber: 45\n                                                }, _this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                                                    readOnly: true,\n                                                    value: songDataValue.key,\n                                                    style: {\n                                                        display: \"none\"\n                                                    }\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/dylanking6132/xylvnking/xktransfer/pages/Components/Client.js\",\n                                                    lineNumber: 93,\n                                                    columnNumber: 45\n                                                }, _this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"br\", {}, void 0, false, {\n                                                    fileName: \"/Users/dylanking6132/xylvnking/xktransfer/pages/Components/Client.js\",\n                                                    lineNumber: 99,\n                                                    columnNumber: 45\n                                                }, _this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                                                    type: \"submit\",\n                                                    children: \"save changes\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/dylanking6132/xylvnking/xktransfer/pages/Components/Client.js\",\n                                                    lineNumber: 100,\n                                                    columnNumber: 45\n                                                }, _this)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/dylanking6132/xylvnking/xktransfer/pages/Components/Client.js\",\n                                            lineNumber: 73,\n                                            columnNumber: 41\n                                        }, _this)\n                                    ]\n                                }, songDataValue.date, true, {\n                                    fileName: \"/Users/dylanking6132/xylvnking/xktransfer/pages/Components/Client.js\",\n                                    lineNumber: 67,\n                                    columnNumber: 37\n                                }, _this);\n                            })\n                        }, index, false, {\n                            fileName: \"/Users/dylanking6132/xylvnking/xktransfer/pages/Components/Client.js\",\n                            lineNumber: 65,\n                            columnNumber: 29\n                        }, _this);\n                    })\n                }, void 0, false, {\n                    fileName: \"/Users/dylanking6132/xylvnking/xktransfer/pages/Components/Client.js\",\n                    lineNumber: 60,\n                    columnNumber: 13\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/dylanking6132/xylvnking/xktransfer/pages/Components/Client.js\",\n                lineNumber: 59,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/dylanking6132/xylvnking/xktransfer/pages/Components/Client.js\",\n        lineNumber: 52,\n        columnNumber: 5\n    }, this);\n};\n_s(Client, \"0R7l53CiwQu7ziyMeHtgYF+Ya+E=\");\n_c = Client;\nvar _c;\n$RefreshReg$(_c, \"Client\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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WUFDUCxDQUNSO0NBQ0Y7R0F0R3VCckMsTUFBTTtBQUFOQSxLQUFBQSxNQUFNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL0NvbXBvbmVudHMvQ2xpZW50LmpzPzI4N2EiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGUsIHVzZUVmZmVjdH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uLy4uL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3MnXG5pbXBvcnQgZmlyZWJhc2UsIHthdXRoLCBkYiwgcHJvdmlkZXIsIHN0b3JhZ2V9IGZyb20gJy4uLy4uL2ZpcmViYXNlL2NsaWVudEFwcCdcbmltcG9ydCB7IGNvbGxlY3Rpb24sIGdldERvY3MsIGRvYywgZ2V0RG9jLCB1cGRhdGVEb2MsIHNldERvYyB9IGZyb20gXCJmaXJlYmFzZS9maXJlc3RvcmVcIjtcbmltcG9ydCB7dXNlQXV0aFN0YXRlfSBmcm9tIFwicmVhY3QtZmlyZWJhc2UtaG9va3MvYXV0aFwiXG5cbmltcG9ydCBUZXh0YXJlYUF1dG9zaXplIGZyb20gJ3JlYWN0LXRleHRhcmVhLWF1dG9zaXplJztcblxuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENsaWVudChwcm9wcykge1xuICAgIGZ1bmN0aW9uIGNoZWNrKCkge1xuICAgICAgICBjb25zb2xlLmxvZyhjbGllbnRTb25ncylcbiAgICB9XG4gICAgLy8gY29uc3QgW3VzZXJBdXRoLCB1c2VyQXV0aElzTG9hZGluZywgdXNlckF1dGhFcnJvcl0gPSB1c2VBdXRoU3RhdGUoYXV0aClcbiAgICBjb25zdCBbY2xpZW50U29uZ3MsIHNldENsaWVudFNvbmdzXSA9IHVzZVN0YXRlKFtdKVxuXG4gICAgLy8gbG9hZCBjbGllbnQgc29uZ3NcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBpZiAocHJvcHMudXNlckF1dGggJiYgY2xpZW50U29uZ3MubGVuZ3RoID09IDApIHtcbiAgICAgICAgICAgIGNvbnN0IGNsaWVudENvbGxlY3Rpb24gPSAnY2xpZW50SUQnICsgcHJvcHMudXNlckF1dGgudWlkXG4gICAgICAgICAgICBhc3luYyBmdW5jdGlvbiBnZXRDbGllbnRTb25ncygpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBxdWVyeVNuYXBzaG90ID0gYXdhaXQgZ2V0RG9jcyhjb2xsZWN0aW9uKGRiLCBjbGllbnRDb2xsZWN0aW9uKSk7XG4gICAgICAgICAgICAgICAgcXVlcnlTbmFwc2hvdC5mb3JFYWNoKChkb2MpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRvYy5pZCAhPT0gJ3NldHRpbmdzJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2V0Q2xpZW50U29uZ3MoY3VycmVudCA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLi4uY3VycmVudCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9jLmRhdGEoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0gIFxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBnZXRDbGllbnRTb25ncygpXG4gICAgICAgIH1cbiAgICB9LFtwcm9wcy51c2VyQXV0aF0pXG5cbiAgICBjb25zdCBoYW5kbGVUeXBpbmcgPSAodGV4dGFyZWFWYWx1ZSwgc29uZykgPT4ge1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhzb25nKVxuICAgIH1cblxuICAgIGNvbnN0IHNhdmVSZXZpc2lvbk5vdGVzID0gKGV2ZW50KSA9PiB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgY29uc29sZS5sb2coJ3VwZGF0aW5nIGZpcmViYXNlIHdpdGggcmV2aXNpb24gbm90ZXMuLi4nKVxuICAgICAgICBjb25zdCBuZXdSZXZpc2lvbk5vdGVUb0JlU2F2ZWQgPSBldmVudC50YXJnZXRbMF0udmFsdWVcbiAgICAgICAgY29uc29sZS5sb2coZXZlbnQudGFyZ2V0WzFdLnZhbHVlKVxuXG4gICAgfVxuXG4gIHJldHVybiAoXG4gICAgPG1haW4gY2xhc3NOYW1lPXtzdHlsZXMuY2xpZW50Q29udGFpbmVyfT5cbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBjaGVjaygpfT5DSEVDSzwvYnV0dG9uPlxuICAgICAgICA8YnIgLz5cbiAgICAgICAge1xuICAgICAgICAgICAgcHJvcHMudXNlckF1dGggJiZcbiAgICAgICAgICAgIHByb3BzLnVzZXJBdXRoLnVpZFxuICAgICAgICB9XG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17c3R5bGVzLnNvbmdMaXN0fT5cbiAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9e3N0eWxlcy5jbGllbnRTb25nTGlzdH0+XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBjbGllbnRTb25ncyAmJlxuICAgICAgICAgICAgICAgICAgICBjbGllbnRTb25ncy5tYXAoKHNvbmcsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBrZXk9e2luZGV4fWNsYXNzTmFtZT17c3R5bGVzLmZpbGVMaXN0SXRlbX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtPYmplY3QudmFsdWVzKHNvbmcsIGluZGV4KS5tYXAoKHNvbmdEYXRhVmFsdWUpID0+IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGtleT17c29uZ0RhdGFWYWx1ZS5kYXRlfSBjbGFzc05hbWU9e3N0eWxlcy5maWxlVmVyc2lvbn0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPntEYXRlLnBhcnNlKERhdGUoc29uZ0RhdGFWYWx1ZS5kYXRlKSl9PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogPGxpPntzb25nRGF0YVZhbHVlLnJldmlzaW9uTm90ZX08L2xpPiAqL31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YXVkaW8gY29udHJvbHMgc3JjPXtzb25nRGF0YVZhbHVlLmRvd25sb2FkVVJMfS8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e3NhdmVSZXZpc2lvbk5vdGVzfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxsYWJlbCBmb3I9J3JldmlzaW9uTm90ZSc+cmV2aXNpb24gbm90ZTwvbGFiZWw+ICovfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogPHRleHRhcmVhXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBpZD0ncmV2aXNpb25Ob3RlJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXtzb25nRGF0YVZhbHVlLnJldmlzaW9uTm90ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLnJldmlzaW9uVGV4dEFyZWF9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IGhhbmRsZVR5cGluZyhlLnRhcmdldC52YWx1ZSwgc29uZyl9IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGV4dGFyZWE+ICovfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dGFyZWFBdXRvc2l6ZSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17c29uZ0RhdGFWYWx1ZS5yZXZpc2lvbk5vdGV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5yZXZpc2lvblRleHRBcmVhfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBoYW5kbGVUeXBpbmcoZS50YXJnZXQudmFsdWUsIHNvbmcpfSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxpbnB1dCBkZWZhdWx0VmFsdWU9e3NvbmdEYXRhVmFsdWUuZGF0ZX0+PC9pbnB1dD4gKi99XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8aW5wdXQgcmVhZE9ubHk9e3RydWV9IHZhbHVlPSdzb21lIHRleHQgeWF5YXlheScgc3R5bGU9e3tkaXNwbGF5OiAnbm9uZSd9fT48L2lucHV0PiAqL31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxpbnB1dCByZWFkT25seT17dHJ1ZX0gdmFsdWU9e0pTT04uc3RyaW5naWZ5KHNvbmcpfSBzdHlsZT17e2Rpc3BsYXk6ICdub25lJ319PjwvaW5wdXQ+ICovfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgcmVhZE9ubHk9e3RydWV9IHZhbHVlPXtzb25nRGF0YVZhbHVlLmtleX0gc3R5bGU9e3tkaXNwbGF5OiAnbm9uZSd9fT48L2lucHV0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogPFRleHRhcmVhQXV0b3NpemUgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9e3NvbmdEYXRhVmFsdWUuZGF0ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLnJldmlzaW9uVGV4dEFyZWF9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz4gKi99XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5zYXZlIGNoYW5nZXM8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxpbnB1dCB0eXBlPVwiYnV0dG9uXCI+c3V1dWI8L2lucHV0PiAqL31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgIDwvbWFpbj5cbiAgKVxufVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJzdHlsZXMiLCJmaXJlYmFzZSIsImF1dGgiLCJkYiIsInByb3ZpZGVyIiwic3RvcmFnZSIsImNvbGxlY3Rpb24iLCJnZXREb2NzIiwiZG9jIiwiZ2V0RG9jIiwidXBkYXRlRG9jIiwic2V0RG9jIiwidXNlQXV0aFN0YXRlIiwiVGV4dGFyZWFBdXRvc2l6ZSIsIkNsaWVudCIsInByb3BzIiwiY2hlY2siLCJjb25zb2xlIiwibG9nIiwiY2xpZW50U29uZ3MiLCJzZXRDbGllbnRTb25ncyIsInVzZXJBdXRoIiwibGVuZ3RoIiwiY2xpZW50Q29sbGVjdGlvbiIsInVpZCIsImdldENsaWVudFNvbmdzIiwicXVlcnlTbmFwc2hvdCIsImZvckVhY2giLCJpZCIsImN1cnJlbnQiLCJkYXRhIiwiaGFuZGxlVHlwaW5nIiwidGV4dGFyZWFWYWx1ZSIsInNvbmciLCJzYXZlUmV2aXNpb25Ob3RlcyIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJuZXdSZXZpc2lvbk5vdGVUb0JlU2F2ZWQiLCJ0YXJnZXQiLCJ2YWx1ZSIsIm1haW4iLCJjbGFzc05hbWUiLCJjbGllbnRDb250YWluZXIiLCJidXR0b24iLCJvbkNsaWNrIiwiYnIiLCJzZWN0aW9uIiwic29uZ0xpc3QiLCJ1bCIsImNsaWVudFNvbmdMaXN0IiwibWFwIiwiaW5kZXgiLCJmaWxlTGlzdEl0ZW0iLCJPYmplY3QiLCJ2YWx1ZXMiLCJzb25nRGF0YVZhbHVlIiwiZmlsZVZlcnNpb24iLCJsaSIsIkRhdGUiLCJwYXJzZSIsImRhdGUiLCJhdWRpbyIsImNvbnRyb2xzIiwic3JjIiwiZG93bmxvYWRVUkwiLCJmb3JtIiwib25TdWJtaXQiLCJkZWZhdWx0VmFsdWUiLCJyZXZpc2lvbk5vdGUiLCJyZXZpc2lvblRleHRBcmVhIiwib25DaGFuZ2UiLCJlIiwiaW5wdXQiLCJyZWFkT25seSIsImtleSIsInN0eWxlIiwiZGlzcGxheSIsInR5cGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/Components/Client.js\n"));

/***/ })

});