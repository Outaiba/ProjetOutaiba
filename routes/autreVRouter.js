const express = require("express");

const autreVRouter = express.Router();
const AUTRE = require("../modules/autreVehicul");

//Post

autreVRouter.post("/add", async (req, res) => {
  try {
    const newAutre = new AUTRE(req.body);
    const result = await newAutre.save();
    res.status(200).send({ msg: "new vehicule added", AUTRE: result });
  } catch (error) {
    console.log(error);
  }
});

// get

autreVRouter.get("/", async (req, res) => {
  try {
    const result = await AUTRE.find();
    res.status(200).send({ msg: "all vehicule", AUTRE: result });
  } catch (error) {
    console.log(error);
  }
});

//get by id

autreVRouter.get("/:id", async (req, res) => {
  try {
    const result = await AUTRE.findById({ _id: req.params.id });
    res.status(200).send({ msg: "vehicule", AUTRE: result });
  } catch (error) {
    console.log(error);
  }
});

// update

autreVRouter.put("/:id", async (req, res) => {
  try {
    const result = await AUTRE.findByIdAndUpdate(
      { _id: req.params.id },
      { $set: { ...req.body } }
    );
    res.status(200).send({ msg: "vehicule updated", AUTRE: result });
  } catch (error) {
    console.log(error);
  }
});

// delete

autreVRouter.delete("/:id", async (req, res) => {
  try {
    const result = await AUTRE.findByIdAndDelete({ _id: req.params.id });
    res.status(200).send({ msg: "vehicule deleted", AUTRE: result });
  } catch (error) {
    console.log(error);
  }
});

module.exports = autreVRouter;
