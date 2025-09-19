import request from 'supertest';
import app from '../app';
import { connectDb, closeDb } from '../config/db';

beforeAll(async () => {
  process.env.USE_MEMORY_DB = 'true';
  await connectDb();
});

afterAll(async () => {
  await closeDb();
});

describe('POST /transcription', () => {
  it('creates a transcription and returns id', async () => {
    const res = await request(app)
      .post('/transcription')
      .send({ audioUrl: 'https://example.com/sample.mp3' })
      .expect(201);

    expect(res.body).toHaveProperty('id');
    expect(typeof res.body.id).toBe('string');
  });

  it('returns 400 if no audioUrl', async () => {
    await request(app)
      .post('/transcription')
      .send({})
      .expect(400);
  });

  it('retries on failure and eventually fails', async () => {
    const res = await request(app)
      .post('/transcription')
      .send({ audioUrl: 'https://example.com/fail.mp3' })
      .expect(500);

    expect(res.body).toHaveProperty('error');
  });
});
