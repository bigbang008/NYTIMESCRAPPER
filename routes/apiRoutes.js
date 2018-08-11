
	const router = require('express').Router();
	const articleController = require("../controllers/articleController");

	//GET route: function to return all articles saved in the Articles collection
	router.get("/articles", articleController.findAll);

	//Post Route - > function to add an article to the Articles Collection
	router.post("/article", articleController.create);

	//Delete Article -> function to remove an article from the Article Collection
	router.delete("/article/:id", articleController.delete)


module.exports = router;
