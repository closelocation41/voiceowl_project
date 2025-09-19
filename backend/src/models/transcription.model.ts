import mongoose, { Schema, Document } from 'mongoose';
import { ITranscription } from '../types/transcription.types';

export interface TranscriptionDoc extends ITranscription, Document {}

const TranscriptionSchema: Schema = new Schema({
  audioUrl: { type: String, required: true },
  transcription: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model<TranscriptionDoc>('Transcription', TranscriptionSchema);
