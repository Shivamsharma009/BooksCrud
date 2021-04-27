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

const bookRoutes = require('./routes/booksRoutes');



//middle --> one to other
app.use('/', bookRoutes);
app.use(bodyParser.json());



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

//read data
// app.get('/', (req,res) => {
//     res.send(`<h1>Hello from the Server!</h1>`);
// })






//locally test
// app.get('/books', (req,res) => {
//     res.json({data : books});
// })



// //create date
// app.post('/books', (req,res) => {
//     books.push(req.body);
//     console.log(req.body);
//     res.json({message: 'Sucess', data: books});
// })



app.listen(port , () => {
    console.log(`Server is running on port  ${port}`);
})





