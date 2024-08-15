const multer = require('multer');
const MIME_TYPE = {
    'application/pdf': 'pdf',
    'text/plain': 'txt' 
}
const fileFilter = (req , file , cb)  => {
    if(MIME_TYPE[file.mimetype] ){
        cb(null, true);
    }else{
        cb(new Error('Les types de fichiers acceptés sont : pdf | txt'), false);
    }
}
const storage = multer.diskStorage({
    destination: (req,file, cb) => {
        cb(null,'documents/');
    },
    filename: (req,file, cb) =>{
        const name = file.originalname.split('.')[0].split(' ').join('_')+Date.now();
        const extension = MIME_TYPE[file.mimetype] ;
        cb(null,name+'.'+extension);
    }
});
module.exports = multer({ storage: storage , fileFilter : fileFilter }).single('pdf')
