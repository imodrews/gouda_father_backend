const express = require("express");
const app = express();


// Routers

const authorsRouter = require("./Routers/Authors/authorsRouter");
app.use("/api/authors", authorsRouter);

const recipesRouter = require("./Routers/Recipes/recipesRouter");
app.use("/api/recipes", recipesRouter);



// Build server

app.set("port", process.env.port || 3000);

app.get("/", (req, res, next) => {
	res.send("<h1>Hello world<h1>");
});

// Start server

app.listen(app.get("port"), (server) => {
	console.info(`Server listen on port ${app.get("port")}`);
});
