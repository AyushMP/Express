let posts = [
    {id: 1, title: 'post one'},
    {id: 2, title: 'post two'},
    {id: 3, title: 'post three'},
];

//@desc Get all posts
// @route GET /api/posts
export const getPosts = (req, res, next) => {
    const limit = parseInt(req.query.limit);

    if (!isNaN(limit) && limit > 0){
        res.status(200).json(posts.slice(0, limit));
    }  
    // console.log(req.query)
    res.status(200).json(posts);
};

//@desc Get single post
//@route /api/posts
export const getPost = (req, res, next) => {
    // console.log(req.params.id);
    const id = parseInt(req.params.id);
    const post = posts.find((post) => post.id === id);
    // res.status(200).json(posts.filter((post) => post.id === id));
    if(!post){
        const error = new Error( `A post with the id of ${id} was not found`)
        error.status = 404;
        return next(error);
    }
    res.status(200).json(post);
};

//@desc Create new post
//@route POST /api/posts
export const createPost = (req, res, next) => {
    // console.log(req.body);
    const newPost = {
        id: posts.length + 1,
        title: req.body.title
    };
    
    if(!newPost.title){
        const error = new Error( `Please Include a title`)
        error.status = 400;
        return next(error);
    }
    
    posts.push(newPost);
    res.status(201).json(posts);
};


//@desc Update new post
//@route PUT /api/posts/:id
export const updatePost = (req, res, next) => {
    const id = parseInt(req.params.id);
    const post = posts.find((post) => post.id ===id);

    if(!post){
        const error = new Error( `A post with the id of ${id} was not found`)
        error.status = 404;
        return next(error);
    }

    post.title = req.body.title;
    res.status(200).json(posts);
};


//@desc Delete post
//@route DELETE /api/posts/:id
export const deletePost = (req, res, next) => {
    const id = parseInt(req.params.id);
    const post = posts.find((post) => post.id ===id);

    if(!post){
        return res
        .status(404)
        .json({ msg: `A post with the id of ${id} was not found`});
    }

    posts = posts.filter((post) => post.id !== id);
    res.status(200).json(posts);
};