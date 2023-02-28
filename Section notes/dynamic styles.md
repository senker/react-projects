import React, { useState } from 'react';

// don't change the Component name "App"
export default function App() {
    const [isHighlighted, setIsHighlighted] = React.useState(true);
    
    function clickHandler () {
        setIsHighlighted(isHighlighted => !isHighlighted);
    }
    
    return (
        <div>
            <p className={`${!isHighlighted ? "active" : ""}`} >Style me!</p>
            <button onClick={clickHandler}>Toggle style</button>
        </div>
    );
}
