const express = require('express');
let morgan = require('morgan');
const mongoose = require('mongoose');
const Blog = require('./models/Blog');
var expressLayouts = require('express-ejs-layouts');

const app = express();

// db url 
let mongoUrl = "mongodb+srv://aungpyaesone:aunglay@cluster0.wjwg7ud.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
mongoose.connect(mongoUrl).then(() => {
    console.log('connected to db');
    app.listen(3000, () => {
        console.log('app is running on port 3000')
    })
}).catch(e => {
    console.log(e);
})

// npm install mongoose 

app.set('views', './views');
app.set('view engine', 'ejs');
app.use(expressLayouts);
app.set('layout', 'layouts/default.ejs');

// custom package 
// let logger = (env) => {
//     return (req, res, next) => {
//         if(env === 'dev') {
//             console.log(`${req.method} ${req.originalUrl} --`)
//         }
//         next();
//     }
// };

// app.use(logger())

app.get('/add-blog',async (req,res) => {
    let blog = new Blog({
        title : "blog title 2",
        intro : "blog intro 2",
        body : "blog body 2"
    });

    await blog.save();
    res.send('blog saved');
})

// get single blog 
app.get('/single-blog', async (req,res) => {
    let blog = await Blog.findById('664d86722a08c6c7eadb8def');
    res.json(blog);
})

// morgan package 
app.use(morgan('dev'));
app.use(express.static('public'))

app.get('/', async (req, res) => {

    let blogs = await Blog.find().sort({createdAt : -1});
    console.log(blogs)

    res.render('home', {
        // blogs : blogs 
        blogs,
        title: "Home",
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: "About"
    })
})

app.get('/contact', (req, res) => {
    res.render('contact', {
        title: "Contact"
    })
})

app.get('/blogs/create', (req, res) => {
    res.render('blogs/create', {
        title: "Blog Create"
    })
})

app.use((req, res) => {
    res.status(404).render('404', {
        title: "404 Not Found"
    })
})


