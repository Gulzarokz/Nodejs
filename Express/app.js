import express from 'express';

const app = express();

app.get("/api/v1/user/Home", (req, res) => {
    res.send("<h1>Welcome Home page</h1>")
})
app.get("/api/v1/user/About", (req, res) => {
    res.send("<h1>Welcome About page</h1>")

    

})
app.get("/api/v1/user/Profile", (req, res) => {
    res.status(200).json({
        success : true,
        user : {
            id : 1,
            name : "John Doe",
            email : "john@example.com"
        }
    })

})

app.get ("/api/v1/user/products/:productid/comment/:commentid", (req, res) => {
    // const proId = req.params.productid;
    // const commentId = req.params.commentid;
const {productid, commentid} = req.params;

    
    console.log(productid, commentid)

    const product = {
        id : 1,
        name : "Product 1",
        price : 100
    };
    res.status(200).json({
        success : true,
        product : product
    })
     
    
    
})


app.listen(8080, ()=>{
    console.log("Created servers is listening on this port 8080");
    
});