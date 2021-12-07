# What was hard during weekend

- Props & Passing props
- Props.children
- CSS class (conditional)
- Data structures
- DOM updates
- Fragment

```jsx
  function Header(props){
    props.name
    return <h1>Hello!</h1>
  }
  if(1 > 2){

  }

  <Header /> -> Header({})
  <Header name="potato" random={Math.random()} className={1 > 2 ? "bob": "robert"}/> -> Header({name:"potato"})

  <p>I AM PARAGRAPH</p> -> React.createElement('p')


  const addTwoNumbers = (a,b) => a + b

  const addNumbers = (a,b,c,d,e,f,g) => ...
  const addNumbers = ([1,2,3,4,5,6,7]) => ...


  const someFunction = (path, method, body, header, cookies, params, ...) => ...

  const options = {path, method, body}
  const someFunction = (options) => ...
```
