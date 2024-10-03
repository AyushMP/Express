import express from 'express';
const router = express.Router();
import {
    getPosts, 
    getPost, 
    createPost, 
    deletePost, 
    updatePost 
} from '../controllers/postController.js';


//Get all posts
router.get('/', getPosts);

//Get single post
router.get('/:id', getPost);

//Create new post
router.post('/', createPost);

//update Post
router.put('/:id', updatePost);

//Delete Post
router.delete('/:id', deletePost);

export default router;