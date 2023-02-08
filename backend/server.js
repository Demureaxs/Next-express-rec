require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const employerRoutes = require('./routes/employerRoutes');
const candidateRoutes = require('./routes/candidateRoutes');
// const session = require('express-session');
// const MongoStore = require('connect-mongo')(session);

if (!process.env.MONGODB_URI) {
  throw new Error('Mongo is crappy');
}

mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('Mongodb connected'))
  .catch(err => console.log(err));

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  console.log(req.headers);
  next();
});

app.get('/', (req, res) => {
  res.send('Hello from the recruitment app backend');
});
app.use(express.json());

// app.use(
//   session({
//     secret: process.env.SESSION_SECRET,
//     resave: false,
//     saveUninitialized: false,
//     store: new MongoStore({
//       mongooseConnection: mongoose.connection,
//     }),
//   })
// );

// app.post('/login', (req, res) => {
//   User.findOne({ email: req.body.email }, (err, user) => {
//     if (err) {
//       return res.status(500).send(err);
//     }
//     if (!user) {
//       return res.status(404).send({ message: 'User not found' });
//     }
//     if (!user.validPassword(req.body.password)) {
//       return res.status(401).send({ message: 'Invalid password' });
//     }
//     req.session.user = user;
//     return res.status(200).send({ message: 'Login successful' });
//   });
// });

// app.use((req, res, next) => {
//   if (!req.session.user) {
//     return res.status(401).send({ message: 'Unauthorized' });
//   }
//   next();
// });

app.use('/api/v1/employers', employerRoutes);
app.use('/api/v1/candidates', candidateRoutes);

app.use(express.static(`${__dirname}/next-app/build`));

app.get('*', (req, res) => {
  res.sendFile(path.join(`${__dirname}, next-app.build/index.html`));
});

const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
