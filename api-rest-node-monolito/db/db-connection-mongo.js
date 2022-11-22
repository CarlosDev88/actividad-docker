const mongoose = require("mongoose");

const getConnection = async () => {
  try {
    const URL = "mongodb://proyectos-database:27017/proyectos";
    await mongoose.connect(URL);

    console.log("--> conexion exitosa");
  } catch (error) {
    console.log("error-->", error);
  }
};

module.exports = {
  getConnection,
};
