import { connectToDatabase } from "@/lib/db";
import { sendMessage } from "@/lib/email";
import { orderNumsGenerator } from "@/lib/order";
import { deleteCookie } from "cookies-next";
import { render } from "@react-email/render";
import Email from "@/emails/order";

async function handler(req, res) {
  if (req.method !== "POST") {
    res.status(405).json({ message: "Method Not Allowed" });
    return;
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

  if (!products || products.length === 0) {
    res.status(400).json({ message: "We can't apply order without products" });
    return;
  }

  if (
    !billingDetails ||
    !billingDetails.name ||
    !billingDetails.telephone ||
    !billingDetails.email
  ) {
    return res
      .status(400)
      .json({ message: "We can't apply order without billing details" });
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
      .json({ message: "We can't apply order without delivery details" });
  }

  if (!paymentMethod) {
    return res
      .status(400)
      .json({ message: "We can't apply order without payment method" });
  }

  let client;
  try {
    client = await connectToDatabase();
  } catch (error) {
    res.status(400).json({ message: "We can't connect to database" });
  }

  const orderNumber = orderNumsGenerator();
  const dateOfOrder = new Date().toISOString();
  console.log(dateOfOrder);

  const order = {
    orderNumber,
    products,
    billingDetails,
    deliveryInfo,
    paymentMethod,
    summary,
    orderDate: dateOfOrder,
  };

  let db;

  try {
    db = await client.db();
  } catch (error) {
    res.status(400).json({ message: "We can't connect to database" });
  }

  const collection = db.collection("orders");
  let response;
  try {
    response = await collection.insertOne(order);
  } catch (error) {
    client.close();
    return res.status(400).json({ message: "We can't apply order" });
  }

  deleteCookie("cart", { req, res });

  res
    .status(201)
    .json({ order: response, message: "Order added successfully" });

  await sendMessage({
    from: '"Audiophile 👻" <audiophile@gmail.com>',
    to: "nik456618@gmail.com",
    subject: "New Order ✔",
    text: `
      New Order \n 

      Order Info: \n
      Order Number: ${orderNumber},\n
      Email: ${billingDetails.email},\n
      Full Name: ${billingDetails.name},\n
      Telephone: ${billingDetails.telephone},\n

      ${products.map(
        (item) => `
      Product: \n
      Name: ${item.name},\n
      Count: ${item.count},\n
      Price: ${item.price},\n
      `
      )}\n

      Order summary: ${
        summary.totalWithTaxAndDelivery
      }(without taxes and delivery ${summary.totalWithoutTaxesAndDelivery});
      `,
  });

  return await sendMessage({
    from: '"Audiophile 👻" <audiophile@gmail.com>',
    to: billingDetails.email,
    subject: "Order ✔",
    text: "Order Details",
    html: render(
      Email({
        products: [...products],
        summary,
        deliveryInfo,
        name: billingDetails.name,
        orderDate: dateOfOrder,
        orderNumber,
      })
    ),
  });
}
export default handler;
