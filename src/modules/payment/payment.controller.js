const autoBind = require("auto-bind");
const paymentService = require("./payment.service");

class PaymentController{
    #service
    constructor(){
        autoBind(this);
        this.#service = paymentService;
    }
    async paymentGateway(req, res, next){
        try {
            return res.json({
            })
        } catch (error) {
            next(error)
        }
    };
    async verifyPayment(req, res, next){
        try {
            return res.json({
            })
        } catch (error) {
            next(error)
        }
    };
};

module.exports = new PaymentController()

