//mongodb+srv://root:<db_password>@cluster0.oylpsx6.mongodb.net/
const express = require("express");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const authRouter = require("./routes/auth/auth-routes");
const adminProductsRouter = require("./routes/admin/products-routes");
const shopProductsRouter = require("./routes/shop/products-routes");
const shopCartRouter = require("./routes/shop/cart-routes");
const shopAddressRouter = require("./routes/shop/address-routes");
mongoose.connect(
    "mongodb+srv://Bhuvi:rajbhuvi@cluster0.9kwnwso.mongodb.net/"
)
.then(() => 
    console.log("Connected to MongoDB"))
.catch((err) =>
    console.log("Error connecting to MongoDB", err)
);
const app = express();
const   PORT = process.env.PORT || 5000;
app.use(cors({
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type',

         'Authorization',
        'Cache-Control',
        'Expires',
        'Pragma',],
    credentials: true,
}));
app.use(express.json());
app.use(cookieParser());
app.use('/api/auth', authRouter);//this will go to the authroutes and then if you give login it will go to the login controller and then it will go to the model and then it will go to the database and check if the user is present or not
//i.e. if you give /api/auth/login it will go to the login controller and then it will go to the model and then it will go to the database and check if the user is present or not
//this is the path for the auth routes and then it will go to the login controller and then it will go to the model and then it will go to the database and check if the user is present or not
app.use('/api/admin/products',adminProductsRouter );
app.use('/api/shop/products',shopProductsRouter );
app.use('/api/shop/cart',shopCartRouter );
app.use('/api/shop/cart',shopAddressRouter );
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
}  );   






