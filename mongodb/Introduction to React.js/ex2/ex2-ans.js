import ReactDOM from 'react-dom';
import React from 'react'

function Title() {
    const title = "Space Explorer"; // Add your title here, for example "Space Explorer"
    return <h2>Welcome, {title}, to My Portfolio Website!</h2>;
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<Title />);
