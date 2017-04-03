## What is JSX ?
JSX looks like HTML and gets transformed to JavaScript. Unlike the past, instead of putting JavaScript into HTML, JSX allows us to put 
HTML into JavaScript.JSX expression evaluate to ReactElement, fundamentally, JSX just provide syntactic sugar for the 
`React.createElement(component, props, ...children)` function. The JSX code: 
```js
<MyButton color="blue" shadowSize={2}>
  Click Me
</MyButton>
```
complies into:
```js
React.createElement(
  MyButton,
  {color: 'blue', shadowSize: 2},
  'Click Me'
)
```
JSX is not case sensitive, but since JSX is closer to JavaScript than HTML, React DOM uses camelCase property naming convention instead
of THML attribute names(.I.E, `class` becomes `className` in JSX, and `tabindex` becomes `tabIndex`).

## JSX expressions
You can embed any JavaScript expression in JSX by wrapping it in curly braces, like `{2 + 2}`, `{object.props}`. JSX is an expression too,
after compilation, JSX expression becomes regualr JavaScript objects.
This means that you can use JSX inside of `if` statements and `for` loops, assign it to variables, accept it as arguments, and return it 
from functions:
```js
function getGreeting(user) {
  if (user) {
    return <h1>Hello, {formatName(user)}!</h1>;
  }
  return <h1>Hello, Stranger.</h1>;
}
```

## Advantage of JSX.
1. Easier
Basically, by using JSX you can write concise HTML/XML-like structures (e.g., DOM like tree structures) in the same file as you write 
JavaScript code. JSX offers a solid class system much like Java, freeing the developers from working with the too-primitive 
prototype-based inheritance system provided by JavaScript. Expressions and statements, however, are mostly equal to JavaScript, so it 
is easy for JavaScript programmers to start using JSX.
2. Faster
JSX performs optimization while compiling the source code to JavaScript. The generated code runs faster than an equivalent code written 
directly in JavaScript. It is actually a declarative syntax that's used to express the **virtual DOM**. JSX gets intrpreted and 
converted to Virtual DOM, which get diffed against the real DOM. Rather than rewrite the whole DOM tree, only the differences get 
applied. That makes React renders faster.
3. Safer
By default, React DOM escapes any values embeded in JSX before rendering them. Thus it ensures that you can never inject anything that's
not explicitly written in your application. Everthing is converted to a string before being rendered.

**Reference**
* [What Is JSX?](https://www.reactenlightenment.com/react-jsx/5.1.html)
* [Introducing JSX](https://facebook.github.io/react/docs/introducing-jsx.html)
* [JSX In Depth](https://facebook.github.io/react/docs/jsx-in-depth.html)
* [JSXa faster, safer, easier JavaScript](https://jsx.github.io/)
* [JSX Looks Like An Abomination](https://medium.com/javascript-scene/jsx-looks-like-an-abomination-1c1ec351a918)
