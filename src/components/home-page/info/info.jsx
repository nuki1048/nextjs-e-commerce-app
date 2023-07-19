import React from "react";
import Container from "@/components/container/Container";
import styles from "./info.module.css";
import { animated } from "@react-spring/web";
import { useAnimations } from "@/lib/animations";
const Info = ({ style }) => {
  const { AnimatedImage, fromLeftView, fromRightView } = useAnimations();
  const [refP, springsP] = fromLeftView;
  const [refH2, springH2] = fromLeftView;

  const [refImage, springImage] = fromRightView;

  return (
    <section className={styles.section} style={{ style }}>
      <Container>
        <div className={styles.wrapper}>
          <div className={styles.text}>
            <animated.h2 ref={refH2} style={springH2}>
              Bringing you the <span>best</span> audio gear
            </animated.h2>
            <animated.p ref={refP} style={springsP}>
              Located at the heart of New York City, Audiophile is the premier
              store for high end headphones, earphones, speakers, and audio
              accessories. We have a large showroom and luxury demonstration
              rooms available for you to browse and experience a wide range of
              our products. Stop by our store to meet some of the fantastic
              people who make Audiophile the best place to buy your portable
              audio equipment.
            </animated.p>
          </div>
          <AnimatedImage
            src="/assets/shared/desktop/image-best-gear.jpg"
            alt="image hero"
            width={500}
            height={500}
            ref={refImage}
            style={springImage}
          />
        </div>
      </Container>
    </section>
  );
};

export default Info;
