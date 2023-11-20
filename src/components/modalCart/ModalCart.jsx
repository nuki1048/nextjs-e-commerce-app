import React, { useEffect } from 'react';
import Modal from '@/components/modal/Modal';
import styles from './ModalCart.module.css';
import ModalCartItem from '@/components/modalCart/ModalItem';
import { useDispatch, useSelector } from 'react-redux';
import { clearCart, updateCartTotal } from '@/lib/redux/slices/cartSlice';
import Button from '../button/Button';
import { setCookie } from 'cookies-next';
import { animated, useTransition } from '@react-spring/web';
import { toast } from 'react-toastify';
const ModalCart = ({ isShow }) => {
  const dispatch = useDispatch();
  const { cartItems, cartTotal } = useSelector((state) => state.cart);

  useEffect(() => {
    const total = cartItems.reduce(
      (acc, item) => acc + item.price * item.count,
      0
    );
    dispatch(updateCartTotal(total));
  }, [cartItems, dispatch]);

  const onClearCart = () => {
    dispatch(clearCart());
    setCookie('cart', []);

    toast.success('You successfully cleaned your cart!');
  };

  const transition = useTransition(isShow, {
    from: {
      top: 0,
      opacity: 0,
    },
    enter: {
      top: 131,
      opacity: 1,
    },
    leave: {
      top: 0,
      opacity: 0,
    },
  });

  // const [springs, api] = useTransition(() => ({
  //   from: { top: 0, opacity: 0 },
  // }));

  return (
    <>
      {transition((style, isShow) => (
        <Modal isShow={isShow}>
          <animated.div style={style} className={styles.content}>
            <div className={styles['cart-info']}>
              <h3 className={styles.counter}>cart ({cartItems.length})</h3>
              <button
                className={styles.button}
                onClick={onClearCart}
                data-test='cart-clear-button'
              >
                Remove all
              </button>
            </div>

            <ul className={styles.list} data-test='cart-list'>
              {cartItems.map((item) => (
                <ModalCartItem key={item.id} data={item} />
              ))}
            </ul>

            <div className={styles.price}>
              <p>total</p>
              <span>$ {cartTotal}</span>
            </div>

            <Button href={'/checkout'}>Checkout</Button>
          </animated.div>
        </Modal>
      ))}
    </>
  );
};

export default ModalCart;
