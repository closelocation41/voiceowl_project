import TranscriptionModel from '../models/transcription.model';
import { ITranscription } from '../types/transcription.types';
import { downloadWithRetry } from '../utils/downloader';

export async function createTranscription(audioUrl: string): Promise<string> {
  // Attempt to "download" the audio (mocked) with retry
  await downloadWithRetry(audioUrl, 3);

  // Mock transcription result
  const transcriptionText = 'transcribed text';

  const record = await TranscriptionModel.create({
    audioUrl,
    transcription: transcriptionText
  } as ITranscription);

  return record._id.toString();
}

export async function listTranscriptions() {
  return TranscriptionModel.find().sort({ createdAt: -1 }).lean();
}
