const { Router } = require("express");
const TipoProyecto = require("../models/TipoProyecto");

const router = Router();

router.post("/", async (req, res) => {
  try {
    let tipoProyecto = new TipoProyecto();
    tipoProyecto.nombre = req.body.nombre;
    tipoProyecto.fechaCreacion = new Date();
    tipoProyecto.fechaActualizacion = new Date();

    tipoProyecto = await tipoProyecto.save();
    res.send(tipoProyecto);
  } catch (error) {
    console.log("error-->", error);
    res.send("ocurrio un error");
  }
});

router.get("/", async (req, res) => {
  try {
    const tipoProyecto = await TipoProyecto.find();
    res.send(tipoProyecto);
  } catch (error) {
    console.log("error-->", error);
    res.send("ocurrio un error");
  }
});

router.put("/:tipoProyectoId", async (req, res) => {
  try {
    let tipoProyecto = await TipoProyecto.findById(req.params.tipoProyectoId);

    if (!tipoProyecto) {
      return res.send(`El proyecto no existe`);
    }

    tipoProyecto.nombre = req.body.nombre;
    tipoProyecto.fechaActualizacion = new Date();

    tipoProyecto = await tipoProyecto.save();
    res.send(tipoProyecto);
  } catch (error) {
    console.log("error-->", error);
    res.send("ocurrio un error");
  }
});

router.get("/:tipoProyectoId", async (req, res) => {
  try {
    let tipoProyecto = await TipoProyecto.findById(req.params.tipoProyectoId);

    if (!tipoProyecto) {
      return res.status(400).send("Proyecto no existe");
    }

    res.send(tipoProyecto);
  } catch (error) {
    console.log("error-->", error);
    res.status(500).send(`ocurrio un error ${error}`);
  }
});

module.exports = router;
