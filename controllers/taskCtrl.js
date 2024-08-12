const Task = require('../models/task');

exports.createTask = (req, res) => {
    const task = new Task({
        title: req.body.title,
        description: req.body.description,
        startedAt: req.body.startedAt,
        finishedAt: req.body.finishedAt,
        taskPdf: req.body.taskPdf,
        reportPdf: req.body.reportPdf,
        taskDoc: req.body.taskDoc,
        reportDoc: req.body.reportDoc,
        status: req.body.status,
        pourcentage: req.body.pourcentage,
        agentId: req.body.agentId
    });

    task.save()
        .then(createdTask => res.status(201).json({ message: 'Tâche créée!', task: createdTask }))
        .catch(error => res.status(400).json({ error }));
};


exports.getAllTasks = (req, res) => {
    Task.find()
        .then(tasks => res.status(200).json({ tasks }))
        .catch(error => res.status(400).json({ error }));
};

exports.getTaskById = (req, res) => {
    Task.findById(req.params.id)
        .then(task => {
            if (task) {
                res.status(200).json({ task });
            } else {
                res.status(404).json({ message: 'Tâche non trouvée!' });
            }
        })
        .catch(error => res.status(400).json({ error }));
};


exports.updateTask = (req, res) => {
    Task.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id })
        .then(() => res.status(200).json({ message: 'Tâche mise à jour!' }))
        .catch(error => res.status(400).json({ error }));
};


exports.deleteTask = (req, res) => {
    Task.deleteOne({ _id: req.params.id })
        .then(() => res.status(200).json({ message: 'Tâche supprimée!' }))
        .catch(error => res.status(400).json({ error }));
};


exports.submitTask = (req, res) => {
    Task.updateOne({ _id: req.params.id }, { status: 'submitted' })
        .then(() => res.status(200).json({ message: 'Tâche soumise!' }))
        .catch(error => res.status(400).json({ error }));
};


exports.uploadTaskPdf = (req, res) => {
    Task.updateOne({ _id: req.params.id }, { taskPdf: req.body.taskPdf })
        .then(() => res.status(200).json({ message: 'Fichier taskPdf uploadé!' }))
        .catch(error => res.status(400).json({ error }));
};

exports.uploadReportPdf = (req, res) => {
    Task.updateOne({ _id: req.params.id }, { reportPdf: req.body.reportPdf })
        .then(() => res.status(200).json({ message: 'Fichier reportPdf uploadé!' }))
        .catch(error => res.status(400).json({ error }));
};
