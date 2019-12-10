module.exports = function (app) {
  app.use('/api/todos', require('./api/todo'));
}