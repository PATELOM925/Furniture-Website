import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App
    name="L-Shaped Couch set" 
    color="Brown" 
    man="Om Furniture"
    imgUrl = 'https://www.casafurnishing.in/wp-content/uploads/2022/11/L-shaped-corner-wooden-sofa-set-2.jpg' 
    />

    <App 
    name="Dining Table & Chair" 
    color="Gold" 
    man="Om Furniture"
    imgUrl = 'https://m.media-amazon.com/images/I/61C4gZA6fyL.jpg' 
    />

    <App 
    name="Bedroom Set" 
    color="Mat-Gray" 
    man="Om Furniture"
    imgUrl = 'https://www.royaloakindia.com/_next/image?url=https%3A%2F%2Fmedia.royaloakindia.com%2Fmedia%2Fcatalog%2Fproduct%2F1%2F_%2F1_1_1_copy.jpg&w=1920&q=50' 
    />

    <App 
    name="Maharaja Chair" 
    color="Royal Blue" 
    man="Om Furniture"
    imgUrl = 'https://www.cruzinternational.in/cdn/shop/products/153bb2f7df9849d28adaac84d91b7b50_1.jpg?crop=center&height=461&v=1672653380&width=461' 
    />

    <App 
    name="Centre Table" 
    color="White-Rosegold" 
    man="Om Furniture"
    imgUrl = 'https://m.media-amazon.com/images/I/61VqcaHY+8L._SL1017_.jpg' 
    />

    <App 
    name=''
    color=''
    man=''
    imgUrl = ''
    />
    
  </React.StrictMode>
);

App.defaultProps = {
    name: "Not Available",
    color: "Not Available",
    man : "Not Available",
    imgUrl :'https://m.media-amazon.com/images/I/61VqcaHY+8L._SL1017_.jpg' 
}

export default App;