const multer = require('multer');
const MIME_TYPE = {
    'image/png': 'png',
    'image/jpeg': 'jpeg',
    'image/jpg': 'jpg',
}
const filterfile = (req ,file, callback) => {
    if (MIME_TYPE[file.mimetype]){
        callback(null, true);
    }else{
        callback(new Error(" les fichiers acceptés sont : png | jpg | jpeg"), false);
    }
}
const storage = multer.diskStorage({
    destination : (req,file,callback) => {
        callback(null,'images/')
    },
    filename : (req,file,callback) => {
        const name = file.originalname.split(' ').join('_')+Date.now().toString();
        const extension = MIME_TYPE[file.mimetype];
        callback(null , name + '.' + extension )
    }
})
module.exports = multer({ storage: storage , fileFilter : filterfile}).single('profil') ;
