import React, { useState } from 'react';
import InputNumber from '@/components/inputNumber/InputNumber';
import Image from 'next/image';
import { useDispatch } from 'react-redux';
import {
  addItemToCart,
  deleteItemFromCart,
} from '@/lib/redux/slices/cartSlice';
import Link from 'next/link';

import styles from './ModalItem.module.css';

const ModalCartItem = ({ data }) => {
  const { image, count, id, name, price, category, slug } = data;
  const [counter, setCounter] = useState(0);
  const dispatch = useDispatch();
  const slicesName = `${name.slice(0, 11)}..`;

  function onAddToCart() {
    dispatch(addItemToCart(data));
  }

  function onRemoveFromCart() {
    dispatch(deleteItemFromCart({ id }));
  }

  return (
    <li className={styles.item} data-test='cart-product'>
      <div className={styles.image}>
        <Image src={image} alt='cart item img' width={200} height={200} />
      </div>
      <div className={styles.info}>
        <Link href={`/category/${category}/${slug}`}>
          <p data-test='cart-product-name'>{slicesName}</p>
        </Link>
        <span>$ {price}</span>
      </div>
      <InputNumber
        counter={count}
        addValue={onAddToCart}
        removeValue={onRemoveFromCart}
      />
    </li>
  );
};

export default ModalCartItem;
