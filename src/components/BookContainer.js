import React, { useState } from 'react';
import { connect } from 'react-redux';
import { buyBook } from '../redux';

function BookContainer(props){
    const [number, setNumber]=useState(1);
    return (
        <div>
            <h1>Book Container</h1>
            <h2>Number of Books- {props.numberOfBooks}</h2>
            <input type="text" value={number} onChange={e=>setNumber(e.target.value)}/>
            <button onClick={()=>props.buyBook(number)}>Buy {number} Book</button>
        </div>
    )
}
//passing state value to props so that redux can get
const mapStatetoProps=(state)=>{
    return {
        numberOfBooks: state.numberOfBooks
    }
}
//pass our function to props, so that reducers fires.
const mapDispatchtoProps=(dispatch)=>{
    return {
        buyBook:function(number){
            dispatch(buyBook(number));
        }
    }
}

export default connect(mapStatetoProps,mapDispatchtoProps)(BookContainer);