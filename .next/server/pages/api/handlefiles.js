"use strict";
(() => {
var exports = {};
exports.id = 767;
exports.ids = [767];
exports.modules = {

/***/ 3986:
/***/ ((module) => {

module.exports = require("body-parser");

/***/ }),

/***/ 1738:
/***/ ((module) => {

module.exports = require("multer");

/***/ }),

/***/ 9422:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
const multer = __webpack_require__(1738);
// const upload = multer({ dest: 'uploads/' })
var bodyParser = __webpack_require__(3986);
const upload = multer({
    dest: "uploads/"
});
// app.use(bodyParser.urlencoded({extended: false}))
// const thing = upload.single('upfile')
// app.post('/api/fileanalyse', upload.single('upfile'), function(req, res, next) {
//     console.log(req.file)
//     res.json({
//       name: req.file.originalname,
//       type: req.file.mimetype,
//       size: req.file.size
//     })
//     // console.log(req.body)
//   })
async function handler(req, res) {
    // const thing = JSON.parse(req.body)
    console.log(req.body);
};


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(9422));
module.exports = __webpack_exports__;

})();