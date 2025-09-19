"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const transcription_controller_1 = require("../controllers/transcription.controller");
const router = (0, express_1.Router)();
router.post('/', transcription_controller_1.postTranscription);
router.get('/', transcription_controller_1.getTranscriptions);
exports.default = router;
