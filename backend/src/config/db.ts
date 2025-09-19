import mongoose from 'mongoose';
import { MongoMemoryServer } from 'mongodb-memory-server';
import dotenv from 'dotenv';
dotenv.config();

let mongod: MongoMemoryServer | null = null;

export async function connectDb() {
  const useMemory = process.env.USE_MEMORY_DB === 'true' || !process.env.MONGO_URI;
  if (useMemory) {
    mongod = await MongoMemoryServer.create();
    const uri = mongod.getUri();
    await mongoose.connect(uri);
    console.log('Connected to in-memory MongoDB');
  } else {
    const uri = process.env.MONGO_URI!;
    await mongoose.connect(uri);
    console.log('Connected to MongoDB at', uri);
  }
}

export async function closeDb() {
  await mongoose.disconnect();
  if (mongod) await mongod.stop();
}
