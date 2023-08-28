import { MongoClient } from 'mongodb';

const url = 'mongodb://127.0.0.1:27017/myorganizer';

let db = undefined;

export async function connectDB() {
  if (db) return db;
  let client = await MongoClient.connect(url, { useNewUrlParser: true });
  db = client.db();
  console.info('Got connect db', db);
  return db;
}
