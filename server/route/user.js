const router = require('express').Router();
let User = require('../model/user-model');

router.route('/').get(req, res() => {
    User.find()
    .then (users => res.json(users))
    .catch(err => res.status(400).json('Error:' + err));
})

router.route('/add').post((req, res ()) => {
    User.find()
    .then 
})