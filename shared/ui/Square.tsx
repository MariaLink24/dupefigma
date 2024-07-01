import * as React from 'react';
import './item.css'

const Square = () => {
    return(
        <div className='item'>
            <div className="resizer ne"/>
            <div className="resizer nw"/>
            <div className="resizer sw"/>
            <div className="resizer se"/>
        </div>
    )
}
export default Square