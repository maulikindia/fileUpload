let cloudinary = require('cloudinary');

// async function configCloud() {

//     cloudinary.config({
//         cloud_name: 'mjat05',
//         api_key: '985785769847283',
//         api_secret: 'c90PJ5Z6Q8OPQGUkBN42K4lCU9c'
//     });
// }

cloudinary.config({
    cloud_name: 'mjat05',
    api_key: '985785769847283',
    api_secret: 'c90PJ5Z6Q8OPQGUkBN42K4lCU9c'
});


// module.exports = { configCloud };

module.exports = cloudinary;