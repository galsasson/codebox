var express = require('express');
var router = express.Router();

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

/* render a page */
// router.get('/', function(req, res) {
// 	console.log(req.query);

// 	res.render('index', {
// 		title: 'My App!',
// 		age: 33
// 	});
// });

/* get and respond to a post */
// router.post("/", function(req, res) {
// 	console.log(req.query);
//  res.send(req.params.id,200);
// })

router.get("/", function(req, res) {
	console.log(req.query);

	res.render('index', {
		title: 'My App!',
		age: 33
	});
});


/* changing path like /id/12321 */
router.get("/code", function(req, res) {
	console.log(req.query);

	res.render('code', {
		title: 'Code!'
	});
});

router.get("/play", function(req, res) {
	console.log(req.query);

	res.render('play', {
		title: 'Play!'
	});
});

module.exports = router;
