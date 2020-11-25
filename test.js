require('./data/db')();
const userDao = require('./daos/user.dao.server');

userDao.createUser({username: 'spiderman', password: 'auntmay'})
.then(u => console.log(u))
.catch(err => console.log(err))

userDao.findAllUsers().then(users => {
  console.log(users);
  userDao.findUserById('5fbbcc8cfeed39462c1521d9')
  .then(u => console.log(u))
});

