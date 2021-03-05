import React from 'react';
import {useSelector, useDispatch} from 'react-redux'
import {buyBook} from '../redux';

function HookBookContainer(props){
    //useSelector to extract data from redux store
    const numberOfBooks=useSelector(state=>state.numberOfBooks)
    const dispatch=useDispatch();

    return (
        <div>
            <h1>Hook Container</h1>
            <h2>Number of Books {numberOfBooks}</h2>
            <button onClick={()=>dispatch(buyBook())}>Buy Book</button>
        </div>
    )
}


export default HookBookContainer;