import * as React from "react";
import {
  Section,
  Body,
  Heading,
  Img,
  Head,
  Font,
  Container,
  Html,
  Button,
  Text,
  Row,
  Column,
  Hr,
  Link,
  Preview,
} from "@react-email/components";
const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "";

export default function Email(props) {
  const { products, summary, deliveryInfo, name, orderDate, orderNumber } =
    props;
  const {
    totalWithoutTaxesAndDelivery,
    totalWithTaxAndDelivery,
    delivery,
    taxes,
  } = summary;

  const { address, city, country } = deliveryInfo;
  const options = { year: "numeric", month: "long", day: "numeric" };
  const humanReadableDate = new Date(orderDate).toLocaleDateString(
    "en-US",
    options
  );

  return (
    <Html style={{ background: "#EAF0F3" }} lang="en">
      <Head>
        <Font
          fontFamily="Barlow"
          fallbackFontFamily="Verdana"
          webFont={{
            url: "https://fonts.googleapis.com/css2?family=Barlow:wght@400;500;700&display=swap",
            format: "truetype",
          }}
          fontWeight={400}
          fontStyle="normal"
        />
      </Head>

      <Body>
        <Preview>Order №{orderNumber} coming to you!</Preview>
        <Section style={{ paddingTop: "146px" }}>
          <Container style={containerStyles}>
            <Img
              src={"https://i.imgur.com/hRVXLoe.png"}
              width="333"
              height="52"
              style={logoStyles}
              alt="Logo"
            />
            <Heading as="h1" style={headingStyles}>
              Your order is on it’s way.
            </Heading>
          </Container>
        </Section>
        <Section style={mainSectionStyles}>
          <Container style={containerStyles}>
            <Img
              src="https://i.imgur.com/geHgYkk.png"
              alt="Preview Photo"
              width="420"
              height="278"
              style={previewPhotoStyles}
            />
            <div style={buttonContainerStyles}>
              <Button href="https://example.com" style={buttonStyles}>
                <Text style={buttonTextStyles}>Track Your Order</Text>
              </Button>
            </div>
            <Text style={attentionTextStyles}>
              Please allow 24 hours to track your order.
            </Text>
            <Row style={orderInfoRowStyles}>
              <Column style={{ display: "block", height: "100%" }}>
                <Heading as="h3" style={orderInfoHeadingStyles}>
                  Summary:
                </Heading>
                <Section style={orderInfoFirstSectionStyles}>
                  <div style={orderInfoTextContainerStyles}>
                    <Text style={orderInfoTextMargin}>Order #:</Text>
                    <Text style={orderInfoTextStyles}>{orderNumber}</Text>
                  </div>
                  <div style={orderInfoTextContainerMargin}>
                    <Text style={orderInfoTextMargin}>Order Date:</Text>
                    <Text style={orderInfoTextStyles}>{humanReadableDate}</Text>
                  </div>
                  <div style={orderInfoTextContainerMargin}>
                    <Text style={orderInfoTextMargin}>Order Total:</Text>
                    <Text style={orderInfoTextStyles}>
                      ${totalWithTaxAndDelivery}
                    </Text>
                  </div>
                </Section>
              </Column>
              <Column>
                <Hr style={orderInfoHrStyles} />
              </Column>
              <Column style={orderInfoThirdSectionStyles}>
                <Heading
                  as="h3"
                  style={{
                    ...orderInfoHeadingStyles,
                    textAlign: "right",
                  }}
                >
                  Shipping Address:
                </Heading>
                <Section style={orderInfoSectionStyles}>
                  <Text style={orderInfoTextSecondVariantStyles}>{name}</Text>
                  <Text style={orderInfoTextSecondVariantMargin}>
                    {address}
                  </Text>
                  <Text style={orderInfoTextSecondVariantMargin}>
                    {city},{country}
                  </Text>
                </Section>
              </Column>
            </Row>
            <Row style={orderSecondInfoRow}>
              <Column style={orderSecondInfoColumn}>
                <Text style={orderInfoTextSecondVariantStyles}>
                  Items Shipped
                </Text>
                <Text
                  style={{
                    ...orderInfoTextSecondVariantStyles,
                    textAlign: "center",
                    margin: "0 0 0 auto",
                    display: "block",
                  }}
                >
                  QTY
                </Text>
                <Text
                  style={{
                    ...orderInfoTextSecondVariantStyles,
                    margin: "0 0 0 40px",
                    textAlign: "center",
                  }}
                >
                  PRICE
                </Text>
              </Column>
            </Row>
            <Row>
              <Column style={orderItemsColumnStyles}>
                <ul style={orderItemsListStyles}>
                  {products.map((product, index) => {
                    return (
                      <li
                        style={
                          index > 0
                            ? orderItemsSingleItemsMargin
                            : orderItemsSingleItem
                        }
                        key={product.id}
                      >
                        <div style={orderItemsSingleItemInfo}>
                          <div style={orderItemsSingleItemImg}>
                            <Img
                              src="https://cdn-icons-png.flaticon.com/512/8682/8682987.png"
                              width="40"
                              height="40"
                              style={{ display: "block", margin: "auto" }}
                            />
                          </div>
                          <Text
                            style={{
                              ...orderItemsSingleItemText,
                              margin: "0 0 0 16px",
                            }}
                          >
                            {product.name}
                          </Text>
                        </div>
                        <Text
                          style={{
                            ...orderItemsSingleItemTextFlex,
                            margin: "0 0 0 auto",
                          }}
                        >
                          X{product.count}
                        </Text>{" "}
                        <Text
                          style={{
                            ...orderItemsSingleItemTextFlex,
                            margin: "0 0 0 80px",
                          }}
                        >
                          ${product.price}
                        </Text>
                      </li>
                    );
                  })}
                  {/* <li style={orderItemsSingleItem}>
                    <div style={orderItemsSingleItemInfo}>
                      <div style={orderItemsSingleItemImg}>
                        <Img
                          src="https://cdn-icons-png.flaticon.com/512/8682/8682987.png"
                          width="40"
                          height="40"
                          style={{ display: "block", margin: "auto" }}
                        />
                      </div>
                      <Text
                        style={{
                          ...orderItemsSingleItemText,
                          margin: "0 0 0 16px",
                        }}
                      >
                        XX99 MARK II
                      </Text>
                    </div>
                    <Text
                      style={{
                        ...orderItemsSingleItemTextFlex,
                        margin: "0 0 0 auto",
                      }}
                    >
                      X1
                    </Text>{" "}
                    <Text
                      style={{
                        ...orderItemsSingleItemTextFlex,
                        margin: "0 0 0 80px",
                      }}
                    >
                      $2,999
                    </Text>
                  </li> */}
                  {/* <li style={orderItemsSingleItemsMargin}>
                    <div style={orderItemsSingleItemInfo}>
                      <div
                        style={{
                          border: "8px",
                          width: "99px",
                          height: "120px",
                          background: "#F1F1F1",
                          display: "flex",
                          borderRadius: "8px",
                        }}
                      >
                        <Img
                          src="https://cdn-icons-png.flaticon.com/512/8682/8682987.png"
                          width="40"
                          height="40"
                          style={{ display: "block", margin: "auto" }}
                        />
                      </div>
                      <Text
                        style={{
                          ...orderItemsSingleItemText,
                          margin: "0 0 0 16px",
                        }}
                      >
                        XX59
                      </Text>
                    </div>
                    <Text
                      style={{
                        ...orderItemsSingleItemTextFlex,
                        margin: "0 0 0 auto",
                      }}
                    >
                      X2
                    </Text>
                    <Text
                      style={{
                        ...orderItemsSingleItemTextFlex,
                        margin: "0 0 0 80px",
                      }}
                    >
                      $899
                    </Text>
                  </li>
                  <li style={orderItemsSingleItemsMargin}>
                    <div style={orderItemsSingleItemInfo}>
                      <div style={orderItemsSingleItemImg}>
                        <Img
                          src="https://cdn-icons-png.flaticon.com/512/8682/8682987.png"
                          width="40"
                          height="40"
                          style={{ display: "block", margin: "auto" }}
                        />
                      </div>
                      <Text
                        style={{
                          margin: "0 0 0 16px",
                          ...orderItemsSingleItemText,
                          padding: "0",
                        }}
                      >
                        XX59
                      </Text>
                    </div>
                    <Text
                      style={{
                        ...orderItemsSingleItemTextFlex,
                        margin: "0 0 0 auto",
                      }}
                    >
                      X2
                    </Text>{" "}
                    <Text
                      style={{
                        ...orderItemsSingleItemTextFlex,
                        margin: "0 0 0 80px",
                      }}
                    >
                      $899
                    </Text>
                  </li> */}
                </ul>
              </Column>
            </Row>
            <Row style={orderTotalTextRow}>
              <Column style={orderTotalTextColumn}>
                <div style={orderTotalTextSection}>
                  <Text style={orderTotalText}>Subtotal (2 items):</Text>
                  <Text style={orderTotalTextMargin}>Shipping:</Text>
                  <Text style={orderTotalTextMargin}>Estimated Tax</Text>
                  <Text style={{ ...orderTotalText, fontWeight: "700" }}>
                    Order Total
                  </Text>
                </div>
                <div style={{ textAlign: "left" }}>
                  <Text style={orderTotalText}>
                    {" "}
                    ${totalWithoutTaxesAndDelivery}
                  </Text>
                  <Text style={orderTotalTextMargin}>${delivery}</Text>
                  <Text style={orderTotalTextMargin}>${taxes}</Text>
                  <Text style={{ ...orderTotalText, fontWeight: "700" }}>
                    ${totalWithTaxAndDelivery}
                  </Text>
                </div>
              </Column>
            </Row>
            <Row style={infoButtonContainer}>
              <Column style={infoButtonSubContainer}>
                <Button href="tel:+2342455344342" style={infoButton}>
                  <Text style={infoButtonText}>
                    Call us at (+234) 245-5344-342 or reply to this email{" "}
                  </Text>
                </Button>
              </Column>
            </Row>
            <Row style={guarantiesRow}>
              <Column
                style={{ width: "100%", height: "100%", display: "flex" }}
              >
                <div style={guarantiesContainer}>
                  <div style={guarantiesBlock}></div>
                  <Text style={guarantiesText}>CUSTOMER SERVICE</Text>
                </div>
                <div style={{ ...guarantiesContainer, margin: "0 40px" }}>
                  <div style={guarantiesBlock}></div>
                  <Text style={guarantiesText}>FREE SHIPPING ORDERS $45+</Text>
                </div>
                <div style={{ ...guarantiesContainer, margin: "0 40px 0 0" }}>
                  <div style={guarantiesBlock}></div>
                  <Text style={guarantiesText}>SATISFACTION GUARANTEED</Text>
                </div>
                <div style={guarantiesContainer}>
                  <div style={guarantiesBlock}></div>
                  <Text style={guarantiesText}>HASSLTE-FREE RETURNS</Text>
                </div>
              </Column>
            </Row>
          </Container>
        </Section>
        <Section style={infoSection}>
          <Container style={containerStyles}>
            <Row style={infoRow}>
              <Column style={{ display: "flex", alignItems: "center" }}>
                <Link href="https://facebook.com/" style={infoSocialMediaBlock}>
                  <Img
                    src="https://i.imgur.com/0PnIriv.png"
                    width="64"
                    height="64"
                    style={infoSocialMediaIcon}
                  />
                </Link>
                <Link
                  href="https://twitter.com"
                  style={{
                    ...infoSocialMediaBlock,
                    margin: "0 10px",
                  }}
                >
                  <Img
                    src="https://i.imgur.com/vZABfX4.png"
                    width="64"
                    height="64"
                    style={infoSocialMediaIcon}
                  />
                </Link>{" "}
                <Link
                  href="https://linkedin.com"
                  style={{
                    ...infoSocialMediaBlock,
                    margin: "0 10px 0 0",
                  }}
                >
                  <Img
                    src="https://i.imgur.com/wgY9HMV.png"
                    width="64"
                    height="64"
                    style={infoSocialMediaIcon}
                  />
                </Link>{" "}
                <Link href="https://instagram.com" style={infoSocialMediaIcon}>
                  <Img
                    src="https://i.imgur.com/z0wRvNY.png"
                    width="64"
                    height="64"
                    style={infoSocialMediaIcon}
                  />
                </Link>
              </Column>
            </Row>
            <Text style={infoText}>Copyright © 2023. All Rights Reserved.</Text>
            <Text style={infoTextBold}>Audiophile</Text>
            <Text style={infoTextBold}>
              Please use this link to{" "}
              <Link
                href="https://example.com"
                style={{
                  textDecoration: "underline",
                  color: "#000",
                  fontWeight: "700",
                  marginRight: "5px",
                }}
              >
                unsubscribe
              </Link>
              from all our emails.
            </Text>
          </Container>
        </Section>
      </Body>
    </Html>
  );
}
const logoStyles = { display: "block", margin: "0 auto" };

const headingStyles = {
  textAlign: "center",
  fontSize: "45px",
  fontWeight: "400",
  fontStyle: "normal",
  lineHeight: "normal",
  color: "#000",
};

const containerStyles = {
  margin: "0 auto",
  textAlign: "center",
};

const mainSectionStyles = {
  width: "100%",
  background: "#fff",
  paddingTop: "33px",
};

const previewPhotoStyles = {
  borderRadius: "8px",
  objectFit: "cover",
  display: "block",
  margin: "0 auto",
};

const buttonContainerStyles = {
  width: "335px",
  height: "60px",
  display: "block",
  margin: "47px auto 0 auto",
};

const buttonStyles = {
  width: "100%",
  height: "100%",
  background: " linear-gradient(0deg, #D87D4A 0%, #D87D4A 100%), #FF743C",
  borderRadius: "8px",
  textDecoration: "none",
  textAlign: "center",
};

const buttonTextStyles = {
  display: "block",
  fontSize: "18px",
  fontStyle: "normal",
  fontWeight: "700",
  lineHeight: "normal",
  color: "#fff",
  margin: "20px",
};

const attentionTextStyles = {
  marginTop: "19px",
  color: "#5E5E5E",
  fontSize: "24px",
  fontStyle: "normal",
  fontWeight: "400",
  lineHeight: "normal",
  textAlign: "center",
};

const orderInfoRowStyles = {
  marginTop: "22px",
  display: "block",
  width: "626px",
  minHeight: "140px",
  border: "1px solid rgba(94, 94, 94, 0.50)",
  borderRadius: "6px",
  padding: "15px 30px",
};

const orderInfoFirstSectionStyles = {
  marginTop: "10px",
  width: "271px",
  display: "flex",
  flexDirection: "column",
  gap: "2px",
};

const orderInfoHeadingStyles = {
  color: "#5e5e5e",
  fontSize: "19px",
  fontStyle: "normal",
  fontWeight: "700",
  lineHeight: "normal",
  textAlign: "left",
  margin: "0",
};

const orderInfoTextContainerStyles = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
};

const orderInfoTextContainerMargin = {
  ...orderInfoHeadingStyles,
  marginTop: "7px",
  display: "flex",
};

const orderInfoTextStyles = {
  margin: "0",
  color: "#5e5e5e",
  fontStyle: "normal",
  fontWeight: "500",
  lineHeight: "normal",
};

const orderInfoTextMargin = {
  ...orderInfoTextStyles,
  marginRight: "13px",
};

const orderInfoHrStyles = {
  width: "1px",
  height: "115px",
  color: "#5E5E5E",
  opacity: "0.4",
  display: "block",
  border: "none",
  borderLeft: "1px solid",
  borderTop: "none",
};

const orderInfoThirdSectionStyles = {
  display: "block",
  width: "196px",
  height: "100%",
  paddingLeft: "50px",
};

const orderInfoSectionStyles = {
  marginTop: "10px",
  width: "100%",
  display: "flex",
  flexDirection: "column",
  gap: "2px",
};

const orderInfoTextSecondVariantStyles = {
  margin: "0",
  color: "#5e5e5e",
  fontStyle: "normal",
  fontWeight: "500",
  lineHeight: "normal",
  textAlign: "left",
};

const orderInfoTextSecondVariantMargin = {
  ...orderInfoTextSecondVariantStyles,
  margin: "7px 0 0 0",
};

const orderSecondInfoRow = {
  marginTop: "18px",
  width: "626px",
  height: "67px",
  borderRadius: "6px",
  border: "1px solid #5e5e5e",
  display: "block",
};

const orderSecondInfoColumn = {
  display: "flex",
  alignItems: "center",
  width: "626px",
  height: "67px",
  padding: "19px 36px",
  boxSizing: "border-box",
};

const orderItemsColumnStyles = {
  display: "flex",
  alignItems: "center",
  width: "626px",
  minHeight: "120px",
};

const orderItemsListStyles = {
  listStyleType: "none",
  margin: "20px auto 0 auto",
  padding: "0",
};

const orderItemsSingleItem = {
  width: "626px",
  height: "120px",
  display: "flex",
  alignItems: "center",
  margin: "0",
};

const orderItemsSingleItemsMargin = {
  margin: "24px 0 0 0",
  padding: "24px 0 0 0",
  width: "626px",
  height: "120px",
  display: "flex",
  alignItems: "center",
  borderTop: "1px solid #5e5e5e",
};

const orderItemsSingleItemInfo = {
  width: "375px",
  display: "flex",
  alignItems: "center",
};

const orderItemsSingleItemImg = {
  width: "99px",
  height: "120px",
  background: "#F1F1F1",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "8px",
};

const orderItemsSingleItemText = {
  padding: "50px 0",
  color: "#5e5e5e",
  fontStyle: "normal",
  fontWeight: "500",
  lineHeight: "normal",
  textAlign: "center",
};

const orderItemsSingleItemTextFlex = {
  ...orderItemsSingleItemText,
  display: "flex",
};

const orderTotalTextRow = { width: "265px", margin: "24px 0 0 auto" };

const orderTotalTextColumn = {
  display: "flex",
  width: "265px",
  minHeight: "140px",
};

const orderTotalTextSection = { textAlign: "right", margin: "0 22px 0 auto" };

const orderTotalText = { margin: "0", color: "#000" };

const orderTotalTextMargin = { margin: "8px 0", color: "#000" };

const infoButtonContainer = {
  width: "100%",
  height: "67px",
  marginTop: "98px",
};

const infoButtonSubContainer = {
  width: "100%",
  height: "67px",
  display: "flex",
  alignItems: "center",
};

const infoButton = {
  display: "flex",
  borderRadius: "6px",
  background: "#D87D4A",
  width: "100%",
  height: "100%",
  boxSizing: "border-box",
};

const infoButtonText = { padding: "25px 48px", color: "#fff", margin: "0" };

const guarantiesRow = {
  width: "536px",
  height: "129px",
  margin: "19px auto 0 auto",
};

const guarantiesContainer = { width: "104px" };

const guarantiesBlock = {
  width: "72px",
  height: "72px",
  background: "#F9F9F9",
  margin: "0 auto",
};

const guarantiesText = {
  textAlign: "center",
  margin: "0",
  color: "#5E5E5E",
};

const infoSection = { width: "100%", padding: "67px 0 0 0" };

const infoRow = {
  display: "block",
  width: "300px",
  margin: "0 auto",
};

const infoSocialMediaBlock = {
  width: "64px",
  height: "64px",
  background: "#fff",
};

const infoSocialMediaIcon = { objectFit: "cover" };

const infoText = { margin: "14px 0 0 0", color: "#000" };

const infoTextBold = { ...infoText, fontWeight: "700" };
