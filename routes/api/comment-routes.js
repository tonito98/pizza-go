const {
    addComment,
    removeComment,
    addReply,
    removeReply
} = require('../../controllers/comment-controller');

const router = require('express').Router();


// /api/comment/<pizzaId>
router.route('/:pizzaId').post(addComment);

// /api/comments/<pizzaId>/<commentId>
router
    .route('/:pizzaId/:commentId')
    .put(addReply)
    .delete(removeComment);

// DELETE route that handles removeReply
router.route('/:pizzaId/:commentId/:replyId').delete(removeReply);

module.exports = router;