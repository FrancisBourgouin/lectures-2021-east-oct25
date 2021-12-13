// Pantry & Orders

const pantry = [
  { name: "Potato", icon: "🥔", quantity: 9 },
  { name: "Bread", icon: "🍞", quantity: 2 },
  { name: "Cake", icon: "🍰", quantity: 9001 },
  { name: "Apple", icon: "🍎", quantity: 1 },
];

const orders = [
  { client: "Du Linh", items: ["Cake", "Cake", "Cake", "Cake", "Cake", "Cake", "Cake"] },
  { client: "Martin", items: ["Apple", "Potato"] },
  { client: "Kavita", items: ["Bread", "Cake"] },
];

// Kavita's order: 🍞,🍰

// Remaining items in pantry:

// order object: quantity of items, object of unique items + amount, name of the client

// <OrderListItem />
// Client: Kavita
// Ordered 2 items
// Unique descriptions
// Cake emoji
// Bread emoji

const parseOrder = (pantry, order) => {
  const parsedOrder = { ...order };
  parsedOrder.amount = parsedOrder.items.length;

  const descriptions = {};
  for (const itemName of parsedOrder.items) {
    const itemDescription = pantry.find((item) => item.name === itemName);

    descriptions[itemName] = itemDescription;
  }

  parsedOrder.items = Object.values(descriptions);

  return parsedOrder;
};

const parseAllOrders = (pantry, orders) => {
  const parsedOrderList = [];
  for (const order of orders) {
    const result = parseOrder(pantry, order);
    parsedOrderList.push(result);
  }

  return parsedOrderList;
};

// console.log(parseOrder(pantry, orders[0]));
// console.log(parseOrder(pantry, orders[0]));
// console.log(orders);
// console.log(orders);

console.log(JSON.stringify(parseAllOrders(pantry, orders), null, 2));
