const express = require("express");
const sql = require("./db/db.js");
const bodyParser = require("body-parser");

const app = express();

//parse the content type to application/json
app.use(bodyParser.json());

//Parse content type application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended:true}));

//View all products
app.get("/products", (req, res) =>{
    sql.query("SELECT * FROM products", (err, result, field) => {
        if(!err){
            res.send(result);
        }else{
            console.log(err);
        }
    });
});

//Create a product
app.post("/products", (req, res) => {
    let category_id = req.body.category_id;
    let product_name = req.body.product_name;
    let quantity = req.body.quantity;
    let price = req.body.price;

    const data = {category_id, product_name, quantity, price};
    sql.query("INSERT INTO products SET ?", data, (error, field) =>{
        if(!error){
            res.send("Product Added ", );
        }else
        {
            console.log(error);
        }
    });
});

//View a product with the product id
app.get("/products/:product_id", (req, res) => {
    sql.query("SELECT * FROM products WHERE product_id = ?", [req.params.product_id], (error, result) => {
        if(!error){
            res.send(result);
        }else{
            console.log("Failed to retrieve product", error);
        }
    });
});

//Update a product
app.put("/products/:product_id", (req, res) => {
    const data = [req.body.category_id, req.body.product_name, req.body.quantity, req.body.price];
    sql.query("UPDATE products SET category_id=?, product_name=?, quantity=?, price=? WHERE product_id =?",
     [req.params.product_id],
     
     (error, data) => {
        if(!error){
            
            res.send(data);
        }
        else{
            console.log(error);
        }
    });
});

app.delete("/products/:product_id", (req, res) => {
    sql.query("DELETE FROM products WHERE product_id = ?", [req.params.product_id], (error, result) => {
        if(!error){
            res.send("Product is deleted");
        }else {
            console.log(error);
        }
    })
});


const port = process.env.PORT || 4000;
app.listen(port, () =>{
    console.log(`Server is running on port: ${port}`);
})

