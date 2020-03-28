import React from 'react';
import '../../../../styles/style.css';


const keypadRow = (props) => (
    <div className="keypad__row">
        {props.children}
    </div>
)

export default keypadRow;