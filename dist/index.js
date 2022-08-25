"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const config_1 = __importDefault(require("./config"));
const job_1 = __importDefault(require("./api/routes/job"));
const user_1 = __importDefault(require("./api/routes/user"));
const location_1 = __importDefault(require("./api/routes/location"));
const address_1 = __importDefault(require("./api/routes/address"));
const technician_1 = __importDefault(require("./api/routes/technician"));
const payment_1 = __importDefault(require("./api/routes/payment"));
const sector_1 = __importDefault(require("./api/routes/sector"));
const port = config_1.default.port;
const app = (0, express_1.default)();
app.use(express_1.default.json());
// middlewares
app.use('/job', job_1.default);
app.use('/user', user_1.default);
app.use("/address", address_1.default);
app.use("/sector", sector_1.default);
app.use("/location", location_1.default);
app.use("/company", location_1.default);
app.use("/technician", technician_1.default);
app.use("/payment", payment_1.default);
app.listen(port, () => {
    console.log('server is running on ', port);
});
