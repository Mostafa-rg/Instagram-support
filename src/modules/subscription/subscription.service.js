const autoBind = require("auto-bind");
const { SubscriptionModel } = require("./subscription.model");
const createHttpErrors = require("http-errors");
const { UserModel } = require("../user/user.model");

class SubscriptionService {
    #model
    #userModel
    constructor(){
        autoBind(this)
        this.#model = SubscriptionModel
        this.#userModel = UserModel
    };
    async createSubscription(userId){
        const now = new Date().getTime();
        const endDate = now + 1000 * 60 * 60 * 24 * 90
        await this.#model.create({
            userId, endDate
        });

    };
    async getSubscription(){
        const subscriptions = await this.#model.find({});
        if(!subscriptions) throw new createHttpErrors.NotFound("not found any subscription");
        return subscriptions
    };
    async buySubscription(userId){
        const now = new Date().getTime();
        const endDate = now + 1000 * 60 * 60 * 24 * 90
        const activeSubscription = await this.#model.findOne({
            userId,
            endDate: {$gt: now}
        });
        if(activeSubscription) throw new createHttpErrors.BadRequest("User already has an active subscription");
        const subscription = await this.#model.create({
            userId, endDate
        });
        const user = await this.#userModel.findById(userId);
        if (!user) throw new createHttpErrors.NotFound("User not found");
        user.subscription = subscription._id;
        await user.save();
    };
};

module.exports = new SubscriptionService;