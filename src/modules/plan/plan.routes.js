const planController = require("./plan.controller");

const router = require("express").Router();

router.get("/", planController.getPlan);
router.post("/", planController.createPlan);
router.delete("/:id", planController.removePlan);

module.exports = {
    PlanRoutes: router
}