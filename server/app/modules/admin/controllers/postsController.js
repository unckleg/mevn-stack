const actions = {};

actions.list = (Post) => (req, res, next) => {
    Post
        .find()
        .populate('status')
        .populate('postedBy')
        .exec((error, posts) => {
            if (error) {
                throw error;
            }

            res.json({
                success: true,
                message: '',
                posts: posts
            });
        })
    ;
};

module.exports = actions;