function routes(router) {
    router.get('/', function(req, res) {
        res.send('yo');
    });
}

module.exports = {
    configure: routes
}
