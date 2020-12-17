var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
  res.json({
    ctaButtonColors: ['warn', 'primary', 'accent'],
    ctaButtonTexts: ['Let\'s Go!', 'Sign Up Now!', 'Start!']
  });
});

module.exports = router;
