"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const db_1 = require("./config/db");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const PORT = process.env.PORT || 4000;
async function start() {
    await (0, db_1.connectDb)();
    app_1.default.listen(PORT, () => {
        console.log(`Server listening on port ${PORT}`);
    });
}
start().catch(err => {
    console.error('Failed to start server', err);
    process.exit(1);
});
