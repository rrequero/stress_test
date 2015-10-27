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
    users.push(this.request.body);
    this.body = this.request.body;
});
app.use(router.middleware());
app.listen(3000);
