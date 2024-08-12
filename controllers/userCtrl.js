const User = require('../models/user');

exports.createUser = (req, res) => {
    const user = new User({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email,
        password: req.body.password,
        gender: req.body.gender,
        role: req.body.role,
        status: req.body.status,
        phone: req.body.phone
    });

    user.save()
        .then(createdUser => res.status(201).json({ message: 'Utilisateur créé!', user: createdUser }))
        .catch(error => res.status(400).json({ error }));
};


exports.getAllUsers = (req, res) => {
    User.find()
        .then(users => res.status(200).json({ users }))
        .catch(error => res.status(400).json({ error }));
};


exports.getUserById = (req, res) => {
    User.findById(req.params.id)
        .then(user => {
            if (user) {
                res.status(200).json({ user });
            } else {
                res.status(404).json({ message: 'Utilisateur non trouvé!' });
            }
        })
        .catch(error => res.status(400).json({ error }));
};


exports.updateUser = (req, res) => {
    User.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id })
        .then(() => res.status(200).json({ message: 'Utilisateur mis à jour!' }))
        .catch(error => res.status(400).json({ error }));
};


exports.updateUserRole = (req, res) => {
    User.updateOne({ _id: req.params.id }, { role: req.body.role })
        .then(() => res.status(200).json({ message: 'Rôle mis à jour!' }))
        .catch(error => res.status(400).json({ error }));
};


exports.deleteUser = (req, res) => {
    User.deleteOne({ _id: req.params.id })
        .then(() => res.status(200).json({ message: 'Utilisateur supprimé!' }))
        .catch(error => res.status(400).json({ error }));
};
