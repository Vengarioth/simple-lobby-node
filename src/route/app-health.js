module.exports = (router, version) => {
    router.get('/health', (req, res) => {
        res.json({
            health: 'ok',
            version: version
        });
    });
};
