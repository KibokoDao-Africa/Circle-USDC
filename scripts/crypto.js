"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * See installation instructions at
 * https://developers.circle.com/developer/docs/circle-sdk
 */
const circle_sdk_1 = require("@circle-fin/circle-sdk");
const crypto_1 = __importDefault(require("crypto"));
const circle = new circle_sdk_1.Circle('<your-api-key>', circle_sdk_1.CircleEnvironments.sandbox // API base url
);
async function createCryptoPayment() {
    const reqBody = {
        amount: {
            amount: "1.00",
            currency: "USD"
        },
        settlementCurrency: "USD",
        paymentMethods: [
            {
                type: "blockchain",
                chain: "ETH"
            }
        ],
        idempotencyKey: crypto_1.default.randomUUID()
    };
    const resp = await circle.cryptoPaymentIntents.createPaymentIntent(reqBody);
    console.log(resp.data);
}
createCryptoPayment();
