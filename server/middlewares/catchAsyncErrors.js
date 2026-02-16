// Wrapper to catch errors in async controllers
// and send them to Express error middleware

export const catchAsyncErrors = (theFunction) => {

    // Return a middleware function
    return (req, res, next) => {

        // Run the controller as a Promise
        // If error occurs, pass it to next()
        Promise.resolve(theFunction(req, res, next)).catch(next);
    };
};
