import React from 'react'
import MyParagraph from './MyParagraph';

const DemoOutput = (props) => {
    console.log('DemoOutput RUNNING')
   return <MyParagraph>{props.show ? 'This is new!' : ''}</MyParagraph>;
}

// (React.memo) only if the value of a prop changed, 
    //than the component should be re-executed and re-evaluated
export default React.memo(DemoOutput);