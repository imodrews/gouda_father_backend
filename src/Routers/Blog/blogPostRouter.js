const express = require("express");
const { query } = require("express");
const client = require("../../client");
const blogPostRouter = express.Router();


blogPostRouter.get("/", (req, res, next) => {
  client 
    .query("SELECT * FROM blog")
    .then((data) => res.json(data.rows))
    .catch((err) => console.log(err))
});

blogPostRouter.get("/:slug", (req, res, next) => {
  const { slug } = req.params;
  client
    .query("SELECT * FROM blog WHERE slug=$1", [slug])
    .then((data) => res.json(data.rows))
    .catch((err) => console.log(err))
});

blogPostRouter.post("/:slug", (req, res, next) => {
  const {
    title, 
    slug, 
    heroImageUrl, 
    blogEntryImage, 
    author,
    publishdate, 
    blogShortDescription, 
    blogContentRich
  } = req.body;
  const text = "INSERT INTO blog (title, slug, heroImageUrl, blogEntryImage, author, publishDate, blogShortDescription,blogContentRich VALUE($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *";
  const value = [title, 
    slug, 
    heroImageUrl, 
    blogEntryImage, 
    author,
    publishdate, 
    blogShortDescription, 
    blogContentRich];
client
  .query(text, value)
  .then((data) => res.json(data.rows))
  .catch((err) => console.log(err))
})

blogPostRouter.delete("/:slug", (req, res) => {
  const { slug } = req.params;
  client 
    .query("DELETE * FROM blog WHERE slug=$1", [slug])
    .then((data) => data.json(data.rows))
    .catch((err) => console.log(err))

})

module.exports = blogPostRouter;