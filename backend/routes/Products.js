const router = require('express').Router();
const Product = require('../model/Product');
const { verifyTokenAndAdmin, verifyTokenAndAutherization } = require('./verifyToken');

//CREATE
router.post("/add-product", verifyTokenAndAdmin, async (req, res) => {

    try {
        const newProduct = new Product(req.body);
        const savedProduct = await newProduct.save();

        res.status(201).json(savedProduct);

    } catch (error) {

        res.status(500).json(error.message);

    }
});



//UPDATE
router.put("/update-product/:id", verifyTokenAndAdmin, async (req, res) => {
    try {
        const updateProduct = await Product.findByIdAndUpdate(req.params.id, {
            $set: req.body
        }, { new: true })

        res.status(200).json(updateProduct);

    } catch (error) {

        res.status(500).json(error.message);
    }
});


//DELETE
router.delete("/delete/:id", verifyTokenAndAdmin, async (req, res) => {
    try {
        await Product.findByIdAndDelete(req.params.id);

        res.status(200).json("Product has been deleted");

    } catch (error) {

        res.status(500).json(error.message);

    }
});



// GET PRODUCT
router.get("/find-product/:id", verifyTokenAndAdmin, async (req, res) => {
    try {

        const product = await Product.findById(req.params.id);

        if (!product) res.send("Couldn't find any Product with that id!!");

        res.status(200).json(product);

    } catch (error) {
        res.status(500).json(error.message);
    }
});



//GET ALL PRODUCT
router.get("/find-all-product", async (req, res) => {

    const qNew = req.query.new;
    const qCategories = req.query.category;

    try {
        let products;

        if (qNew) {
            products = await Product.find().limit(5).sort({ createdAt: -1 });
        } else if (qCategories) {
            products = await Product.find({
                categories: {
                    $in: [qCategories]
                }
            });
        } else {
            products = await Product.find();
        }
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json(error.message);
    }
});



module.exports = router;