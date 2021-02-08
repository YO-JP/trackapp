const router = require('express').Router();
let Exercise = require('../model/exercise-model');

router.route('/').get(req, res() => {
    User.find()
    .then (users => res.json(users))
    .catch(err => res.status(400).json('Error:' + err));
})
