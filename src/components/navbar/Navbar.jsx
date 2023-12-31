import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Image from 'next/image';

import Hamburger from '@/components/hamburger/Hamburger';
import ModalCart from '@/components/modalCart/ModalCart';
import Container from '@/components/container/Container';

import styles from './Navbar.module.css';
import { useSelector } from 'react-redux';

const Navbar = () => {
  const router = useRouter();
  const [modalShow, setModalShow] = useState(false);
  const [zIndex, setZIndex] = useState(1);
  const { cartItems } = useSelector((state) => state.cart);

  const handleClick = () => {
    setModalShow((state) => !state);
  };

  let navbarBackground = '#000';

  if (router.route === '/') {
    navbarBackground = 'transparent';
  }
  useEffect(() => {
    if (modalShow) {
      setZIndex(2000);
    } else {
      setZIndex(100);
    }
  }, [modalShow]);

  return (
    <>
      <nav
        className={styles.navbar}
        style={{
          backgroundColor: navbarBackground,
          zIndex: zIndex,
        }}
      >
        <Container>
          <div className={styles['navbar-content']}>
            <Hamburger />
            <Link href={'/'} data-test='nav-home-logo'>
              <Image
                src='/assets/shared/desktop/logo.svg'
                alt='Logo'
                width={143}
                height={25}
                className={styles.logo}
              />
            </Link>
            <ul className={styles.links}>
              <Link href='/' data-test='nav-home'>
                Home
              </Link>
              <Link
                href={'/category/headphones'}
                data-test='nav-category-headphones'
              >
                HEADPHONES
              </Link>
              <Link
                href={'/category/speakers'}
                data-test='nav-category-speakers'
              >
                SPEAKERS
              </Link>
              <Link
                href={'/category/earphones'}
                data-test='nav-category-earphones'
              >
                EARPHONES
              </Link>
            </ul>
            <div
              onClick={handleClick}
              className={styles.cart}
              data-test='nav-cart'
            >
              <svg width='23' height='20'>
                <path
                  d='M8.625 15.833c1.132 0 2.054.935 2.054 2.084 0 1.148-.922 2.083-2.054 2.083-1.132 0-2.054-.935-2.054-2.083 0-1.15.922-2.084 2.054-2.084zm9.857 0c1.132 0 2.054.935 2.054 2.084 0 1.148-.922 2.083-2.054 2.083-1.132 0-2.053-.935-2.053-2.083 0-1.15.92-2.084 2.053-2.084zm-9.857 1.39a.69.69 0 00-.685.694.69.69 0 00.685.694.69.69 0 00.685-.694.69.69 0 00-.685-.695zm9.857 0a.69.69 0 00-.684.694.69.69 0 00.684.694.69.69 0 00.685-.694.69.69 0 00-.685-.695zM4.717 0c.316 0 .59.215.658.517l.481 2.122h16.47a.68.68 0 01.538.262c.127.166.168.38.11.579l-2.695 9.236a.672.672 0 01-.648.478H7.41a.667.667 0 00-.673.66c0 .364.303.66.674.66h12.219c.372 0 .674.295.674.66 0 .364-.302.66-.674.66H7.412c-1.115 0-2.021-.889-2.021-1.98 0-.812.502-1.511 1.218-1.816L4.176 1.32H.674A.667.667 0 010 .66C0 .296.302 0 .674 0zm16.716 3.958H6.156l1.797 7.917h11.17l2.31-7.917z'
                  fill='#FFF'
                  fillRule='nonzero'
                />
              </svg>
              {cartItems.length > 0 && (
                <span className={styles.count}>{cartItems.length}</span>
              )}
            </div>
          </div>
        </Container>
        <hr />
      </nav>
      <ModalCart isShow={modalShow} />
    </>
  );
};
Navbar.propTypes = {
  backgroundColor: PropTypes.string,
};
Navbar.defaultProps = {
  backgroundColor: '#000',
};

export default Navbar;
