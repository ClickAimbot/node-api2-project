const express = require('express');
const Post = require('./posts-model.js');
const router = express.Router();

router.get('/', (req, res) => {
    Post.find()
      .then(posts => {
          res.status(200).json(posts);
      })
      .catch(error => {
          // console.log(error);
          res.status(500).json({message: 'The posts information could not be retrieved',
          error: error.message,
          stack: error.stack,
        });
      })
})
router.get('/:id', async (req, res) => {
    try {
        const post = await Post.findById(req.params.id)
        if (!post) {
            res.status(404).json({message: 'The post with the specified ID does not exist'})
        } else {
            res.json(post)
        }
    }  catch (error) {
            // console.log(error);
            res.status(500).json({message: 'The posts information could not be retrieved',
            error: error.message,
            stack: error.stack,
          });
        }
})
router.post('/', (req, res) => {

})
router.delete('/:id', (req, res) => {

})
router.put('/:id', (req, res) => {

})
router.get('/:id/messages', (req, res) => {

})


module.exports = router;