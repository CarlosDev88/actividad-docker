const { Schema, model } = require("mongoose");

const EtapaProyectoSchema = Schema({
  nombre: {
    type: String,
    required: true,
    enum: [
      "anteproyecto",
      "entrega parcial 1",
      "entrega parcial 2",
      "entrega final",
    ],
  },
  fechaCreacion: {
    type: Date,
    required: true,
  },
  fechaActualizacion: {
    type: Date,
    required: true,
  },
});

module.exports = model("EtapaProyecto", EtapaProyectoSchema);
