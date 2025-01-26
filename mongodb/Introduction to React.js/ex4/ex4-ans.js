import ReactDOM from 'react-dom';

// TODO: Create a JSX element that says "Welcome to the Cosmos Explorer!"

function Welcome() {
    return <h1>"Welcome to the Cosmos Explorer!"</h1>
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<Welcome />)

