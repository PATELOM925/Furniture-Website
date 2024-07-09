import './App.css'
import React, { useState } from 'react';

function App(props) {
    const [count, setCount] = useState(0);

    const increment = () => { 
        setCount(count + 1);
    }; 
 
    const decrement = () => { 
        setCount(count - 1);
    }; 

    return (
        <div>
            <img src={props.imgUrl} alt={props.name} />
            <h2>{props.name}</h2>
            <p>Color: {props.color}</p>
            <p>Manufacturer: {props.man}</p> 
            <h7>Count:{count}</h7>
            <button onClick={increment}>Like</button>
            <button onClick={decrement}>Dislike</button>
        </div>
    );
}

export default App;


// function App(props) {
//     return(
//         <div className='App'>
//             <img src={props.imgUrl} />
//             <h2>{props.name}</h2>
//             <p>Color: {props.color}</p>
//             <p>Manufacturer: {props.man}</p> 
//         </div>
//     );
// }

// class App extends React.Component {
//     constructor(count){
//         super(count);
//         this.state = {
//             count: 0
//         };
//     }
//     increment = () => { 
//         this.setState((prevState) => ({ 
//             count: prevState.count + 1, 
//         })); 
//     }; 

//     decrement = () => { 
//         this.setState((prevState) => ({ 
//             count: prevState.count - 1, 
//         })); 
//     }; 

//     render(){
//         return (
//             <div>
//                 <h1>
//                     COunt is : {this.state.count}
//                 </h1>
//                 <button on onClick={this.increment}> Like </button>
//             </div>
//         );
//     }
    
// }

// export default App;
