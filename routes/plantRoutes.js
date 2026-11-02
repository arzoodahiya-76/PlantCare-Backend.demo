const express = require("express");

const router = express.Router();

const {
    createPlant,
    getAllPlants,
    getPlantById,
    updatePlant,
    deletePlant
} = require("../controllers/plantController");


// CREATE
router.post("/", createPlant);

// READ ALL
router.get("/", getAllPlants);

// READ ONE
router.get("/:id", getPlantById);

// UPDATE
router.put("/:id", updatePlant);

// DELETE
router.delete("/:id", deletePlant);


module.exports = router;