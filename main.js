const express = require("express");
const dotenv = require("dotenv");
const { allExceptionHandler } = require("./src/common/exception/allException-handler");
const { notFoundHandler } = require("./src/common/exception/notFound-handler");
const swaggerConfig = require("./src/common/config/swagger.config");
const mainRouter = require("./src/app.routes");
dotenv.config();
async function main() {
    const app = express();
    const port = process.env.PORT;
    app.use(express.json());
    app.use(express.urlencoded({extended: true}));
    require("./src/common/config/mongoose.config");
    app.use(mainRouter);
    swaggerConfig(app);
    notFoundHandler(app);
    allExceptionHandler(app);
    app.listen(port, ()=> {
        console.log(`server running on port ${port} | http://localhost:${port}`)
    })
};
main();
