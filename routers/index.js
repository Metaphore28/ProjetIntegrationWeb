const express = require("express");
const router = express.Router();
const Products = require("../models/products")


//ajout des config d'authentification globale
router.get("/", (requete, reponse) => {
    Products.find({}, (err, allProducts) => {
        if (err) throw err
        reponse.render("login", {
            allProducts: allProducts, 
        })
    })
}); 
router.get("/index", (requete, reponse) => {
    Products.find({}, (err, allProducts) => {
        if (err) throw err
        reponse.render("login", {
            allProducts: allProducts, 
        })
    })
});
router.get("/index.html", (requete, reponse) => {
    Products.find({}, (err, allProducts) => {
        if (err) throw err
        reponse.render("login", {
            allProducts: allProducts, 
        })
    })
});





module.exports = router;