"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
router.get('/', (req, res, next) => {
    res.status(200).send({ message: "get company" });
});
router.post("/", (req, res, next) => {
    res.status(200).send({ message: "post company" });
});
router.get('/:companyId', (req, res, next) => {
    const id = req.params.companyId;
});
router.patch('/:companyId', (req, res, next) => {
    const id = req.params.companyId;
});
router.delete('/:companyId', (req, res, next) => {
    const id = req.params.companyId;
});
exports.default = router;
