

var express = require('express');
var app = express();
const PORT = process.env.PORT || 5000;

app.use(express.static(__dirname + '/public'));

app.get('*', function (req, res) {
    return res.redirect('/');
});

app.listen(PORT, function () {
    console.log(`Listening on ${ PORT }`);
});

// echo "# wockamolegame" >> README.md
// git init
// git add README.md
// git commit -m "first commit"
// git remote add origin https://github.com/Evgen097/wockamolegame.git
//     git push -u origin master

// https://wackamolegame.herokuapp.com/ | https://git.heroku.com/wackamolegame.git
// https://wackamolegame.herokuapp.com/