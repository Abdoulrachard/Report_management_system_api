const express = require('express');
const router = express.Router();
const taskController = require('../controllers/taskCtrl');

router.post('/tasks', taskController.createTask);

router.get('/tasks', taskController.getAllTasks);

router.get('/tasks/:id', taskController.getTaskById);

router.put('/tasks/:id', taskController.updateTask);

router.delete('/tasks/:id', taskController.deleteTask);

router.post('/tasks/:id/submit', taskController.submitTask);

router.post('/tasks/:id/taskPdf', taskController.uploadTaskPdf);

router.post('/tasks/:id/reportPdf', taskController.uploadReportPdf);

module.exports = router;
