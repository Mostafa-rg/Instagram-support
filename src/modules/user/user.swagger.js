/**
 * @swagger
 * 
 * tags:
 *  name: User
 *  description: User modules and routes
 */

/**
 * @swagger
 * components:
 *  schemas:
 *      getUser:
 *          type: object
 *          required:
 *              -   username
 *              -   password
 *          properties:
 *              username:
 *                  type: string
 *              password:
 *                  type: string
 *      editUser:
 *          type: object
 *          properties:
 *              username:
 *                  type: string
 *              password:
 *                  type: string
 *              fullName:
 *                  type: string
 *              email:
 *                  type: string
 *              phone:
 *                  type: string
 */
/**
 * @swagger
 * /user/whoami:
 *  get:
 *      summary: get user profile
 *      tags:
 *          -   User

 *      responses:
 *          200:
 *              description: success
 */
/**
 * @swagger
 * /user/edit-profile:
 *  patch:
 *      summary: edit user profile
 *      tags:
 *          -   User
 *      requestBody:
 *          content:
 *              application/x-www-form-urlencoded:
 *                  schema:
 *                      $ref: "#/components/schemas/editUser"
 *              application/json:
 *                  schema:
 *                      $ref: "#/components/schemas/editUser"
 *      responses:
 *          200:
 *              description: success
 */