var express = require("express");
var path = require("path");
var htmlRouter = require("./routing/htmlRoutes");
var apiRouter = require("./routing/apiRoutes");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3030;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/",htmlRouter);
app.use("/api",apiRouter);

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});
