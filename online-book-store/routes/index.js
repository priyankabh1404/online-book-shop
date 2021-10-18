// var express = require('express');
// var router = express.Router();

// /* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Online-Book-Store' });
// });

// module.exports = router;

//  create routes
const express = require("express");
const app = express();
const bookRoute = express.Router(); // this module is very important
let Book = require("../models/book");

// add book for store
bookRoute.route('/add-book').post((req, res, next)=>{
    Book.create(req.body,(error,data) => {
      if(error){
        
        return next(error)
    }else{
        res.json(data)
    }
    });
});

//get all books from store
bookRoute.route('/getAllBooks').get((req,res) => {
    Book.find((error,data) => {
        if(error){
            return next (error)
        }else{
            res.json(data)
        }
    });
});

//get book by id
bookRoute.route('/read-book/:id').get((req,res) =>{
    Book.findById(req.params.id,(error,data) => {
        if(error){
            return next(error)
        }else{
            res.json(data)
        }
    });
});

//update book store
bookRoute.route('/update-book/:id').put((req,res) =>{
        Book.findByIdAndUpdate(req.params.id,{
        $set : req.body
    },(error,data) => {
        if(error){
            return next(error)
            console.log(error)
        }else{
            res.json(data)
            console.log('Book Updated Successfully')
        }
    })
})
//delete book store
bookRoute.route('/delete-book/:id').delete((req,res) =>{
    Book.findByIdAndRemove(req.params.id,(error,data) => {
        if(error){
            return next(error)
        }else{
            res.status(200).json({
                msg:data
            })
        }
    })
})

//export module
module.exports = bookRoute;



