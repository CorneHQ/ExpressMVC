module.exports = {
  connectionString:
    process.env.DB_CONNECTIONSTRING ?? "mongodb://127.0.0.1:27017/default",
  options: {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
};
