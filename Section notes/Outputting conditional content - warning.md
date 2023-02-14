import React, { useState } from 'react';

// don't change the Component name "App"
export default function App() {
    
    const [isDeleting, setItsDeleting]= React.useState(false);
    
    const onDeleteButtonHandler = () => {
        setItsDeleting(true);
    }
    
    function proceedHandler() {
        setItsDeleting(false);
    }
    
    let warning;
    
    if (isDeleting) {
        warning =             <div id="alert">
          <h2>Are you sure?</h2>
          <p>These changes can't be reverted!</p>
          <button onClick={proceedHandler}>Proceed</button>
        </div>;
    }
    
    return (
      <div>
        {warning}
        <button onClick={onDeleteButtonHandler}>Delete</button>
      </div>    
    );
}