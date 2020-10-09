import React from 'react';
import SEO from '../components/SEO';
import useForm from '../utils/useForm';

export default function OrderPage() {
  const { values, updateValue } = useForm({
    name: '',
    email: '',
  });

  return (
    <>
      <SEO title="Order a Pizza!" />
      <form>
        <fieldSet>
          <legend>Your Info</legend>
          <label htmlFor="name">Name</label>
          <input id="name" type="text" name="name" value={values.name} onChange={updateValue} />
          <label htmlFor="email">Email</label>
          <input id="email" type="email" name="email" value={values.email} onChange={updateValue} />
        </fieldSet>
        <fieldSet>
          <legend>Menu</legend>
        </fieldSet>
        <fieldSet>
          <legend>Order</legend>
        </fieldSet>
      </form>
    </>
  );
}
