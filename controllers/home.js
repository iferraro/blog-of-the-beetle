const User = require('../models/user');

module.exports = {
  index
};

function index(req, res) {
    res.render("homepage", {title: "Hello!"});
}