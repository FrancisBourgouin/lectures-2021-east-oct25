# Water plant thingy

# Info

Show a list of tiles representing plants, with their name, and the last time they were watered.

# Data Structure

## Plant (singular)

```jsx
	interface Plant {
		name:String,
		type:String,
		wateredOn:Date
		wateringInterval:Number
	}
```

## Plants

```jsx
	interface Plants [
		Plant
	]
```

# Mock data

```jsx
const plantList = [
  {
    name: "Rododendrum",
    type: "Tropical",
    wateredOn: "2021-12-07",
    wateringInterval: 7,
  },
  {
    name: "Venus Fly Trap",
    type: "Cosmic",
    wateredOn: "2021-01-01",
    wateringInterval: 99999999,
  },
  {
    name: "Lavender",
    type: "Plant",
    wateredOn: "2021-01-01",
    wateringInterval: 20,
  },
  {
    name: "Rose",
    type: "Flower",
    wateredOn: "2021-12-02",
    wateringInterval: 3,
  },
];
```

# HTML Structure

```jsx
	<body>
		<header>
			<h1> -> Name of the app
		<section> -> List of plants
			<article> -> Singular plant, red text if danger
				<h1> -> Title / Type
				<h2> -> wateredOn

```

# React Components

```jsx
	<App />
		<Header/>
		<PlantList />
			<PlantListItem />

```
