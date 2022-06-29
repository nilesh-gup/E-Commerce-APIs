// required field (eg. name) nhi diya for product (eg.)
module.exports = (theFunc) => (req, res, next) => {
  Promise.resolve(theFunc(req, res, next)).catch(next);
}
