import React from 'react';
import Image from 'next/image';
import Container from '@/components/container/Container';
import Button from '@/components/button/Button';
import styles from './grid-item.module.css';
import { animated } from '@react-spring/web';
import { useAnimations } from '@/lib/animations';
const GridItems = () => {
  const { fromLeftView, fromRightView, fromBottomView } = useAnimations(
    300,
    300
  );

  const [refZX9, springsZX9] = fromLeftView;
  const [refZX7, springsZX7] = fromRightView;

  const [refEarphones, springsEarphones] = fromBottomView;
  return (
    <Container>
      <section className={styles.grid}>
        <animated.div
          ref={refZX9}
          style={springsZX9}
          className={styles['speaker-zx9']}
          data-test='grid-speaker-zx9'
        >
          <Image
            src='/assets/home/desktop/image-speaker-zx9.png'
            alt='speaker preview photo'
            width={1000}
            height={700}
          />
          <div className={styles['speaker-info']}>
            <h2>ZX9 SPEAKER</h2>
            <p>
              Upgrade to premium speakers that are phenomenally built to deliver
              truly remarkable sound.
            </p>
            <Button
              variant={'black'}
              style={{ width: '160px' }}
              href={'/category/speakers/zx9-speaker'}
            >
              See Product
            </Button>
          </div>
        </animated.div>
        <animated.div
          ref={refZX7}
          style={springsZX7}
          className={styles['speaker-zx7']}
          data-test='grid-speaker-zx7'
        >
          <h2>ZX7 SPEAKER</h2>
          <Button
            variant={'black-outline'}
            href={'/category/speakers/zx7-speaker'}
            style={{ width: '160px' }}
          >
            See Product
          </Button>
        </animated.div>
        <animated.div
          ref={refEarphones}
          style={springsEarphones}
          className={styles.earphones}
        >
          .
        </animated.div>
        <animated.div
          ref={refEarphones}
          style={springsEarphones}
          data-test='grid-yx1-earphones'
          className={styles['earphones-info']}
        >
          <h2>YX1 EARPHONES</h2>
          <Button
            variant={'black-outline'}
            href={'/category/earphones/yx1-earphones'}
            style={{ width: '160px' }}
          >
            See Product
          </Button>
        </animated.div>
      </section>
    </Container>
  );
};

export default GridItems;
