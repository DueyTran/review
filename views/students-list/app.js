const express = require("express");
const routes = require("./routes");
const exphbs = require("express-handlebars");

const app = express();

app.engine("handlebars", exphbs.engine());
app.set("view engine", "handlebars");

app.use(routes);

app.listen(3000), () => {
    console.log("Now listening to port 3000");
}

