//import logo from './logo.svg';
import { useState } from 'react';
import List from './components/List';
import './App.css';
import Addlist from './components/Add';

function App() {
  const inittasks = [
    {
      id: 1,
      title: 'task one',
      done: false
    },
    {
      id: 2,
      title: 'task two',
      done: true
    },
    {
      id: 3,
      title: 'task three',
      done: false
    }
]

  const [mylist, setMylist]= useState(inittasks);
  //const [text, setText]= useState('');
  
function addList (text){
    //setText((oldlist)=> oldlist = newtext);
    const id = mylist.length +1;
    const newtask = {
      id,
      title : text,
      done: false
    }
    //console.log(text);
    setMylist((oldlist)=>[...oldlist,newtask]);
}

  function delList (id){
    setMylist((oldlist)=>[...oldlist].filter( obj => obj.id !== id));
  }

  function doneTask(id){
    setMylist((oldlist)=>oldlist.map((el)=>{
      return el.id === id? {...el, done: true}: el;
    }))
    //console.log(mylist);
  }

  return (
    <>
      <h3>TO DO LIST</h3>
      <Addlist addList={addList}/>

          <ul>
          <List 
          content={mylist} 
          delList={delList}
          doneTask={doneTask}
          />
          </ul>
    </>
  );
}

export default App;
