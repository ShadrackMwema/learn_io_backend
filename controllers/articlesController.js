const Articles = require('../models/articlesModel');

module.exports = {
    // Create a new article
    async createArticle(req, res) {
        const article = new Articles({
            title: req.body.title,
            body: req.body.body,
            conclusion: req.body.conclusion,
            createdAt: new Date() // Add the current date and time
        });

        try {
            const savedArticle = await article.save();
            res.status(201).json(savedArticle);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }
}

modules.exports = {
    async updateArticle(req, res) {
        try {
            const updatedArticle = await Articles.findByIdAndUpdate(req, res);
            res.status(200).json(updatedArticle);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }
}

modules.exports = {
    async deleteArticle(req, res) {
        try {
            const deletedArticle = await Articles.findByIdAndDelete(req, res);
            res.status(200).json(deletedArticle);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }
}