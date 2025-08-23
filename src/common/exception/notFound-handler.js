function notFoundHandler(app) {
    app.use((req, res) => {
        res.json({
            statusCode: 404,
            message: "Page Not Found!"

        });
    })
};

module.exports = {
    notFoundHandler
}