import express from 'express';
import bodyParser from 'body-parser';
import transcriptionRouter from './routes/transcription.routes';
import cors from 'cors';
const app = express();
app.use(bodyParser.json());
app.use(cors({ origin: 'http://localhost:4200' }));

app.use('/transcription', transcriptionRouter);

app.get('/', (req, res) => res.send({ ok: true, message: 'VoiceOwl API' }));

export default app;
