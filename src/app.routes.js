const { AuthRoutes } = require("./modules/auth/auth.routes");
const { PaymentRoutes } = require("./modules/payment/payment.routes");
const { PlanRoutes } = require("./modules/plan/plan.routes");
const { SubscriptionRoutes } = require("./modules/subscription/subscription.routes");
const { UserRoutes } = require("./modules/user/user.routes");
const mainRouter = require("express").Router();

mainRouter.use("/user", UserRoutes);
mainRouter.use("/auth", AuthRoutes);
mainRouter.use("/subscription", SubscriptionRoutes);
mainRouter.use("/plan", PlanRoutes);
mainRouter.use("/ApiPayment", PaymentRoutes);


module.exports = mainRouter