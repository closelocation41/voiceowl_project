"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createTranscription = createTranscription;
exports.listTranscriptions = listTranscriptions;
const transcription_model_1 = __importDefault(require("../models/transcription.model"));
const downloader_1 = require("../utils/downloader");
async function createTranscription(audioUrl) {
    // Attempt to "download" the audio (mocked) with retry
    await (0, downloader_1.downloadWithRetry)(audioUrl, 3);
    // Mock transcription result
    const transcriptionText = 'transcribed text';
    const record = await transcription_model_1.default.create({
        audioUrl,
        transcription: transcriptionText
    });
    return record._id.toString();
}
async function listTranscriptions() {
    return transcription_model_1.default.find().sort({ createdAt: -1 }).lean();
}
