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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Client; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @swc/helpers/src/_to_consumable_array.mjs */ \"./node_modules/@swc/helpers/src/_to_consumable_array.mjs\");\n/* harmony import */ var _Users_dylanking6132_xylvnking_xktransfer_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_dylanking6132_xylvnking_xktransfer_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_dylanking6132_xylvnking_xktransfer_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _firebase_clientApp__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../firebase/clientApp */ \"./firebase/clientApp.js\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase/firestore */ \"./node_modules/firebase/firestore/dist/index.esm.js\");\n/* harmony import */ var react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-firebase-hooks/auth */ \"./node_modules/react-firebase-hooks/auth/dist/index.esm.js\");\n\n\n\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction Client(props) {\n    var _this = this;\n    var check = function check() {\n        console.log(clientSongs);\n    };\n    _s();\n    // const [userAuth, userAuthIsLoading, userAuthError] = useAuthState(auth)\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]), clientSongs = ref[0], setClientSongs = ref[1];\n    // load client songs\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        if (props.userAuth && clientSongs.length == 0) {\n            var clientCollection = \"clientID\" + props.userAuth.uid;\n            function getClientSongs() {\n                return _getClientSongs.apply(this, arguments);\n            }\n            function _getClientSongs() {\n                _getClientSongs = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(_Users_dylanking6132_xylvnking_xktransfer_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n                    var querySnapshot;\n                    return _Users_dylanking6132_xylvnking_xktransfer_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                        while(1)switch(_ctx.prev = _ctx.next){\n                            case 0:\n                                _ctx.next = 2;\n                                return (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_4__.getDocs)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_4__.collection)(_firebase_clientApp__WEBPACK_IMPORTED_MODULE_3__.db, clientCollection));\n                            case 2:\n                                querySnapshot = _ctx.sent;\n                                querySnapshot.forEach(function(doc) {\n                                    if (doc.id !== \"settings\") {\n                                        setClientSongs(function(current) {\n                                            return (0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(current).concat([\n                                                doc.data()\n                                            ]);\n                                        });\n                                    }\n                                });\n                            case 4:\n                            case \"end\":\n                                return _ctx.stop();\n                        }\n                    }, _callee);\n                }));\n                return _getClientSongs.apply(this, arguments);\n            }\n            getClientSongs();\n        }\n    }, [\n        props.userAuth\n    ]);\n    var handleTyping = function(textareaValue, song) {\n        console.log(song);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"main\", {\n        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default().clientContainer),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                onClick: function() {\n                    return check();\n                },\n                children: \"CHECK\"\n            }, void 0, false, {\n                fileName: \"/Users/dylanking6132/xylvnking/xktransfer/pages/Components/Client.js\",\n                lineNumber: 43,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"/Users/dylanking6132/xylvnking/xktransfer/pages/Components/Client.js\",\n                lineNumber: 44,\n                columnNumber: 9\n            }, this),\n            props.userAuth && props.userAuth.uid,\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"section\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default().songList),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"ul\", {\n                    className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default().clientSongList),\n                    children: clientSongs && clientSongs.map(function(song, index) {\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"ul\", {\n                            className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default().fileListItem),\n                            children: Object.values(song, index).map(function(songDataValue) {\n                                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"ul\", {\n                                    className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default().fileVersion),\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"li\", {\n                                            children: Date.parse(Date(songDataValue.date))\n                                        }, void 0, false, {\n                                            fileName: \"/Users/dylanking6132/xylvnking/xktransfer/pages/Components/Client.js\",\n                                            lineNumber: 58,\n                                            columnNumber: 41\n                                        }, _this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"audio\", {\n                                            controls: true,\n                                            src: songDataValue.downloadURL\n                                        }, void 0, false, {\n                                            fileName: \"/Users/dylanking6132/xylvnking/xktransfer/pages/Components/Client.js\",\n                                            lineNumber: 60,\n                                            columnNumber: 41\n                                        }, _this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"br\", {}, void 0, false, {\n                                            fileName: \"/Users/dylanking6132/xylvnking/xktransfer/pages/Components/Client.js\",\n                                            lineNumber: 61,\n                                            columnNumber: 41\n                                        }, _this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"form\", {\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"textarea\", {\n                                                    defaultValue: songDataValue.revisionNote,\n                                                    className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default().revisionTextArea),\n                                                    onChange: function(e) {\n                                                        return handleTyping(e.target.value, song);\n                                                    }\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/dylanking6132/xylvnking/xktransfer/pages/Components/Client.js\",\n                                                    lineNumber: 64,\n                                                    columnNumber: 45\n                                                }, _this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                                                    children: \"save changes\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/dylanking6132/xylvnking/xktransfer/pages/Components/Client.js\",\n                                                    lineNumber: 70,\n                                                    columnNumber: 45\n                                                }, _this)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/dylanking6132/xylvnking/xktransfer/pages/Components/Client.js\",\n                                            lineNumber: 63,\n                                            columnNumber: 41\n                                        }, _this)\n                                    ]\n                                }, songDataValue.date, true, {\n                                    fileName: \"/Users/dylanking6132/xylvnking/xktransfer/pages/Components/Client.js\",\n                                    lineNumber: 57,\n                                    columnNumber: 37\n                                }, _this);\n                            })\n                        }, index, false, {\n                            fileName: \"/Users/dylanking6132/xylvnking/xktransfer/pages/Components/Client.js\",\n                            lineNumber: 55,\n                            columnNumber: 29\n                        }, _this);\n                    })\n                }, void 0, false, {\n                    fileName: \"/Users/dylanking6132/xylvnking/xktransfer/pages/Components/Client.js\",\n                    lineNumber: 50,\n                    columnNumber: 13\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/dylanking6132/xylvnking/xktransfer/pages/Components/Client.js\",\n                lineNumber: 49,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/dylanking6132/xylvnking/xktransfer/pages/Components/Client.js\",\n        lineNumber: 42,\n        columnNumber: 5\n    }, this);\n};\n_s(Client, \"0R7l53CiwQu7ziyMeHtgYF+Ya+E=\");\n_c = Client;\nvar _c;\n$RefreshReg$(_c, \"Client\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7O2lEQUFHO3NEQUNqRCw4REFBQ25CLElBQUU7Ozs7aURBQUc7c0RBRU4sOERBQUNvQixNQUFJOzs4REFDRCw4REFBQ0MsVUFBUTtvREFDTEMsWUFBWSxFQUFFWixhQUFhLENBQUNhLFlBQVk7b0RBQ3hDM0IsU0FBUyxFQUFFbEMsaUZBQXVCO29EQUNsQytELFFBQVEsRUFBRSxTQUFDQyxDQUFDOytEQUFLbEMsWUFBWSxDQUFDa0MsQ0FBQyxDQUFDQyxNQUFNLENBQUNDLEtBQUssRUFBRWxDLElBQUksQ0FBQztxREFBQTs7Ozs7eURBRTVDOzhEQUNYLDhEQUFDSSxRQUFNOzhEQUFDLGNBQVk7Ozs7O3lEQUFTOzs7Ozs7aURBRTFCOzttQ0FmRlksYUFBYSxDQUFDSyxJQUFJOzs7O3lDQWdCdEI7NkJBQUEsQ0FDUjsyQkFuQklULEtBQUs7Ozs7aUNBb0JULENBQ1I7cUJBQ0osQ0FBQzs7Ozs7d0JBRUw7Ozs7O29CQUNDOzs7Ozs7WUFDUCxDQUNSO0NBQ0Y7R0EzRXVCL0IsTUFBTTtBQUFOQSxLQUFBQSxNQUFNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL0NvbXBvbmVudHMvQ2xpZW50LmpzPzI4N2EiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGUsIHVzZUVmZmVjdH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uLy4uL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3MnXG5pbXBvcnQgZmlyZWJhc2UsIHthdXRoLCBkYiwgcHJvdmlkZXIsIHN0b3JhZ2V9IGZyb20gJy4uLy4uL2ZpcmViYXNlL2NsaWVudEFwcCdcbmltcG9ydCB7IGNvbGxlY3Rpb24sIGdldERvY3MsIGRvYywgZ2V0RG9jLCB1cGRhdGVEb2MsIHNldERvYyB9IGZyb20gXCJmaXJlYmFzZS9maXJlc3RvcmVcIjtcbmltcG9ydCB7dXNlQXV0aFN0YXRlfSBmcm9tIFwicmVhY3QtZmlyZWJhc2UtaG9va3MvYXV0aFwiXG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ2xpZW50KHByb3BzKSB7XG4gICAgZnVuY3Rpb24gY2hlY2soKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGNsaWVudFNvbmdzKVxuICAgIH1cbiAgICAvLyBjb25zdCBbdXNlckF1dGgsIHVzZXJBdXRoSXNMb2FkaW5nLCB1c2VyQXV0aEVycm9yXSA9IHVzZUF1dGhTdGF0ZShhdXRoKVxuICAgIGNvbnN0IFtjbGllbnRTb25ncywgc2V0Q2xpZW50U29uZ3NdID0gdXNlU3RhdGUoW10pXG5cbiAgICAvLyBsb2FkIGNsaWVudCBzb25nc1xuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGlmIChwcm9wcy51c2VyQXV0aCAmJiBjbGllbnRTb25ncy5sZW5ndGggPT0gMCkge1xuICAgICAgICAgICAgY29uc3QgY2xpZW50Q29sbGVjdGlvbiA9ICdjbGllbnRJRCcgKyBwcm9wcy51c2VyQXV0aC51aWRcbiAgICAgICAgICAgIGFzeW5jIGZ1bmN0aW9uIGdldENsaWVudFNvbmdzKCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHF1ZXJ5U25hcHNob3QgPSBhd2FpdCBnZXREb2NzKGNvbGxlY3Rpb24oZGIsIGNsaWVudENvbGxlY3Rpb24pKTtcbiAgICAgICAgICAgICAgICBxdWVyeVNuYXBzaG90LmZvckVhY2goKGRvYykgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZG9jLmlkICE9PSAnc2V0dGluZ3MnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRDbGllbnRTb25ncyhjdXJyZW50ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuLi5jdXJyZW50LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb2MuZGF0YSgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSAgXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGdldENsaWVudFNvbmdzKClcbiAgICAgICAgfVxuICAgIH0sW3Byb3BzLnVzZXJBdXRoXSlcblxuICAgIGNvbnN0IGhhbmRsZVR5cGluZyA9ICh0ZXh0YXJlYVZhbHVlLCBzb25nKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKHNvbmcpXG5cbiAgICB9XG5cbiAgcmV0dXJuIChcbiAgICA8bWFpbiBjbGFzc05hbWU9e3N0eWxlcy5jbGllbnRDb250YWluZXJ9PlxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IGNoZWNrKCl9PkNIRUNLPC9idXR0b24+XG4gICAgICAgIDxiciAvPlxuICAgICAgICB7XG4gICAgICAgICAgICBwcm9wcy51c2VyQXV0aCAmJlxuICAgICAgICAgICAgcHJvcHMudXNlckF1dGgudWlkXG4gICAgICAgIH1cbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPXtzdHlsZXMuc29uZ0xpc3R9PlxuICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT17c3R5bGVzLmNsaWVudFNvbmdMaXN0fT5cbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGNsaWVudFNvbmdzICYmXG4gICAgICAgICAgICAgICAgICAgIGNsaWVudFNvbmdzLm1hcCgoc29uZywgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGtleT17aW5kZXh9Y2xhc3NOYW1lPXtzdHlsZXMuZmlsZUxpc3RJdGVtfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge09iamVjdC52YWx1ZXMoc29uZywgaW5kZXgpLm1hcCgoc29uZ0RhdGFWYWx1ZSkgPT4gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwga2V5PXtzb25nRGF0YVZhbHVlLmRhdGV9IGNsYXNzTmFtZT17c3R5bGVzLmZpbGVWZXJzaW9ufT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+e0RhdGUucGFyc2UoRGF0ZShzb25nRGF0YVZhbHVlLmRhdGUpKX08L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8bGk+e3NvbmdEYXRhVmFsdWUucmV2aXNpb25Ob3RlfTwvbGk+ICovfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhdWRpbyBjb250cm9scyBzcmM9e3NvbmdEYXRhVmFsdWUuZG93bmxvYWRVUkx9Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Zm9ybT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRleHRhcmVhXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9e3NvbmdEYXRhVmFsdWUucmV2aXNpb25Ob3RlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMucmV2aXNpb25UZXh0QXJlYX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gaGFuZGxlVHlwaW5nKGUudGFyZ2V0LnZhbHVlLCBzb25nKX0gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZXh0YXJlYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbj5zYXZlIGNoYW5nZXM8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxpbnB1dCB0eXBlPVwiYnV0dG9uXCI+c3V1dWI8L2lucHV0PiAqL31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgIDwvbWFpbj5cbiAgKVxufVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJzdHlsZXMiLCJmaXJlYmFzZSIsImF1dGgiLCJkYiIsInByb3ZpZGVyIiwic3RvcmFnZSIsImNvbGxlY3Rpb24iLCJnZXREb2NzIiwiZG9jIiwiZ2V0RG9jIiwidXBkYXRlRG9jIiwic2V0RG9jIiwidXNlQXV0aFN0YXRlIiwiQ2xpZW50IiwicHJvcHMiLCJjaGVjayIsImNvbnNvbGUiLCJsb2ciLCJjbGllbnRTb25ncyIsInNldENsaWVudFNvbmdzIiwidXNlckF1dGgiLCJsZW5ndGgiLCJjbGllbnRDb2xsZWN0aW9uIiwidWlkIiwiZ2V0Q2xpZW50U29uZ3MiLCJxdWVyeVNuYXBzaG90IiwiZm9yRWFjaCIsImlkIiwiY3VycmVudCIsImRhdGEiLCJoYW5kbGVUeXBpbmciLCJ0ZXh0YXJlYVZhbHVlIiwic29uZyIsIm1haW4iLCJjbGFzc05hbWUiLCJjbGllbnRDb250YWluZXIiLCJidXR0b24iLCJvbkNsaWNrIiwiYnIiLCJzZWN0aW9uIiwic29uZ0xpc3QiLCJ1bCIsImNsaWVudFNvbmdMaXN0IiwibWFwIiwiaW5kZXgiLCJmaWxlTGlzdEl0ZW0iLCJPYmplY3QiLCJ2YWx1ZXMiLCJzb25nRGF0YVZhbHVlIiwiZmlsZVZlcnNpb24iLCJsaSIsIkRhdGUiLCJwYXJzZSIsImRhdGUiLCJhdWRpbyIsImNvbnRyb2xzIiwic3JjIiwiZG93bmxvYWRVUkwiLCJmb3JtIiwidGV4dGFyZWEiLCJkZWZhdWx0VmFsdWUiLCJyZXZpc2lvbk5vdGUiLCJyZXZpc2lvblRleHRBcmVhIiwib25DaGFuZ2UiLCJlIiwidGFyZ2V0IiwidmFsdWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/Components/Client.js\n"));

/***/ })

});