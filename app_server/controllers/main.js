module.exports.index = function(req, res, next) {
  res.render('layout', { title: 'Express' });
};