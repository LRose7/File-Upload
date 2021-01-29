const router = require('express').Router();
const { upload } = require('../helpers/filehelper');
const { 
    singleFileUpload, 
    multipleFileUpload, 
    getallSingleFiles, 
    getallMultipleFiles 
} = require('../controllers/fileUploadController');

router.get('/', (req, res) => {
    res.send({ message: 'Upload Route'});
}); 

router.post('/singleFile', upload.single('file'), singleFileUpload);
router.post('/multipleFiles', upload.array('files'), multipleFileUpload);
router.get('/getSingleFiles', getallSingleFiles);
router.get('/getMultipleFiles', getallMultipleFiles);


module.exports = router;