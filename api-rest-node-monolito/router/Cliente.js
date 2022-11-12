const { Router } = require("express");
const Cliente = require("../models/Cliente");

const router = Router();

router.post("/", async (req, res) => {
  try {
    let cliente = new Cliente();
    cliente.nombre = req.body.nombre;
    cliente.email = req.body.email;
    cliente.fechaCreacion = new Date();
    cliente.fechaActualizacion = new Date();

    cliente = await cliente.save();
    res.send(cliente);
  } catch (error) {
    console.log("error-->", error);
    res.send("ocurrio un error");
  }
});

router.get("/", async (req, res) => {
  try {
    const cliente = await Cliente.find();
    res.send(cliente);
  } catch (error) {
    console.log("error-->", error);
    res.send("ocurrio un error");
  }
});

router.put("/:tipoProyectoId", async (req, res) => {
  try {
    let cliente = await Cliente.findById(req.params.clienteId);

    if (!cliente) {
      return res.send(`El cliente  no existe`);
    }

    cliente.nombre = req.body.nombre;
    cliente.email = req.body.email;
    cliente.fechaActualizacion = new Date();

    cliente = await cliente.save();
    res.send(cliente);
  } catch (error) {
    console.log("error-->", error);
    res.send("ocurrio un error");
  }
});

router.get("/:tipoProyectoId", async (req, res) => {
  try {
    let cliente = await Cliente.findById(req.params.clienteId);

    if (!cliente) {
      return res.status(400).send("Cliente no existe");
    }

    res.send(cliente);
  } catch (error) {
    console.log("error-->", error);
    res.status(500).send(`ocurrio un error ${error}`);
  }
});

module.exports = router;
