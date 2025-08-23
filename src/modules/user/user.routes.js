const Authorization = require("../../common/guard/Authorization.guard");
const userController = require("./user.controller");

const router = require("express").Router();

router.get("/whoami", Authorization ,userController.whoami);
router.patch("/edit-profile", Authorization ,userController.editProfile);

module.exports = {
    UserRoutes: router
}
