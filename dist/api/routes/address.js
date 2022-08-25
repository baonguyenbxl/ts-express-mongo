"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
router.get('/', (req, res, next) => {
    res.status(200).send({ message: "get address" });
});
router.post("/", (req, res, next) => {
    res.status(200).send({ message: "post address" });
});
router.get('/:addressId', (req, res, next) => {
    const id = req.params.addressId;
});
router.patch('/:addressId', (req, res, next) => {
    const id = req.params.addressId;
});
router.delete('/:addressId', (req, res, next) => {
    const id = req.params.addressId;
});
exports.default = router;
