let express = require('express');
let router = express.Router();
let multerConfig = require('../config/multerConfig');
// let cloud = require('../config/cloudConfig');
let cloudinary = require('cloudinary');

cloudinary.config({
    cloud_name: 'mjat05',
    api_key: '985785769847283',
    api_secret: 'c90PJ5Z6Q8OPQGUkBN42K4lCU9c'
});

//single cloudinary file upload
router.post('/', multerConfig, async (req, res) => {

    await cloudinary.uploader.upload(req.file.path).then(async (img) => {
        let imageData = {};
        imageData.uploadId = img.public_id;
        imageData.imageName = img.original_filename;
        imageData.imageUrl = img.url;
        imageData.createdTime = img.created_at;
        return res.json(imageData)
    });
});

// async function cloudUpload(file) {
//     let imageData = {};
//     cloud.configCloud.uploader.upload(file).then((img) => {
//         imageData.uploadId = img.public_id;
//         imageData.imageName = img.original_filename;
//         imageData.imageUrl = img.url;
//         imageData.createdTime = img.created_at;
//         // return res.json(imageData)
//     });
//     return imageData;

// }


router.post('/multi', multerConfig, async (req, res) => {
    let arr = [];
    for await (let mFile of req.files) {
        let newPath = mFile.destination + mFile.filename;
        await cloudinary.uploader.upload(newPath).then(async (img) => {
            let imageData = {};
            imageData.uploadId = img.public_id;
            imageData.imageName = img.original_filename;
            imageData.imageUrl = img.url;
            imageData.createdTime = img.created_at;
            arr.push(imageData)
        });
    }
    return res.json({ arra: arr })
})

module.exports = router;
