var Todo = require('./todo.model');
var _ = require('lodash');

exports.index = async function (req, res) {
  var page = Number(req.query.page) || 1;
  var limit = Number(req.query.limit) || 10;
  var skip = (page - 1) * limit;

  try {
    var count = await Todo.count();
    var todos = await Todo.find().skip(skip).limit(limit);

    res.status(200).json({
      total: count,
      todos: todos
    });
  } catch (err) {
    res.status(500).send(err);
  }
}

// localhost:3000/api/todos?page=2&limit=3
// req.query page & limit
// localhost:3000/api/todos/128328173812739812
// req.params = 128328173812739812
exports.show = async function (req, res) {
  try {
    var todo = await Todo.findOne({ _id: req.params.id });

    if (!todo) return res.status(404).json({ message: "Todo Tidak Ditemukan" });

    return res.status(200).json(todo);
  } catch (err) {
    res.status(500).send(err);
  }
}

exports.create = async function (req, res) {
  try {
    var todo = await Todo.create(req.body);

    res.status(201).json({ message: "Success Create Todo!", todo: todo });
  } catch (err) {
    res.status(500).send(err);
  }
}

exports.update = async function (req, res) {
  try {
    var todo = await Todo.findOne({ _id: req.params.id });

    if (!todo) return res.status(404).json({ message: "Todo Tidak Ditemukan!" });
    var updated = _.merge(todo, req.body);

    var result = await updated.save();

    res.status(200).json({ message: "Success Updating Todo!", result: result });
  } catch (err) {
    res.status(500).send(err);
  }
}

exports.updateStatus = async function (req, res) {
  try {
    var result = await Todo.update(
      { _id: req.params.id },
      {
        $set: { done: req.body.done, updated: new Date() }
      }
    );

    res.status(200).json({ message: "Success Updating Todo Status", result: result });
  } catch (err) {
    res.status(500).send(err);
  }
}

exports.destroy = async function (req, res) {
  try {
    var todo = await Todo.findOne({ _id: req.params.id });

    if (!todo) return res.status(404).json({ message: "Todo Tidak Ditemukan!" });

    var result = await todo.remove();

    res.status(200).json({ message: "Success Deleting Todo!", result: result });
  } catch (err) {
    res.status(500).send(err);
  }
}