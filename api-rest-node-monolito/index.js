const xpress = require("express");
const { getConnection } = require("./db/db-connection-mongo");
const cors = require("cors");
require("dotenv").config();

const app = xpress();
const port = process.env.PORT || 9000;

//implementation cors
app.use(cors());

getConnection();

//implementation json
app.use(xpress.json());

//Rutas Proyectos
app.use("/tipo-proyecto", require("./router/TipoProyecto"));
app.use("/cliente", require("./router/Cliente"));
app.use("/universidad", require("./router/Universidad"));
app.use("/etapa-proyecto", require("./router/EtapaProyecto"));
app.use("/proyecto", require("./router/Proyecto"));

app.listen(port, () => console.log(`server runing... on port: ${port}`));
