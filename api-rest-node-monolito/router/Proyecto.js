const { Router } = require("express");
const Proyecto = require("../models/Proyecto");
const router = Router();

router.post("/", async (req, res) => {
  try {
    const existeNumeroProyecto = await Proyecto.findOne({
      numero: req.body.numero,
    });

    if (existeNumeroProyecto) {
      return res.status(400).send("ese numero ya fue asignado a otro proyecto");
    }

    let proyecto = new Proyecto();

    proyecto.numero = req.body.numero;
    proyecto.titulo = req.body.titulo;
    proyecto.fechaIniciacion = req.body.fechaIniciacion;
    proyecto.fechaEntrega = req.body.fechaEntrega;
    proyecto.valor = req.body.valor;
    proyecto.fechaCreacion = new Date();
    proyecto.fechaActualizacion = new Date();
    proyecto.cliente = req.body.cliente._id;
    proyecto.tipoProyecto = req.body.tipoProyecto._id;
    proyecto.universidad = req.body.universidad._id;
    proyecto.etapaProyecto = req.body.etapaProyecto._id;

    proyecto = await proyecto.save();
    res.send(proyecto);
  } catch (error) {
    console.log("error-->", error);
    res.status(500).send("ocurrio un error");
  }
});

router.put("/:proyectoId", async (req, res) => {
  try {
    let proyecto = await Proyecto.findById(req.params.proyectoId);

    if (!proyecto) {
      return res.status(400).send("Proyecto no existe");
    }

    const existeNumeroProyecto = await Proyecto.findOne({
      numero: req.body.numero,
      _id: {
        $ne: proyecto._id,
      },
    });

    if (existeNumeroProyecto) {
      return res.status(400).send("ese numero ya fue asignado a otro proyecto");
    }

    proyecto.numero = req.body.numero;
    proyecto.titulo = req.body.titulo;
    proyecto.fechaIniciacion = req.body.fechaIniciacion;
    proyecto.fechaEntrega = req.body.fechaEntrega;
    proyecto.valor = req.body.valor;
    proyecto.cliente = req.body.cliente._id;
    proyecto.tipoProyecto = req.body.tipoProyecto._id;
    proyecto.universidad = req.body.universidad._id;
    proyecto.etapaProyecto = req.body.etapaProyecto._id;
    proyecto.fechaActualizacion = new Date();

    proyecto = await proyecto.save();
    res.send(proyecto);
  } catch (error) {
    console.log("error-->", error);
    res.status(500).send("ocurrio un error");
  }
});

module.exports = router;
