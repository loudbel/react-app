import { useState } from 'react';
function Addlist(props) {
    const [text, setText]= useState('');
    return (
        <>
        <input id='addinput' onChange={e=>(setText(e.target.value))} type='text' ></input>
        <button onClick={()=>props.addList(text)}>+</button>
        </>
     );
}

export default Addlist;