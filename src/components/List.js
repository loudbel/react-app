import Todo from "./Todo";

function List({content,delList,doneTask}) {
    
    return ( 
        <>
         { content.map((todo)=> 
         <Todo 
          key={todo.id} 
          id={todo.id} 
          title={todo.title}
          done={todo.done}
          delList={delList}
          doneTask={doneTask}
          />
         )
         }
        
        </>
     );
}

export default List;