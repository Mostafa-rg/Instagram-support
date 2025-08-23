/**
 * @swagger
 * tags:
 *  name: Plan
 *  description: define plans for users
 */

/**
 * @swagger
 *  components:
 *      schemas:
 *          createPlan:
 *              type: object
 *              required:
 *                  -   title
 *                  -   duration
 *                  -   price
 *              properties:
 *                  title:
 *                      type: string
 *                  duration:
 *                      type: number
 *                  price:
 *                      type: number
 *                  isActive:
 *                      type: boolean
 *                      default: true
 */

/**
 * @swagger
 *  /plan:
 *      post:
 *          summary: create plan by admin
 *          tags:
 *              -   Plan
 *          requestBody:
 *              content:
 *                  application/x-www-form-urlencoded:
 *                      schema: 
 *                          $ref: "#/components/schemas/createPlan"
 *                  application/json:
 *                      schema: 
 *                          $ref: "#/components/schemas/createPlan"
 *          responses:
 *              201:
 *                  description: created
 *  
 */

/**
 * @swagger
 *  /plan:
 *      get:
 *          summary: get plans by admin
 *          tags:
 *              -   Plan
 *          responses:
 *              200:
 *                  description: success
 *  
 */

/**
 * @swagger
 *  /plan/{id}:
 *      delete:
 *          summary: delete plan by id
 *          tags:
 *              -   Plan
 *          parameters:
 *              -   in: path
 *                  name: id
 *                  type: string
 *          responses:
 *              200:
 *                  description: deleted successfuly
 *  
 */