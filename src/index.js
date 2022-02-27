const path = require('path');
const express = require('express');
var cookieParser = require('cookie-parser');
const session = require('express-session');
const methodOverride = require('method-override');
const indexRoutes = require('./routes/index-route');
const AdminRoutes = require('./routes/admin-routes');

const PORT = process.env.PORT || 60000;
const env = require('./configs/env');
const { database } = require('./lib');
// express app
const app = express();

// register view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));
app.listen(PORT);
// middleware & static files
app.use(express.static(path.join(__dirname, 'public')));
app.use(methodOverride('_method'));

// app.use((req, res, next) => {
//   res.set('Cache-Control', 'no-cache, private, no-store, must-revalidate, max-stale=0, post-check=0, pre-check=0');
//   next();
// });

app.use((req, res, next) => {
  console.log('new request made:');
  console.log('session', req.session)
  console.log('host: ', req.hostname);
  console.log('path: ', req.path);
  console.log('method: ', req.method);
  console.log('method:', req.body)
  next();
});

app.use((req, res, next) => {
  res.locals.path = req.path;
  next();
});
database.openConnection()
  .then((connection) => {
    console.log('connection Successful');
  })
  .catch((error) => {
    console.log(error);
  });
  app.use(express.urlencoded({ extended: true }));
  app.use(cookieParser());
app.use(session({
  cookie: {
    maxAge: 30 * 86400 * 1000,
    sameSite: true,
    secure: env.environment === 'production',
  },
  name: env.SESSION_NAME,
  resave: false,
  saveUninitialized: true,
  secret: env.SESSION_SECRET,
}));


app.use('/user', indexRoutes);
app.use('/admin', AdminRoutes);
// 404 page
app.use((req, res) => {
  res.status(404).json({ fname: '404', lname: 'Page' });
});
