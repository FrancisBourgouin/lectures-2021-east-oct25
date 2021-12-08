# Watering Plants

Plant list with name, type, watering interval, last watered date, button to water each plant to reset the date.

# User stories

- User can see a list of plants
- Each plant can be with a red or green border depending on watering status
- User can water a plant by clicking on button
- User can water all the plants by clicking a special button

# Data Structures

## Plant

```jsx
  interface Plant{
    id: Number
    name: String,
    type: String,
    wateringInterval: Number,
    lastWatered: String
  }
```

## PlantList

```jsx
  interface PlantList [
    Plant
  ]
```

# HTML Structure

- body
  - header
    - h1 (title)
  - section
    - h1 (section title)
    - article
      - h1 -> Name & Type
      - h2 -> lastWatered

# Component Structure

- App
  - Header
  - PlantList (with plantlistdata here)
    - PlantListItem
    <!-- - (optional) PlantForm -->
