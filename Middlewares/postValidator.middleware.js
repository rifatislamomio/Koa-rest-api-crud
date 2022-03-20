const postValidator = (ctx, next) => {
    const post = ctx.request.body
    if (post && post.body != undefined && post.title != undefined) {
        next();
    }
    else {
        ctx.body = {
            status: 400,
            message: "bad request"
        }
    }
}

module.exports.postValidatorMiddleware = postValidator