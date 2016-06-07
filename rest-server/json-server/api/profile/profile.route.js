var router = require('express').Router();

router.get('/',function(req, res) {
  res.json({name:'Bhanwar', id:111});
});

module.exports = router;
