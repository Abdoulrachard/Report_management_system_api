const multer = require('multer');
const MIME_TYPE = {
    'image/png': 'png',
    'image/jpeg': 'jpeg',
    'image/jpg': 'jpg',
}
const storage = multer.diskStorage({
    destination : (req,file,callback) => {
        callback(null,'images')
    },
    filename : (req,file,callback) => {
        const name = file.originalname.split(' ').join('_') + Math.round(Math.random() * 1E3) + Date.now();
        const extension = MIME_TYPE[file.mimetype]
        callback(null,name + extension )
    }
})
module.exports = multer({ storage: storage}).single('image') ;
