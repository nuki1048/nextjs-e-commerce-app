import { connectToDatabase } from "@/lib/db";

async function handler(req, res) {
  if (req.method !== "GET") {
    return res.status(404).json({ message: "Invalid method" });
  }

  let client;
  try {
    client = await connectToDatabase();
  } catch (error) {
    res.status(404).json({ message: "Could not connect to database" });
  }
  const db = client.db();
  const collection = db.collection("products");
  const products = await collection.find({}).toArray();

  if (products.length === 0) {
    client.close();
    return res.status(404).json({ message: "Product not found" });
  }

  return res.status(200).json({ products: products });
}
export default handler;
