import { connectToDatabase, getDocuments } from "@/lib/db";

async function handler(req, res) {
  if (req.method !== "GET") {
    return res.status(404).json({ message: "Method not supported" });
  }

  const { categoryName } = req.query;

  let client;
  try {
    client = await connectToDatabase();
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
  let products;

  try {
    products = await getDocuments(
      client,
      { category: categoryName },
      "products"
    );
  } catch (error) {
    client.close();
    return res.status(500).json({ message: error.message });
  }

  if (products.length === 0) {
    client.close();
    return res.status(404).json({ message: "No products found" });
  }

  client.close();
  return res.status(200).json({ products });
}
export default handler;
