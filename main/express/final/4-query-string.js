const express = require('express');
const app = express();

const { products } = require('../data.js');

//entire json file
/* app.get('/',(req,res)=>{
    res.json(products);
})
 */
app.get('/',(req,res)=>{
    res.send('<h1>Home page</h1><a href="/api/products">Products</a><a href="/api/products/1">Single Product</a>');
})

//selected products from entire dataset
app.get('/api/products',(req,res)=>{
    const newProducts = products.map((product)=>{
        //const {id, name, image} = product;
        return {id: product.id, name:product.name, image:product.image};
    })
    res.json(newProducts);
})

//single product
app.get('/api/products/:productId',(req,res)=>{
    const { productId } = req.params

    //singleProduct returns true or false
    const singleProduct = products.find((product)=>product.id === Number(productId));
    //if product not found
    if(!singleProduct){
        res.status(404).send('<h1>Product not found</h1>')
    }    
    res.json(singleProduct)
})

app.get('/api/products/:productId/reviews/:reviewId',(req,res)=>{
    console.log(req.params);
    res.send('hello')
})

app.get('/api/v1/query',(req,res)=>{
    console.log(req.query);

    //query destructuring
    const { search, limit } = req.query

    let sortedProducts = [...products];//store products json data inside array

    //if search is not empty
    if(search){
        //filtering every items in the array
        sortedProducts = sortedProducts.filter((products)=>{
            return products.name.startsWith(search);
        })
    }

    if(limit){
        sortedProducts = sortedProducts.slice(0,Number(limit))
        //Number(limit) array index
    }
    //console.log(sortedProducts);
    //url example: localhost:5000/api/v1/query?search=a&limit=1

    if(sortedProducts <1){
        return res.send('<h1>No data found</h1>')
    }
    res.status(200).json(sortedProducts)
})

/* 
app.get('/api/v1/query', (req, res) => {
    // console.log(req.query)
    const { search, limit } = req.query
    let sortedProducts = [...products]
  
    if (search) {
      sortedProducts = sortedProducts.filter((product) => {
        return product.name.startsWith(search)
      })
    }
    if (limit) {
      sortedProducts = sortedProducts.slice(0, Number(limit))
    }
    if (sortedProducts.length < 1) {
      // res.status(200).send('no products matched your search');
      return res.status(200).json({ sucess: true, data: [] })
    }
    res.status(200).json(sortedProducts)
  })
 */
app.listen(5000,()=>{
    console.log('server listening to port 5000...')
})