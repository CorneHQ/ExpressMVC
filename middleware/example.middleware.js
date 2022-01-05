module.exports = (req, res, next) => {
  console.log(`Incoming request: ${req.originalUrl} (${req.method})`);
  next();
};
