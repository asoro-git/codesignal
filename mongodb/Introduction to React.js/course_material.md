Introduction to React.js
Hello, and welcome to your first journey into the world of React.js! So, what exactly is React.js? Simply put, it's a JavaScript library used to build user interfaces, specifically for single-page applications.

Websites today are not just simple pages with text and images anymore; they are full-blown applications that rerender, interact with the user, and update live without refreshing the page.

With regular HTML and JavaScript, when we want to update the user interface according to user action or other events, we manually manipulate the DOM and update the required elements. However, with React.js, we divide our user interface into separate reusable components, and React.js effectively decides what parts of the user interface need to be updated when the application's state changes. This approach makes the code cleaner, easier to understand and maintain, and more efficient.

Are you excited? We certainly are. Let's get started!

Introduction to JSX
React introduces a syntax that looks like a combination of JavaScript and HTML. This syntax, known as JSX (JavaScript XML), allows developers to build HTML structures directly within their JavaScript code.

Consider this simple example:

JavaScript
Copy to clipboard
let name = 'John Doe';
const element = <h1>Hello, World!</h1>;
In this code, element is not a string or HTML - it's a JSX element. It seems like a string of HTML, but technically, it's a JavaScript object representing a 'H1' HTML element in memory (often referred to as "Virtual DOM").

Embedding JavaScript Expressions
With JSX, you're not limited to static HTML-like tags, you can embed JavaScript expressions as well:

JavaScript
Copy to clipboard
let a = 10;
let b = 20;
const sumElement = <h1>The sum is: {a + b}</h1>;
In this example, a + b is a JavaScript expression embedded in JSX. When React renders this component, it will replace {a + b} with the result of the expression, displaying 'The sum is: 30' on the screen.

Utilizing JavaScript Objects and JSX Attributes
JSX allows us to specify any HTML attribute as we normally would. However, some HTML attributes clash with reserved JavaScript keywords (like class attribute, which is written as className in JSX) or are kebab-cased, which is not an accepted naming convention in JavaScript.

To handle this, in JSX, we use camelCase property naming, which is consistent with JavaScript object properties. For example, HTML's tabindex becomes tabIndex in JSX and CSS's background-color changes to backgroundColor.

Let's see these in action with an object and a JSX element:

JavaScript
Copy to clipboard
const elementStyle = {
  fontSize: '14px',
  backgroundColor: '#fafafa',
};

const element = (
  <div style={elementStyle} className="myClass">
    <h1>Hello, World!</h1>
    <p>Welcome to our application!</p>
  </div>
);
In the above example, elementStyle is a plain JavaScript object containing two properties: fontSize and backgroundColor. These properties are written in camelCase, per JavaScript convention.

Using ReactDOM.render() to Display JSX Elements
ReactDOM.render() is a function from the ReactDOM library that is used to render or display a JSX element onto the webpage. ReactDOM.render() requires two arguments: the JSX element to be rendered, and the location in our HTML file where the element should be displayed.

Let's look at this through an example. Here's the structure of an HTML file that often accompanies React applications:

HTML, XML
Copy to clipboard
<!DOCTYPE html>
<html lang="en"> <!-- This defines the language of this document as English -->
  <head>
    <meta charset="utf-8"> <!-- This specifies the character encoding for the HTML document -->
    <title>React App</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/index.jsx"></script> <!-- index.jsx is the file where we write JSX code -->
  </body>
</html>
In this HTML file, you'll notice a div with an id of root. This is where we tell React to render our application, in this case, our element. In our JavaScript code, we are telling React to render the element and to place it in the HTML element with id 'root'.

JavaScript
Copy to clipboard
import ReactDOM from 'react-dom'; // This imports the ReactDOM library for manipulating the DOM

let name = 'John Doe';
const element = <h1>Hello, {name}</h1>;

ReactDOM.render(
  element,
  document.getElementById('root')
);
The output of the above code would be "Hello, John Doe" displayed on your webpage, inside the div with id root.

So in essence, ReactDOM.render() is responsible for rendering our JSX elements to the actual DOM, allowing us to visually see our application in a web browser. This method is essential in almost every React application as it bridges the gap between the virtual DOM in React and the actual DOM.

  Lesson Summary and Next Steps
That's it for our first lesson on React.js! We've learned what React.js is, how it utilizes JSX, how to setup your first React.js app, and how to render it in the browser using ReactDOM.render().

Next up, we'll dive right into the practice tasks designed to reinforce what you've learned today. Remember, practice makes perfect, so let's get coding! Until next time!




