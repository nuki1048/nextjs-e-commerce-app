import React from "react";
import Image from "next/image";
import Button from "../button/Button";

const EmailMessage = ({ total, cartItems }) => {
  return (
    <div
      style={{
        position: "absolute",
        top: "110px",
        left: "50%",
        transform: "translateX(-50%)",
        padding: "48px",
        width: "540px",
        height: "581px",
        borderRadius: "8px",
        background: "#fff", // replace var(--pure-white) with the actual color
        overflow: "hidden",
      }}
    >
      <h2
        style={{
          marginTop: "33px",
          color: "#000", // replace var(--pure-black) with the actual color
          fontSize: "32px",
          fontStyle: "normal",
          fontWeight: "700",
          lineHeight: "36px",
          letterSpacing: "1.143px",
          textTransform: "uppercase",
        }}
      >
        THANK YOU FOR YOUR ORDER
      </h2>
      <p
        style={{
          marginTop: "24px",
          color: "#000", // replace var(--pure-black) with the actual color
          fontSize: "15px",
          fontStyle: "normal",
          fontWeight: "500",
          lineHeight: "25px",
          opacity: 0.5,
        }}
      >
        You will receive an email confirmation shortly.
      </p>
      <div
        style={{
          marginTop: "33px",
          height: "140px",
          display: "grid",
          gridTemplateColumns: "250px 198px",
          gridTemplateRows: "1fr",
          backgroundColor: "#000", // replace var(--pure-black) with the actual color
          borderRadius: "8px",
        }}
      >
        <div
          style={{
            padding: "24px",
            background: "#f5f5f5", // replace var(--brand-grey) with the actual color
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0 27px",
            }}
          >
            <div
              style={{
                width: "50px",
                height: "50px",
                backgroundColor: "#f5f5f5", // replace var(--brand-grey) with the actual color
                borderRadius: "8px",
              }}
            ></div>
            <div>
              <span
                style={{
                  color: "#000", // replace var(--pure-black) with the actual color
                  fontSize: "15px",
                  fontStyle: "normal",
                  fontWeight: "700",
                  lineHeight: "25px",
                }}
              >
                {cartItems && cartItems[0].name}
              </span>
              <p
                style={{
                  marginTop: "0",
                  color: "#000", // replace var(--pure-black) with the actual color
                  fontSize: "14px",
                  fontStyle: "normal",
                  fontWeight: "700",
                  lineHeight: "25px",
                  opacity: 0.5,
                }}
              >
                $ {cartItems[0]?.price}
              </p>
            </div>
            <p
              style={{
                margin: "0 auto auto 0",
                color: "#000", // replace var(--pure-black) with the actual color
                fontSize: "15px",
                fontStyle: "normal",
                fontWeight: "700",
                lineHeight: "25px",
                opacity: 0.5,
              }}
            >
              x{cartItems[0]?.count}
            </p>
          </div>
          <hr />
          <span
            style={{
              color: "#000", // replace var(--pure-black) with the actual color
              fontSize: "12px",
              fontStyle: "normal",
              fontWeight: "700",
              lineHeight: "normal",
              letterSpacing: "-0.214px",
              opacity: 0.5,
            }}
          >
            and {cartItems?.length} other item(s)
          </span>
        </div>
        <div
          style={{
            padding: "41px 66px 24px 24px",
            color: "#fff", // replace var(--pure-white) with the actual color
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "14px",
            }}
          >
            <span
              style={{
                fontSize: "15px",
                fontStyle: "normal",
                fontWeight: "700",
                lineHeight: "25px",
                letterSpacing: "0.536px",
              }}
            >
              ORDER
            </span>
            <span
              style={{
                fontSize: "15px",
                fontStyle: "normal",
                fontWeight: "700",
                lineHeight: "25px",
                letterSpacing: "0.536px",
              }}
            >
              ${total}
            </span>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <span
              style={{
                fontSize: "15px",
                fontStyle: "normal",
                fontWeight: "700",
                lineHeight: "25px",
                letterSpacing: "0.536px",
              }}
            >
              DELIVERY
            </span>
            <span
              style={{
                fontSize: "15px",
                fontStyle: "normal",
                fontWeight: "700",
                lineHeight: "25px",
                letterSpacing: "0.536px",
              }}
            >
              FREE
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmailMessage;
