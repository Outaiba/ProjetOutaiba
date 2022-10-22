const express = require("express");

const motosRouter = express.Router();
const MOTOS = require("../modules/motos");

//Post

motosRouter.post("/add", async (req, res) => {
  try {
    const newMoto = new MOTOS(req.body);
    const result = await newMoto.save();
    res.status(200).send({ msg: "new moto added", MOTOS: result });
  } catch (error) {
    console.log(error);
  }
});

// get

motosRouter.get("/", async (req, res) => {
  try {
    const result = await MOTOS.find();
    res.status(200).send({ msg: "all motos", MOTOS: result });
  } catch (error) {
    console.log(error);
  }
});

//get by id

motosRouter.get("/:id", async (req, res) => {
  try {
    const result = await MOTOS.findById({ _id: req.params.id });
    res.status(200).send({ msg: "moto", MOTOS: result });
  } catch (error) {
    console.log(error);
  }
});

// update

motosRouter.put("/:id", async (req, res) => {
  try {
    const result = await MOTOS.findByIdAndUpdate(
      { _id: req.params.id },
      { $set: { ...req.body } }
    );
    res.status(200).send({ msg: "moto updated", MOTOS: result });
  } catch (error) {
    console.log(error);
  }
});

// delete

motosRouter.delete("/:id", async (req, res) => {
  try {
    const result = await MOTOS.findByIdAndDelete({ _id: req.params.id });
    res.status(200).send({ msg: "moto deleted", MOTOS: result });
  } catch (error) {
    console.log(error);
  }
});

module.exports = motosRouter;
