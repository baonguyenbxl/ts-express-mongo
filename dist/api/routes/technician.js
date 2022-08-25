"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
router.get('/', (req, res, next) => {
    res.status(200).send({ message: "get technician" });
});
router.post("/", (req, res, next) => {
    res.status(200).send({ message: "post technician" });
});
router.get('/:technicianId', (req, res, next) => {
    const id = req.params.technicianId;
});
router.patch('/:technicianId', (req, res, next) => {
    const id = req.params.technicianId;
});
router.delete('/:technicianId', (req, res, next) => {
    const id = req.params.technicianId;
});
exports.default = router;
