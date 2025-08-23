const autoBind = require("auto-bind");
const { PlanModel } = require("./plan.model");
const createHttpErrors = require("http-errors");

class PlanService{
    #model
    constructor(){
        autoBind(this);
        this.#model = PlanModel
    }
    async getPlan(){
        const plans = await this.#model.find({}, {__v: 0, updatedAt: 0});
        return plans
    };
    async createPlan(planDto){
        await this.#model.create(planDto)
    };
    async removePlan(id){
        const plan = await this.#model.findById(id);
        if(!plan) throw createHttpErrors.NotFound("plan not found");
        await this.#model.deleteOne({_id: id})
    };
};

module.exports = new PlanService()