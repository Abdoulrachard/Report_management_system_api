const express = require('express');
const router = express.Router();
const taskController = require('../controllers/taskCtrl');
const multer = require('../middlewares/multer-doc-config')

router.post('',multer, taskController.createTask);

router.get('', taskController.getAllTasks);

router.get('/:id', taskController.getTaskById);

router.put('/:id',multer, taskController.updateTask);

router.delete('/:id', taskController.deleteTask);

router.post('/:id/submit', taskController.submitTask);

router.post('/:id/taskPdf',multer, taskController.uploadTaskPdf);

router.post('/:id/reportPdf',multer, taskController.uploadReportPdf);


module.exports = router;
