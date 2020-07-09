let multer = require('multer');

//multer.diskStorage() creates a storage space for storing files. 
let storage = multer.diskStorage({
    destination: function (req, file, cb) {
        if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
            cb(null, './public/images/');
        } else {
            cb({ message: 'this file is not an image file' }, false)
        }
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
})
// let upload = multer({ storage: storage }).single('img');
let upload = multer({ storage: storage }).array('img');
module.exports = upload;