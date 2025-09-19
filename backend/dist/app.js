"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const transcription_routes_1 = __importDefault(require("./routes/transcription.routes"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
app.use(body_parser_1.default.json());
app.use((0, cors_1.default)({ origin: 'http://localhost:4200' }));
app.use('/transcription', transcription_routes_1.default);
app.get('/', (req, res) => res.send({ ok: true, message: 'VoiceOwl API' }));
exports.default = app;
