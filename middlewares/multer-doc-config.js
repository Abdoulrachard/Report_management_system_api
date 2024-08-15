const multer = require('multer');
const MIME_TYPE = {
    'aplication/pdf': 'pdf',
    'text/plain': 'txt' 
}
const fileFilter = (req , file , cb)  => {
    console.log(file.mimetype);
    if(MIME_TYPE[file.mimetype] ){
        cb(null, true);
    }else{
        cb(new Error('Les types de fichiers acceptés sont : pdf | txt'), false);
    }
}
const storage = multer.diskStorage({
    destination: (req,file, cb) => {
        cb(null,'document/');
    },
    filename: (req,file, cb) =>{
        const name = file.originalname.split(' ').join('_')+Date.now().toString();
        const extension = MIME_TYPE[file.mimetype] ;
        cb(null,name+'.'+extension);
    }
});
module.exports = multer({ storage: storage , fileFilter : fileFilter }).single('TaskPdf',)
