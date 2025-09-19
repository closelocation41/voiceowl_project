"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectDb = connectDb;
exports.closeDb = closeDb;
const mongoose_1 = __importDefault(require("mongoose"));
const mongodb_memory_server_1 = require("mongodb-memory-server");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
let mongod = null;
async function connectDb() {
    const useMemory = process.env.USE_MEMORY_DB === 'true' || !process.env.MONGO_URI;
    if (useMemory) {
        mongod = await mongodb_memory_server_1.MongoMemoryServer.create();
        const uri = mongod.getUri();
        await mongoose_1.default.connect(uri);
        console.log('Connected to in-memory MongoDB');
    }
    else {
        const uri = process.env.MONGO_URI;
        await mongoose_1.default.connect(uri);
        console.log('Connected to MongoDB at', uri);
    }
}
async function closeDb() {
    await mongoose_1.default.disconnect();
    if (mongod)
        await mongod.stop();
}
