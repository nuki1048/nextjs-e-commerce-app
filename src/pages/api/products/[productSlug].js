import { connectToDatabase } from "@/lib/db";

async function handler(req, res) {
  if (req.method !== "GET") {
    res.status(405).send("Method Not Allowed");
  }
  const { productSlug } = req.query;
  let client;
  try {
    client = await connectToDatabase();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }

  const db = client.db();
  const collection = db.collection("products");

  let product;
  try {
    product = await collection.findOne({ slug: productSlug });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
  client.close();
  res.status(200).json(product);
}

export default handler;
