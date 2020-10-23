const express = require("express");
const blogPostRouter = express.Router();

const blogPost = [
  { 
    id: 1,
    title: "Cheese Wars: the Return of the Cheddar",
    slug: "cheeseWars",
    heroImage: "https://images.ctfassets.net/d88iaf7z86dj/6F4EJTcQtzDJ3A3jMPoLp0/41e017032776a01a18323220e98f046f/valentin-ancelin-heisenberg-2.jpg.png",
    blogEntryImage: "https://images.ctfassets.net/d88iaf7z86dj/6F4EJTcQtzDJ3A3jMPoLp0/41e017032776a01a18323220e98f046f/valentin-ancelin-heisenberg-2.jpg.png",
    author: "Alejandra",
    publishDate: 2020-10-04,
    blogShortdDescription: "test",
  }, 
  { 
    id: 1,
    title: "Blue Cheese and the Cuckoo's Nest",
    slug: "blueCheese",
    heroImage: "https://images.ctfassets.net/d88iaf7z86dj/6F4EJTcQtzDJ3A3jMPoLp0/41e017032776a01a18323220e98f046f/valentin-ancelin-heisenberg-2.jpg.png",
    blogEntryImage: "test",
    author: "Imogen",
    publishDate: 2020-10-20,
    blogShortdDescription: "test",
  },
  { 
    id: 1,
    title: "Requiem for a Gruyere",
    slug: "requiemGruyere",
    heroImage: "https://images.ctfassets.net/d88iaf7z86dj/6F4EJTcQtzDJ3A3jMPoLp0/41e017032776a01a18323220e98f046f/valentin-ancelin-heisenberg-2.jpg.png",
    blogEntryImage: "test",
    author: "Martin",
    publishDate: 2020-10-15,
    blogShortdDescription: "tests",
  } 

]
blogPostRouter.get("/", (req, res, next) => {
	res.send(blogPost);
});

blogPostRouter.get("/:slug", (req, res, next) => {
  const currentBlog = blogPost.find(
    (blog) => blog.slug === req.params.slug);
    if (currentBlog) {
      res.status(200).send(currentBlog);
  } else {res.status(400).send("MIEEEEEEEEEEP: WRONG!!!")}
	
});


module.exports = blogPostRouter;