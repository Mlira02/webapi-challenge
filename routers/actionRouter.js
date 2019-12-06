const express = require('express');
const actionDb = require('../data/helpers/actionModel');
const router = express.Router();


router.get('/', (req, res) => {
    actionDb.get(req.params.id)
        .then(thing => {
            res.status(200).json(thing);
        })
        .catch(err => {
            res.status(500).json({ message: " error handling request..." });
        })
});

router.get('/:id', (req,res) => {
    actionDb.get(req.params.id)
    .then(thing => {
        res.status(200).json(thing)
    })
    .catch(err => {
        res.status(500).json({ message: "error with request..."})
    })
})

router.post('/', (req, res) => {
    actionDb.insert(req.body)
        .then(thing => {
            res.status(201).json(thing);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ message: "there was an error with the request..." })
        })
});


router.put('/:id', (req, res) => {
    actionDb.update(req.params.id, req.body)
        .then(thing => {
            if (thing) {
                res.status(200).json(thing)
            } else {
                res.status(404).json({ message: "The action could not be found" })
            }
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ message: "there was an error with the request..." })
        })
});


router.delete('/:id', (req, res) => {
    actionDb.remove(req.params.id)
        .then(count => {
            if (count > 0) {
                res.status(200).json({ message: "Action has been deleted..." })
            } else {
                res.status(404).json({ message: "could not find action" })
            }
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ message: "there was an error with the request..." })
        })
})


module.exports = router;
