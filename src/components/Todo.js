import {Component} from "react";

class Todo extends Component {
    render() { 
        return ( 
            <>
            <li className={this.props.done?'done':'undone'}>{this.props.title}
            <button onClick={()=>this.props.delList(this.props.id)} >-</button>
            {!this.props.done&&<button onClick={()=>this.props.doneTask(this.props.id)} >Done</button>}
            </li>
            </>
         );
    }
}
 
export default Todo;
