//import logo from './logo.svg';
import './App.css';

const users = [
  { name: "John Doe", id: 1 },
  { name: "Jane Doe", id: 2 },
  { name: "Billy Doe", id: 3 }
];

function App() {
  return (
    <>
      <h3>User names</h3>
      <ul>
        {
          users.map( (user)=> 
          <li key={user.id}>
              {user.name}
          </li>
          )
        }
      </ul>
    </>
  );
}

export default App;
