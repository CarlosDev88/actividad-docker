const { Router } = require("express");
const EtapaProyecto = require("../models/EtapaProyecto");

const router = Router();

router.post("/", async (req, res) => {
  try {
    let etapaProyecto = new EtapaProyecto();
    etapaProyecto.nombre = req.body.nombre;
    etapaProyecto.fechaCreacion = new Date();
    etapaProyecto.fechaActualizacion = new Date();

    etapaProyecto = await etapaProyecto.save();
    res.send(etapaProyecto);
  } catch (error) {
    console.log("error-->", error);
    res.send("ocurrio un error");
  }
});

router.get("/", async (req, res) => {
  try {
    const etapaProyecto = await EtapaProyecto.find();
    res.send(etapaProyecto);
  } catch (error) {
    console.log("error-->", error);
    res.send("ocurrio un error");
  }
});

router.put("/:etapaProyectoId", async (req, res) => {
  try {
    let etapaProyecto = await EtapaProyecto.findById(
      req.params.etapaProyectoId
    );

    if (!etapaProyecto) {
      return res.send(`La etapa del proyecto no existe`);
    }

    etapaProyecto.nombre = req.body.nombre;
    etapaProyecto.fechaActualizacion = new Date();

    etapaProyecto = await etapaProyecto.save();
    res.send(etapaProyecto);
  } catch (error) {
    console.log("error-->", error);
    res.send("ocurrio un error");
  }
});

router.get("/:etapaProyectoId", async (req, res) => {
  try {
    let etapaProyecto = await EtapaProyecto.findById(
      req.params.etapaProyectoId
    );

    if (!etapaProyecto) {
      return res.status(400).send("Etapa del proyecto no existe");
    }

    res.send(etapaProyecto);
  } catch (error) {
    console.log("error-->", error);
    res.status(500).send(`ocurrio un error ${error}`);
  }
});

module.exports = router;
