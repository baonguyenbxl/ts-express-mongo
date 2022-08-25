"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
router.get('/', (req, res, next) => {
    res.status(200).send({ message: "get sector" });
});
router.post("/", (req, res, next) => {
    res.status(200).send({ message: "post sector" });
});
router.get('/:sectorId', (req, res, next) => {
    const id = req.params.sectorId;
});
router.patch('/:sectorId', (req, res, next) => {
    const id = req.params.sectorId;
});
router.delete('/:sectorId', (req, res, next) => {
    const id = req.params.sectorId;
});
exports.default = router;
