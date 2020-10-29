const express = require("express");
const client = require("../../client");
const recipesRouter = express.Router();

recipesRouter.get("/", (req, res, next) => {
	client
		.query("SELECT * FROM recipes")
		.then((data) => res.json(data.rows))
		.catch((err) => console.log(err));
});

recipesRouter.get("/:slug", (req, res, next) => {
	const { slug } = req.params;
	client
		.query("SELECT * FROM recipes WHERE slug=$1", [slug])
		.then((data) => res.json(data.rows))
		.catch((err) => console.log(err));
});

recipesRouter.post("/", (req, res) => {
	const {
		slug, 
		title, 
		shortDescription, 
		quickFacts, 
		ingredients, 
		description, 
		author, 
		imageURL, 
		tags,
	} = req.body;
	const text =
		"INSERT INTO authors(slug, title, shortDescription, quickFacts, ingredients, description, author, imageURL, tags) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *";
	const values = [
		slug, 
		title, 
		shortDescription, 
		quickFacts, 
		ingredients, 
		description, 
		author, 
		imageURL, 
		tags,
	];
	client
		.query(text, values)
		.then((data) => res.json(data.rows))
		.catch((err) => console.log(err));
});

recipesRouter.delete("/:slug", (req, res) => {
	const { slug } = req.params;
	client
		.query("DELETE FROM authors WHERE slug=$1 RETURNING *", [slug])
		.then((data) => res.json(data.rows))
		.catch((err) => console.log(err));
});

module.exports = recipesRouter;
