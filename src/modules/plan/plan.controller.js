const autoBind = require("auto-bind");
const planService = require("./plan.service");
const { planValidationSchema } = require("../../common/validation/auth.validation");

class PlanController{
    #service
    constructor(){
        autoBind(this);
        this.#service = planService;
    }
    async getPlan(req, res, next){
        try {
            const plans = await this.#service.getPlan();
            return res.json({
                plans
            })
        } catch (error) {
            next(error)
        }
    };
    async createPlan(req, res, next){
        try {
            await planValidationSchema.validateAsync(req.body)
            const {title, duration, price, isActive} = req.body;
            await this.#service.createPlan({title, duration, price, isActive});
            return res.json({
                message: "plan created successfuly"
            })
        } catch (error) {
            next(error)
        }
    };
    async removePlan(req, res, next){
        try {
            const {id} = req.params
            console.log(id)
            await this.#service.removePlan(id)
            return res.json({
                message: "deleted successfuly"
            })
        } catch (error) {
            next(error)
        }
    };
};

module.exports = new PlanController()