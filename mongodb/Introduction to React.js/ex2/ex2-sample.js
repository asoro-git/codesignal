import ReactDOM from 'react-dom';

function getTitle() {
    const title = ""; // Add your title here, for example "Space Explorer"
    return <h2>Welcome, {title}, to My Portfolio Website!</h2>;
}

ReactDOM.render(getTitle(), document.getElementById('root'));
