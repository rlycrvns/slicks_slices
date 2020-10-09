import { graphql } from 'gatsby';
import React from 'react';
import Img from 'gatsby-image';
import SEO from '../components/SEO';
import useForm from '../utils/useForm';
import calculatePizzaPrice from '../utils/calculatePizzaPrice';
import formatMoney from '../utils/formatMoney';

export default function OrderPage({ data }) {
  const { values, updateValue } = useForm({
    name: '',
    email: '',
  });
  const pizzas = data.pizzas.nodes;
  return (
    <>
      <SEO title="Order a Pizza!" />
      <form>
        <fieldSet>
          <legend>Your Info</legend>
          <label htmlFor="name">
            Name
            <input id="name" type="text" name="name" value={values.name} onChange={updateValue} />
          </label>

          <label htmlFor="email">
            Email
            <input id="email" type="email" name="email" value={values.email} onChange={updateValue} />
          </label>
        </fieldSet>
        <fieldSet>
          <legend>Menu</legend>
          {pizzas.map((pizza) => (
            <div keu={pizza.id}>
              <Img width="50" height="50" fluid={pizza.image.asset.fluid} alt={pizza.name} />
              <div>
                <h2>{pizza.name}</h2>
              </div>
              <div>
                {['S', 'M', 'L'].map((size) => (
                  <button type="button">
                    {size} {formatMoney(calculatePizzaPrice(pizza.price, size))}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </fieldSet>
        <fieldSet>
          <legend>Order</legend>
        </fieldSet>
      </form>
    </>
  );
}

export const query = graphql`
  query {
    pizzas: allSanityPizza {
      nodes {
        name
        id
        slug {
          current
        }
        price
        image {
          asset {
            fluid(maxWidth: 100) {
              ...GatsbySanityImageFluid
            }
          }
        }
      }
    }
  }
`;
