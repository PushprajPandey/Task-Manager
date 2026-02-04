export const errorHandler = (err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  
  const response = {
    success: false,
    message: err.message || 'Server Error',
  };

  if (process.env.NODE_ENV === 'development') {
    response.stack = err.stack;
  }

  if (err.name === 'ValidationError') {
    response.message = Object.values(err.errors)
      .map(error => error.message)
      .join(', ');
  }

  if (err.code === 11000) {
    const field = Object.keys(err.keyPattern)[0];
    response.message = `${field.charAt(0).toUpperCase() + field.slice(1)} already exists`;
  }

  console.error(`[ERROR] ${new Date().toISOString()} - ${err.message}`);
  
  res.status(statusCode).json(response);
};

export const notFound = (req, res, next) => {
  const error = new Error(`Route not found - ${req.originalUrl}`);
  res.status(404);
  next(error);
};
