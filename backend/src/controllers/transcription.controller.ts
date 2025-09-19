import { Request, Response } from 'express';
import * as service from '../services/transcription.service';

export async function postTranscription(req: Request, res: Response) {
  try {
    const { audioUrl } = req.body;
    if (!audioUrl) return res.status(400).json({ error: 'audioUrl is required' });

    const id = await service.createTranscription(audioUrl);
    return res.status(201).json({ id });
  } catch (err: any) {
    console.error(err);
    return res.status(500).json({ error: err.message || 'Internal error' });
  }
}

export async function getTranscriptions(req: Request, res: Response) {
  try {
    const list = await service.listTranscriptions();
    return res.json(list);
  } catch (err: any) {
    console.error(err);
    return res.status(500).json({ error: err.message || 'Internal error' });
  }
}
