// Galat URL ke liye (koi route match na ho)
const notFound = (req, res, next) => {
  const error = new Error(`Route nahi mila: ${req.method} ${req.originalUrl}`);
  error.status = 404;
  next(error); // error handler ko bhej do
};

// Saare errors yahan aate hain (4 parameters zaroori hain)
const errorHandler = (err, req, res, next) => {
  const status = err.status || 500;

  res.status(status).json({
    message: err.message || "Server me kuch masla aa gaya",
    // stack sirf development me dikhao, production me kabhi nahi
    stack: process.env.NODE_ENV === "production" ? undefined : err.stack,
  });
};

module.exports = { notFound, errorHandler };