const multer  = require('multer')
// const upload = multer({ dest: 'uploads/' })
var bodyParser = require('body-parser');
const upload = multer({ dest: 'uploads/' })



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
        
        
    export default async function handler(req, res) {
        // const thing = JSON.parse(req.body)
    console.log(req.body)
  }
  