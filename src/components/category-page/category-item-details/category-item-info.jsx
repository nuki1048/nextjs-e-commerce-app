import React from "react";
import styles from "./category-item-info.module.css";
import Container from "@/components/container/Container";
const CategoryItemInfo = () => {
  return (
    <Container>
      <div className={styles.info}>
        <div className={styles.features}>
          <h3>FEATURES</h3>
          <p>
            Connect via Bluetooth or nearly any wired source. This speaker
            features optical, digital coaxial, USB Type-B, stereo RCA, and
            stereo XLR inputs, allowing you to have up to five wired source
            devices connected for easy switching. Improved bluetooth technology
            offers near lossless audio quality at up to 328ft (100m).
            <br /> <br />
            Discover clear, more natural sounding highs than the competition
            with ZX9’s signature planar diaphragm tweeter. Equally important is
            its powerful room-shaking bass courtesy of a 6.5” aluminum alloy
            bass unit. You’ll be able to enjoy equal sound quality whether in a
            large room or small den. Furthermore, you will experience new
            sensations from old songs since it can respond to even the subtle
            waveforms.
          </p>
        </div>
        <div className={styles.box}>
          <h3>in the box</h3>
          <ul>
            <li>
              <span>2x</span>
              <p>Speaker Unit</p>
            </li>
            <li>
              <span>2x</span>
              <p>Speaker Cloth Panel</p>
            </li>
            <li>
              <span>1x</span>
              <p>User Manual</p>
            </li>
            <li>
              <span>1x</span>
              <p>3.5mm 10m Audio Cable</p>
            </li>
            <li>
              <span>1x</span>
              <p>10m Optical Cable</p>
            </li>
          </ul>
        </div>
      </div>
    </Container>
  );
};

export default CategoryItemInfo;
