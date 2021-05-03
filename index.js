/**
 * const  books = [
 * {
 *   name: "Ramayana",
 *   author: Valmiki , 
 *   dateofcreation : 10000 BC Before
 * },
 * {
 *    name : 
 * }
 * ]
 * 
 * 
 *  Need of Database
 * 
 * when  the refresh the application your data is gone because it is got in local 
 * storage  to work with the data and manage it effetively we need database.
 */



//create a server using express

const mongoose = require('mongoose');

const express = require('express');
const app = express();

const bodyParser = require('body-parser');
const morgan = require('morgan');


//create a middleware
app.use((req,res,next) => {
    console.log("Hello from the middleware");
    next();
})


app.use((req,res,next) => {
     console.log(new Date().toString());

    next();
})

const bookRoutes = require('./routes/booksRoutes');




//middle --> one to other
app.use('/', bookRoutes);
app.use(bodyParser.json());

//create a custom  middleware using morgan


if(process.env.NODE_ENV === 'development'){
    app.use(morgan('dev'));
    console.log("Hello Middleware!")
}


//create your own middleware








const MONGO_URL = `mongodb+srv://Shivam:i0BWLwYSTtKHBRb6@cluster0.0y5ub.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;

mongoose
    .connect(MONGO_URL, {useUnifiedTopology: true, useNewUrlParser: true})
    .then((client) => {
        console.log(`Connected to DataBase`);
    })
    .catch((error) => console.error(error));




const port  = process.env.port || 3000;



const books = [
    {
        name: 'Ramayana',
        authorName: 'Valmiki',
        DateofCreation: '5194 BC',
        country: 'India'
    },
    {
        name: 'Mahabharat',
        authorName: 'Ved Vyas',
        DateofCreation: '3000 BC',
        country: 'India'
    },
];



app.listen(port , () => {
    console.log(`Server is running on port  ${port}`);
})





