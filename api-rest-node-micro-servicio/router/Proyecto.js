const { Router } = require("express");
const Proyecto = require("../models/Proyecto");
const Cliente = require("../models/Cliente");
const EtapaProyecto = require("../models/EtapaProyecto");
const TipoProyecto = require("../models/TipoProyecto");
const Universidad = require("../models/Universidad");

const router = Router();

router.get("/", async (req, res) => {
  try {
    const proyectos = await Proyecto.find().populate([
      {
        path: "cliente",
        select: "nombre email",
      },
      {
        path: "universidad",
        select: "nombre direccion telefono",
      },
      {
        path: "tipoProyecto",
        select: "nombre",
      },
      {
        path: "etapaProyecto",
        select: "nombre",
      },
    ]);
    res.send(proyectos);
  } catch (error) {
    console.log("error-->", error);
    res.status(500).send("ocurrio un error");
  }
});

router.get("/:proyectoId", async (req, res) => {
  try {
    let proyecto = await Proyecto.findById(req.params.proyectoId);

    if (!proyecto) {
      return res.status(400).send("Proyecto no existe");
    }

    res.send(proyecto);
  } catch (error) {
    console.log("error-->", error);
    res.status(500).send(`ocurrio un error ${error}`);
  }
});

module.exports = router;
