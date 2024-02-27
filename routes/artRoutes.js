const express = require('express');
const artController = require('../controllers/artController');

const router = express.Router();

router.route('/art/')
  .get(artController.getAll)
  .post(artController.create);

router
  .route('/art/:id')
  .get(artController.get)
  .patch(artController.update)
  .delete(artController.delete);

module.exports = router;
