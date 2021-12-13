# Todo list with Weather info

Todo list app where we can edit a specific todo, sync with a server and see the current weather

# User Stories

- User should be able to create a new todo
- User should be able to delete a todo
- User should be able to update a todo
- User should be able to mark a todo as complete
- User should be able to see the current temperature

# Packages

- axios
- React (CRA)
- Express

# Data structure

## TodoListItem

```jsx
interface TodoListItem {
  id: String;
  name: String;
  isCompleted: Boolean;
}
```

## TodoList

Since manip often, should've been Obj of Obj

```jsx
	interface TodoList [
		TodoListItem
	]
```

## Weather

Data comes from an API

```jsx

{
  "coord": {
    "lon": -122.08,
    "lat": 37.39
  },
  "weather": [
    {
      "id": 800,
      "main": "Clear",
      "description": "clear sky",
      "icon": "01d"
    }
  ],
  "base": "stations",
  "main": {
    "temp": 282.55,
    "feels_like": 281.86,
    "temp_min": 280.37,
    "temp_max": 284.26,
    "pressure": 1023,
    "humidity": 100
  },
  "visibility": 16093,
  "wind": {
    "speed": 1.5,
    "deg": 350
  },
  "clouds": {
    "all": 1
  },
  "dt": 1560350645,
  "sys": {
    "type": 1,
    "id": 5122,
    "message": 0.0139,
    "country": "US",
    "sunrise": 1560343627,
    "sunset": 1560396563
  },
  "timezone": -25200,
  "id": 420006353,
  "name": "Mountain View",
  "cod": 200
  }


```

# HTML Structure

- body
  - header
    - h1 title
    - h2 weather info
  - form
    - input
    - button
  - section
    - article
      - h1
      - button

# Component Structure

- App
  - Header
  - TodoForm
  - TodoList
    - TodoListItem

# Steps

- Build React App
- Install axios & others
- Clean up App.js
- Create component bare bones
- (Optional) -> Build Stories for components
- (Optional) -> Write tests for components (TDD)
- Connect the components together
- Flesh out the components
- Refactor pre server connection
- Refactor for server interaction
- ...
- Profit!

# APIs

- OpenWeatherMap
- api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
- 09fd719b4b698ec0260e424f83378e3d
