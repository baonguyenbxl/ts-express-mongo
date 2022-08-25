"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
router.get('/', (req, res, next) => {
    res.status(200).send({ message: "get payment" });
});
router.post("/", (req, res, next) => {
    res.status(200).send({ message: "post payment" });
});
router.get('/:paymentId', (req, res, next) => {
    const id = req.params.paymentId;
});
router.delete('/:paymentId', (req, res, next) => {
    const id = req.params.paymentId;
});
exports.default = router;
