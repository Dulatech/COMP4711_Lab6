let express = require('express')
const session = require('express-session');
let app = express();
let bodyParser = require('body-parser');
let path = require('path');
let db = require('./util/database');

const expressHbs = require('express-handlebars');
app.engine(
  'hbs',
  expressHbs({
    layoutsDir: 'views/layouts/',
    defaultLayout: 'main-layout',
    extname: 'hbs'
  })
);
app.set('view engine', 'hbs');
app.set('views', 'views');

app.use(bodyParser.urlencoded({
  extended: false
})) 

app.use(session({
  secret: 'ssshhhhh',
  saveUninitialized: true,
  resave: true
}));

app.use(bodyParser.json())

let artistRoutes = require('./routes/artists');

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function (req, res) {
  res.render('login', {
    errorLog: "",
    loginCSS: true
  });
});

app.use(artistRoutes);

app.listen(process.env.PORT || 4000, () => console.log('localhost:4000'))