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

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction Home() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null), data = ref[0], setData = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(true), isLoading = ref1[0], setLoading = ref1[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function() {\n        setLoading(true);\n        // fetch('/api/hello')\n        //   .then((res) => res.json())\n        //   .then((x) => {\n        //     setData(x)\n        //     setLoading(false)\n        //     console.log(x)\n        //   })\n        fetch(\"/api/hello\").then(function(res) {\n            return res.json();\n        }).then(function(x) {\n            setData(x);\n            setLoading(false);\n        });\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().container),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"xkTransfer\"\n                    }, void 0, false, {\n                        fileName: \"/Users/dylanking6132/xylvnking/xktransfer/pages/index.js\",\n                        lineNumber: 33,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"Generated by create next app\"\n                    }, void 0, false, {\n                        fileName: \"/Users/dylanking6132/xylvnking/xktransfer/pages/index.js\",\n                        lineNumber: 34,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"favicon.ico?v=1.1\"\n                    }, void 0, false, {\n                        fileName: \"/Users/dylanking6132/xylvnking/xktransfer/pages/index.js\",\n                        lineNumber: 35,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/dylanking6132/xylvnking/xktransfer/pages/index.js\",\n                lineNumber: 32,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().main),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().title),\n                        children: \"XKTransfer\"\n                    }, void 0, false, {\n                        fileName: \"/Users/dylanking6132/xylvnking/xktransfer/pages/index.js\",\n                        lineNumber: 39,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        children: data ? data.name : \"\"\n                    }, void 0, false, {\n                        fileName: \"/Users/dylanking6132/xylvnking/xktransfer/pages/index.js\",\n                        lineNumber: 43,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().grid),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                href: \"https://nextjs.org/docs\",\n                                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().card),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                        children: \"Documentation →\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/dylanking6132/xylvnking/xktransfer/pages/index.js\",\n                                        lineNumber: 53,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: \"Find in-depth information about Next.js features and API.\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/dylanking6132/xylvnking/xktransfer/pages/index.js\",\n                                        lineNumber: 54,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/dylanking6132/xylvnking/xktransfer/pages/index.js\",\n                                lineNumber: 52,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                href: \"https://nextjs.org/learn\",\n                                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().card),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                        children: \"Learn →\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/dylanking6132/xylvnking/xktransfer/pages/index.js\",\n                                        lineNumber: 58,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: \"Learn about Next.js in an interactive course with quizzes!\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/dylanking6132/xylvnking/xktransfer/pages/index.js\",\n                                        lineNumber: 59,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/dylanking6132/xylvnking/xktransfer/pages/index.js\",\n                                lineNumber: 57,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                href: \"https://github.com/vercel/next.js/tree/canary/examples\",\n                                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().card),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                        children: \"Examples →\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/dylanking6132/xylvnking/xktransfer/pages/index.js\",\n                                        lineNumber: 66,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: \"Discover and deploy boilerplate example Next.js projects.\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/dylanking6132/xylvnking/xktransfer/pages/index.js\",\n                                        lineNumber: 67,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/dylanking6132/xylvnking/xktransfer/pages/index.js\",\n                                lineNumber: 62,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                href: \"https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app\",\n                                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().card),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                        children: \"Deploy →\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/dylanking6132/xylvnking/xktransfer/pages/index.js\",\n                                        lineNumber: 74,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: \"Instantly deploy your Next.js site to a public URL with Vercel.\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/dylanking6132/xylvnking/xktransfer/pages/index.js\",\n                                        lineNumber: 75,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/dylanking6132/xylvnking/xktransfer/pages/index.js\",\n                                lineNumber: 70,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/dylanking6132/xylvnking/xktransfer/pages/index.js\",\n                        lineNumber: 51,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/dylanking6132/xylvnking/xktransfer/pages/index.js\",\n                lineNumber: 38,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"footer\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().footer),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                    href: \"https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app\",\n                    target: \"_blank\",\n                    rel: \"noopener noreferrer\",\n                    children: [\n                        \"Powered by\",\n                        \" \",\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().logo),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                src: \"/vercel.svg\",\n                                alt: \"Vercel Logo\",\n                                width: 72,\n                                height: 16\n                            }, void 0, false, {\n                                fileName: \"/Users/dylanking6132/xylvnking/xktransfer/pages/index.js\",\n                                lineNumber: 90,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/dylanking6132/xylvnking/xktransfer/pages/index.js\",\n                            lineNumber: 89,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/dylanking6132/xylvnking/xktransfer/pages/index.js\",\n                    lineNumber: 83,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/dylanking6132/xylvnking/xktransfer/pages/index.js\",\n                lineNumber: 82,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/dylanking6132/xylvnking/xktransfer/pages/index.js\",\n        lineNumber: 31,\n        columnNumber: 5\n    }, this);\n};\n_s(Home, \"07gSHKYEHnxE/FjdrgALyKayO+s=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7OzRDQUFJOzs7Ozs7b0NBQ0Y7Ozs7Ozs0QkFDQTs7Ozs7O29CQUNEOzBCQUVQLDhEQUFDQyxRQUFNO2dCQUFDaEIsU0FBUyxFQUFFZix1RUFBYTswQkFDOUIsNEVBQUMyQixHQUFDO29CQUNBSixJQUFJLEVBQUMsd0dBQXdHO29CQUM3R1MsTUFBTSxFQUFDLFFBQVE7b0JBQ2ZWLEdBQUcsRUFBQyxxQkFBcUI7O3dCQUMxQixZQUNXO3dCQUFDLEdBQUc7c0NBQ2QsOERBQUNXLE1BQUk7NEJBQUNsQixTQUFTLEVBQUVmLHFFQUFXO3NDQUMxQiw0RUFBQ0QsbURBQUs7Z0NBQUNvQyxHQUFHLEVBQUMsYUFBYTtnQ0FBQ0MsR0FBRyxFQUFDLGFBQWE7Z0NBQUNDLEtBQUssRUFBRSxFQUFFO2dDQUFFQyxNQUFNLEVBQUUsRUFBRTs7Ozs7b0NBQUk7Ozs7O2dDQUMvRDs7Ozs7O3dCQUNMOzs7OztvQkFDRzs7Ozs7O1lBQ0wsQ0FDUDtDQUNGO0dBMUZ1QmxDLElBQUk7QUFBSkEsS0FBQUEsSUFBSSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJ1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzJ1xuaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGUsIHVzZUVmZmVjdH0gZnJvbSAncmVhY3QnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG5cbiAgY29uc3QgW2RhdGEsIHNldERhdGFdID0gdXNlU3RhdGUobnVsbClcbiAgY29uc3QgW2lzTG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKVxuICBcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXRMb2FkaW5nKHRydWUpXG5cbiAgICAvLyBmZXRjaCgnL2FwaS9oZWxsbycpXG4gICAgLy8gICAudGhlbigocmVzKSA9PiByZXMuanNvbigpKVxuICAgIC8vICAgLnRoZW4oKHgpID0+IHtcbiAgICAvLyAgICAgc2V0RGF0YSh4KVxuICAgIC8vICAgICBzZXRMb2FkaW5nKGZhbHNlKVxuICAgIC8vICAgICBjb25zb2xlLmxvZyh4KVxuICAgIC8vICAgfSlcbiAgICBmZXRjaCgnL2FwaS9oZWxsbycpXG4gICAgICAudGhlbigocmVzKSA9PiByZXMuanNvbigpIClcbiAgICAgIC50aGVuKCh4KSA9PiB7XG4gICAgICAgIHNldERhdGEoeClcbiAgICAgICAgc2V0TG9hZGluZyhmYWxzZSlcbiAgICAgIH0pXG5cbiAgfSwgW10pXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPnhrVHJhbnNmZXI8L3RpdGxlPlxuICAgICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PVwiR2VuZXJhdGVkIGJ5IGNyZWF0ZSBuZXh0IGFwcFwiIC8+XG4gICAgICAgIDxsaW5rIHJlbD1cImljb25cIiAgaHJlZj1cImZhdmljb24uaWNvP3Y9MS4xXCIgLz5cbiAgICAgIDwvSGVhZD5cblxuICAgICAgPG1haW4gY2xhc3NOYW1lPXtzdHlsZXMubWFpbn0+XG4gICAgICAgIDxoMSBjbGFzc05hbWU9e3N0eWxlcy50aXRsZX0+XG4gICAgICAgICAgWEtUcmFuc2ZlclxuICAgICAgICA8L2gxPlxuXG4gICAgICAgIDxoMT5cbiAgICAgICAgICB7ZGF0YSA/IGRhdGEubmFtZSA6IFwiXCJ9IFxuICAgICAgICA8L2gxPlxuXG5cblxuICAgICAgICBcblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmdyaWR9PlxuICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL25leHRqcy5vcmcvZG9jc1wiIGNsYXNzTmFtZT17c3R5bGVzLmNhcmR9PlxuICAgICAgICAgICAgPGgyPkRvY3VtZW50YXRpb24gJnJhcnI7PC9oMj5cbiAgICAgICAgICAgIDxwPkZpbmQgaW4tZGVwdGggaW5mb3JtYXRpb24gYWJvdXQgTmV4dC5qcyBmZWF0dXJlcyBhbmQgQVBJLjwvcD5cbiAgICAgICAgICA8L2E+XG5cbiAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9uZXh0anMub3JnL2xlYXJuXCIgY2xhc3NOYW1lPXtzdHlsZXMuY2FyZH0+XG4gICAgICAgICAgICA8aDI+TGVhcm4gJnJhcnI7PC9oMj5cbiAgICAgICAgICAgIDxwPkxlYXJuIGFib3V0IE5leHQuanMgaW4gYW4gaW50ZXJhY3RpdmUgY291cnNlIHdpdGggcXVpenplcyE8L3A+XG4gICAgICAgICAgPC9hPlxuXG4gICAgICAgICAgPGFcbiAgICAgICAgICAgIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vdmVyY2VsL25leHQuanMvdHJlZS9jYW5hcnkvZXhhbXBsZXNcIlxuICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuY2FyZH1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8aDI+RXhhbXBsZXMgJnJhcnI7PC9oMj5cbiAgICAgICAgICAgIDxwPkRpc2NvdmVyIGFuZCBkZXBsb3kgYm9pbGVycGxhdGUgZXhhbXBsZSBOZXh0LmpzIHByb2plY3RzLjwvcD5cbiAgICAgICAgICA8L2E+XG5cbiAgICAgICAgICA8YVxuICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vdmVyY2VsLmNvbS9uZXc/dXRtX3NvdXJjZT1jcmVhdGUtbmV4dC1hcHAmdXRtX21lZGl1bT1kZWZhdWx0LXRlbXBsYXRlJnV0bV9jYW1wYWlnbj1jcmVhdGUtbmV4dC1hcHBcIlxuICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuY2FyZH1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8aDI+RGVwbG95ICZyYXJyOzwvaDI+XG4gICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgSW5zdGFudGx5IGRlcGxveSB5b3VyIE5leHQuanMgc2l0ZSB0byBhIHB1YmxpYyBVUkwgd2l0aCBWZXJjZWwuXG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgPC9hPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvbWFpbj5cblxuICAgICAgPGZvb3RlciBjbGFzc05hbWU9e3N0eWxlcy5mb290ZXJ9PlxuICAgICAgICA8YVxuICAgICAgICAgIGhyZWY9XCJodHRwczovL3ZlcmNlbC5jb20/dXRtX3NvdXJjZT1jcmVhdGUtbmV4dC1hcHAmdXRtX21lZGl1bT1kZWZhdWx0LXRlbXBsYXRlJnV0bV9jYW1wYWlnbj1jcmVhdGUtbmV4dC1hcHBcIlxuICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiXG4gICAgICAgID5cbiAgICAgICAgICBQb3dlcmVkIGJ5eycgJ31cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5sb2dvfT5cbiAgICAgICAgICAgIDxJbWFnZSBzcmM9XCIvdmVyY2VsLnN2Z1wiIGFsdD1cIlZlcmNlbCBMb2dvXCIgd2lkdGg9ezcyfSBoZWlnaHQ9ezE2fSAvPlxuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPC9hPlxuICAgICAgPC9mb290ZXI+XG4gICAgPC9kaXY+XG4gIClcbn1cbiJdLCJuYW1lcyI6WyJIZWFkIiwiSW1hZ2UiLCJzdHlsZXMiLCJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiSG9tZSIsImRhdGEiLCJzZXREYXRhIiwiaXNMb2FkaW5nIiwic2V0TG9hZGluZyIsImZldGNoIiwidGhlbiIsInJlcyIsImpzb24iLCJ4IiwiZGl2IiwiY2xhc3NOYW1lIiwiY29udGFpbmVyIiwidGl0bGUiLCJtZXRhIiwibmFtZSIsImNvbnRlbnQiLCJsaW5rIiwicmVsIiwiaHJlZiIsIm1haW4iLCJoMSIsImdyaWQiLCJhIiwiY2FyZCIsImgyIiwicCIsImZvb3RlciIsInRhcmdldCIsInNwYW4iLCJsb2dvIiwic3JjIiwiYWx0Iiwid2lkdGgiLCJoZWlnaHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});