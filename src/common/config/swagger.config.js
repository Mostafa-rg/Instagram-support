const swaggerJSDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express")
function swaggerConfig(app){
    const swaggerDocument = swaggerJSDoc({
        swaggerDefinition: {
            openapi: "3.0.1",
            info: {
                title: "instagram-support",
                description: "express project",
                version: "1.0.0"
            },
            components: {
                    securitySchemes: {
                        BearerAuth: {
                            type: "http",
                            scheme: "bearer",
                            bearerFormat: "JWT",
                        }
                    }
                },
            security: [
                {BearerAuth: []}
            ]
        },
        apis: [process.cwd() + "/src/modules/**/*.swagger.js"]
    });
    const swagger = swaggerUi.setup(swaggerDocument, {});
    app.use("/swagger", swaggerUi.serve, swagger);
};
module.exports = swaggerConfig;