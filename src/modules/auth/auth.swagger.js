/**
 * @swagger
 * tags:
 *  name: Auth
 *  description: Auth modules and Routes
 */

/**
 * @swagger
 *  components:
 *      schemas:
 *          Register:
 *              type: object
 *              required:
 *                  -   username
 *                  -   password
 *                  -   email
 *              properties:
 *                  username:
 *                      type: string
 *                  password:
 *                      type: string
 *                  email:
 *                      type: string
 *          Login:
 *              type: object
 *              required:
 *                  -   username
 *                  -   password
 *              properties:
 *                  username:
 *                      type: string
 *                  password:
 *                      type: string
 */

/**
 * @swagger
 * /auth/register:
 *  post:
 *      summary: create an acount in website
 *      tags:
 *          -   Auth
 *      requestBody:
 *          content:
 *              application/x-www-form-urlencoded:
 *                  schema:
 *                      $ref: "#/components/schemas/Register"
 *              application/json:
 *                  schema:
 *                      $ref: "#/components/schemas/Register"
 *      responses:
 *          201:
 *              description: created
 */

/**
 * @swagger
 * /auth/login:
 *  post:
 *      summary: login in your account
 *      tags:
 *          -   Auth
 *      requestBody:
 *          content:
 *              application/x-www-form-urlencoded:
 *                  schema:
 *                      $ref: "#/components/schemas/Login"
 *              application/json:
 *                  schema:
 *                      $ref: "#/components/schemas/Login"
 *      responses:
 *          200:
 *              description: success
 */