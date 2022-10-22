const express = require("express");

const carsRouter = express.Router();
const CARS = require("../modules/cars");

//Post

carsRouter.post("/add", async (req, res) => {
  try {
    const newCars = new CARS(req.body);
    const result = await newCars.save();
    res.status(200).send({ msg: "new car added", CARS: result });
  } catch (error) {
    console.log(error);
  }
});

// get

carsRouter.get("/", async (req, res) => {
  try {
    const result = await CARS.find();
    res.status(200).send({ msg: "all cars", CARS: result });
  } catch (error) {
    console.log(error);
  }
});

//get by id

carsRouter.get("/:id", async (req, res) => {
  try {
    const result = await CARS.findById({ _id: req.params.id });
    res.status(200).send({ msg: "car", CARS: result });
  } catch (error) {
    console.log(error);
  }
});

// update

carsRouter.put("/:id", async (req, res) => {
  try {
    const result = await CARS.findByIdAndUpdate(
      { _id: req.params.id },
      { $set: { ...req.body } }
    );
    res.status(200).send({ msg: "cars updated", CARS: result });
  } catch (error) {
    console.log(error);
  }
});

// delete

carsRouter.delete("/:id", async (req, res) => {
  try {
    const result = await CARS.findByIdAndDelete({ _id: req.params.id });
    res.status(200).send({ msg: "cars deleted", CARS: result });
  } catch (error) {
    console.log(error);
  }
});

module.exports = carsRouter;
