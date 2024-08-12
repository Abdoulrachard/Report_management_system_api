# Gestion des Rapports

Ce projet met en place un webservice pour la gestion des rapports au sein d'une entreprise en utilisant Node.js et Express.

## Technologies utilisées

- Node.js
- Express.js
- MongoDB

## Installation

1. Clonez le dépôt :
```bash
git clone https://github.com/Abdoulrachard/Report_management_system_api.git
```
4. Acceder au repertoire
```bash
cd Report_management_system_api 
```
3. Installez les dépendances :
```bash
npm install
```
4. Démarrez le serveur :
```bash
nodemon server
```

### Routes API

####  Gestion des utilisateurs

#### - Créer un utilisateur

Endpoint: `/api/users`
Méthode:`POST`
Description:` Crée un nouvel utilisateur.`

#### - Récupérer la liste des utilisateurs

Endpoint: `/api/users`
Méthode: `GET`
Description: ``Retourne la liste de tous les utilisateurs.``

#### - Récupérer un utilisateur par ID

Endpoint: ``/api/users/:id``
Méthode: ``GET``
Description:`` Retourne les informations d'un utilisateur spécifique.``

#### - Mettre à jour un utilisateur

Endpoint: ``/api/users/:id``
Méthode: ``PUT``
Description: ``Met à jour les informations d'un utilisateur.``

#### - Mettre à jour le rôle d'un utilisateur

Endpoint:`` /api/users/:id/role``
Méthode: ``PUT``
Description: ``Met à jour le rôle d'un utilisateur.``

#### - Supprimer un utilisateur

Endpoint: ``/api/users/:id``
Méthode: ``DELETE``
Description: ``Supprime un utilisateur.``

### Gestion des tâches

#### Créer une tâche

Endpoint: ``/api/tasks``
Méthode: ``POST``
Description: ``Crée une nouvelle tâche.``

#### Récupérer la liste des tâches

Endpoint: ``/api/tasks``
Méthode: ``GET``
Description: ``Retourne la liste de toutes les tâches.``

#### Récupérer une tâche par ID

Endpoint: ``/api/tasks/:id``
Méthode: ``GET``
Description: ``Retourne les informations d'une tâche spécifique.``

#### Mettre à jour une tâche

Endpoint: ``/api/tasks/:id``
Méthode: ``PUT``
Description: ``Met à jour les informations d'une tâche.``

#### Soumettre une tâche

Endpoint: ``/api/tasks/:id/submit``
Méthode: ``POST``
Description: ``Soumet une tâche complétée.``

#### Supprimer une tâche

Endpoint: ``/api/tasks/:id``
Méthode: ``DELETE``
Description: ``Supprime une tâche.``

#### Upload du fichier contenant les instructions

Endpoint: ``/api/tasks/:id/taskPdf``
Méthode: ``POST``
Description: ``Upload un fichier PDF contenant les instructions de la tâche.``

#### Upload du fichier du rapport

Endpoint: ``/api/tasks/:id/reportPdf``
Méthode: ``POST``
Description: ``Upload un fichier PDF contenant le rapport de la tâche.``