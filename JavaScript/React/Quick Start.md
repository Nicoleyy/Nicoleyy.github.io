## React Element
Elements are the smallest building blokcs of React apps. Unlike brower DOM elements, React elements are plain objects, and are cheap to 
create. An element describes what you want to see on the screen. To render a React element into a root DOM node, pass both to 
`ReactDOM.render()`:
```js
const element = <h1>Hello, world</h1>;
ReactDOM.render(
  element,
  document.getElementById('root')
);
```
React elements are [immutable](https://en.wikipedia.org/wiki/Immutable_object). Once you create an element, you can't change it's children,
or attributes.

Create another element to update UI:
```js
function tick() {
  const element = (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
  );
  ReactDOM.render(
    element,
    document.getElementById('root')
  );
}
setInterval(tick, 1000);
```
React only updates what's necessary. React DOM compares the element and it's children to the previous one, and only apply the DOM updates
necessary to bring the DOM to the desired state.

## Components and Props
Components let you split the UI into independent, reusebale pieces, and think about each piece in isolation. Conceptionlly, components are
like JavaScript functions. They accept arbitrary inputs(called 'props') and return React elements describing what should appear on the 
screen.

When an element represent user-defined component, React passes JSX attributes to this component as a single object which is called 'props'.

For example(Always start component names with a capital letter.):
```js
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
const element = <Welcome name="Sara" />;
ReactDOM.render(
  element,
  document.getElementById('root')
);
```
Props are read-only, React is pretty flexible but it has a single strct rule: All React components must react like pure function with 
respect to their props.

## State
Components can be defined as function and ES6 class, the latter have some additional features -- local state.

Add a local state to a class:
```js
class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }
  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}
ReactDOM.render(
  <Clock />,
  document.getElementById('root')
);
```
Do not modify state directly, use `setState` instead. The only way to assign this.state is in the constructor. React may batch multiple
`setState` calls into a single update for performance.
```js
this.setState(function(prevState, props) {
  return {
    counter: prevState.counter + props.increment
  };
});
```
Neither parent nor child components can konw if a certain component is statefull or stateless, and they shouldn't care whether it is 
defined as a function or a class.
