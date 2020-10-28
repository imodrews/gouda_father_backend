const express = require("express");
const client = require("../../client");
const authorsRouter = express.Router();

authorsRouter.get("/", (req, res, next) => {
	client
		.query("SELECT * FROM authors")
		.then((data) => res.json(data.rows))
		.catch((err) => console.log(err));
});

authorsRouter.get("/:slug", (req, res, next) => {
	const { slug } = req.params;
	client
		.query("SELECT * FROM authors WHERE slug=$1", [slug])
		.then((data) => res.json(data.rows))
		.catch((err) => console.log(err));
});

authorsRouter.post("/", (req, res) => {
	const {
		name,
		slug,
		title,
		shortBio,
		email,
		linkedIn,
		github,
		imageurl,
	} = req.body;
	const text =
		"INSERT INTO authors(name, slug, title, shortBio, email, linkedIn, github, imageurl) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *";
	const values = [
		name,
		slug,
		title,
		shortBio,
		email,
		linkedIn,
		github,
		imageurl,
	];
	client
		.query(text, values)
		.then((data) => res.json(data.rows))
		.catch((err) => console.log(err));
});

authorsRouter.delete("/:slug", (req, res) => {
	const { slug } = req.params;
	client
		.query("DELETE FROM authors WHERE slug=$1 RETURNING *", [slug])
		.then((data) => res.json(data.rows))
		.catch((err) => console.log(err));
});

module.exports = authorsRouter;
