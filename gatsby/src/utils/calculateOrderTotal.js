import calculatePizzaPrice from './calculatePizzaPrice';

export default function calculateOrderTotal(order, pizzas) {
  // loop over each item in the order
  const total = order.reduce((runningTotal, singleOrder) => {
    // calc the total for that pizza
    const pizza = pizzas.find((singlePizza) => singlePizza.id === singleOrder.id);
    // add that total to the running total
    return runningTotal + calculatePizzaPrice(pizza.price, singleOrder.size);
  }, 0);
  return total;
}
