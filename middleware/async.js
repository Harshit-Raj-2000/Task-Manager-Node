const asyncWrapper = (fn) =>{
    return async (req, res, next) =>{
         try {
             await fn(req, res, next)
         } catch (error) {
             next(error)
         }
    }

}


// to avoid setting try catch in all controllers, we are doing this
// next will pass the error, to another middleware, where we'll deal with it

// there are some npm packages who do this automatically, but we need to understand what happens bts

module.exports = asyncWrapper