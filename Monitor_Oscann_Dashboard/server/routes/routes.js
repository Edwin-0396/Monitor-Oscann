const express = require('express');
const Model = require('../db/models/model_distribuidor');
const router = express.Router();
const model_distribuidor = require('../db/models/model_distribuidor');
const model_oscann = require('../db/models/model_oscann');


//Get all Method
router.get('/getAll', async (req, res) => {
    try {
        const data = await model_distribuidor.find();
        res.json(data)
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
})

//Get by ID Method - get Backup
router.get('/getOne/:id', async (req, res) => {
    try {
        const data = await model_oscann.findOne({ id_oscann: req.params.id.toString() });
        res.json(data)
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
})

//Post Method - create/update Backup
router.post('/store_detail', async (req, res) => {
    model_oscann.findOne({ id_oscann: req.body.id_oscann.toString() }, async function (err, data) {
        if (data == null) {
            try {
                let dataToSave = new model_oscann(req.body);
                res.status(200).json(dataToSave)
                await dataToSave.save()
            }
            catch (error) {
                res.status(400).json({ message: error.message })
            }
            console.log("New oscann to empty DB!")
            return
        }
        
        if (JSON.stringify(req.body) != JSON.stringify(data)) {
            console.log(req.body)
            try {
                let dataToSave = new model_oscann(req.body);
                res.status(200).json(dataToSave)
                await dataToSave.save()
                console.log("Oscann inserted!")
            }
            catch (error) {
                res.status(400).json({ message: error.message })
            }
        } else {
            try {
                await model_oscann.findOneAndUpdate(
                    req.body,
                    { new: true }
                );
                res.status(200).json(req.body)
                console.log("Oscann Updated!")
            }
            catch (error) {
                res.status(400).json({ message: error.message })
            }
        }
    }).sort({ updatedAt: -1 }).select('-_id -createdAt -updatedAt -__v');
})


/*
//Update by ID Method
router.patch('/update/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const updatedData = req.body;
        const options = { new: true };
        const result = await model_distribuidor.findByIdAndUpdate(
            id, updatedData, options
        )
        res.send(result)
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
})

//Delete by ID Method
router.delete('/delete/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const data = await model_distribuidor.findByIdAndDelete(id)
        res.send(`Document with ${data.name} has been deleted..`)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})*/

module.exports = router;