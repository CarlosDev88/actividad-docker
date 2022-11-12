const { Router } = require("express");
const Universidad = require("../models/Universidad");

const router = Router();

router.post("/", async (req, res) => {
  try {
    let universidad = new Universidad();
    universidad.nombre = req.body.nombre;
    universidad.direccion = req.body.direccion;
    universidad.telefono = req.body.telefono;
    universidad.fechaCreacion = new Date();
    universidad.fechaActualizacion = new Date();

    universidad = await universidad.save();
    res.send(universidad);
  } catch (error) {
    console.log("error-->", error);
    res.send("ocurrio un error");
  }
});

router.get("/", async (req, res) => {
  try {
    const universidad = await Universidad.find();
    res.send(universidad);
  } catch (error) {
    console.log("error-->", error);
    res.send("ocurrio un error");
  }
});

router.put("/:universidadId", async (req, res) => {
  try {
    let universidad = await Universidad.findById(req.params.universidadId);

    if (!universidad) {
      return res.send(`La universidad no existe`);
    }

    universidad.nombre = req.body.nombre;
    universidad.direccion = req.body.direccion;
    universidad.telefono = req.body.telefono;
    universidad.fechaActualizacion = new Date();

    universidad = await universidad.save();
    res.send(universidad);
  } catch (error) {
    console.log("error-->", error);
    res.send("ocurrio un error");
  }
});

router.get("/:universidadId", async (req, res) => {
  try {
    let universidad = await Universidad.findById(req.params.universidadId);

    if (!universidad) {
      return res.status(400).send("Universidad no existe");
    }

    res.send(universidad);
  } catch (error) {
    console.log("error-->", error);
    res.status(500).send(`ocurrio un error ${error}`);
  }
});

module.exports = router;
