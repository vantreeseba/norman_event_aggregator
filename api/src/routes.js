function routes(router) {
    router.get('/', function(req, res) {
        res.json({'routes':[]});
    });
}

module.exports = {
    configure: routes
}
