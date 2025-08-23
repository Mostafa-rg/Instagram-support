const Authorization = require("../../common/guard/Authorization.guard");
const subscriptionController = require("./subscription.controller");

const router = require("express").Router();

router.post("/", subscriptionController.createSubscription);
router.get("/", subscriptionController.getSubscription);
router.post("/buy", Authorization ,subscriptionController.buySubscription);

module.exports = {
    SubscriptionRoutes: router
};