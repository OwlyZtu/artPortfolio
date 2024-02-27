const express = require('express');
const viewsController = require('../controllers/viewsController');

const router = express.Router();

router.route('/').get(viewsController.getMainPage);
router.route('/allarts').get(viewsController.getAll);
router
  .route('/createArt')
  .get(viewsController.createPage)
  .post(viewsController.submitArt);
// router.route('/submitArt').get(viewsController.submitArt);
router.route('/:name').get(viewsController.getArt);

// router.route('/links').get(viewsController.getLinks);

module.exports = router;
