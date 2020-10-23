const express = require("express");
const recipesRouter = express.Router();

const recipes = [
{
    id: 1,
    slug: 'brie mine',
    title: 'Brie Mine',
    shortDescription: 'To brie or not to brie, that is the question. ',
    quickFacts: 'short text, list',
    ingredients: 'short text, list',
    description: 'rich text',
    author: 'reference',
    featureImage: 'media',
    tags: 'short text',
},
{
    id: 2,
    slug: 'macncheese',
    title: 'Mac n Cheese',
    shortDescription: 'Cheesy puns mac me so happy. ',
    quickFacts: 'short text, list',
    ingredients: 'short text, list',
    description: 'rich text',
    author: 'reference',
    featureImage: 'media',
    tags: 'short text',
},
{
    id: 3,
    slug: 'nachoaveragenacho',
    title: 'Nacho Average Nacho',
    shortDescription: 'How to tell when someone is nacho friend.',
    quickFacts: 'short text, list',
    ingredients: 'short text, list',
    description: 'rich text',
    author: 'reference',
    featureImage: 'media',
    tags: 'short text',
},
];

recipesRouter.get("/", (req, res, next) => {
	res.send(recipes);
});

recipesRouter.get("/:slug", (req, res, next) => {
	const actualRecipe = recipes.find(
		(recipe) => recipe.slug === req.params.slug
	);
	if (actualRecipe) {
		res.status(200).send(actualRecipe);
	} else {
		res.status(404).send("You're wrong, gurl!");
	}
});

module.exports = recipesRouter;
