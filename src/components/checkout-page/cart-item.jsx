import Image from "next/image";
import Link from "next/link";

import styles from "./cart-item.module.css";
const CartItem = ({ data }) => {
  const { name, price, count, image, category, slug } = data;
  const slicesName = `${name.slice(0, 11)}..`;

  return (
    <li className={styles.item}>
      <Image src={image} alt="Photo cart" width={64} height={64} />
      <div className={styles.info}>
        <Link href={`/category/${category}/${slug}`} className={styles.link}>
          <span className={styles.name}>{slicesName}</span>
        </Link>
        <span className={styles.price}>$ {price}</span>
      </div>
      <span className={styles.count}>x{count}</span>
    </li>
  );
};

export default CartItem;
