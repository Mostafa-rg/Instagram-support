const autoBind = require("auto-bind");
const createHttpErrors = require("http-errors");
const { PaymentModel } = require("./payment.model");

class PlanService{
    #model
    constructor(){
        autoBind(this);
        this.#model = PaymentModel
    }
    async paymentGateway(){
    };
    async verifyPayment(planDto){
        await this.#model.create(planDto)
    };
};

module.exports = new PlanService()


