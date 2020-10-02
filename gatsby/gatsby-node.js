import path from 'path';

async function turnPizzasIntoPages({ graphql, actions }) {
  // 1. Get a trmpalte for this page
  const PizzaTemplate = path.resolve('./src/templates/Pizza.js');
  // 2. Query all pizzas
  const { data } = await graphql(`
    query {
      pizzas: allSanityPizza {
        nodes {
          name
          slug {
            current
          }
        }
      }
    }
  `);
  // 3. Loop over each pizza and create a page for that pizza
  data.pizzas.nodes.forEach((pizza) =>
    actions.createPage({
      // what is the url for this new page?
      path: `/pizza/${pizza.slug.current}`,
      component: PizzaTemplate,
      context: {
        slug: pizza.slug.current,
      },
    })
  );
}

async function turnToppingsIntoPages({ graphql, actions }) {
  // 1. Get the template
  const toppingTemplate = path.resolve('./src/pages/pizzas.js');
  // 2. Query all the toppings
  const { data } = await graphql(`
    query {
      toppings: allSanityTopping {
        nodes {
          name
          id
          slug {
            current
          }
        }
      }
    }
  `);
  // 3. createPage for the topping
  data.toppings.nodes.forEach((topping) => {
    actions.createPage({
      path: `topping/${topping.slug.current}`,
      component: toppingTemplate,
      context: {
        topping: topping.name,
        slug: topping.slug.current,
        // TODO Regex for topping
      },
    });
  });
  // 4. Pass topping data to pizza.js
}

export async function createPages(params) {
  // create pages dynamically
  // Wait for all promies to be resolves before finishing this function
  await Promise.all([turnPizzasIntoPages(params), turnToppingsIntoPages(params)]);
}
