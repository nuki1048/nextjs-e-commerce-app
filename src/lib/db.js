const url = `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@${process.env.MONGODB_CLUSTERNAME}.3bylqjg.mongodb.net/store?retryWrites=true&w=majority`;
import { MongoClient } from 'mongodb';
export async function connectToDatabase() {
  return await MongoClient.connect(url);
}
export async function getDocuments(client, filter = {}, collection) {
  const dataBase = client.db();
  return await dataBase
    .collection(collection)
    .find(filter)
    .sort({ _id: -1 })
    .toArray();
}
