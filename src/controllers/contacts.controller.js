// Imports

// Controllers
function signIn(req, res) {
    res.json('signin');
}

function signUp(req, res) {
    res.json('signup');
}

// Exports
module.exports = {signIn, signUp};