const User = require('../models/user');

exports.createUser = (req, res) => {
    const body = req.body;
    const errors = [];
    if (!body.firstname) {
         errors.push('Le champ firstname est obligatoire.');
    }

    if (!body.lastname) {
         errors.push('Le champ lastname est obligatoire.');
    }

    if (!body.email) {
         errors.push('Le champ email est obligatoire.');
    }

    if (!body.password) {
         errors.push('Le champ password est obligatoire.');
    }

    if (!body.role) {
        errors.push('Le champ rôle est obligatoire.');
    }

    if (!body.status) {
        errors.push('Le champ status est obligatoire.');
    }
    if (!body.phone) {
        errors.push('Le champ phone est obligatoire.');
    }
    if(errors.length > 0) {
        return res.status(400).json({ message: 'Veillez remplir tout les champs.', errors })
    }
    User.findOne({email:body.email})
        .then(userExists =>{
            if(userExists){
                return res.status(200).json({ message: 'Cet email est déja utiliser '});
            }
            else{
                let filePath = null ;
                if(req.file){
                    filePath = `${req.protocol}://${req.get('host')}/images/${req.file.filename}`;
                }
                const user = new User({
                    ...body , 
                    profil : filePath
                });
                user.save()
                    .then(createdUser => res.status(201).json({ message: 'Utilisateur créé!', user: createdUser }))
                    .catch(error => res.status(400).json({ error }));
            }
    })}
   


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
    const updateData = { ...req.body}
    if (req.file){
        updateData.profil = `${req.protocol}://${req.get('host')}/images/${req.file.filename}`;
    }
    User.updateOne({ _id: req.params.id }, updateData)
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
        .catch(error => res.status(400).json({message: "cet utilisateur n'existe pas !", error }));
};
