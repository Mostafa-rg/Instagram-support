const autoBind = require("auto-bind")
const subscriptionService = require("./subscription.service")

class SubscriptionController {
    #service
    constructor(){
        autoBind(this)
        this.#service = subscriptionService
    };
    async createSubscription(req, res, next){
        try {
            const {userId} = req.body;
            await this.#service.createSubscription(userId);
            return res.json({
                message: "successful",
            })
        } catch (error) {
            next(error)
        }
    };
    async getSubscription(req, res, next){
        try {
            const subscriptions = await this.#service.getSubscription();
            return res.json({
                subscriptions
            })
        } catch (error) {
            next(error)
        }
    };
    async buySubscription(req, res, next){
        try {
            const userId = req.user.id;
            await this.#service.buySubscription(userId);
            return res.json({
                message: "successful",
            })
        } catch (error) {
            next(error)
        }
    };


};

module.exports = new SubscriptionController