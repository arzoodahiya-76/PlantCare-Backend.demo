const Plant = require("../models/Plant");

// CREATE a new plant
const createPlant = async (req, res) => {
    try {
        const { name, type, wateringFrequency, sunlight } = req.body;

        const plant = await Plant.create({
            name,
            type,
            wateringFrequency,
            sunlight
        });

        res.status(201).json({
            message: "Plant added successfully",
            plant
        });

    } catch (error) {
        res.status(400).json({
            message: error.message
        });
    }
};


// READ all plants
const getAllPlants = async (req, res) => {
    try {
        const plants = await Plant.find();

        res.status(200).json({
            count: plants.length,
            plants
        });

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};


// READ a single plant
const getPlantById = async (req, res) => {
    try {
        const plant = await Plant.findById(req.params.id);

        if (!plant) {
            return res.status(404).json({
                message: "Plant not found"
            });
        }

        res.status(200).json(plant);

    } catch (error) {
        res.status(400).json({
            message: "Invalid plant ID"
        });
    }
};


// UPDATE a plant
const updatePlant = async (req, res) => {
    try {
        const plant = await Plant.findByIdAndUpdate(
            req.params.id,
            req.body,
            {
                new: true,
                runValidators: true
            }
        );

        if (!plant) {
            return res.status(404).json({
                message: "Plant not found"
            });
        }

        res.status(200).json({
            message: "Plant updated successfully",
            plant
        });

    } catch (error) {
        res.status(400).json({
            message: error.message
        });
    }
};


// DELETE a plant
const deletePlant = async (req, res) => {
    try {
        const plant = await Plant.findByIdAndDelete(req.params.id);

        if (!plant) {
            return res.status(404).json({
                message: "Plant not found"
            });
        }

        res.status(200).json({
            message: "Plant deleted successfully"
        });

    } catch (error) {
        res.status(400).json({
            message: "Invalid plant ID"
        });
    }
};


module.exports = {
    createPlant,
    getAllPlants,
    getPlantById,
    updatePlant,
    deletePlant
};