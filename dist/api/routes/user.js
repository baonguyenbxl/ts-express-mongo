"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
router.get('/', (req, res, next) => {
    res.status(200).send({ message: "get user" });
});
router.post("/", (req, res, next) => {
    res.status(200).send({ message: "post user" });
});
router.get('/:userId', (req, res, next) => {
    const id = req.params.userId;
});
router.patch('/:userId', (req, res, next) => {
    const id = req.params.userId;
});
router.delete('/:userId', (req, res, next) => {
    const id = req.params.userId;
});
exports.default = router;
