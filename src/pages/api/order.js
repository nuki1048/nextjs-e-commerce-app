import ThanksfulModal from "@/components/thanksful-modal/thanksful-modal";
import { connectToDatabase } from "@/lib/db";
import { sendMessage } from "@/lib/email";
import { orderNumsGenerator } from "@/lib/order";
import { deleteCookie } from "cookies-next";
import { render } from "@react-email/render";
import EmailMessage from "@/components/emailMessage/emailMessage";

async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).send("Method Not Allowed");
  }
  const { products, billingDetails, deliveryInfo, paymentMethod, summary } =
    req.body;

  //   order = {
  //     products: [],
  //     billingDetails: { name, address, city },
  //     deliveryInfo: { address, zipCode, country, city },
  //     paymentMethod: "E-Money" || "Pay On Delivery",
  //     summary: "$1000",
  //   };

  if (products.length === 0) {
    return res.status(400).send("We can't apply order without products");
  }

  if (
    !billingDetails ||
    !billingDetails.name ||
    !billingDetails.telephone ||
    !billingDetails.email
  ) {
    return res.status(400).send("We can't apply order without billing details");
  }

  if (
    !deliveryInfo ||
    !deliveryInfo.zipCode ||
    !deliveryInfo.address ||
    !deliveryInfo.city ||
    !deliveryInfo.country
  ) {
    return res
      .status(400)
      .send("We can't apply order without delivery details");
  }

  if (!paymentMethod) {
    return res.status(400).send("We can't apply order without payment method");
  }

  let client;
  try {
    client = await connectToDatabase();
  } catch (error) {
    res.status(400).send("We can't connect to database");
  }

  const orderNumber = orderNumsGenerator();
  const order = {
    orderNumber,
    products,
    billingDetails,
    deliveryInfo,
    paymentMethod,
    summary,
  };

  const db = client.db();
  const collection = db.collection("orders");
  let response;
  try {
    response = await collection.insertOne(order);
  } catch (error) {
    client.close();
    return res.status(400).send("We can't apply order");
  }

  deleteCookie("cart", { req, res });

  await sendMessage({
    from: '"Audiophile 👻" <audiophile@gmail.com>',
    to: billingDetails.email,
    subject: "Order ✔",
    text: "Order Details",
    html: render(EmailMessage({ cartItems: order.products, total: "5000" })),
  });

  return res
    .status(201)
    .json({ order: response, message: "Order added successfully" });
}
export default handler;
