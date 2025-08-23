function allExceptionHandler(app) {
    app.use((err, req, res) => {
        let status = err.status || 500 ;
        res.json({
            statusCode: status,
            message: err?.message || "InternalServerError"

        });
    });
};

module.exports = {
    allExceptionHandler
}