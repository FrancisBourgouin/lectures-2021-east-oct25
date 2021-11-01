# Shopping Cart !

Takes in an array of items, and will list subtotal, total, tax, amount of items

## Data Structures

### Input

Item

```jsx
item = {
	name: "Banana",
	priceInCents: 79,
	category: "Food",
};

item = ["Banana", 79, "Food"]; // BAD
```

Array of items

```jsx
itemList = [item, item, item];
```

Tax amount

```jsx
TAX = 0.14975;
```

### Output

```jsx
output = {
	subtotal: 0,
	total: 0,
	tax: 0,
	amountOfItems: 0,
};
```

## Tests !

Pessimistic / Optimistic

- Check for items
- Checking for correct calculations (rounding)
- Check for amount of items
- Check for valid objects (price)
- Check if price is a number
- Check for array coming in
- Check for undefined input
- Check for empty array

Array.isArray() === true
