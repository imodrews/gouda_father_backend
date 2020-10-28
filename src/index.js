require("dotenv").config();

const express = require("express");
const app = express();

const client = require("./client");

const bodyParser = require("body-parser");
app.use(bodyParser.json());

const cors = require("cors");
app.use(cors());

// Routers

const authorsRouter = require("./Routers/Authors/authorsRouter");
app.use("/api/authors", authorsRouter);

const blogPostRouter = require("./Routers/Blog/blogPostRouter");
app.use("/api/blogPost", blogPostRouter);

const recipesRouter = require("./Routers/Recipes/recipesRouter");
app.use("/api/recipes", recipesRouter);

// Build server

app.set("port", process.env.port || 3000);

app.get("/", (req, res) => {
	/* res.send("Hello World"); */
	client
		.query("SELECT NOW()")
		.then((data) => res.send(data.rows[0]))
		.catch((err) => res.sendStatus(500));
});

// Start server

app.listen(app.get("port"), (server) => {
	console.info(`Server listen on port ${app.get("port")}`);
});
