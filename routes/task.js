const express = require('express');
const router = express.Router();
const taskController = require('../controllers/taskCtrl');

router.post('/', taskController.createTask);

router.get('/', taskController.getAllTasks);

router.get('/:id', taskController.getTaskById);

router.put('/:id', taskController.updateTask);

router.delete('/:id', taskController.deleteTask);

router.post('/:id/submit', taskController.submitTask);

router.post('/:id/taskPdf', taskController.uploadTaskPdf);

router.post('/:id/reportPdf', taskController.uploadReportPdf);

module.exports = router;
