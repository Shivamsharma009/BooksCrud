const bodyParser = require('body-parser');
const express = require('express');

const route = express.Router();



route.use(bodyParser.json());


const book = require('../model/booksModel');




//creating api anf store & fetch using mongodb database


//read data from api to database
route.get('/books', async (req,res) => {
    try{
        const books = await book.find();
        res.json({data : books});
    }catch(err){
        res.status(500).json({errMsg: err.message});
    }
});


route.post('/books', async (req, res) => {
    try {
      let books = new book();
      books.name = req.body.name;
      books.authorName = req.body.authorName;
      books.DateofCreation = req.body.DateofCreation;
      books.country = req.body.country;
      
      await books.save();
      res.json({ message: 'Sucess', books });
    } catch (err) {
      res.status(400).json({ errMsg: err.message });
    }
  });


  route.patch('/books/:id', async(req,res) => {
      try{
          const books = await book.findByIdAndUpdate(req.params.id);
          books.name = req.body.name;
          const resobj = await books.save();
          res.json({message: 'Sucess', data: resobj});
      }catch(err){
        res.status(400).json({errMsg: err.message});
      }
  });



  route.delete('/books/:id', async(req,res) => {
      try{
          const books = await book.findByIdAndDelete(req.params.id);
          res.json({message: 'Sucess', data: books});
      }catch(err){
          res.status(400).json({errMsg: err.message});
      }
  })


module.exports = route;