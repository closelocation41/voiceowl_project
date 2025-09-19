import app from './app';
import { connectDb } from './config/db';
import dotenv from 'dotenv';
dotenv.config();

const PORT = process.env.PORT || 4000;

async function start() {
  await connectDb();
  app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
  });
}

start().catch(err => {
  console.error('Failed to start server', err);
  process.exit(1);
});
