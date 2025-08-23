/**
 * @swagger
 * tags:
 *  name: Subscription
 *  description: define subscriptions for users
 */

/**
 * @swagger
 *  components:
 *      schemas:
 *          createSubscription:
 *              type: object
 *              required:
 *                  -   userId
 *              properties:
 *                  userId:
 *                      type: string
 */

/**
 * @swagger
 *  /subscription:
 *      post:
 *          summary: give subscription by admin
 *          tags:
 *              -   Subscription
 *          requestBody:
 *              content:
 *                  application/x-www-form-urlencoded:
 *                      schema: 
 *                          $ref: "#/components/schemas/createSubscription"
 *                  application/json:
 *                      schema: 
 *                          $ref: "#/components/schemas/createSubscription"
 *          responses:
 *              201:
 *                  description: created
 *  
 */

/**
 * @swagger
 *  /subscription:
 *      get:
 *          summary: get subscription by admin
 *          tags:
 *              -   Subscription
 *          responses:
 *              200:
 *                  description: success
 *  
 */

/**
 * @swagger
 *  /subscription/buy:
 *      post:
 *          summary: by subscription by users
 *          tags:
 *              -   Subscription
 *          responses:
 *              201:
 *                  description: bought successfuly
 *  
 */