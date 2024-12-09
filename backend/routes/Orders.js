const router = require('express').Router();
const Order = require('../model/Order');
const {
    verifyTokenAndAdmin,
    verifyTokenAndAutherization,
    verifyToken
} = require('./verifyToken');

//CREATE
router.post("/add-order", verifyToken, async (req, res) => {

    try {
        const newOrder = new Order(req.body);
        const savedOrder = await newOrder.save();

        res.status(201).json(savedOrder);

    } catch (error) {

        res.status(500).json(error.message);

    }
});



//UPDATE
router.put("/update-order/:id", verifyTokenAndAdmin, async (req, res) => {
    try {
        const updateOrder = await Order.findByIdAndUpdate(req.params.id, {
            $set: req.body
        }, { new: true })

        res.status(200).json(updateOrder);

    } catch (error) {

        res.status(500).json(error.message);
    }
});


//DELETE
router.delete("/delete-order/:id", verifyTokenAndAdmin, async (req, res) => {
    try {
        await Order.findByIdAndDelete(req.params.id);

        res.status(200).json("Order has been deleted");

    } catch (error) {

        res.status(500).json(error.message);

    }
});



// GET ORDERs
router.get("/find-orders/:userid", verifyTokenAndAutherization, async (req, res) => {
    try {

        const orders = await Order.find({ userId: req.params.userid });

        if (!orders) res.send("Couldn't find any orders with that id!!");

        res.status(200).json(orders);

    } catch (error) {
        res.status(500).json(error.message);
    }
});



//GET ALL CART
router.get("/find-all-orders", verifyTokenAndAutherization, async (req, res) => {
    try {
        const allOrder = await Order.find().sort({ userId: -1 });
        res.status(200).json(allOrder);
    } catch (error) {
        res.status(200).json(error.message);
    }
});

// GET MONTHLY INCOME
router.get("/income", verifyTokenAndAdmin, async (req, res) => {

    const date = new Date();
    const lastMonth = new Date(date.setMonth(date.getMonth() - 1));
    const previousMonth = new Date(new Date().setMonth(lastMonth.getMonth() - 1));

    try {
        const income = await Order.aggregate([
            { $match: { createdAt: { $gte: previousMonth } } },
            {
                $project: {
                    month: { $month: "$createdAt" },
                    sales: "$amount",
                },
            },
            {
                $group: {
                    _id: "$month",
                    total: { $sum: "$sales" },
                },
            },
        ]);
        res.status(200).json(income);
    } catch (err) {
        res.status(500).json(err);
    }
})

module.exports = router;