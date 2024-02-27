const Art = require('../models/artModel');

exports.getAll = async (req, res) => {
  try {
    //exequting query
    const arts = await Art.find({});

    //send response
    res.status(200).json({
      status: 'success',
      results: arts.length,
      data: {
        arts,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err,
    });
  }
};
exports.get = async (req, res) => {
  try {
    const art = await Art.find({name: req.params.name});

    res.status(200).json({
      status: 'success',
      data: {
        art,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err,
    });
  }
};

exports.create = async (req, res) => {
  try {
    const newart = await Art.create(req.body);

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

exports.update = async (req, res) => {
  try {
    const updatedart = await Art.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    res.status(200).json({
      status: 'succes',
      data: {
        tour: updatedart,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err,
    });
  }
};

exports.delete = async (req, res) => {
  try {
    await Art.findByIdAndDelete(req.params.id);

    res.status(204).json({
      status: 'success',
      data: null,
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: 'Invalid id sent!',
    });
  }
};