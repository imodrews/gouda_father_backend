const express = require("express");
const authorsRouter = express.Router();

const authors = [
	{
		id: 1,
		name: "Martin",
		slug: "martin",
		title: "WebDev",
		shortBio: "short Bio test",
		email: "test",
		linkedIn: "Test",
		github: "test",
		imageurl:
			"https://images.ctfassets.net/d88iaf7z86dj/6F4EJTcQtzDJ3A3jMPoLp0/41e017032776a01a18323220e98f046f/valentin-ancelin-heisenberg-2.jpg.png",
	},
	{
		id: 2,
		name: "Alejandra",
		slug: "alejandra",
		title: "WebDev",
		shortBio: "short Bio test",
		email: "test",
		linkedIn: "Test",
		github: "test",
		imageurl:
			"https://images.ctfassets.net/d88iaf7z86dj/6F4EJTcQtzDJ3A3jMPoLp0/41e017032776a01a18323220e98f046f/valentin-ancelin-heisenberg-2.jpg.png",
	},
	{
		id: 3,
		name: "Imogen",
		slug: "imogen",
		title: "WebDev",
		shortBio: "short Bio test",
		email: "test",
		linkedIn: "Test",
		github: "test",
		imageurl:
			"https://images.ctfassets.net/d88iaf7z86dj/6F4EJTcQtzDJ3A3jMPoLp0/41e017032776a01a18323220e98f046f/valentin-ancelin-heisenberg-2.jpg.png",
	},
];

authorsRouter.get("/", (req, res, next) => {
	res.send(authors);
});

authorsRouter.get("/:slug", (req, res, next) => {
	const actualAuthor = authors.find(
		(author) => author.slug === req.params.slug
	);
	if (actualAuthor) {
		res.status(200).send(actualAuthor);
	} else {
		res.status(404).send("MIEEEEEEEEEEP: WRONG!!!");
	}
});

module.exports = authorsRouter;
