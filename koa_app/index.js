var koa = require('koa');
var bodyParser = require('koa-body-parser');

var Router = require('koa-router');

var app = koa();

app.use(bodyParser());

var users = [{
            name:'Ra',
            job:'Developer'
          }, {
            name: 'Pepe',
            job: 'Backend Developer'
          }, {
            name: 'Juan',
            job: 'Designer'
          }];
var router = new Router();
router.get('/api/users', function * () {
    this.body = users;
});

router.post('/api/users', function * () {
  var user = JSON.parse(this.request.body);
    users.push(user);
    this.body = user;
});
app.use(router.middleware());
app.listen(3000);
