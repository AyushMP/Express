import express from 'express'
import path from 'path';
import posts from'./routes/posts.js';
const port = process.env.PORT || 8000; 
import logger from './middleware/logger.js'

const app = express();

//Body parser middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));

//Logger middleware
app.use(logger);

// setup static folder
// app.use(express.static(path.join(__dirname,'public')));

//Routes
app.use('/api/posts', posts);

// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, 'public', 'index.html'));
// });

// app.get('/about', (req, res) => {
//     res.sendFile(path.join(__dirname, 'public', 'about.html'));
// });

app.listen(port, () => console.log(`server is running on port ${port}`))