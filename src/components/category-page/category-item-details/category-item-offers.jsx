import React from "react";
import styles from "./category-item-offers.module.css";
import Image from "next/image";
import Button from "@/components/button/Button";

import Container from "@/components/container/Container";
import { animated } from "@react-spring/web";
import { useAnimations } from "@/lib/animations";

const CategoryItemOffers = ({ offers }) => {
  const buttonStyle = { marginTop: "32px", width: "160px", height: "48px" };
  const { opacityView } = useAnimations();
  const [opacityRef, opacitySpring] = opacityView;

  return (
    <Container>
      <div className={styles.offers}>
        <h2>you may also like</h2>
        <ul>
          {offers.map((offer) => {
            const categoryOffer = offer.slug.split("-");
            let href = `/category/${categoryOffer[categoryOffer.length - 1]}/${
              offer.slug
            }`;
            if (categoryOffer[categoryOffer.length - 1] === "speaker") {
              href = `/category/${categoryOffer[categoryOffer.length - 1]}s/${
                offer.slug
              }`;
            }

            return (
              <animated.li
                ref={opacityRef}
                style={opacitySpring}
                key={offer.slug}
              >
                <Image
                  src={offer.image.desktop}
                  alt="Offers Image"
                  width={300}
                  height={300}
                />
                <h3>{offer.name}</h3>
                <Button style={buttonStyle} href={href}>
                  See Product
                </Button>
              </animated.li>
            );
          })}
        </ul>
      </div>
    </Container>
  );
};

export default CategoryItemOffers;
