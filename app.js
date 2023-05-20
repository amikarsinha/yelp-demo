const express = require( 'express');
const cors = require('cors');

const User = require('./routes/User')
const Review = require('./routes/Review')
const Category = require('./routes/Category')
const Restaurant = require('./routes/Restaurant')
const RestaurantCategory = require('./routes/RestaurantCategory')


const app = express();

app.use(express.json({limit:'5mb'}));
app.use(cors());

app.use('/', User);
app.use('/', Category);
app.use('/', Restaurant);
app.use('/', RestaurantCategory);
app.use('/', Review);


app.listen(8080, () => {
    console.log("Server started on port 8080");
})
