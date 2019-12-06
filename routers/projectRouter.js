const express = require('express');
const projectDb = require('../data/helpers/projectModel');
const router = express.Router();


router.get('/', (req, res) => {
    projectDb.get(req.params.id)
        .then(thing => {
            res.status(200).json(thing);
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({ message: " there was an error with request" })
        })
});

router.get('/:id', (req,res) => {
    projectDb.get(req.params.id)
    .then(thing => {
        res.status(200).json(thing)
    })
    .catch(err => {
        res.status(500).json({ message: "There was a problem with the request..."})
    })
})


router.post('/', (req, res) => {
    projectDb.insert(req.body)
        .then(thing => {
            res.status(201).json(thing);
        })
        .catch(err => {
            console.log("There was an error with request...")
            res.status(500).json({ message: "Error posting data..." })
        })
});


router.put('/:id', (req, res) => {
    projectDb.update(req.params.id, req.body)
        .then(thing => {
            if (thing) {
                res.status(200).json(thing)
            } else {
                res.status(404).json({ message: "this project could not be found..." })
            }
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ message: "Error updating project..." })
        })
});


router.delete('/:id', (req, res) => {
    projectDb.remove(req.params.id)
        .then(count => {
            if (count > 0) {
                res.status(200).json({ message: "project was successfully deleted!!" })
            } else {
                res.status(404).json({ message: "Project could not be found" })
            }
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ message: "error deleting project... " })
        })
});


module.exports = router;
