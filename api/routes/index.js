var express = require('express');
var router = express.Router();

let configuration = {
  ctaButtonColors: ['warn', 'primary', 'accent'],
  ctaButtonTexts: ['Let\'s Go!', 'Sign Up Now!', 'Start!']
};

router.get('/', function (req, res, next) {
  res.json(configuration);
});

router.post('/set', function (req, res, next) {
  configuration = req.body;
})

module.exports = router;
