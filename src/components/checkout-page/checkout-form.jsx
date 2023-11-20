import dynamic from 'next/dynamic';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { object, string, number } from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { clearCart } from '@/lib/redux/slices/cartSlice';

import Input from '../input/input';
import Container from '../container/Container';
import Radio from '../radio/radio';
import Spinner from '../spinner/spinner';
import Button from '../button/Button';
import Image from 'next/image';

import CartItem from './cart-item';
import ThanksfulModal from '../thanksful-modal/thanksful-modal';
import styles from './checkout-form.module.css';
import { setCookie } from 'cookies-next';

const CheckoutForm = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.cart);
  const totalWithoutTaxesAndDelivery = cartItems.reduce(
    (total, item) => total + item.price * item.count,
    0
  );
  const taxes = Math.round((totalWithoutTaxesAndDelivery / 100) * 7.66);
  const totalWithTax = Math.round(totalWithoutTaxesAndDelivery + taxes);
  const delivery = 50;
  const totalWithTaxAndDelivery = totalWithTax + delivery;

  const schema = object({
    email: string()
      .email('Please enter a valid email address.')
      .required('Email field is required.'),
    name: string()
      .required('Name field is required.')
      .min(2, 'Name field must be at least 2 characters long.'),
    telephone: number()
      .transform((value, originalValue) =>
        originalValue === '' ? null : value
      )
      .required('Telephone field is required.')
      .typeError('Please enter numbers only in this field.')
      .min(5, 'Telephone field must be at least 5 characters long.'),
    address: string()
      .required('Address field is required.')
      .min(2, 'Address field must be at least 2 characters long.'),
    zipCode: number()
      .transform((value, originalValue) =>
        originalValue === '' ? null : value
      )
      .typeError('Please enter numbers only in this field.')
      .min(1000, 'Zip-code field must be at least 5 characters long.')
      .max(99999, 'Zip-code field should not exceed 5 characters.')
      .required('Zip-code field is required.'),
    country: string()
      .required('Country field is required.')
      .min(2, 'Country field must be at least 2 characters long.'),
    city: string()
      .required('City field is required.')
      .min(2, 'City field must be at least 2 characters long.'),
  }).required();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const [showModal, setModalShow] = useState(false);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);

  const onSubmit = async (data) => {
    setError(null);
    setIsPending(true);
    const order = {
      billingDetails: {
        name: data.name,
        telephone: data.telephone,
        email: data.email,
      },
      deliveryInfo: {
        address: data.address,
        zipCode: data.zipCode,
        country: data.country,
        city: data.city,
      },
      paymentMethod: data.paymentMethod,
      summary: {
        totalWithTaxAndDelivery,
        totalWithTax,
        totalWithoutTaxesAndDelivery,
        delivery,
        taxes,
      },
      products: [...cartItems],
    };
    try {
      await fetch('../api/order', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(order),
      }).then(async (res) => {
        if (!res.ok) {
          const data = await res.json();
          throw new Error(data.message || 'Something went wrong');
        }
      });
    } catch (error) {
      console.log(error);
      setError(error.message);
      setIsPending(false);
      return;
    }

    setIsPending(false);
    setModalShow(true);
    setTimeout(() => {
      setModalShow(false);
      dispatch(clearCart());
      setCookie('cart', []);

      router.push('/');
    }, 6000);
  };
  return (
    <section className={styles.section} data-test='checkout-form'>
      <Container>
        <button onClick={() => router.back()} className={styles.link}>
          Go back
        </button>
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
          <div className={styles.main}>
            <h2>Checkout</h2>
            <div className={styles.billing}>
              <h4>Billing Details</h4>
              <div className={styles.controls}>
                <Input
                  register={register('name', { required: true })}
                  error={errors.name}
                  label='Name'
                  placeholder='Alexei Ward'
                  type='text'
                />
                <Input
                  register={register('email', { required: true })}
                  error={errors.email}
                  label='Email Address'
                  placeholder='alexei@mail.com'
                  type='text'
                />
                <Input
                  register={register('telephone', { required: true })}
                  error={errors.telephone}
                  label='Phone Number'
                  placeholder='+1 202-555-0136'
                  type='number'
                />
              </div>
            </div>
            <div className={styles.shipping}>
              <h4>shipping info</h4>
              <div className={styles.controls}>
                <Input
                  register={register('address', { required: true })}
                  error={errors.address}
                  label='Your Address'
                  placeholder='1137 Williams Avenue'
                  type='text'
                />
                <Input
                  register={register('zipCode', { required: true })}
                  error={errors.zipCode}
                  label='ZIP Code'
                  placeholder='10001'
                  type='number'
                />
                <Input
                  register={register('city', { required: true })}
                  error={errors.city}
                  label='City'
                  placeholder='New York'
                  type='text'
                />
                <Input
                  register={register('country', { required: true })}
                  error={errors.country}
                  label='Country'
                  placeholder='United States'
                  type='text'
                />
              </div>
            </div>
            <div className={styles.payment}>
              <h4>payment details</h4>
              <div className={styles.method}>
                <h6>Payment Method</h6>
                <Radio
                  register={register('paymentMethod', { required: true })}
                  error={errors.paymentMethod}
                  label='e-Money'
                  value='e-Money'
                  borderShow={watch('paymentMethod') === 'e-Money'}
                />
                <Radio
                  register={register('paymentMethod', { required: true })}
                  error={errors.paymentMethod}
                  label='Cash on Delivery'
                  value='Cash on Delivery'
                  borderShow={watch('paymentMethod') === 'Cash on Delivery'}
                />
              </div>
              {watch('paymentMethod') === 'e-Money' && (
                <div className={styles.controls}>
                  <Input
                    register={register('eMoneyNumber', { required: false })}
                    error={errors.eMoneyNumber}
                    label='e-Money Number'
                    placeholder={'238521993'}
                  />
                  <Input
                    register={register('eMoneyPin', { required: false })}
                    error={errors.eMoneyPin}
                    label='e-Money PIN'
                    placeholder='6891'
                  />
                </div>
              )}
              {watch('paymentMethod') === 'Cash on Delivery' && (
                <div className={styles.delivery}>
                  <Image
                    src='assets/checkout/icon-cash-on-delivery.svg'
                    alt='icon delivery'
                    width={30}
                    height={30}
                  />
                  <p>
                    The Cash on Delivery option enables you to pay in cash when
                    our delivery courier arrives at your residence. Just make
                    sure your address is correct so that your order will not be
                    cancelled.
                  </p>
                </div>
              )}
            </div>
          </div>
          <aside className={styles.aside}>
            <h2>Summary</h2>
            <ul className={styles['cart-items']}>
              {cartItems.map((cartItem) => (
                <CartItem key={cartItem.id} data={cartItem} />
              ))}
            </ul>
            <div className={styles.info}>
              <div className={styles['info-item']}>
                <span className={styles.name}>TOTAL</span>
                <span className={styles.price}>
                  $ {totalWithoutTaxesAndDelivery}
                </span>
              </div>
              <div className={styles['info-item']}>
                <span className={styles.name}>SHIPPING</span>
                <span className={styles.price}>$ {delivery}</span>
              </div>
              <div className={styles['info-item']}>
                <span className={styles.name}>VAT (INCLUDED)</span>
                <span className={styles.price}>$ {taxes}</span>
              </div>
              <div className={styles['info-item-total']}>
                <span className={styles.name}>GRAND TOTAL</span>
                <span className={styles.price}>
                  $ {totalWithTaxAndDelivery}
                </span>
              </div>
            </div>

            <Button
              style={{ marginTop: '32px' }}
              dataTest='checkout-form-submit-button'
            >
              {isPending ? 'LOADING' : 'CONTINUE & PAY'}
            </Button>
            {error && <span className='error'>{error}</span>}
          </aside>
        </form>
      </Container>
      {showModal && (
        <ThanksfulModal isShow={showModal} total={totalWithTaxAndDelivery} />
      )}
    </section>
  );
};

export default CheckoutForm;
