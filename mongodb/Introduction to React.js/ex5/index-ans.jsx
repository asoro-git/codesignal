// import the library needed for rendering the JSX element
import ReactDOM from "react-dom"
const currentDate = new Date().toDateString(); // gets the current date as a string

// TODO: Create a JSX element that represents a paragraph displaying the current date
function CurrentDate() {
    return <h1>{currentDate}</h1>
}
// TODO: Render the welcome message with today's date in the 'root' element
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<CurrentDate />)
