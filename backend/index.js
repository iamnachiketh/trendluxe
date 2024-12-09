const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const authRouter = require('./routes/auth');
const userRouter = require('./routes/Users');
const productsRouter = require('./routes/Products');
const cartRouter = require('./routes/Cart');
const orderRouter = require('./routes/Orders');

const app = express();
dotenv.config();

mongoose.connect(process.env.MOGODB_URL)
    .then(() => console.log("DB Connected"))
    .catch((error) => console.log(error.message))

app.use(express.json());

app.use("/api/auth",authRouter);
app.use("/api/user",userRouter);
app.use("/api/products",productsRouter);
app.use("/api/cart",cartRouter);
app.use("/api/orders",orderRouter);


app.listen(process.env.PORT || 3000, () => console.log(`listening at port ${process.env.PORT}`));