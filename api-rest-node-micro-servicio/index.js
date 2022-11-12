const xpress = require("express");
const { getConnection } = require("./db/db-connection-mongo");
const cors = require("cors");
require("dotenv").config();

const app = xpress();
const port = process.env.PORT || 4000;

//implementation cors
app.use(cors());

getConnection();

//implementation json
app.use(xpress.json());

app.use("/proyecto", require("./router/Proyecto"));

app.listen(port, () => console.log(`server runing... on port: ${port}`));
