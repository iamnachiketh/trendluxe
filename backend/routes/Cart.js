const router = require('express').Router();
const Cart = require('../model/Cart');
const Product = require('../model/Product');
const {
    verifyTokenAndAdmin,
    verifyTokenAndAutherization,
    verifyToken
} = require('./verifyToken');

//CREATE
router.post("/add-cart", verifyToken, async (req, res) => {
    try {
        let allProducts = req.body.products;
        let invalidQuantity = [];

        await Promise.all(
            allProducts.map(async (value) => {
                const product = await Product.findById(value.productId);
                if (value.quantity > product.quantity) {
                    invalidQuantity.push({
                        title: product.title,
                        quantityMax: product.quantity,
                    });
                }
            })
        );

        if (invalidQuantity.length === 0) {
            const newCart = new Cart(req.body);
            const savedCart = await newCart.save();
            return res.status(201).json(savedCart);
        } else {
            return res.status(406).json({
                message: "Some products have invalid quantities.",
                invalidProducts: invalidQuantity,
            });
        }
    } catch (error) {
        res.status(500).json(error.message);
    }
});


//UPDATE
router.put("/update-cart/:id", verifyTokenAndAutherization, async (req, res) => {
    try {
        const updateCart = await Cart.findByIdAndUpdate(req.params.id, {
            $set: req.body
        }, { new: true })

        res.status(200).json(updateCart);

    } catch (error) {

        res.status(500).json(error.message);
    }
});


//DELETE
router.delete("/delete-cart/:id", verifyTokenAndAutherization, async (req, res) => {
    try {
        await Cart.findByIdAndDelete(req.params.id);

        res.status(200).json("Cart has been deleted");

    } catch (error) {

        res.status(500).json(error.message);

    }
});



// GET CART
router.get("/find-cart/:userid", verifyTokenAndAutherization, async (req, res) => {
    try {

        const cart = await Cart.find({ userId: req.params.userid });

        if (!cart) res.send("Couldn't find any cart with that id!!");

        res.status(200).json(cart);

    } catch (error) {
        res.status(500).json(error.message);
    }
});

//GET ALL CART
router.get("/find-all-cart", verifyTokenAndAutherization, async (req, res) => {
    try {
        const allCart = await Cart.find().sort({ userId: -1 });
        res.status(200).json(allCart);
    } catch (error) {
        res.status(200).json(error.message);
    }
});

router.get("/total-item-quantity", verifyToken, async (req, res) => {
    try {

        let cart = await Cart.findById({ _id: "6756d03a076f83d5cf969389" });
        let totalQuantity = cart.products.reduce((acc, curr) => {
            acc += curr.quantity;
            return acc;
        }, 0);

        res.status(200).json({ totalQuantity });

    } catch (error) {
        res.status(500).json(error.message);
    }
})

module.exports = router;