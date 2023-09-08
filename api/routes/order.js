const Order = require("../models/Order");
const router = require("express").Router();
const { verifyTokenAuthorization, verifyTokenAdmin } = require("./verifyToken");

// New order
router.post("/", verifyTokenAuthorization, async (req, res) => {

    const newOrder = new Order(req.body);

    try {
        
        const savedOrder = await newOrder.save();

        res.status(200).json(savedOrder);

    } catch (err) {
        res.status(500).json(err);
    }

});

// Edit or update order
router.put("/:id", verifyTokenAdmin, async (req, res) => {

    try {

        const updateOrder = await Order.findByIdAndUpdate(req.params.id, {
            $set: req.body,
        }, 
        { new: true }
        );

        res.status(200).json(updateOrder);

    } catch(err) {
        res.status(500).json(err);
    }

});

// Delete
router.delete("/:id", verifyTokenAdmin, async (req, res) => {

    try {
        
        await Order.findByIdAndDelete(req.params.id);

        res.status(200).json("Order Deleted!");

    } catch (err) {
        res.status(500).json(err);
    }

});

// Get a user order
router.get("/find/:userId", verifyTokenAuthorization, async (req, res) => {

    try {
        
        const order = await Order.findOne({
            userId: req.params.userId,
        });

        res.status(200).json(order);

    } catch (err) {
        res.status(500).json(err);
    }

});

// Get All Orders
router.get("/", verifyTokenAdmin, async (req, res) => {

    try {
        
        const orders = await Order.find();

        res.status(200).json(orders);

    } catch (err) {
        res.status(500).json(err);
    }

});

// Get monthly income
router.get("/income", verifyTokenAdmin, async (req, res) => {

    const date = new Date();
    const lastMonth = new Date(date.setMonth(date.getMonth() - 1));
    const previousMonth = new Date(new Date().setMonth(lastMonth.getMonth() - 1));

    try {
        
        const income = await Order.aggregate(
            [
                { 
                    $match: { 
                        createdAt: { $gte: previousMonth 
                    }}},
                { 
                    $project: { 
                        month: "$createdAt", 
                        sales: "$amount" 
                    },
                },
                {
                    $group: {
                        _id: "$month",
                        total: {$sum: "$sales"},
                    },
                },
            ],
        );

        res.status(200).json(income);

    } catch (err) {
        res.status(500).json(err);
    }

});

module.exports = router;