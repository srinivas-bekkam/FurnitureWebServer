
module.exports = function (app, db) {
    app.get('/products', function(req, res) {
        db.collection('products').find().toArray((err, result) => {
            if (err) return console.log(err)
            res.send({quotes: result})
          })
    })
    
app.post('/products', (req, res) => {
    console.log(req.body);
    if(Array.isArray(req.body)){
        db.collection("products").insertMany(req.body, function(err, result) {
            if (err) throw err;
            console.log('saved to database')
            res.send(result)                
          });
    }else{
    db.collection('products').save(req.body, (err, result) => {
      if (err) return console.log(err)
      console.log('saved to database')
      res.send(result)
    })
}
  })

   
}