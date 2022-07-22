const express = require("express");
const api = express();
api.use(express.json());
const routes = require("./routes");
api.use(routes);
api.listen(3030);
