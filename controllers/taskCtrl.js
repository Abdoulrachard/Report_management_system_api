const Task = require('../models/task');

exports.createTask = (req, res) => {
    const body = req.body;
    const errors = [];
    if (!body.title){ errors.push("Le champs titre est obligatoire "); }
    if (!body.description){ errors.push("Le champs description est obligatoire "); }
    if (!body.date){ errors.push("Le champs date est obligatoire "); }
    if (!body.status){ errors.push("Le champs status est obligatoire "); }
    if (!body.pourcentage){ errors.push("Le champs pourcentage est obligatoire "); }
    if(errors.length > 0){
        return res.status(400).json({message:" Veillez rempplir tout les champs" ,  errors})
    }
    const task = new Task({ ...body , date : new Date(body.date)});
    task.save()
        .then(createdTask => res.status(201).json({ message: 'Tâche crée !', task: createdTask }))
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
    Task.updateOne({ _id: req.params.id }, { status: 'finished' })
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
