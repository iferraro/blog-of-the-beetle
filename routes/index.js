var router = require('express').Router();
const passport = require('passport');
const homeCtrl = require("../controllers/home");
const workCtrl = require("../controllers/work");

// The root route renders our only view
router.get('/', function(req, res) {
  res.redirect('/home'); // might change to "/posts"
  // Where do you want to go for the root route
  // in the student demo this was res.redirect('/students'), what do you want? NO "/users", should be main resource of site
});

router.get("/home", homeCtrl.index);
router.post("/home/:id", workCtrl.addRating);

// Google OAuth login route
router.get('/auth/google', passport.authenticate(
  'google',
  { scope: ['profile', 'email'] }
));

// Google OAuth callback route
router.get('/oauth2callback', passport.authenticate(
  'google',
  {
    successRedirect : "/home", // where do you want the client to go after you login 
    failureRedirect : "/home" // where do you want the client to go if login fails
  }
));

// OAuth logout route
router.get('/logout', function(req, res){
  req.logout();
  res.redirect('/home'); // maybe you want to redirect somewhere else
});

module.exports = router;
