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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Client; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @swc/helpers/src/_to_consumable_array.mjs */ \"./node_modules/@swc/helpers/src/_to_consumable_array.mjs\");\n/* harmony import */ var _Users_dylanking6132_xylvnking_xktransfer_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_dylanking6132_xylvnking_xktransfer_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_dylanking6132_xylvnking_xktransfer_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _firebase_clientApp__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../firebase/clientApp */ \"./firebase/clientApp.js\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase/firestore */ \"./node_modules/firebase/firestore/dist/index.esm.js\");\n/* harmony import */ var react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-firebase-hooks/auth */ \"./node_modules/react-firebase-hooks/auth/dist/index.esm.js\");\n/* harmony import */ var react_textarea_autosize__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-textarea-autosize */ \"./node_modules/react-textarea-autosize/dist/react-textarea-autosize.browser.esm.js\");\n\n\n\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction Client(props) {\n    var _this = this;\n    var check = function check() {\n        console.log(clientSongs);\n    };\n    _s();\n    // const [userAuth, userAuthIsLoading, userAuthError] = useAuthState(auth)\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]), clientSongs = ref[0], setClientSongs = ref[1];\n    // load client songs\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        if (props.userAuth && clientSongs.length == 0) {\n            var clientCollection = \"clientID\" + props.userAuth.uid;\n            function getClientSongs() {\n                return _getClientSongs.apply(this, arguments);\n            }\n            function _getClientSongs() {\n                _getClientSongs = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(_Users_dylanking6132_xylvnking_xktransfer_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n                    var querySnapshot;\n                    return _Users_dylanking6132_xylvnking_xktransfer_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                        while(1)switch(_ctx.prev = _ctx.next){\n                            case 0:\n                                _ctx.next = 2;\n                                return (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_4__.getDocs)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_4__.collection)(_firebase_clientApp__WEBPACK_IMPORTED_MODULE_3__.db, clientCollection));\n                            case 2:\n                                querySnapshot = _ctx.sent;\n                                querySnapshot.forEach(function(doc) {\n                                    if (doc.id !== \"settings\") {\n                                        setClientSongs(function(current) {\n                                            return (0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(current).concat([\n                                                doc.data()\n                                            ]);\n                                        });\n                                    }\n                                });\n                            case 4:\n                            case \"end\":\n                                return _ctx.stop();\n                        }\n                    }, _callee);\n                }));\n                return _getClientSongs.apply(this, arguments);\n            }\n            getClientSongs();\n        }\n    }, [\n        props.userAuth\n    ]);\n    var handleTyping = function(textareaValue, song) {\n    // console.log(song)\n    };\n    var saveRevisionNotes = function(event) {\n        event.preventDefault();\n        console.log(\"updating firebase with revision notes...\");\n        var newRevisionNoteToBeSaved = event.target[0].value;\n        console.log(event.target[1].value);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"main\", {\n        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default().clientContainer),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                onClick: function() {\n                    return check();\n                },\n                children: \"CHECK\"\n            }, void 0, false, {\n                fileName: \"/Users/dylanking6132/xylvnking/xktransfer/pages/Components/Client.js\",\n                lineNumber: 53,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"/Users/dylanking6132/xylvnking/xktransfer/pages/Components/Client.js\",\n                lineNumber: 54,\n                columnNumber: 9\n            }, this),\n            props.userAuth && props.userAuth.uid,\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"section\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default().songList),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"ul\", {\n                    className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default().clientSongList),\n                    children: clientSongs && clientSongs.map(function(song, index) {\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"ul\", {\n                            className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default().fileListItem),\n                            children: Object.values(song, index).map(function(songDataValue) {\n                                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"ul\", {\n                                    className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default().fileVersion),\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"li\", {\n                                            children: Date.parse(Date(songDataValue.date))\n                                        }, void 0, false, {\n                                            fileName: \"/Users/dylanking6132/xylvnking/xktransfer/pages/Components/Client.js\",\n                                            lineNumber: 68,\n                                            columnNumber: 41\n                                        }, _this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"audio\", {\n                                            controls: true,\n                                            src: songDataValue.downloadURL\n                                        }, void 0, false, {\n                                            fileName: \"/Users/dylanking6132/xylvnking/xktransfer/pages/Components/Client.js\",\n                                            lineNumber: 70,\n                                            columnNumber: 41\n                                        }, _this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"br\", {}, void 0, false, {\n                                            fileName: \"/Users/dylanking6132/xylvnking/xktransfer/pages/Components/Client.js\",\n                                            lineNumber: 71,\n                                            columnNumber: 41\n                                        }, _this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"form\", {\n                                            onSubmit: saveRevisionNotes,\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"br\", {}, void 0, false, {\n                                                    fileName: \"/Users/dylanking6132/xylvnking/xktransfer/pages/Components/Client.js\",\n                                                    lineNumber: 83,\n                                                    columnNumber: 45\n                                                }, _this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_textarea_autosize__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                                                    defaultValue: songDataValue.revisionNote,\n                                                    className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default().revisionTextArea),\n                                                    onChange: function(e) {\n                                                        return handleTyping(e.target.value, song);\n                                                    }\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/dylanking6132/xylvnking/xktransfer/pages/Components/Client.js\",\n                                                    lineNumber: 85,\n                                                    columnNumber: 45\n                                                }, _this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                                                    readOnly: true,\n                                                    value: \"some text yayayay\",\n                                                    style: {\n                                                        display: \"none\"\n                                                    }\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/dylanking6132/xylvnking/xktransfer/pages/Components/Client.js\",\n                                                    lineNumber: 91,\n                                                    columnNumber: 45\n                                                }, _this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"br\", {}, void 0, false, {\n                                                    fileName: \"/Users/dylanking6132/xylvnking/xktransfer/pages/Components/Client.js\",\n                                                    lineNumber: 97,\n                                                    columnNumber: 45\n                                                }, _this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                                                    type: \"submit\",\n                                                    children: \"save changes\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/dylanking6132/xylvnking/xktransfer/pages/Components/Client.js\",\n                                                    lineNumber: 98,\n                                                    columnNumber: 45\n                                                }, _this)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/dylanking6132/xylvnking/xktransfer/pages/Components/Client.js\",\n                                            lineNumber: 73,\n                                            columnNumber: 41\n                                        }, _this)\n                                    ]\n                                }, songDataValue.date, true, {\n                                    fileName: \"/Users/dylanking6132/xylvnking/xktransfer/pages/Components/Client.js\",\n                                    lineNumber: 67,\n                                    columnNumber: 37\n                                }, _this);\n                            })\n                        }, index, false, {\n                            fileName: \"/Users/dylanking6132/xylvnking/xktransfer/pages/Components/Client.js\",\n                            lineNumber: 65,\n                            columnNumber: 29\n                        }, _this);\n                    })\n                }, void 0, false, {\n                    fileName: \"/Users/dylanking6132/xylvnking/xktransfer/pages/Components/Client.js\",\n                    lineNumber: 60,\n                    columnNumber: 13\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/dylanking6132/xylvnking/xktransfer/pages/Components/Client.js\",\n                lineNumber: 59,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/dylanking6132/xylvnking/xktransfer/pages/Components/Client.js\",\n        lineNumber: 52,\n        columnNumber: 5\n    }, this);\n};\n_s(Client, \"0R7l53CiwQu7ziyMeHtgYF+Ya+E=\");\n_c = Client;\nvar _c;\n$RefreshReg$(_c, \"Client\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNGO0dBcEd1QnJDLE1BQU07QUFBTkEsS0FBQUEsTUFBTSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9Db21wb25lbnRzL0NsaWVudC5qcz8yODdhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZVN0YXRlLCB1c2VFZmZlY3R9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi8uLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzJ1xuaW1wb3J0IGZpcmViYXNlLCB7YXV0aCwgZGIsIHByb3ZpZGVyLCBzdG9yYWdlfSBmcm9tICcuLi8uLi9maXJlYmFzZS9jbGllbnRBcHAnXG5pbXBvcnQgeyBjb2xsZWN0aW9uLCBnZXREb2NzLCBkb2MsIGdldERvYywgdXBkYXRlRG9jLCBzZXREb2MgfSBmcm9tIFwiZmlyZWJhc2UvZmlyZXN0b3JlXCI7XG5pbXBvcnQge3VzZUF1dGhTdGF0ZX0gZnJvbSBcInJlYWN0LWZpcmViYXNlLWhvb2tzL2F1dGhcIlxuXG5pbXBvcnQgVGV4dGFyZWFBdXRvc2l6ZSBmcm9tICdyZWFjdC10ZXh0YXJlYS1hdXRvc2l6ZSc7XG5cblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDbGllbnQocHJvcHMpIHtcbiAgICBmdW5jdGlvbiBjaGVjaygpIHtcbiAgICAgICAgY29uc29sZS5sb2coY2xpZW50U29uZ3MpXG4gICAgfVxuICAgIC8vIGNvbnN0IFt1c2VyQXV0aCwgdXNlckF1dGhJc0xvYWRpbmcsIHVzZXJBdXRoRXJyb3JdID0gdXNlQXV0aFN0YXRlKGF1dGgpXG4gICAgY29uc3QgW2NsaWVudFNvbmdzLCBzZXRDbGllbnRTb25nc10gPSB1c2VTdGF0ZShbXSlcblxuICAgIC8vIGxvYWQgY2xpZW50IHNvbmdzXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgaWYgKHByb3BzLnVzZXJBdXRoICYmIGNsaWVudFNvbmdzLmxlbmd0aCA9PSAwKSB7XG4gICAgICAgICAgICBjb25zdCBjbGllbnRDb2xsZWN0aW9uID0gJ2NsaWVudElEJyArIHByb3BzLnVzZXJBdXRoLnVpZFxuICAgICAgICAgICAgYXN5bmMgZnVuY3Rpb24gZ2V0Q2xpZW50U29uZ3MoKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcXVlcnlTbmFwc2hvdCA9IGF3YWl0IGdldERvY3MoY29sbGVjdGlvbihkYiwgY2xpZW50Q29sbGVjdGlvbikpO1xuICAgICAgICAgICAgICAgIHF1ZXJ5U25hcHNob3QuZm9yRWFjaCgoZG9jKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChkb2MuaWQgIT09ICdzZXR0aW5ncycpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldENsaWVudFNvbmdzKGN1cnJlbnQgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC4uLmN1cnJlbnQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvYy5kYXRhKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdICBcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZ2V0Q2xpZW50U29uZ3MoKVxuICAgICAgICB9XG4gICAgfSxbcHJvcHMudXNlckF1dGhdKVxuXG4gICAgY29uc3QgaGFuZGxlVHlwaW5nID0gKHRleHRhcmVhVmFsdWUsIHNvbmcpID0+IHtcbiAgICAgICAgLy8gY29uc29sZS5sb2coc29uZylcbiAgICB9XG5cbiAgICBjb25zdCBzYXZlUmV2aXNpb25Ob3RlcyA9IChldmVudCkgPT4ge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgIGNvbnNvbGUubG9nKCd1cGRhdGluZyBmaXJlYmFzZSB3aXRoIHJldmlzaW9uIG5vdGVzLi4uJylcbiAgICAgICAgY29uc3QgbmV3UmV2aXNpb25Ob3RlVG9CZVNhdmVkID0gZXZlbnQudGFyZ2V0WzBdLnZhbHVlXG4gICAgICAgIGNvbnNvbGUubG9nKGV2ZW50LnRhcmdldFsxXS52YWx1ZSlcblxuICAgIH1cblxuICByZXR1cm4gKFxuICAgIDxtYWluIGNsYXNzTmFtZT17c3R5bGVzLmNsaWVudENvbnRhaW5lcn0+XG4gICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gY2hlY2soKX0+Q0hFQ0s8L2J1dHRvbj5cbiAgICAgICAgPGJyIC8+XG4gICAgICAgIHtcbiAgICAgICAgICAgIHByb3BzLnVzZXJBdXRoICYmXG4gICAgICAgICAgICBwcm9wcy51c2VyQXV0aC51aWRcbiAgICAgICAgfVxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9e3N0eWxlcy5zb25nTGlzdH0+XG4gICAgICAgICAgICA8dWwgY2xhc3NOYW1lPXtzdHlsZXMuY2xpZW50U29uZ0xpc3R9PlxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgY2xpZW50U29uZ3MgJiZcbiAgICAgICAgICAgICAgICAgICAgY2xpZW50U29uZ3MubWFwKChzb25nLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwga2V5PXtpbmRleH1jbGFzc05hbWU9e3N0eWxlcy5maWxlTGlzdEl0ZW19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7T2JqZWN0LnZhbHVlcyhzb25nLCBpbmRleCkubWFwKChzb25nRGF0YVZhbHVlKSA9PiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBrZXk9e3NvbmdEYXRhVmFsdWUuZGF0ZX0gY2xhc3NOYW1lPXtzdHlsZXMuZmlsZVZlcnNpb259PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT57RGF0ZS5wYXJzZShEYXRlKHNvbmdEYXRhVmFsdWUuZGF0ZSkpfTwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxsaT57c29uZ0RhdGFWYWx1ZS5yZXZpc2lvbk5vdGV9PC9saT4gKi99XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGF1ZGlvIGNvbnRyb2xzIHNyYz17c29uZ0RhdGFWYWx1ZS5kb3dubG9hZFVSTH0vPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtzYXZlUmV2aXNpb25Ob3Rlc30+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8bGFiZWwgZm9yPSdyZXZpc2lvbk5vdGUnPnJldmlzaW9uIG5vdGU8L2xhYmVsPiAqL31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIDx0ZXh0YXJlYVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gaWQ9J3JldmlzaW9uTm90ZSdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17c29uZ0RhdGFWYWx1ZS5yZXZpc2lvbk5vdGV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5yZXZpc2lvblRleHRBcmVhfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBoYW5kbGVUeXBpbmcoZS50YXJnZXQudmFsdWUsIHNvbmcpfSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RleHRhcmVhPiAqL31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRhcmVhQXV0b3NpemUgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9e3NvbmdEYXRhVmFsdWUucmV2aXNpb25Ob3RlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMucmV2aXNpb25UZXh0QXJlYX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gaGFuZGxlVHlwaW5nKGUudGFyZ2V0LnZhbHVlLCBzb25nKX0gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8aW5wdXQgZGVmYXVsdFZhbHVlPXtzb25nRGF0YVZhbHVlLmRhdGV9PjwvaW5wdXQ+ICovfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgcmVhZE9ubHk9e3RydWV9IHZhbHVlPSdzb21lIHRleHQgeWF5YXlheScgc3R5bGU9e3tkaXNwbGF5OiAnbm9uZSd9fT48L2lucHV0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogPFRleHRhcmVhQXV0b3NpemUgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9e3NvbmdEYXRhVmFsdWUuZGF0ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLnJldmlzaW9uVGV4dEFyZWF9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz4gKi99XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5zYXZlIGNoYW5nZXM8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxpbnB1dCB0eXBlPVwiYnV0dG9uXCI+c3V1dWI8L2lucHV0PiAqL31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgIDwvbWFpbj5cbiAgKVxufVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJzdHlsZXMiLCJmaXJlYmFzZSIsImF1dGgiLCJkYiIsInByb3ZpZGVyIiwic3RvcmFnZSIsImNvbGxlY3Rpb24iLCJnZXREb2NzIiwiZG9jIiwiZ2V0RG9jIiwidXBkYXRlRG9jIiwic2V0RG9jIiwidXNlQXV0aFN0YXRlIiwiVGV4dGFyZWFBdXRvc2l6ZSIsIkNsaWVudCIsInByb3BzIiwiY2hlY2siLCJjb25zb2xlIiwibG9nIiwiY2xpZW50U29uZ3MiLCJzZXRDbGllbnRTb25ncyIsInVzZXJBdXRoIiwibGVuZ3RoIiwiY2xpZW50Q29sbGVjdGlvbiIsInVpZCIsImdldENsaWVudFNvbmdzIiwicXVlcnlTbmFwc2hvdCIsImZvckVhY2giLCJpZCIsImN1cnJlbnQiLCJkYXRhIiwiaGFuZGxlVHlwaW5nIiwidGV4dGFyZWFWYWx1ZSIsInNvbmciLCJzYXZlUmV2aXNpb25Ob3RlcyIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJuZXdSZXZpc2lvbk5vdGVUb0JlU2F2ZWQiLCJ0YXJnZXQiLCJ2YWx1ZSIsIm1haW4iLCJjbGFzc05hbWUiLCJjbGllbnRDb250YWluZXIiLCJidXR0b24iLCJvbkNsaWNrIiwiYnIiLCJzZWN0aW9uIiwic29uZ0xpc3QiLCJ1bCIsImNsaWVudFNvbmdMaXN0IiwibWFwIiwiaW5kZXgiLCJmaWxlTGlzdEl0ZW0iLCJPYmplY3QiLCJ2YWx1ZXMiLCJzb25nRGF0YVZhbHVlIiwiZmlsZVZlcnNpb24iLCJsaSIsIkRhdGUiLCJwYXJzZSIsImRhdGUiLCJhdWRpbyIsImNvbnRyb2xzIiwic3JjIiwiZG93bmxvYWRVUkwiLCJmb3JtIiwib25TdWJtaXQiLCJkZWZhdWx0VmFsdWUiLCJyZXZpc2lvbk5vdGUiLCJyZXZpc2lvblRleHRBcmVhIiwib25DaGFuZ2UiLCJlIiwiaW5wdXQiLCJyZWFkT25seSIsInN0eWxlIiwiZGlzcGxheSIsInR5cGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/Components/Client.js\n"));

/***/ })

});