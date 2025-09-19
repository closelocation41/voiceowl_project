"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const supertest_1 = __importDefault(require("supertest"));
const app_1 = __importDefault(require("../app"));
const db_1 = require("../config/db");
beforeAll(async () => {
    process.env.USE_MEMORY_DB = 'true';
    await (0, db_1.connectDb)();
});
afterAll(async () => {
    await (0, db_1.closeDb)();
});
describe('POST /transcription', () => {
    it('creates a transcription and returns id', async () => {
        const res = await (0, supertest_1.default)(app_1.default)
            .post('/transcription')
            .send({ audioUrl: 'https://example.com/sample.mp3' })
            .expect(201);
        expect(res.body).toHaveProperty('id');
        expect(typeof res.body.id).toBe('string');
    });
    it('returns 400 if no audioUrl', async () => {
        await (0, supertest_1.default)(app_1.default)
            .post('/transcription')
            .send({})
            .expect(400);
    });
    it('retries on failure and eventually fails', async () => {
        const res = await (0, supertest_1.default)(app_1.default)
            .post('/transcription')
            .send({ audioUrl: 'https://example.com/fail.mp3' })
            .expect(500);
        expect(res.body).toHaveProperty('error');
    });
});
