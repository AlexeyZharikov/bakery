const adminUserModel = require("../../../models").adminUserModel

const deleteUser = (req, res) => {
  const {id} = req.query;
  return adminUserModel.
  findByIdAndDelete(id)
  .then(() => res.status(200).json('Deleted'))
  .catch((err) => res.status(500).json(err));
}

module.exports = deleteUser;