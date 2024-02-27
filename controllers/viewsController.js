const Art = require('../models/artModel');

exports.getMainPage = async (req, res) => {
  try {
    //exequting query
    //send response
    res.status(200).render('main');
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err,
    });
  }
};

exports.getArt = async (req, res) => {
  try {
    //exequting query

    const art = await Art.find({name: req.params.name});
    //send response
    res.status(200).render('artview', {
      art: art[0]
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err,
    });
  }
};

exports.getAll = async (req, res) => {
  try {
    //exequting query

    const art = await Art.find({});
    //send response
    res.status(200).render('arts', {
      art
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err,
    });
  }
};

exports.createPage = async (req, res) => {
  try {
    //exequting query
    //send response
    res.status(200).render('createArt');
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err,
    });
  }
};

exports.submitArt = async (req, res) => {
  try {
    console.log('MY ART', req.body);
    const newart = await Art.create(req.body);

    //send response
    res.status(201).json({
      status: 'success',
      data: {
        art: newart,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err,
    });
  }
};