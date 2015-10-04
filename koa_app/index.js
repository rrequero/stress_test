var koa = require('koa');
var bodyParser = require('koa-body-parser');

var Router = require('koa-router');

var app = koa();

app.use(bodyParser());

var router = new Router();
router.get('/test/:id/:name', function * () {
    this.body = {
        id: this.params.id,
        name: this.params.name
    };
});
app.use(router.middleware());
app.listen(3000);