const User = require('../models/userModel');

exports.getLoginPage = async (req, res) => {
  try {
    res.status(200).render('login');
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err,
    });
  }
};
